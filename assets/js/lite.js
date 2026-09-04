/* 브랜드 스타일 매트릭스 16 라이트 — v0.1.0
   랜딩 → 12문항 → 결과. 계정·이메일 없이 결과를 먼저 제공한다. */
(function(){
'use strict';

if(!window.BSM_LITE){
  document.addEventListener('DOMContentLoaded',function(){
    document.body.innerHTML='<div style="padding:64px 24px;max-width:600px;margin:0 auto;font-family:sans-serif">'
      +'<h2>데이터를 불러오지 못했습니다</h2><p>assets/data/lite-data.js 가 함께 업로드됐는지 확인해 주세요.</p></div>';
  });
  return;
}
var D=window.BSM_LITE, Q=D.questions, S=D.styles, ORDER=D.order, META=D.__meta;

/* ===== 설정 — 배포 전 확인이 필요한 값 (기획서 12.2) ===== */
var CFG=window.BSM_LITE_CONFIG||{};
var PRISM_URL   = CFG.prismUrl   || 'https://markinfo.co.kr/prism';   // 확인 필요: 실제 의뢰/문의 목적지
var FULL_URL    = CFG.fullUrl    || '';                                // 전문 진단(풀버전) 주소. 비우면 링크를 숨긴다
var CAMPAIGN    = CFG.campaign   || 'bsm16-lite';
var KAKAO_KEY   = CFG.kakaoKey   || '';                                // 비우면 카카오 버튼을 숨긴다
var GA_ON       = !!(window.gtag||window.dataLayer);

var $=function(s,r){return (r||document).querySelector(s);};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};
var esc=function(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};

/* ===== 분석 이벤트 (기획서 10.1) — 개인 식별 정보는 담지 않는다 ===== */
function track(name,props){
  var p=Object.assign({campaign:CAMPAIGN,source:src()},props||{});
  if(window.gtag)window.gtag('event',name,p);
  else if(window.dataLayer)window.dataLayer.push(Object.assign({event:name},p));
  if(location.hostname==='localhost'||location.hostname==='127.0.0.1')console.log('[event]',name,p);
}
function src(){
  try{var u=new URLSearchParams(location.search);
    return u.get('utm_source')||u.get('source')||(document.referrer?'referral':'direct');}
  catch(e){return 'direct';}
}
function device(){return matchMedia('(max-width:640px)').matches?'mobile':'desktop';}

/* ===== 진행 상태 — 같은 브라우저에서 이어하기. 답변은 URL에 넣지 않는다 ===== */
var KEY='bsm16lite.progress.v1';
var state={answers:new Array(Q.length).fill(null), idx:0};
function saveState(){
  try{sessionStorage.setItem(KEY,JSON.stringify({a:state.answers,i:state.idx,t:Date.now()}));}catch(e){}
}
function loadState(){
  try{
    var raw=sessionStorage.getItem(KEY); if(!raw)return false;
    var o=JSON.parse(raw);
    if(!o||!Array.isArray(o.a)||o.a.length!==Q.length)return false;
    if(Date.now()-(o.t||0)>1000*60*60*6)return false;      // 6시간 지나면 새로 시작
    state.answers=o.a; state.idx=Math.max(0,Math.min(Q.length-1,o.i||0));
    return state.answers.some(function(v){return v!==null;});
  }catch(e){return false;}
}
function clearState(){try{sessionStorage.removeItem(KEY);}catch(e){}}

/* ===== 점수 산정 (기획서 6.1) ===== */
function scoreOf(answers){
  var tally={};
  D.axes.forEach(function(ax){tally[ax.key]={};tally[ax.key][ax.left]=0;tally[ax.key][ax.right]=0;});
  answers.forEach(function(pick,i){
    if(pick!=='a'&&pick!=='b')return;
    var q=Q[i], side=q[pick].side;
    tally[q.axis][side]++;
  });
  var code='', scores={};
  D.axes.forEach(function(ax){
    var L=tally[ax.key][ax.left], R=tally[ax.key][ax.right];
    code += (L>=R? ax.left : ax.right);                    // 3문항이라 동점은 발생하지 않는다
    scores[ax.key]=L+'-'+R;
  });
  return {code:code,scores:scores};
}

/* ===== 라우팅: #/ 랜딩, #/test 테스트, #/r/CODE 결과 ===== */
function go(hash,replace){
  if(location.hash===hash){route();return;}
  if(replace)history.replaceState(null,'',hash); else location.hash=hash;
  if(replace)route();
}
function route(){
  var h=location.hash||'#/';
  var m=h.match(/^#\/r\/([A-Z]{4})$/);
  if(m&&S[m[1]]) return showResult(m[1],{shared:!state.answers.some(function(v){return v!==null;})});
  if(h.indexOf('#/test')===0) return showTest();
  return showLanding();
}

/* ===== 화면 전환 ===== */
function view(id){
  ['viewLanding','viewTest','viewResult'].forEach(function(v){
    var el=document.getElementById(v); if(el)el.classList.toggle('hidden',v!==id);
  });
  $('#stickyCta').classList.toggle('on',id==='viewLanding');
  var hr=$('#hdRestart'); if(hr)hr.classList.toggle('hidden',id==='viewLanding');
  window.scrollTo(0,0);
  document.documentElement.style.setProperty('--accent',id==='viewResult'?curAccent:'#8C7BFF');
  document.documentElement.style.setProperty('--accent-ink',id==='viewResult'?curAccentInk:'#0E1230');
}
var curAccent='#8C7BFF', curAccentInk='#0E1230';

/* ===== 랜딩 ===== */
var landed=false;
function showLanding(){
  view('viewLanding');
  if(!landed){landed=true;track('landing_view',{device:device()});}
}

/* ===== 테스트 ===== */
var started=false, animating=false;
function showTest(){
  view('viewTest');
  if(!started){
    started=true;
    var resumed=loadState();
    track('test_start',{cta_position:startFrom||'hero'});
    if(resumed){track('test_resume',{last_step:state.idx+1});toast('이어서 진행할게요');}
  }
  renderQ();
}
var startFrom=null;

function renderQ(){
  var i=state.idx, q=Q[i];
  $('#progNum').innerHTML='<b>'+(i+1)+'</b> / '+Q.length;
  $('#progBar').style.width=((i)/Q.length*100)+'%';
  var box=$('#qbox');
  box.innerHTML=
    '<div class="qhead"><div class="ax">QUESTION '+(i+1)+'</div><h2 id="qText">'+esc(q.q)+'</h2></div>'
   +'<div class="opts" role="radiogroup" aria-labelledby="qText">'
   +['a','b'].map(function(k,n){
      var sel=state.answers[i]===k;
      return '<button type="button" class="opt'+(sel?' sel':'')+'" data-pick="'+k+'" role="radio" aria-checked="'+sel+'">'
        +'<span class="mk" aria-hidden="true"><svg viewBox="0 0 14 14" fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5l3.2 3.2L12 3.6"/></svg></span>'
        +'<span>'+esc(q[k].label)+'</span>'
        +'<span class="kb" aria-hidden="true">'+(n+1)+'</span></button>';
    }).join('')
   +'</div>'
   +'<div class="qfoot">'
   +(i>0?'<button type="button" class="btn-text" id="qPrev">← 이전 문항</button>':'<span class="qnote">정답은 없어요 · 더 가까운 쪽을 고르면 됩니다</span>')
   +'<span class="qnote">'+esc(axisName(q.axis))+'</span>'
   +'</div>';
  $$('.opt',box).forEach(function(b){b.onclick=function(){pick(b.dataset.pick);};});
  var pv=$('#qPrev',box); if(pv)pv.onclick=prev;
  track('question_view',{question_id:q.id,step:i+1});
  shownAt=Date.now();
  var first=$('.opt',box); if(first&&device()!=='mobile')first.focus({preventScroll:true});
}
var shownAt=Date.now();
function axisName(k){var a=D.axes.filter(function(x){return x.key===k;})[0];return a?a.label:'';}

function pick(k){
  if(animating)return;
  var i=state.idx, q=Q[i];
  state.answers[i]=k; saveState();
  track('question_answer',{question_id:q.id,option:k,response_time:Date.now()-shownAt});
  var box=$('#qbox');
  $$('.opt',box).forEach(function(b){
    var on=b.dataset.pick===k;
    b.classList.toggle('sel',on); b.setAttribute('aria-checked',on);
  });
  animating=true;
  $('#progBar').style.width=((i+1)/Q.length*100)+'%';
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  setTimeout(function(){
    animating=false;
    if(i+1>=Q.length) finish();
    else { state.idx=i+1; saveState(); renderQ(); }
  }, reduce?0:260);
}
function prev(){
  if(state.idx<=0)return;
  state.idx--; saveState(); renderQ();
}
function finish(){
  var r=scoreOf(state.answers);
  lastScores=r.scores;
  var box=$('#qbox');
  box.innerHTML='<div class="building"><span class="dot"></span><span class="dot"></span><span class="dot"></span>'
    +'<p>브랜드의 얼굴을 그리고 있어요…</p></div>';
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  setTimeout(function(){ go('#/r/'+r.code); }, reduce?0:900);
}
var lastScores=null;

/* ===== 결과 ===== */
function showResult(code,opt){
  var s=S[code]; if(!s)return showLanding();
  curAccent=s.accent; curAccentInk=readableOn(s.accent);
  view('viewResult');
  var card=s.card;
  var onCard=readableOn(card.bg);
  var host=$('#viewResult');
  host.innerHTML=
   '<div class="wrap">'
   +'<div class="rcard" style="background:'+card.bg+';color:'+onCard+'">'
     +'<div class="code">'+code.split('').join(' · ')+'</div>'
     +'<h1>'+esc(s.name)+'</h1>'
     +'<div class="en">'+esc(s.en)+'</div>'
     +'<div class="sub">'+esc(s.sub)+'</div>'
     +'<div class="kws">'+s.kw.map(function(k){return '<span>'+esc(k)+'</span>';}).join('')+'</div>'
     +'<div class="pal" aria-label="유형 대표 색">'+s.palettes.slice(0,5).map(function(p){
        return '<i style="background:'+p.fg+'"></i>';}).join('')+'</div>'
   +'</div>'

   +'<div class="rsec"><h3>이 유형의 강점</h3><p class="good">'+esc(s.good)+'</p></div>'

   +'<div class="rsec"><h3>이 무드의 로고 예시</h3>'
     +'<div class="samples">'+sampleCards(s)+'</div>'
     +'<p class="muted" style="margin-top:12px">'+sampleNote(s)+'</p></div>'

   +'<div class="rsec"><h3>디자인 힌트</h3><div class="tips">'
     +'<div class="tip do"><div class="t">이렇게 쓰면 좋아요</div><p>'+esc(s.do)+'</p></div>'
     +'<div class="tip dont"><div class="t">이건 조심하세요</div><p>'+esc(s.dont)+'</p></div>'
   +'</div></div>'

   +'<div class="rsec"><h3>자주 어울리는 업종</h3><div class="uses">'
     +s.use.map(function(u){return '<span>'+esc(u)+'</span>';}).join('')
     +'</div><p class="muted" style="margin-top:10px">참고용 예시입니다. 업종이 스타일을 결정하지는 않아요.</p></div>'

   +'<div class="convert">'
     +'<div class="q">이 무드를 우리 브랜드에 맞게 만들려면?</div>'
     +'<div class="d">결과 유형이 함께 전달되어 상담을 처음부터 설명하지 않아도 됩니다.</div>'
     +'<a class="btn" id="ctaPrism" href="#">이 무드로 로고 의뢰하기</a>'
     +'<div class="second">'
       +'<button type="button" class="btn btn-line" id="btnShare">결과 공유하기</button>'
       +'<button type="button" class="btn btn-line" id="btnSave">결과 카드 저장</button>'
     +'</div>'
   +'</div>'

   +'<div class="retest"><button type="button" class="btn-text" id="btnRetest">처음부터 다시 해보기</button></div>'

   +'<div class="scope"><b>이 결과에 대해</b><p class="muted">'
     +'12개의 선택으로 찾은 가벼운 스타일 테스트예요. 브랜드 전략 진단이나 자동 로고 생성이 아니며, '
     +'실제 프로젝트에서는 사업 목표·경쟁 환경·사용 매체를 함께 검토합니다.'
     +(FULL_URL?' <a href="'+esc(FULL_URL)+'" target="_blank" rel="noopener">더 깊이 알아보기 ↗</a>':'')
     +'</p></div>'
   +'</div>';

  var url=shareUrl(code);
  var cta=$('#ctaPrism');
  cta.href=prismLink(code,s);
  cta.target='_blank'; cta.rel='noopener';
  cta.onclick=function(){track('prism_cta_click',{result_code:code,cta_position:'after_samples'});};
  $('#btnShare').onclick=function(){openShare(code,s,url);};
  $('#btnSave').onclick=function(){saveCard(code,s);};
  $('#btnRetest').onclick=function(){track('retest_click',{result_code:code});restart();};

  setMeta(code,s,url);
  track('result_view',{result_code:code,axis_scores:lastScores?JSON.stringify(lastScores):'shared',
                       entry:opt&&opt.shared?'shared_link':'test'});
  // 결과를 본 뒤에는 진행 데이터를 최소화한다 (기획서 3 · 모바일 인터랙션)
  clearState();
}

/* 예시 로고 — 큐레이션된 실제 로고가 등록되면 그것을 쓰고,
   없으면 유형의 대표 글꼴·색으로 만든 무드 샘플을 보여준다. */
function sampleCards(s){
  if(s.samples&&s.samples.length){
    return s.samples.map(function(x){
      return '<figure class="sample"><div class="art" style="background:'+(x.bg||'#fff')+'">'
        +'<img src="'+esc(x.src)+'" alt="'+esc(s.name+' 유형 로고 예시 — '+(x.name||''))+'" style="max-width:100%;max-height:104px"></div>'
        +'<figcaption class="cap"><b>'+esc(x.name||'')+'</b><span>'+esc(x.credit||'')+'</span></figcaption></figure>';
    }).join('');
  }
  var words=['MARK','한글로고','Studio','브랜드'];
  var fonts=(s.fonts&&s.fonts.length)?s.fonts:[{name:'Pretendard',family:'Pretendard'}];
  var pals=s.palettes.slice(0,4);
  return words.map(function(w,i){
    var f=fonts[i%fonts.length], p=pals[i%pals.length];
    return '<figure class="sample"><div class="art" style="background:'+p.bg+'">'
      +'<span style="font-family:\''+f.family+'\',Pretendard,sans-serif;color:'+p.fg+'">'+esc(w)+'</span></div>'
      +'<figcaption class="cap"><b>'+esc(f.name)+'</b><span>'+esc(p.fg)+'</span></figcaption></figure>';
  }).join('');
}
function sampleNote(s){
  if(s.samples&&s.samples.length)return '유형에 맞춰 선정한 로고 사례입니다.';
  return '이 유형의 추천 글꼴과 색으로 만든 <b>무드 샘플</b>이에요. 실제 제작 사례는 아닙니다.';
}

function prismLink(code,s){
  var u=PRISM_URL+(PRISM_URL.indexOf('?')>-1?'&':'?');
  return u+'result_code='+encodeURIComponent(code)
          +'&result_name='+encodeURIComponent(s.name)
          +'&campaign='+encodeURIComponent(CAMPAIGN)
          +'&source='+encodeURIComponent(src());
}
function shareUrl(code){
  return location.origin+location.pathname+'#/r/'+code;   // 유형 코드만 담는다
}
function shareText(s){
  return '내 브랜드는 \''+s.name+'\' 타입! '+s.sub+' 당신의 브랜드는 어떤 타입인지 확인해보세요.';
}

/* ===== 공유 ===== */
function openShare(code,s,url){
  track('share_click',{result_code:code,channel:'sheet'});
  var sh=$('#sheet');
  $('#sheetBody').innerHTML=
    '<h4>결과 공유하기</h4><div class="sd">유형 코드만 담긴 링크예요. 답변은 포함되지 않습니다.</div>'
   +'<div class="shrow">'
   +(navigator.share?'<button type="button" data-ch="system">기기 공유</button>':'')
   +'<button type="button" data-ch="copy">링크 복사</button>'
   +(KAKAO_KEY?'<button type="button" data-ch="kakao">카카오톡</button>':'')
   +'<button type="button" data-ch="image">카드 이미지 저장</button>'
   +'</div><button type="button" class="cl" data-ch="close">닫기</button>';
  sh.classList.add('on');
  $$('#sheetBody [data-ch]').forEach(function(b){
    b.onclick=function(){
      var ch=b.dataset.ch;
      if(ch==='close'){sh.classList.remove('on');return;}
      if(ch==='system'){
        navigator.share({title:'브랜드 스타일 매트릭스 16 라이트',text:shareText(s),url:url})
          .then(function(){track('share_success',{result_code:code,channel:'system'});})
          .catch(function(){});
      }else if(ch==='copy'){
        copy(shareText(s)+'\n'+url).then(function(){
          toast('링크를 복사했어요'); track('share_success',{result_code:code,channel:'copy'});
        });
      }else if(ch==='kakao'){ kakaoShare(code,s,url); }
      else if(ch==='image'){ saveCard(code,s); track('share_success',{result_code:code,channel:'image'}); }
      sh.classList.remove('on');
    };
  });
}
function copy(t){
  if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(t);
  return new Promise(function(res){
    var ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';
    document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}
    document.body.removeChild(ta);res();
  });
}
function kakaoShare(code,s,url){
  if(!window.Kakao||!KAKAO_KEY){toast('카카오 공유가 설정되지 않았어요');return;}
  try{
    if(!window.Kakao.isInitialized())window.Kakao.init(KAKAO_KEY);
    window.Kakao.Share.sendDefault({objectType:'feed',
      content:{title:'내 브랜드는 \''+s.name+'\' 타입',description:s.sub,
        imageUrl:location.origin+location.pathname.replace(/index\.html$/,'')+'assets/img/og/'+code+'.png',
        link:{mobileWebUrl:url,webUrl:url}},
      buttons:[{title:'나도 테스트하기',link:{mobileWebUrl:url,webUrl:url}}]});
    track('share_success',{result_code:code,channel:'kakao'});
  }catch(e){toast('카카오 공유를 사용할 수 없어요');}
}

/* ===== 결과 카드 이미지 ===== */
function saveCard(code,s){
  var W=1080,H=1350,cv=document.createElement('canvas');
  cv.width=W;cv.height=H;
  var x=cv.getContext('2d'), card=s.card, on=readableOn(card.bg);
  x.fillStyle=card.bg;x.fillRect(0,0,W,H);
  x.fillStyle=s.palettes[1]?s.palettes[1].bg:card.bg;
  x.beginPath();x.arc(W*0.86,H*0.14,300,0,Math.PI*2);x.fill();
  x.fillStyle=on;
  x.font='800 30px Pretendard, sans-serif';
  x.fillText(code.split('').join('  ·  '),88,150);
  x.font='800 118px Pretendard, sans-serif';
  var name=s.name, fs=118;
  while(x.measureText(name).width>W-176&&fs>52){fs-=6;x.font='800 '+fs+'px Pretendard, sans-serif';}
  x.fillText(name,88,H*0.40);
  x.globalAlpha=.66;x.font='700 40px Pretendard, sans-serif';
  x.fillText(s.en,90,H*0.40+66);
  x.globalAlpha=.92;
  x.font='600 36px Pretendard, sans-serif';
  wrapText(x,s.sub,88,H*0.53,W-176,52);
  x.globalAlpha=1;
  var kx=88;
  x.font='800 30px Pretendard, sans-serif';
  s.kw.forEach(function(k){
    var w=x.measureText(k).width+52;
    x.globalAlpha=.12;x.fillStyle=on;roundRect(x,kx,H*0.70,w,64,32);x.fill();
    x.globalAlpha=1;x.fillStyle=on;x.fillText(k,kx+26,H*0.70+42);
    kx+=w+14;
  });
  s.palettes.slice(0,5).forEach(function(p,i){
    x.fillStyle=p.fg;roundRect(x,88+i*84,H*0.79,68,68,16);x.fill();
  });
  x.fillStyle=on;x.globalAlpha=.86;
  x.font='800 34px Pretendard, sans-serif';
  x.fillText('나는 어떤 브랜드 타입?',88,H-150);
  x.globalAlpha=.6;x.font='700 27px Pretendard, sans-serif';
  x.fillText('브랜드 스타일 매트릭스 16 라이트 · MARKINFO PRISM',88,H-100);
  x.globalAlpha=1;
  try{
    var a=document.createElement('a');
    a.download='브랜드타입_'+s.name+'_'+code+'.png';
    a.href=cv.toDataURL('image/png');a.click();
    toast('결과 카드를 저장했어요');
  }catch(e){toast('이미지를 저장할 수 없어요');}
}
function roundRect(x,px,py,w,h,r){
  x.beginPath();x.moveTo(px+r,py);x.arcTo(px+w,py,px+w,py+h,r);
  x.arcTo(px+w,py+h,px,py+h,r);x.arcTo(px,py+h,px,py,r);x.arcTo(px,py,px+w,py,r);x.closePath();
}
function wrapText(x,text,px,py,maxW,lh){
  var words=String(text).split(' '), line='', y=py;
  words.forEach(function(w){
    var t=line?line+' '+w:w;
    if(x.measureText(t).width>maxW){x.fillText(line,px,y);line=w;y+=lh;}
    else line=t;
  });
  if(line)x.fillText(line,px,y);
}

/* ===== 메타 태그 (공유 미리보기) ===== */
function setMeta(code,s,url){
  document.title='내 브랜드는 \''+s.name+'\' 타입 — 브랜드 스타일 매트릭스 16 라이트';
  setTag('meta[name="description"]','content',s.sub);
  setTag('meta[property="og:title"]','content','내 브랜드는 \''+s.name+'\' 타입');
  setTag('meta[property="og:description"]','content',s.sub);
  setTag('meta[property="og:url"]','content',url);
  var base=location.pathname.replace(/index\.html$/,'');
  setTag('meta[property="og:image"]','content',location.origin+base+'assets/img/og/'+code+'.png');
}
function setTag(sel,attr,val){var el=$(sel);if(el)el.setAttribute(attr,val);}
function resetMeta(){
  document.title=META.name+' — 내 브랜드는 어떤 얼굴일까?';
  setTag('meta[property="og:title"]','content','내 브랜드는 어떤 얼굴일까?');
  setTag('meta[property="og:description"]','content','12개의 선택으로, 16가지 브랜드 스타일 중 가장 닮은 무드를 찾아보세요.');
  var base=location.pathname.replace(/index\.html$/,'');
  setTag('meta[property="og:image"]','content',location.origin+base+'assets/img/og/default.png');
}

/* ===== 기타 ===== */
function readableOn(hex){
  var h=String(hex).replace('#','');
  if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  var n=parseInt(h,16);
  var y=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;
  return y>150?'#171A32':'#FFFFFF';
}
var toastT=null;
function toast(t){
  var el=$('#toast'); el.textContent=t; el.classList.add('on');
  clearTimeout(toastT); toastT=setTimeout(function(){el.classList.remove('on');},2200);
}
function restart(){
  clearState();
  state.answers=new Array(Q.length).fill(null); state.idx=0;
  started=false; lastScores=null;
  resetMeta();
  go('#/');
}

/* ===== 랜딩 콘텐츠 주입 ===== */
function buildLanding(){
  // 결과 카드 3종 미리보기 (기획서 4.2 · 12.3 권장 3종)
  var peek=['LSRC','LBEM','GBEC'].map(function(c,i){
    var s=S[c],card=s.card,on=readableOn(card.bg);
    return '<div class="pk p'+(i+1)+'" style="background:'+card.bg+';color:'+on+'" aria-hidden="true">'
      +'<div class="c">'+c.split('').join(' · ')+'</div><div class="n">'+esc(s.name)+'</div>'
      +'<div class="e">'+esc(s.en)+'</div><div class="s">'+esc(s.sub)+'</div></div>';
  }).join('');
  $('#peek').innerHTML=peek;

  // 16유형 미리보기 마퀴 — 이름만 흘려 다양성을 보여준다
  var chips=ORDER.map(function(c){
    var s=S[c],card=s.card,on=readableOn(card.bg);
    return '<div class="tchip" style="background:'+card.bg+';color:'+on+'">'
      +'<div class="c">'+c+'</div><div class="n">'+esc(s.name)+'</div><div class="e">'+esc(s.en)+'</div></div>';
  }).join('');
  $('#marq').innerHTML=chips+chips;
  $('#typeCount').textContent=ORDER.length;
  $('#qCount').textContent=Q.length;
  $$('.js-start').forEach(function(b){
    b.onclick=function(){startFrom=b.dataset.pos||'hero';go('#/test');};
  });
  $('#hdRestart').onclick=restart;
  $('#sheet').onclick=function(e){if(e.target===$('#sheet'))$('#sheet').classList.remove('on');};
}

/* 키보드: 1·2로 선택, ←로 이전 */
document.addEventListener('keydown',function(e){
  if($('#viewTest').classList.contains('hidden'))return;
  if(e.key==='1'||e.key==='2'){var b=$$('.opt')[+e.key-1];if(b)b.click();}
  else if(e.key==='ArrowLeft')prev();
});
window.addEventListener('hashchange',route);

document.addEventListener('DOMContentLoaded',function(){
  $('#verLabel').textContent='v'+META.version;
  $('#buildDate').textContent=META.buildDate;
  // 유형 대표 글꼴 로드 (무드 샘플용)
  var css=Object.keys(D.fontcss).map(function(k){return D.fontcss[k];}).join('\n');
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
  buildLanding();
  resetMeta();
  route();
});
})();
