/* ============================================================
   MBCI — 완료된 테스트 결과 기록 (v2.21.0)
   · 20문항을 모두 답해 결과가 확정된 순간(finishQ)에만 1회 전송한다.
   · 관리자 미리보기·상담 수동 조정·다른 코어 보기·새로고침은 전송하지 않는다.
   · 전송 항목은 아래 buildPayload 가 만드는 값으로 제한한다. 완료 시각은 Google 서버가 기록한다.
   · Apps Script 웹 앱은 브라우저가 저장 성공을 확인하지 못할 수 있다.
     확인하지 못한 경우 화면에 「저장 완료」를 절대 표시하지 않는다 (이 파일은 화면에 아무것도 그리지 않는다).
   ============================================================ */
(function(){
  'use strict';
  const QUEUE_KEY='mbciRecordQueue.v1', QUEUE_MAX=3, QUEUE_TTL=24*3600*1000, TRY_MAX=5, TIMEOUT=12000;
  const POLE_ORDER=()=>['E','I','S','N','T','F','J','P'];   // 시트 열 순서(E_pct … P_pct)에 고정
  let attempt=null;
  const api=window.MBCI_RECORD={status:'idle',last:null};

  function uuid(){
    try{ if(crypto.randomUUID)return crypto.randomUUID(); }catch(e){}
    const b=new Uint8Array(16); (crypto.getRandomValues?crypto.getRandomValues(b):b.forEach((_,i)=>b[i]=Math.floor(Math.random()*256)));
    b[6]=(b[6]&15)|64; b[8]=(b[8]&63)|128;
    const h=[...b].map(x=>x.toString(16).padStart(2,'0')).join('');
    return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
  }
  api.newAttempt=function(){ attempt={id:uuid(),done:false}; };
  api.newAttempt();

  const clean=(s,max)=>String(s==null?'':s).replace(/[\u0000-\u001F\u007F\u200B-\u200F\u2028\u2029\uFEFF]/g,' ').replace(/\s+/g,' ').trim().slice(0,max);

  function endpoint(){
    const m=(window.BSM_DATA&&BSM_DATA.SITE_META)||{};
    const u=String(m.recordUrl||'').trim();
    return /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(u)?u:'';
  }
  function skipReason(){
    if(window.MBCI_ADMIN&&window.MBCI_ADMIN.page)return '관리자 화면';
    if(!endpoint())return '기록 주소 미설정';
    const h=location.hostname;
    const local=location.protocol==='file:'||h==='localhost'||h==='127.0.0.1'||h==='[::1]'||/^192\.168\./.test(h);
    if(local&&!/[?&]send=1(&|$)/.test(location.search))return '로컬 환경(테스트 전송은 주소 뒤에 ?send=1)';
    return '';
  }

  /* 전송 본문 — 항목을 여기서만 정한다. 이름은 시트 열 이름과 같다(completed_at 은 Google 이 기록하므로 보내지 않는다). */
  function buildPayload(d){
    const qs=mbciQs(), r=d.result;
    if(!r||!r.resultCode||(r.ties&&r.ties.length))return null;
    if(qs.length!==20)return null;
    const p={v:1, submission_id:attempt.id, brand_name:clean(d.brand,40)};
    const bizLabel=(d.biz&&d.biz!=='etc'&&typeof BIZ_LIST!=='undefined')?((BIZ_LIST.find(b=>b[0]===d.biz)||[])[1]||''):'';
    p.industry=clean(d.biz==='etc'?'기타':bizLabel,30);
    p.core_id=r.resultCode;
    const poles=POLE_ORDER();
    for(const pole of poles){
      const v=r.scores[pole];
      if(!Number.isInteger(v)||v<0||v>100)return null;
      p[pole+'_pct']=v;
    }
    for(let i=0;i<qs.length;i++){
      const a=d.answers[qs[i].id];
      if(a!=='A'&&a!=='B')return null;
      p['Q'+String(i+1).padStart(2,'0')]=a;
    }
    p.industry_bonus_enabled=!!r.bonusEnabled;        // 업종 보정이 적용 가능한 상태였는지(실제 +1 이 몇 축에 붙었는지가 아님)
    p.content_version=mbciContentVersion();           // 질문·채점 구성 식별자
    return p;
  }
  api._buildPayload=buildPayload;

  async function post(url,payload){
    const body=JSON.stringify(payload);
    try{   // 1) 응답을 읽을 수 있으면 서버가 저장했는지 확인한다
      const ctl=new AbortController(), t=setTimeout(()=>ctl.abort(),TIMEOUT);
      const res=await fetch(url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body,redirect:'follow',signal:ctl.signal});
      clearTimeout(t);
      const j=await res.json();
      if(j&&j.ok)return 'confirmed';
      return (j&&j.retry)?'failed':'rejected';
    }catch(e){}
    try{   // 2) 응답을 읽지 못한 경우(브라우저 제약 등) 한 번 더 보낸다 — 서버가 submission_id로 중복을 막는다. 성공 여부는 확인할 수 없다.
      await fetch(url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body,keepalive:true});
      return 'unconfirmed';
    }catch(e){ return 'failed'; }
  }

  const qRead=()=>{try{return JSON.parse(localStorage.getItem(QUEUE_KEY)||'[]').filter(x=>x&&x.p&&Date.now()-x.t<QUEUE_TTL&&x.n<TRY_MAX);}catch(e){return [];}};
  const qWrite=l=>{try{ if(l.length)localStorage.setItem(QUEUE_KEY,JSON.stringify(l.slice(-QUEUE_MAX))); else localStorage.removeItem(QUEUE_KEY);}catch(e){}};

  async function send(payload,tries){
    const url=endpoint(); if(!url)return 'skipped';
    const st=await post(url,payload);
    api.status=st; api.last={id:payload.submission_id,status:st,at:Date.now()};
    console.info('[MBCI record]',st,payload.submission_id);
    if(st==='failed'){   // 네트워크 문제 — 다음 방문/온라인 복귀 때 다시 시도(같은 ID라 중복되지 않는다)
      const q=qRead().filter(x=>x.p.submission_id!==payload.submission_id);
      q.push({p:payload,t:Date.now(),n:(tries||0)+1}); qWrite(q);
    }else{
      qWrite(qRead().filter(x=>x.p.submission_id!==payload.submission_id));
    }
    return st;
  }
  async function flush(){
    if(skipReason())return;
    for(const it of qRead()){ await send(it.p,it.n); }
  }

  api.onComplete=function(d){
    if(!attempt||attempt.done)return 'dup';      // 같은 시도에서 두 번 호출돼도 한 번만
    const p=buildPayload(d);
    if(!p){api.status='invalid';return 'invalid';}
    attempt.done=true;
    const why=skipReason();
    if(why){api.status='skipped';api.last={id:p.submission_id,status:'skipped',why};console.info('[MBCI record] 전송 안 함 —',why);return 'skipped';}
    send(p,0);                                  // 결과 화면을 기다리게 하지 않는다
    return 'sent';
  };
  window.addEventListener('online',()=>{flush();});
  setTimeout(flush,4000);
})();
