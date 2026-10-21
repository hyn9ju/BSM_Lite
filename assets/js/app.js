/* ============================================================
   MBCI (Markinfo Brand Core Indicator) — 애플리케이션
   데이터는 assets/data/bsm-data.js 의 window.BSM_DATA 에서 읽는다.
   ============================================================ */
window.MBCI_ADMIN=window.MBCI_ADMIN||{};   // 관리자 전용 기능이 붙는 자리(고객용 배포에는 비어 있다)
if(!window.BSM_DATA){
  document.addEventListener('DOMContentLoaded',()=>{
    document.body.innerHTML='<div style="padding:60px 24px;font-family:sans-serif;max-width:620px;margin:0 auto">'
      +'<h2 style="margin-bottom:12px">데이터 파일을 불러오지 못했습니다</h2>'
      +'<p style="line-height:1.7;color:#5B6A70">assets/data/bsm-data.js 가 index.html 과 같은 구조로 함께 업로드됐는지 확인해 주세요.</p></div>';
  });
  throw new Error('BSM_DATA missing');
}
const BSM_DATA=window.BSM_DATA;

/* ================= DATA ================= */
/* ===== 폰트 통합 데이터 (전체 570종 · 16유형 알고리즘) ===== */
const FONT_DB=BSM_DATA.FONT_DB;
const ALGO16=BSM_DATA.ALGO16;
const CLS_AXES={type:{label:'형태',opts:['고딕','바탕','손글씨','장식체','고전체']},mood:{label:'인상',opts:['진지한','부드러운','중립(본문)','귀여운','강한'],multi:true,max:2},weight:{label:'웨이트',opts:['얇은','보통','두꺼운']}};
const FONTMAP=BSM_DATA.FONTMAP;

/* v0.20.0: 기존 스타일 매트릭스 12문항은 MBCI 12문항으로 교체되었다.
   위의 AXES(G/L·B/S·E/R·C/M)는 「직접 조절하기」 슬라이더 전용으로 그대로 남긴다. */
const MBCI_DEFAULT={"version":1,"codeOrder":["EI","SN","TF","JP"],"settings":{"neutralEnabled":false,"neutralLabel":"둘 다 애매해요","tiePolicy":"manual","minWeight":0,"maxWeight":3,"showMockup":false},"axes":[{"id":"EI","order":1,"name":"표현 에너지","left":{"code":"E","label":"Expressive","description":"강렬하고 적극적인 존재감"},"right":{"code":"I","label":"Intimate","description":"절제되고 섬세한 인상"}},{"id":"SN","order":2,"name":"표현 방식","left":{"code":"N","label":"Narrative","description":"상징적이고 서사적인 형태"},"right":{"code":"S","label":"Specific","description":"직관적이고 구체적인 형태"}},{"id":"TF","order":3,"name":"감성 온도","left":{"code":"F","label":"Feeling","description":"따뜻하고 유기적인 감성"},"right":{"code":"T","label":"Technical","description":"논리적이고 기하학적인 구조"}},{"id":"JP","order":4,"name":"조형 질서","left":{"code":"J","label":"Justified","description":"정돈된 규칙과 일관성"},"right":{"code":"P","label":"Playful","description":"자유로운 변주와 유연성"}}],"questions":[{"id":"q01","order":1,"active":true,"axisId":"EI","text":"우리 브랜드의 로고를 처음 본 사람이 어떤 인상을 받았으면 하나요?","memo":"","answers":[{"id":"A","text":"한눈에 시선을 끌고 강한 인상을 남겼으면 좋겠다.","pole":"E","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"과하게 드러내기보다 은은하고 세련된 인상을 남겼으면 좋겠다.","pole":"I","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q02","order":2,"active":true,"axisId":"EI","text":"로고에서 컬러를 사용한다면 어떤 방식이 더 마음에 드나요?","memo":"","answers":[{"id":"A","text":"선명하고 대비가 강한 컬러로 존재감을 드러내는 방식","pole":"E","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"절제된 컬러와 톤으로 편안한 분위기를 만드는 방식","pole":"I","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q03","order":3,"active":true,"axisId":"EI","text":"두 가지 로고 중 우리 브랜드에 더 어울리는 것은 무엇인가요?","memo":"","answers":[{"id":"A","text":"크고 굵은 형태처럼 멀리서도 눈에 띄는 로고","pole":"E","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"여백과 섬세한 디테일처럼 가까이 볼수록 매력이 느껴지는 로고","pole":"I","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q04","order":4,"active":true,"axisId":"SN","text":"로고를 처음 보는 사람이 브랜드를 어떻게 이해했으면 하나요?","memo":"","answers":[{"id":"A","text":"어떤 브랜드인지 비교적 빠르고 쉽게 알아볼 수 있었으면 좋겠다.","pole":"S","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"처음에는 궁금증을 느끼고, 의미를 알아갈수록 인상적이면 좋겠다.","pole":"N","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q05","order":5,"active":true,"axisId":"SN","text":"브랜드의 특징을 로고에 담는다면 어떤 방식이 더 좋나요?","memo":"","answers":[{"id":"A","text":"제품·서비스·이름의 특징을 알아볼 수 있는 형태로 표현한다.","pole":"S","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"브랜드가 가진 가치나 이야기를 상징적인 형태로 표현한다.","pole":"N","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q06","order":6,"active":true,"axisId":"SN","text":"심볼을 만든다면 어느 쪽에 더 끌리나요?","memo":"","answers":[{"id":"A","text":"의미가 명확하게 읽히는 아이콘이나 구체적인 형태","pole":"S","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"여러 의미를 떠올릴 수 있는 추상적이고 독창적인 형태","pole":"N","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q07","order":7,"active":true,"axisId":"TF","text":"우리 브랜드가 가장 먼저 전달하고 싶은 이미지는 무엇에 가까운가요?","memo":"","answers":[{"id":"A","text":"전문적이고 정확하며 믿을 수 있는 이미지","pole":"T","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"친근하고 따뜻하며 공감할 수 있는 이미지","pole":"F","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q08","order":8,"active":true,"axisId":"TF","text":"로고의 형태를 고른다면 어느 쪽이 더 마음에 드나요?","memo":"","answers":[{"id":"A","text":"직선과 기하학적 도형처럼 명확하고 계산된 형태","pole":"T","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"곡선과 자연스러운 선처럼 부드럽고 인간적인 형태","pole":"F","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q09","order":9,"active":true,"axisId":"TF","text":"글자 로고를 만든다면 어떤 스타일에 더 끌리나요?","memo":"","answers":[{"id":"A","text":"군더더기 없이 깔끔하고 체계적으로 정돈된 글자","pole":"T","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"개성과 감정이 느껴지는 부드럽거나 특징적인 글자","pole":"F","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q10","order":10,"active":true,"axisId":"JP","text":"우리 브랜드의 로고는 어떤 모습으로 활용되는 것이 좋나요?","memo":"","answers":[{"id":"A","text":"어디에서 사용해도 동일한 형태와 규칙을 유지했으면 좋겠다.","pole":"J","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"상황과 콘텐츠에 따라 형태가 유연하게 변할 수 있으면 좋겠다.","pole":"P","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q11","order":11,"active":true,"axisId":"JP","text":"로고의 전체적인 구도는 어느 쪽이 더 마음에 드나요?","memo":"","answers":[{"id":"A","text":"좌우 균형과 정렬이 잘 맞는 안정적이고 완성된 구도","pole":"J","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"비대칭이나 예상 밖의 배치가 있는 자유롭고 생동감 있는 구도","pole":"P","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]},{"id":"q12","order":12,"active":true,"axisId":"JP","text":"브랜드 디자인을 운영할 때 더 중요하다고 생각하는 것은 무엇인가요?","memo":"","answers":[{"id":"A","text":"명확한 규칙을 만들어 모든 디자인에 일관되게 적용하는 것","pole":"J","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}},{"id":"B","text":"기본적인 개성만 유지하면서 상황에 따라 다양하게 변주하는 것","pole":"P","weight":1,"image":{"src":"","alt":"","fit":"contain","position":"center","sourceNote":""}}]}]};
/* MBCI_TEST는 bsm-data.js가 단일 원본이다. 예전 데이터 파일에 없으면 내장 기본 12문항을 쓴다. */
if(!BSM_DATA.MBCI_TEST||mbciSchemaErrors(BSM_DATA.MBCI_TEST).length){
  if(BSM_DATA.MBCI_TEST)console.warn('[MBCI] 데이터 형식 오류 — 내장 기본 문항으로 대체합니다',mbciSchemaErrors(BSM_DATA.MBCI_TEST));
  BSM_DATA.MBCI_TEST=JSON.parse(JSON.stringify(MBCI_DEFAULT));
}
const MBCI=BSM_DATA.MBCI_TEST;
/* v2.3.0: 사이트 메타(제목·파비콘·썸네일) — 관리자가 지정하지 않으면 배포된 기본 파일을 그대로 쓴다 */
if(!BSM_DATA.SITE_META)BSM_DATA.SITE_META={title:'',faviconSrc:'',ogImageSrc:''};
['homeEyebrow','homeH1','homeSub','homeBg'].forEach(k=>{if(BSM_DATA.SITE_META[k]===undefined)BSM_DATA.SITE_META[k]='';});
/* v2.16.0: CTA 링크는 한 번도 저장된 적이 없을 때만 기본값을 넣는다. 관리자가 비운 값('')은 그대로 비어 있다(대신 관리자에서 경고) */
if(BSM_DATA.SITE_META.consultUrl===undefined)BSM_DATA.SITE_META.consultUrl='https://markinfo-prism.channel.io/home';
if(BSM_DATA.SITE_META.prismUrl===undefined)BSM_DATA.SITE_META.prismUrl='https://markinfo.kr/services/45';
delete BSM_DATA.SITE_META.prismLabel;
const SITE_META=BSM_DATA.SITE_META;
/* 불러오기 전 구조 검증 — 치명적 오류만 반환한다 (운영 경고는 validateMbci에서) */
function mbciSchemaErrors(m){
  const e=[];
  if(!m||typeof m!=='object')return['MBCI_TEST가 객체가 아닙니다'];
  if(!Array.isArray(m.axes)||!m.axes.length)e.push('axes가 비어 있습니다');
  if(!Array.isArray(m.questions)||!m.questions.length)e.push('questions가 비어 있습니다');
  (m.axes||[]).forEach((a,i)=>{if(!a||!a.id||!a.left||!a.right||!a.left.code||!a.right.code)e.push(`axes[${i}] 형식 오류`);});
  (m.questions||[]).forEach((q,i)=>{
    if(!q||!q.id||!q.axisId||!Array.isArray(q.answers)||q.answers.length!==2)e.push(`questions[${i}] 형식 오류`);
  });
  return e;
}
const STYLES=BSM_DATA.STYLES;
function closeMbtiGuide(){const m=$('mbtiModal');if(m)m.classList.add('hidden');}
document.addEventListener('keydown',e=>{
  const m=$('mbtiModal');
  if(e.key==='Escape'&&m&&!m.classList.contains('hidden')){closeMbtiGuide();e.stopImmediatePropagation();}
},true);

/* ================= 업종 코드 + 목업 (canvas 합성) ================= */
const BIZ_LIST=[["fnb","식음료"],["beauty","뷰티"],["fashion","패션"],["life","라이프"],["tech","테크"],["finance","금융"],["medical","의료"],["edu","교육"],["retail","유통"],["mfg","산업"],["estate","공간"],["pro","전문 서비스"],["media","콘텐츠"],["travel","여행"],["public","공공"]];
/* v0.16.0 업종 태그 — 아이콘과 호버 설명. 코드(첫 값)는 데이터 호환을 위해 유지한다. */
const BIZ_META={fnb:{icon:"🍽️",desc:"외식, 카페, 식품"},beauty:{icon:"💄",desc:"화장품, 헤어, 에스테틱"},fashion:{icon:"👗",desc:"의류, 잡화, 주얼리"},life:{icon:"🏡",desc:"가구, 반려동물, 취미"},tech:{icon:"💻",desc:"소프트웨어, 플랫폼, 전자기기"},finance:{icon:"💳",desc:"은행, 투자, 핀테크"},medical:{icon:"🏥",desc:"병원, 제약, 의료기기"},edu:{icon:"🎓",desc:"학교, 학원, 에듀테크"},retail:{icon:"🛍️",desc:"쇼핑몰, 편집숍, 물류"},mfg:{icon:"🏭",desc:"제조, 소재, 에너지"},estate:{icon:"🏢",desc:"건축, 인테리어, 부동산"},pro:{icon:"💼",desc:"법률, 회계, 컨설팅"},media:{icon:"🎬",desc:"미디어, 엔터테인먼트, 출판"},travel:{icon:"✈️",desc:"여행사, 숙박, 관광"},public:{icon:"🏛️",desc:"공공기관, 비영리, 협회"},etc:{icon:"✦",desc:"그 밖의 업종 · 업종 보정 없음"}};
const bizIcon=k=>(BIZ_META[bizNorm(k)]||{}).icon||"";
const bizDesc=k=>(BIZ_META[bizNorm(k)]||{}).desc||"";
/* v0.15.0: 미디어·콘텐츠 + 문화·예술 → 하나의 태그로 통합. 옛 코드(culture)는 media로 흡수한다. */
const BIZ_ALIAS={culture:'media'};
function bizNorm(b){return b?(BIZ_ALIAS[b]||b):b;}
const BIZ_SCENE={fnb:'sign',fashion:'sign',retail:'sign',travel:'sign',
 beauty:'package',life:'package',mfg:'package',medical:'package',
 tech:'screen',media:'screen',
 finance:'card',edu:'card',estate:'card',pro:'card',public:'card'};
/* 목업 이미지 라이브러리 — 이미지마다 로고 영역(비율)·합성 방식·적용 업종을 갖는다. 업종당 최대 3개 노출 */
const MOCKUP_IMGS=BSM_DATA.MOCKUP_IMGS;
const MOCK_BIZ_MAX=Infinity;   // v13.5: 업종별 목업 개수 제한 해제
function mocksForBiz(b){b=bizNorm(b);if(!b)return[];const l=Object.entries(MOCKUP_IMGS).filter(([,v])=>(v.biz||[]).map(bizNorm).includes(b));return MOCK_BIZ_MAX===Infinity?l:l.slice(0,MOCK_BIZ_MAX);}
let mockImgSel=null;   // 결과 화면에서 선택한 목업 이미지 id
let bizCode=null, bizEtc=false;   // bizEtc: 사용자가 '기타'를 직접 골랐는지(기타는 bizCode 가 null 인 상태라 따로 표시한다)
let viewingCode=null;   // v2.9.0: 결과 화면에서 다른 코어를 미리보고 있으면 실제 코드가 아닌 이 값을 표시한다
let otherGridOpen=false;   // v2.10.0: "다른 코어 보기"를 누르면 게이지 자리에 16개 코어 선택 그리드가 뜬다
let indicatorCollapsed=true;   // v2.17.0: 결과가 나올 때 화면 크기로 정한다(데스크톱 펼침 · 모바일 접힘)
let indicatorHint=false;       // 접힌 채로 시작하면 「자세히 보기」를 민트색으로 한 번 깜빡여 안내
const isMobileView=()=>document.documentElement.classList.contains('mbf')||(window.matchMedia&&window.matchMedia('(max-width:640px)').matches);   // v2.23.0: 고객 화면은 모바일 우선(mbf) — 화면 폭과 관계없이 모바일 구성   // v2.11.0: 상담용 페이지 — 축별 슬라이더 값(0~100)
let bizRandom=null;   // v13.11: 공통(미선택)일 때 무작위로 보여줄 업종
function bizWithMocks(){return BIZ_LIST.map(([k])=>k).filter(k=>mocksForBiz(k).length);}
function rerollBizRandom(){
  const c=bizWithMocks();
  bizRandom=c.length?c[Math.floor(Math.random()*c.length)]:null;
  return bizRandom;
}
/* 실제로 그릴 업종 — 사용자가 고른 업종이 없으면 목업이 등록된 업종 중 하나를 무작위로 */
function effBiz(){
  if(bizCode)return bizCode;
  if(!bizRandom||!mocksForBiz(bizRandom).length)rerollBizRandom();
  return bizRandom;
}
const bizLabel=()=>{const f=BIZ_LIST.find(b=>b[0]===bizCode);return f?f[1]:'기타';};
/* v2.15.0: 홈 칩 목록 = 업종 15개 + '기타'. 기타는 업종 보정이 없는 기본값(bizCode===null)이다 */
const BIZ_CHIPS=BIZ_LIST.concat([['etc','기타']]);
/* v2.11.0: 관리자가 바꾼 메인 페이지 카피·배경을 화면에 반영한다 */
/* v2.16.0: 안내 문구는 HTML 없이 그냥 입력한다 — 줄바꿈(엔터)이 그대로 줄바꿈이 된다.
   예전 데이터에 남아 있는 <br>·<em> 표기는 읽을 때 일반 글자로 바꿔 준다. */
function homeToText(v){
  return String(v||'').replace(/<br\s*\/?>/gi,'\n').replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\n{3,}/g,'\n\n').trim();
}
function homeToHtml(v,isTitle){
  let h=esc(homeToText(v)).replace(/\n/g,'<br>');
  if(isTitle)h=h.replace('MBCI 테스트','<em>MBCI 테스트</em>');   // 서비스 이름만 자동 강조(별도 표기 없이)
  return h;
}
function applyHomeContent(){
  const m=SITE_META;
  const eyebrow=document.querySelector('#intro .eyebrow');
  if(eyebrow&&m.homeEyebrow)eyebrow.textContent=homeToText(m.homeEyebrow);
  const h1=document.querySelector('#intro h1');
  if(h1&&m.homeH1)h1.innerHTML=homeToHtml(m.homeH1,true);
  const sub=document.querySelector('#intro .sub');
  if(sub&&m.homeSub)sub.innerHTML=homeToHtml(m.homeSub);
  // 상단 바 오른쪽 「마크인포 프리즘」 — CTA의 프리즘 링크와 같은 주소(비어 있으면 숨김)
  const hp=document.getElementById('hdPrism');
  if(hp){const u=(m.prismUrl||'').trim()||'https://markinfo.kr/services/45'; hp.hidden=false; hp.href=u;}   // v2.19.0: 우측 버튼은 항상 보인다
  const ht=document.getElementById('hdTitle'); if(ht)ht.textContent=(m.headerTitle||'').trim()||'MBCI 테스트';
  const lg=document.getElementById('hdLogo'); if(lg){const lu=(m.logoUrl||'').trim(); lg.href=/^https?:\/\/\S+$/i.test(lu)?lu:DEFAULT_LOGO_URL;}   // v2.37.0: 로고 → 마크인포 홈페이지(관리자 일반 탭에서 수정)
}
const DEFAULT_LOGO_URL='https://markinfo.kr/';
/* v2.37.0: 상단 로고는 마크인포 홈페이지로 이동한다. 관리자 화면 안에서만 예전처럼 첫 화면으로 돌아간다 */
function logoClick(e){
  if(document.body.classList.contains('admin-mode')){ e.preventDefault(); goHome(); return false; }
  return true;
}
function initBizChips(){
  const box=$('bizChips'); if(!box)return;
  box.innerHTML=BIZ_CHIPS.map(([k,l])=>`<button type="button" class="biz-chip${bizChipOn(k)?' on':''}" data-biz="${k}" title="${bizDesc(k)}" aria-label="${l} — ${bizDesc(k)}"><span class="bc-ico" aria-hidden="true">${bizIcon(k)}</span><span class="bc-name">${l}</span><span class="bc-desc">${bizDesc(k)}</span></button>`).join('');
  box.querySelectorAll('.biz-chip').forEach(b=>b.onclick=()=>{
    const k=b.dataset.biz;
    if(k==='etc'){ bizCode=null; bizEtc=!bizEtc; }                       // 기타: 업종 보정 없음. 눌러서 선택/해제
    else if(bizCode===k){ bizCode=null; bizEtc=false; }                  // 같은 업종을 다시 누르면 선택 해제
    else { bizCode=k; bizEtc=false; }
    mockImgSel=null; paintBizChips();
    const sel=$('mockBiz'); if(sel)sel.value=bizCode||'';
  });
}
function bizChipOn(k){ return k==='etc'?(bizEtc&&!bizCode):(k===bizCode); }
function paintBizChips(){ const box=$('bizChips'); if(!box)return; box.querySelectorAll('.biz-chip').forEach(c=>{const on=bizChipOn(c.dataset.biz); c.classList.toggle('on',on); c.setAttribute('aria-pressed',on?'true':'false');}); }
function bindMockupUI(){
  const sel=$('mockBiz'); if(!sel)return;
  if(!sel.dataset.ready){
    sel.innerHTML='<option value="">기타 (업종 보정 없음)</option>'+BIZ_LIST.map(([k,l])=>`<option value="${k}">${bizIcon(k)} ${l}</option>`).join('');
    sel.dataset.ready='1';
    sel.onchange=()=>{bizCode=sel.value||null;bizEtc=false;mockImgSel=null;
      paintBizChips();
      drawMockup();};
    $('mockRefresh').onclick=()=>{
      if(!bizCode){rerollBizRandom();mockImgSel=null;}   // v13.11: 공통이면 다른 업종을 무작위로
      drawMockup();
    };
    const ex=$('mockExport');
    if(ex)ex.onchange=()=>{const v=ex.value;ex.value='';if(v)exportMock(v);};
    const up=$('ulPick'), uf=$('ulFile');
    if(up)up.onclick=()=>uf.click();
    if(uf)uf.onchange=()=>{
      const f=uf.files&&uf.files[0]; uf.value='';
      if(!f)return;
      if(f.size>8*1024*1024){toast('8MB 이하 이미지를 올려 주세요');return;}
      const r=new FileReader();
      r.onload=()=>{
        const im=new Image();
        im.onload=()=>{
          userLogo={src:r.result,img:im,scale:(+$('ulScale').value||100)/100,name:f.name,
                    vector:/svg/i.test(f.type)||/\.svg$/i.test(f.name),pair:!!($('ulPair')&&$('ulPair').checked)};
          $('ulName').textContent=f.name;
          $('ulCtl').classList.remove('hidden');
          $('ulNote').textContent=userLogo.vector
            ? 'SVG를 올렸습니다 · 목업에는 이미지로 합성되며, 원본 SVG를 그대로 쓰시면 인쇄·간판에 가장 좋습니다'
            : '올린 로고는 이 화면에서만 쓰이고 저장되지 않습니다 · 새로고침하면 사라집니다';
          drawMockup(); toast('로고를 얹었어요 — 크기를 조절해 보세요');
        };
        im.onerror=()=>toast('이미지를 읽지 못했어요');
        im.src=r.result;
      };
      r.readAsDataURL(f);
    };
    const us=$('ulScale');
    if(us)us.oninput=()=>{if(userLogo){userLogo.scale=(+us.value||100)/100;drawMockup();}};
    const up2=$('ulPair');
    if(up2)up2.onchange=()=>{if(userLogo){userLogo.pair=up2.checked;drawMockup();}};
    // 스타일을 바꾸면 결과 영역이 다시 그려지므로, 이미 올려 둔 로고의 UI 상태를 복구한다
    if(userLogoActive()){
      $('ulName').textContent=userLogo.name||'내 로고';
      $('ulScale').value=Math.round((userLogo.scale||1)*100);
      if(up2)up2.checked=!!userLogo.pair;
      $('ulCtl').classList.remove('hidden');
      $('ulNote').textContent='올린 로고는 이 화면에서만 쓰이고 저장되지 않습니다 · 새로고침하면 사라집니다';
    }
    const uc=$('ulClear');
    if(uc)uc.onclick=()=>{userLogo=null;$('ulCtl').classList.add('hidden');
      $('ulNote').textContent='배경이 투명한 PNG를 권장합니다 · 올린 파일은 이 화면에서만 쓰이고 저장되지 않습니다';
      drawMockup();toast('로고를 내렸어요');};
  }
  sel.value=bizCode||'';
}
/* ---- v13: 크로마키 레이어 목업 ----
   초록(그린스크린) 영역을 투명 처리한 RGBA 레이어를 만들어,
   로고 - 레이어이미지 - 배경색(제품색) 3층 구조로 합성한다.
   원본은 초록이 포함된 이미지 그대로 저장(용량 절약), 키잉은 런타임 1회 후 캐시. */
const chromaCache=new Map();
function chromaKeyCanvas(im,cacheKey){
  if(cacheKey&&chromaCache.has(cacheKey))return chromaCache.get(cacheKey);
  const cv=document.createElement('canvas');cv.width=im.width;cv.height=im.height;
  const x=cv.getContext('2d',{willReadFrequently:true});
  x.drawImage(im,0,0);
  try{
    const d=x.getImageData(0,0,cv.width,cv.height),p=d.data;
    for(let i=0;i<p.length;i+=4){
      const r=p[i],g=p[i+1],b=p[i+2],m=Math.max(r,b);
      if(g>40&&g>m*1.15){
        const k=(g-m)/(g||1);
        if(k>0.25){p[i+3]=0;p[i+1]=m;}                                   // 완전 키잉
        else if(k>0.12){p[i+3]=Math.round(p[i+3]*(1-(k-0.12)/0.13));p[i+1]=m;} // 소프트 엣지
      }else if(g>m&&g>60){p[i+1]=Math.round((g+m)/2);}                    // 엣지 despill
    }
    x.putImageData(d,0,0);
  }catch(e){console.warn('크로마키 처리 실패(CORS 등) — 원본으로 표시',e);}
  if(cacheKey)chromaCache.set(cacheKey,cv);
  return cv;
}
/* 목업의 실효 제품색: 색상 잠금이면 고정색, 아니면 브랜드 팔레트 메인 컬러 */
function mockBgColor(v,pal){
  if(v&&v.bgLock&&v.bgColor)return v.bgColor;
  const i=Math.max(0,Math.min(4,+(v&&v.bgRole)||0));   // v13.11: 팔레트 5색 중 지정 톤
  return (pal&&pal[i]&&pal[i].hex)||(pal&&pal[0]&&pal[0].hex)||(v&&v.bgColor)||'#333333';
}
/* v13.11 상대 명도 대비비(WCAG) — 글자색이 배경에 묻히는 사고 방지 */
function relLum(hex){
  const n=parseInt(hex.slice(1),16);
  const f=v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);};
  return 0.2126*f(n>>16)+0.7152*f((n>>8)&255)+0.0722*(n&255);
}
function contrastRatio(a,b){
  const l1=relLum(a),l2=relLum(b);
  return (Math.max(l1,l2)+0.05)/(Math.min(l1,l2)+0.05);
}
/* 목업 글자색 결정: 지정 역할색을 쓰되 대비가 모자라면 자동 대비색으로 강제 교체.
   반환 {color, blend} — 지정색은 원색을 살리려 normal, 자동은 명암 합성. */
function mockInkColor(v,pal,bgHex){
  const auto=()=>{
    const light=yiq(bgHex)>150;
    return {color:light?'#22302C':'#FFFFFF', blend:light?'multiply':'screen'};
  };
  // v0.19.0: 종이류로 지정된 목업은 배경이 항상 흰색·밝은 색이라는 사실이 이미 확정돼 있으므로,
  // 표면 밝기 자동 판정(가끔 실패해 흰 바탕에 흰 글자가 얹히는 사고의 원인)이나 지정 역할색을
  // 거치지 않고 곧바로 밝은 배경용 어두운 글자로 고정한다.
  if(v&&v.isPaper)return {color:'#22302C', blend:'multiply'};
  const r=v&&v.inkRole;
  if(r===undefined||r===null||r==='auto')return auto();
  const i=Math.max(0,Math.min(4,+r));
  const hex=(pal&&pal[i]&&pal[i].hex)||null;
  if(!hex)return auto();
  if(contrastRatio(hex,bgHex)<2.2)return auto();   // 배경과 너무 비슷하면 대비색으로
  return {color:hex, blend:'normal'};
}
/* 이미지 목업(레이어 아님)의 로고 영역 평균 밝기 — 흰 봉투에 밝은 글자가 얹히는 사고 방지 */
function sampleAreaHex(x,px,py,pw,ph){
  try{
    const d=x.getImageData(Math.max(0,Math.round(px)),Math.max(0,Math.round(py)),
      Math.max(1,Math.round(pw)),Math.max(1,Math.round(ph))).data;
    let r=0,g=0,b=0,n=0;
    for(let i=0;i<d.length;i+=4){r+=d[i];g+=d[i+1];b+=d[i+2];n++;}
    if(!n)return '#FFFFFF';
    const h=v=>Math.round(v/n).toString(16).padStart(2,'0');
    return '#'+h(r)+h(g)+h(b);
  }catch(e){return '#FFFFFF';}
}
/* ============================================================
   v14.0 로고 워프 엔진 — 평면 / 기울기·원근 / 원통·곡면
   로고(텍스트 또는 업로드 이미지)를 투명 오프스크린에 그린 뒤,
   목적 형태로 변형해 한 장으로 합성한다. 합성 방식(multiply 등)은
   변형이 끝난 뒤 한 번만 적용해 삼각형 이음새가 겹쳐 어두워지는 것을 막는다.
   ============================================================ */
const WARP_DEFAULT={mode:'flat',yaw:0,pitch:0,roll:0,curve:45,bow:0,shade:35};
function warpOf(v){return Object.assign({},WARP_DEFAULT,(v&&v.warp)||{});}

/* 로고 내용을 투명 배경 캔버스로 렌더 (ss=슈퍼샘플 배율) */
function renderLogoLayer(o){
  const ss=o.ss||2;
  const W=Math.max(2,Math.round(o.w*ss)), H=Math.max(2,Math.round(o.h*ss));
  const cv=document.createElement('canvas'); cv.width=W; cv.height=H;
  const x=cv.getContext('2d');
  const al=o.align||'center';
  const drawText=(t,tx0,tw,fs0)=>{
    const fw=o.fw||700; let fs=fs0;
    const set=()=>x.font=`${fw} ${fs}px ${o.fam}, Pretendard, sans-serif`;
    set(); while(x.measureText(t).width>tw*.98&&fs>8){fs-=2;set();}
    x.fillStyle=o.color||'#111'; x.textBaseline='middle';
    if(al==='left'){x.textAlign='left';x.fillText(t,tx0,H/2);}
    else if(al==='right'){x.textAlign='right';x.fillText(t,tx0+tw,H/2);}
    else{x.textAlign='center';x.fillText(t,tx0+tw/2,H/2);}
  };
  if(o.img&&o.pair&&o.text){
    /* v0.17.0: 심볼(업로드 이미지) + 추천 로고타입(텍스트)을 한 박스 안에 나란히 배치 —
       업로드한 심볼이 이 스타일의 한글 워드마크와 어떻게 어울리는지 함께 볼 수 있게 한다 */
    const gap=H*.22, symW=Math.min(H,W*.4), textW=Math.max(1,W-symW-gap);
    const sc=Math.max(.2,Math.min(1.6,o.imgScale||1));
    const f=Math.min(symW/o.img.width,H/o.img.height)*sc;
    const dw=o.img.width*f, dh=o.img.height*f;
    let x0;
    if(al==='left')x0=0; else if(al==='right')x0=W-(symW+gap+textW); else x0=(W-(symW+gap+textW))/2;
    x.drawImage(o.img,x0+(symW-dw)/2,(H-dh)/2,dw,dh);
    drawText(o.text,x0+symW+gap,textW,Math.floor(H*.68));
  }else if(o.img){                              // 업로드 로고 이미지만
    const sc=Math.max(.2,Math.min(1.6,o.imgScale||1));
    const f=Math.min(W/o.img.width,H/o.img.height)*sc;
    const dw=o.img.width*f, dh=o.img.height*f;
    const dx=al==='left'?0:al==='right'?(W-dw):(W-dw)/2;
    x.drawImage(o.img,dx,(H-dh)/2,dw,dh);
    if(o.tint){                                // 단색 지정 시 실루엣으로 색 입힘
      x.globalCompositeOperation='source-in';
      x.fillStyle=o.tint; x.fillRect(0,0,W,H);
      x.globalCompositeOperation='source-over';
    }
  }else{                                       // 텍스트 로고만
    drawText(o.text||'',0,W,Math.floor(H*.75));
  }
  return cv;
}

/* 삼각형 텍스처 매핑 — 목적 삼각형을 아주 살짝 넓혀 이음새 실선을 없앤다 */
function texTri(x,img,s0,s1,s2,d0,d1,d2){
  const cx=(d0[0]+d1[0]+d2[0])/3, cy=(d0[1]+d1[1]+d2[1])/3, E=0.6;
  const ex=p=>{const vx=p[0]-cx,vy=p[1]-cy,l=Math.hypot(vx,vy)||1;return [p[0]+vx/l*E,p[1]+vy/l*E];};
  const e0=ex(d0),e1=ex(d1),e2=ex(d2);
  const den=s0[0]*(s2[1]-s1[1])-s1[0]*s2[1]+s2[0]*s1[1]+(s1[0]-s2[0])*s0[1];
  if(!den)return;
  const m11=-(s0[1]*(e2[0]-e1[0])-s1[1]*e2[0]+s2[1]*e1[0]+(s1[1]-s2[1])*e0[0])/den;
  const m12= (s1[1]*e2[1]+s0[1]*(e1[1]-e2[1])-s2[1]*e1[1]+(s2[1]-s1[1])*e0[1])/den;
  const m21= (s0[0]*(e2[0]-e1[0])-s1[0]*e2[0]+s2[0]*e1[0]+(s1[0]-s2[0])*e0[0])/den;
  const m22=-(s1[0]*e2[1]+s0[0]*(e1[1]-e2[1])-s2[0]*e1[1]+(s2[0]-s1[0])*e0[1])/den;
  const dx=(s0[0]*(s2[1]*e1[0]-s1[1]*e2[0])+s0[1]*(s1[0]*e2[0]-s2[0]*e1[0])+(s2[0]*s1[1]-s1[0]*s2[1])*e0[0])/den;
  const dy=(s0[0]*(s2[1]*e1[1]-s1[1]*e2[1])+s0[1]*(s1[0]*e2[1]-s2[0]*e1[1])+(s2[0]*s1[1]-s1[0]*s2[1])*e0[1])/den;
  x.save();
  x.beginPath();x.moveTo(e0[0],e0[1]);x.lineTo(e1[0],e1[1]);x.lineTo(e2[0],e2[1]);x.closePath();x.clip();
  x.transform(m11,m12,m21,m22,dx,dy);
  x.drawImage(img,0,0);
  x.restore();
}

/* 기울기·원근: 3D 회전 후 투영해 네 꼭짓점을 구한다 */
function tiltQuad(p,wp){
  const w=p.w,h=p.h,cx=p.x+w/2,cy=p.y+h/2;
  const ry=(wp.yaw||0)*Math.PI/180, rx=(wp.pitch||0)*Math.PI/180, rz=(wp.roll||0)*Math.PI/180;
  const f=Math.max(w,h)*2.6;
  return [[-w/2,-h/2],[w/2,-h/2],[w/2,h/2],[-w/2,h/2]].map(([X,Y])=>{
    let x1=X*Math.cos(rz)-Y*Math.sin(rz), y1=X*Math.sin(rz)+Y*Math.cos(rz);
    let x2=x1*Math.cos(ry), z2=-x1*Math.sin(ry);
    let y3=y1*Math.cos(rx)-z2*Math.sin(rx), z3=y1*Math.sin(rx)+z2*Math.cos(rx);
    const s=f/Math.max(f*0.35,(f-z3));
    return [cx+x2*s, cy+y3*s];
  });
}
/* 단위 정사각형 → 사각형 호모그래피 (원근 보정) */
function quadMap(q){
  const [x0,y0]=q[0],[x1,y1]=q[1],[x2,y2]=q[2],[x3,y3]=q[3];
  const sx=x0-x1+x2-x3, sy=y0-y1+y2-y3;
  let a,b,c,d,e,f,g,hh;
  if(Math.abs(sx)<1e-9&&Math.abs(sy)<1e-9){
    a=x1-x0;b=x3-x0;c=x0;d=y1-y0;e=y3-y0;f=y0;g=0;hh=0;
  }else{
    const dx1=x1-x2,dx2=x3-x2,dy1=y1-y2,dy2=y3-y2;
    const den=dx1*dy2-dy1*dx2; if(!den)return null;
    g=(sx*dy2-sy*dx2)/den; hh=(dx1*sy-dy1*sx)/den;
    a=x1-x0+g*x1; b=x3-x0+hh*x3; c=x0;
    d=y1-y0+g*y1; e=y3-y0+hh*y3; f=y0;
  }
  return (u,v)=>{const w=g*u+hh*v+1; return [(a*u+b*v+c)/w,(d*u+e*v+f)/w];};
}

/* 변형된 로고를 임시 캔버스에 그려 반환 — {cv,ox,oy} */
function buildWarpedLogo(layer,p,wp){
  const pad=Math.ceil(Math.max(p.w,p.h)*0.6)+8;
  const bx=Math.floor(p.x-pad), by=Math.floor(p.y-pad);
  const bw=Math.ceil(p.w+pad*2), bh=Math.ceil(p.h+pad*2);
  const cv=document.createElement('canvas'); cv.width=Math.max(2,bw); cv.height=Math.max(2,bh);
  const x=cv.getContext('2d');
  const lp={x:p.x-bx,y:p.y-by,w:p.w,h:p.h};
  const mode=wp.mode||'flat';

  if(mode==='cyl'){
    const N=Math.max(24,Math.min(220,Math.round(p.w/3)));
    const k=Math.max(0,Math.min(100,wp.curve==null?45:wp.curve))/100;
    const arc=Math.max(0.001,k*Math.PI*0.92);              // 감싸는 각도
    const R=(lp.w/2)/Math.max(1e-6,Math.sin(arc/2));
    const bow=(wp.bow||0)/100*lp.h*0.5;
    const cx=lp.x+lp.w/2, sw=layer.width/N;
    const rz=(wp.roll||0)*Math.PI/180;
    x.save();
    if(rz){x.translate(lp.x+lp.w/2,lp.y+lp.h/2);x.rotate(rz);x.translate(-(lp.x+lp.w/2),-(lp.y+lp.h/2));}
    for(let i=0;i<N;i++){
      const u0=i/N,u1=(i+1)/N;
      const t0=(u0-.5)*arc, t1=(u1-.5)*arc;
      const X0=cx+R*Math.sin(t0), X1=cx+R*Math.sin(t1);
      const dw=X1-X0; if(dw<=0.01)continue;
      const tm=(t0+t1)/2;
      const yo=bow*(Math.cos(tm)-Math.cos(arc/2))/Math.max(1e-6,(1-Math.cos(arc/2)));
      x.drawImage(layer, i*sw,0,sw,layer.height, X0, lp.y+yo, dw+0.7, lp.h);
    }
    x.restore();
    const sh=Math.max(0,Math.min(80,wp.shade==null?35:wp.shade))/100;
    if(sh>0){                                              // 원통 음영 — 로고 픽셀에만
      x.globalCompositeOperation='source-atop';
      const g=x.createLinearGradient(lp.x,0,lp.x+lp.w,0);
      g.addColorStop(0,`rgba(0,0,0,${sh})`);
      g.addColorStop(.28,'rgba(0,0,0,0)');
      g.addColorStop(.72,'rgba(0,0,0,0)');
      g.addColorStop(1,`rgba(0,0,0,${sh})`);
      x.fillStyle=g; x.fillRect(lp.x-2,lp.y-2,lp.w+4,lp.h+4);
      x.globalCompositeOperation='source-over';
    }
  }else if(mode==='tilt'){
    const q=tiltQuad(lp,wp), map=quadMap(q);
    if(!map)return null;
    const N=18, LW=layer.width, LH=layer.height;
    for(let i=0;i<N;i++)for(let j=0;j<N;j++){
      const u0=i/N,u1=(i+1)/N,v0=j/N,v1=(j+1)/N;
      const A=map(u0,v0),B=map(u1,v0),C=map(u1,v1),D=map(u0,v1);
      const a=[u0*LW,v0*LH],b=[u1*LW,v0*LH],c=[u1*LW,v1*LH],d=[u0*LW,v1*LH];
      texTri(x,layer,a,b,c,A,B,C);
      texTri(x,layer,a,c,d,A,C,D);
    }
  }else{
    const rz=(wp.roll||0)*Math.PI/180;
    x.save();
    if(rz){x.translate(lp.x+lp.w/2,lp.y+lp.h/2);x.rotate(rz);x.translate(-(lp.x+lp.w/2),-(lp.y+lp.h/2));}
    x.drawImage(layer,lp.x,lp.y,lp.w,lp.h);
    x.restore();
  }
  return {cv,ox:bx,oy:by};
}

/* 최종 합성 — 변형이 끝난 한 장에만 blend를 적용한다 */
function compositeLogo(x,layer,p,wp,blend,alpha){
  const r=buildWarpedLogo(layer,p,warpOf({warp:wp}));
  if(!r)return;
  x.save();
  x.globalCompositeOperation=(blend==='normal'||!blend)?'source-over':blend;
  x.globalAlpha=alpha==null?.94:alpha;
  x.drawImage(r.cv,r.ox,r.oy);
  x.restore();
}

/* ---- v14.0 사용자 업로드 로고 (세션 한정 · 저장되지 않음) ---- */
let userLogo=null;   // {src, img, scale, name, vector}
function userLogoActive(){return !!(userLogo&&userLogo.img);}

/* ============================================================
   v14.0 내보내기 — PNG · JPG(목업 전체) / SVG(로고 단독)
   SVG는 간판·시트커팅용이므로 변형(원근·곡면) 없이 반듯한 원본을 낸다.
   ============================================================ */
function dl(name,href){const a=document.createElement('a');a.download=name;a.href=href;a.click();}
function safeName(){return (brandName||(curCode&&STYLES[curCode]?STYLES[curCode].adj:'브랜드')).replace(/[\\\/:*?"<>|]/g,'_');}
function curLogoFont(){
  const hf=(FONTMAP[curCode]&&FONTMAP[curCode].fonts)?FONTMAP[curCode].fonts[curFontIdx]:null;
  return {fam:hf?hf.family:'Pretendard', fw:hf?fontFw(hf):700, name:hf?hf.name:'Pretendard'};
}
/* 알파 채널 경계를 마칭스퀘어로 따서 닫힌 외곽선 목록을 만든다 */
function traceAlpha(cv,thresh){
  const w=cv.width,h=cv.height;
  const d=cv.getContext('2d').getImageData(0,0,w,h).data;
  const A=(x,y)=>(x<0||y<0||x>=w||y>=h)?0:d[(y*w+x)*4+3];
  const segs=[];
  const ip=(x1,y1,v1,x2,y2,v2)=>{const t=(thresh-v1)/((v2-v1)||1);return [x1+(x2-x1)*t,y1+(y2-y1)*t];};
  for(let y=-1;y<h;y++)for(let x=-1;x<w;x++){
    const v0=A(x,y),v1=A(x+1,y),v2=A(x+1,y+1),v3=A(x,y+1);
    const id=(v0>=thresh?8:0)|(v1>=thresh?4:0)|(v2>=thresh?2:0)|(v3>=thresh?1:0);
    if(id===0||id===15)continue;
    const T=()=>ip(x,y,v0,x+1,y,v1), R=()=>ip(x+1,y,v1,x+1,y+1,v2),
          B=()=>ip(x+1,y+1,v2,x,y+1,v3), L=()=>ip(x,y+1,v3,x,y,v0);
    const put=(a,b)=>segs.push([a,b]);
    switch(id){
      case 1: put(L(),B()); break;
      case 2: put(B(),R()); break;
      case 3: put(L(),R()); break;
      case 4: put(R(),T()); break;
      case 5: put(L(),T()); put(R(),B()); break;
      case 6: put(B(),T()); break;
      case 7: put(L(),T()); break;
      case 8: put(T(),L()); break;
      case 9: put(T(),B()); break;
      case 10: put(T(),R()); put(B(),L()); break;
      case 11: put(T(),R()); break;
      case 12: put(R(),L()); break;
      case 13: put(R(),B()); break;
      case 14: put(B(),L()); break;
    }
  }
  // 끝점을 격자에 반올림해 이어 붙인다
  const key=p=>Math.round(p[0]*8)+','+Math.round(p[1]*8);
  const from=new Map();
  segs.forEach(sg=>{const k=key(sg[0]);(from.get(k)||from.set(k,[]).get(k)).push(sg);});
  const used=new Set(), loops=[];
  segs.forEach((sg,i)=>{
    if(used.has(sg))return;
    const loop=[sg[0]]; let cur=sg, guard=0;
    while(cur&&!used.has(cur)&&guard++<200000){
      used.add(cur); loop.push(cur[1]);
      const nx=(from.get(key(cur[1]))||[]).find(t=>!used.has(t));
      cur=nx;
    }
    if(loop.length>3)loops.push(loop);
  });
  return loops;
}
/* 더글라스–포이커 단순화 */
function rdp(pts,eps){
  if(pts.length<3)return pts;
  const d=(p,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],L=dx*dx+dy*dy;
    if(!L)return Math.hypot(p[0]-a[0],p[1]-a[1]);
    let t=((p[0]-a[0])*dx+(p[1]-a[1])*dy)/L; t=Math.max(0,Math.min(1,t));
    return Math.hypot(p[0]-(a[0]+t*dx),p[1]-(a[1]+t*dy));};
  const rec=(s,e)=>{
    let mi=-1,md=0;
    for(let i=s+1;i<e;i++){const dd=d(pts[i],pts[s],pts[e]);if(dd>md){md=dd;mi=i;}}
    if(md>eps){return rec(s,mi).concat(rec(mi,e).slice(1));}
    return [pts[s],pts[e]];
  };
  return rec(0,pts.length-1);
}
/* v0.17.0: 곡선이 직선 조각으로 끊겨 보이던 문제 — 단순화된 점들을 이어 SVG 패스를 만들 때
   급격히 꺾이는 지점(진짜 모서리)만 직선(L)으로 남기고, 완만하게 휘는 지점은
   카트뮬-롬 스플라인을 3차 베지어(C)로 바꿔 매끄러운 곡선으로 잇는다. */
function pathFromPoints(pts){
  const r2=v=>Math.round(v*100)/100;
  const n=pts.length;
  if(n<4)return pts.map((p,i)=>(i?'L':'')+r2(p[0])+' '+r2(p[1])).join(' ');
  const turnAngle=(a,b,c)=>{                       // b에서 꺾이는 각도 — 180=직선, 작을수록 급함
    const v1=[a[0]-b[0],a[1]-b[1]], v2=[c[0]-b[0],c[1]-b[1]];
    const m1=Math.hypot(v1[0],v1[1]), m2=Math.hypot(v2[0],v2[1]);
    if(!m1||!m2)return 180;
    const cos=Math.max(-1,Math.min(1,(v1[0]*v2[0]+v1[1]*v2[1])/(m1*m2)));
    return Math.acos(cos)*180/Math.PI;
  };
  const SMOOTH_MIN=150;   // 이 각도 이상(완만함)이면 곡선으로, 더 급하게 꺾이면 모서리로 보고 직선 유지
  let d='';
  for(let i=0;i<n;i++){
    const p0=pts[(i-1+n)%n], p1=pts[i], p2=pts[(i+1)%n], p3=pts[(i+2)%n];
    if(turnAngle(p0,p1,p2)>=SMOOTH_MIN){
      const c1x=p1[0]+(p2[0]-p0[0])/6, c1y=p1[1]+(p2[1]-p0[1])/6;
      const c2x=p2[0]-(p3[0]-p1[0])/6, c2y=p2[1]-(p3[1]-p1[1])/6;
      d+=`C${r2(c1x)} ${r2(c1y)},${r2(c2x)} ${r2(c2y)},${r2(p2[0])} ${r2(p2[1])} `;
    }else{
      d+=`L${r2(p2[0])} ${r2(p2[1])} `;
    }
  }
  return d;
}
/* 로고 원본(변형 없음)을 고해상도 투명 캔버스로 렌더 후 여백을 잘라낸다 */
function logoArtwork(color){
  const BW=1800,BH=560;
  const f=curLogoFont();
  const cv=document.createElement('canvas');cv.width=BW;cv.height=BH;
  const x=cv.getContext('2d');
  if(userLogoActive()){
    const im=userLogo.img, sc=Math.min(BW/im.width,BH/im.height)*0.94;
    x.drawImage(im,(BW-im.width*sc)/2,(BH-im.height*sc)/2,im.width*sc,im.height*sc);
  }else{
    const t=brandName||(STYLES[curCode]?STYLES[curCode].adj:'BRAND');
    let fs=Math.floor(BH*0.62);
    const set=()=>x.font=`${f.fw} ${fs}px ${f.fam}, Pretendard, sans-serif`;
    set(); while(x.measureText(t).width>BW*0.94&&fs>16){fs-=4;set();}
    x.fillStyle=color;x.textAlign='center';x.textBaseline='middle';
    x.fillText(t,BW/2,BH/2);
  }
  // 알파 경계로 트림
  const d=x.getImageData(0,0,BW,BH).data;
  let x0=BW,y0=BH,x1=0,y1=0,any=false;
  for(let y=0;y<BH;y++)for(let xx=0;xx<BW;xx++){
    if(d[(y*BW+xx)*4+3]>8){any=true;if(xx<x0)x0=xx;if(xx>x1)x1=xx;if(y<y0)y0=y;if(y>y1)y1=y;}
  }
  if(!any)return null;
  const pad=6;
  x0=Math.max(0,x0-pad);y0=Math.max(0,y0-pad);x1=Math.min(BW-1,x1+pad);y1=Math.min(BH-1,y1+pad);
  const tw=x1-x0+1, th=y1-y0+1;
  const out=document.createElement('canvas');out.width=tw;out.height=th;
  out.getContext('2d').drawImage(cv,x0,y0,tw,th,0,0,tw,th);
  return {cv:out,w:tw,h:th,font:f};
}
function exportMock(kind){
  const cv=$('mockCanvas');
  const base=safeName()+'_'+(curCode||'BSM');
  if(kind==='png'||kind==='jpg'){
    if(!cv){toast('목업 화면을 먼저 열어 주세요');return;}
    if(kind==='png'){dl(base+'_목업.png',cv.toDataURL('image/png'));toast('PNG로 저장했어요');return;}
    const t=document.createElement('canvas');t.width=cv.width;t.height=cv.height;
    const tx=t.getContext('2d');tx.fillStyle='#FFFFFF';tx.fillRect(0,0,t.width,t.height);tx.drawImage(cv,0,0);
    dl(base+'_목업.jpg',t.toDataURL('image/jpeg',0.92));toast('JPG로 저장했어요');return;
  }
  const color=(curPal&&curPal[0]&&curPal[0].hex)||'#111111';
  if(kind==='svg-text'){
    if(userLogoActive()){
      // 업로드 이미지는 글자가 아니므로 텍스트 SVG를 만들 수 없다 — 이미지를 담고 한계를 명시
      const im=userLogo.img, W=im.width, H=im.height;
      const svg=`<?xml version="1.0" encoding="UTF-8"?>
<!-- 마크인포 브랜드 스타일 매트릭스 16 · ${curCode} -->
<!-- 주의: 업로드한 비트맵 로고가 그대로 들어 있습니다. 벡터가 아니므로 확대하면 깨지고,
     시트 커팅·간판 제작에는 쓸 수 없습니다. 원본 AI/SVG 파일을 사용하세요. -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <desc>업로드 이미지 포함 · 벡터 아님</desc>
  <image x="0" y="0" width="${W}" height="${H}" xlink:href="${userLogo.src}"/>
</svg>`;
      dl(base+'_로고(이미지포함).svg','data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg));
      alert('업로드한 로고는 비트맵 이미지입니다.\n\nSVG 안에 이미지를 그대로 담아 저장했지만 벡터가 아니므로 확대하면 깨지고, 시트 커팅·간판 제작에는 쓸 수 없습니다. 간판용으로는 로고 원본 AI·SVG 파일을 사용해 주세요.');
      return;
    }
    const f=curLogoFont();
    const t=brandName||(STYLES[curCode]?STYLES[curCode].adj:'BRAND');
    const mc=document.createElement('canvas').getContext('2d');
    const fs=200; mc.font=`${f.fw} ${fs}px ${f.fam}, Pretendard, sans-serif`;
    const tw=Math.ceil(mc.measureText(t).width)+40, th=Math.ceil(fs*1.45);
    const fam=(f.fam||'').replace(/["']/g,'');
    const svg=`<?xml version="1.0" encoding="UTF-8"?>
<!-- 마크인포 브랜드 스타일 매트릭스 16 · ${curCode} · 글꼴 ${f.name} -->
<!-- 이 파일의 글자는 텍스트로 남아 있습니다. 여는 컴퓨터에 같은 글꼴이 없으면 다른 모양으로 보입니다.
     간판·시트 커팅용으로는 [SVG · 로고 윤곽선]을 쓰거나, 일러스트레이터에서 윤곽선 만들기(Ctrl+Shift+O)를 하세요. -->
<svg xmlns="http://www.w3.org/2000/svg" width="${tw}" height="${th}" viewBox="0 0 ${tw} ${th}">
  <text x="${tw/2}" y="${th/2}" text-anchor="middle" dominant-baseline="central"
        font-family="${fam}, Pretendard, sans-serif" font-size="${fs}" font-weight="${f.fw}" fill="${color}">${t.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</text>
</svg>`;
    dl(base+'_로고(텍스트).svg','data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg));
    toast('텍스트 SVG로 저장했어요 · 같은 글꼴이 있어야 제대로 보입니다');
    return;
  }
  if(kind==='svg-outline'){
    const art=logoArtwork(color);
    if(!art){toast('내보낼 로고가 없어요');return;}
    const loops=traceAlpha(art.cv,128);
    if(!loops.length){toast('윤곽선을 찾지 못했어요');return;}
    const r2=v=>Math.round(v*100)/100;
    const d=loops.map(lp=>{
      const sp=rdp(lp,0.7);
      // v0.17.0: 직선(L)만 쓰던 방식 → 완만한 굴곡은 3차 베지어(C)로, 급한 모서리만 직선으로
      return 'M'+r2(sp[0][0])+' '+r2(sp[0][1])+pathFromPoints(sp)+'Z';
    }).join(' ');
    const note=userLogoActive()
      ? `<!-- 주의: 업로드 이미지의 '실루엣'만 벡터로 딴 것입니다. 색 구분과 세밀한 디테일은 사라집니다.
     정확한 간판 제작에는 로고 원본 AI·SVG 파일을 사용하세요. -->`
      : `<!-- 글자를 윤곽선(패스)으로 변환했습니다. 글꼴 설치 없이 어디서나 같은 모양으로 열립니다. -->`;
    const svg=`<?xml version="1.0" encoding="UTF-8"?>
<!-- 마크인포 브랜드 스타일 매트릭스 16 · ${curCode} · 글꼴 ${art.font.name} -->
${note}
<svg xmlns="http://www.w3.org/2000/svg" width="${art.w}" height="${art.h}" viewBox="0 0 ${art.w} ${art.h}">
  <path fill="${color}" fill-rule="evenodd" d="${d}"/>
</svg>`;
    dl(base+'_로고(윤곽선).svg','data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg));
    if(userLogoActive())alert('업로드한 로고의 실루엣만 벡터로 변환했습니다.\n\n색 구분과 세밀한 디테일은 사라집니다. 정확한 간판 제작에는 로고 원본 AI·SVG 파일을 사용해 주세요.');
    else toast('윤곽선 SVG로 저장했어요 · 글꼴 없이도 열립니다');
    return;
  }
}

function renderMockThumbs(avail,selId){
  const box=$('mockThumbs'); if(!box)return;
  // v2.9.0: SNS 프로필은 업종에 목업이 없어도 항상 골라 쓸 수 있는 목업 라이브러리 항목이다
  const snsBtn=`<button type="button" class="mock-thumb mock-thumb-sns${selId==='__sns'?' on':''}" data-mid="__sns" title="온라인 · SNS 프로필">
    <span class="mock-thumb-ico">📱</span><span>SNS 프로필</span></button>`;
  let note='';
  if(!avail.length){
    note='<span class="mock-none">등록된 업종 목업이 없어요 · 위 SNS 프로필을 써보거나 관리자 → 목업에서 추가할 수 있어요</span>';
  }else if(!bizCode&&bizRandom){
    const lb=(BIZ_LIST.find(b=>b[0]===bizRandom)||[,bizRandom])[1];
    note=`<span class="mock-none" style="width:100%">업종을 고르지 않아 <b>${lb}</b> 목업을 무작위로 보여주고 있어요 · 「↺ 다시 그리기」로 다른 업종을 볼 수 있어요</span>`;
  }
  box.innerHTML=note+snsBtn
    +avail.map(([id,v])=>`<button type="button" class="mock-thumb${id===selId?' on':''}" data-mid="${id}" title="${v.name||id}">
    <img src="${v.src}" alt="" data-thumb="${id}"><span>${v.name||id}</span></button>`).join('');
  box.querySelectorAll('.mock-thumb').forEach(b=>b.onclick=()=>{mockImgSel=b.dataset.mid;drawMockup();});
  // v13.1: 레이어 목업 썸네일은 배경색이 합성된 미리보기로 교체
  avail.forEach(([id,v])=>{
    if(!(v.layerMode||v.chroma))return;
    const el=box.querySelector(`img[data-thumb="${id}"]`); if(!el)return;
    const bgc=mockBgColor(v,curPal);
    const srcs=(v.layers&&v.layers.some(Boolean))?v.layers.slice(0,3):[v.src];
    Promise.all(srcs.map(u=>u?new Promise(res=>{
      const im=new Image();im.crossOrigin='anonymous';
      im.onload=()=>res(im);im.onerror=()=>res(null);im.src=u;
    }):Promise.resolve(null))).then(imgs=>{
      const ref=imgs.find(Boolean); if(!ref)return;
      const tw=160,th=Math.round(160*ref.height/ref.width);
      const cv=document.createElement('canvas');cv.width=tw;cv.height=th;
      const tx=cv.getContext('2d');
      tx.fillStyle=bgc;tx.fillRect(0,0,tw,th);
      imgs.forEach(im=>{if(!im)return;
        tx.drawImage((v.chroma&&!v.layerMode)?chromaKeyCanvas(im,id):im,0,0,tw,th);});
      try{el.src=cv.toDataURL('image/png');}catch(e){}
    });
  });
}
function fitFont(x,text,fam,maxW,base,weight){
  let s=base; const w=weight||700;
  do{x.font=`${w} ${s}px ${fam}, Pretendard, sans-serif`;if(x.measureText(text).width<=maxW)break;s-=4;}while(s>22);
  return s;
}
async function drawMockup(){
  const cv=$('mockCanvas'); if(!cv||!curCode||!curPal)return;
  const st=STYLES[curCode];
  const W=1000,H=750; cv.width=W; cv.height=H;   // 4:3
  const x=cv.getContext('2d');
  const c={main:curPal[0].hex,sub:curPal[1].hex,acc:curPal[2].hex,bg:curPal[3].hex,ink:curPal[4].hex};
  const name=brandName||st.adj;
  const hf=(FONTMAP[curCode]?.fonts||[])[curFontIdx];
  const fam=hf?hf.family:'Pretendard';
  const fw=hf?fontFw(hf):700;   // v2.29.0: 항목(굵기) 자신의 웨이트
  try{await Promise.race([document.fonts.load(`${fw} 90px ${fam}`,'가나다'),new Promise(r=>setTimeout(r,900))]);}catch(e){}
  const onC=h=>yiq(h)>150?'#22302C':'#FFFFFF';
  const rr=(px,py,pw,ph,r)=>{x.beginPath();if(x.roundRect)x.roundRect(px,py,pw,ph,r);else x.rect(px,py,pw,ph);};
  const eb=effBiz();   // v13.11: 공통(미선택)이면 목업이 있는 업종 중 무작위
  const scene=mockImgSel==='__sns'?'online':(bizCode?(BIZ_SCENE[bizCode]||'sign'):'none');
  const avail=mocksForBiz(eb);
  if(mockImgSel&&mockImgSel!=='__sns'&&!avail.find(([id])=>id===mockImgSel))mockImgSel=null;
  const pick=mockImgSel==='__sns'?null:(avail.find(([id])=>id===mockImgSel)||avail[0]||null);
  const base=pick?pick[1]:null;
  renderMockThumbs(avail,mockImgSel==='__sns'?'__sns':(pick?pick[0]:null));

  if(scene==='online'){ /* 온라인 · SNS 프로필 목업 */
    x.fillStyle='#F2F3F5';x.fillRect(0,0,W,H);
    x.fillStyle='#FFFFFF';rr(240,34,520,H-68,26);x.fill();
    x.strokeStyle='rgba(0,0,0,.08)';x.lineWidth=1.5;rr(240,34,520,H-68,26);x.stroke();
    x.fillStyle='#FFFFFF';x.fillRect(242,36,516,54);
    x.fillStyle=c.ink;x.font='800 17px Pretendard, sans-serif';x.textAlign='center';
    const handle='@'+(name.replace(/\s+/g,'').toLowerCase().slice(0,14)||'brand');
    x.fillText(handle,W/2,70);x.textAlign='left';
    x.strokeStyle='rgba(0,0,0,.07)';x.beginPath();x.moveTo(242,92);x.lineTo(758,92);x.stroke();
    x.fillStyle=c.main;x.beginPath();x.arc(340,168,52,0,Math.PI*2);x.fill();   // 프로필 원 = 로고
    x.strokeStyle=c.acc;x.lineWidth=3.5;x.beginPath();x.arc(340,168,60,0,Math.PI*2);x.stroke();
    x.fillStyle=onC(c.main);
    const initial=name.trim().slice(0,2);
    let ifs=44;x.font=`${fw} ${ifs}px ${fam}, Pretendard, sans-serif`;
    while(x.measureText(initial).width>86&&ifs>18){ifs-=3;x.font=`${fw} ${ifs}px ${fam}, Pretendard, sans-serif`;}
    x.textAlign='center';x.textBaseline='middle';x.fillText(initial,340,170);x.textBaseline='alphabetic';
    x.fillStyle=c.ink;x.font='800 20px Pretendard, sans-serif';
    [['128','게시물',478],['5.4천','팔로워',588],['312','팔로잉',698]].forEach(([n,l,px])=>{
      x.fillText(n,px,158);x.font='600 12.5px Pretendard, sans-serif';x.globalAlpha=.62;
      x.fillText(l,px,180);x.globalAlpha=1;x.font='800 20px Pretendard, sans-serif';});
    x.textAlign='left';
    const nfs=fitFont(x,name,fam,300,26,fw);
    x.fillStyle=c.ink;x.fillText(name,280,264+nfs*.1);
    x.font='500 14px Pretendard, sans-serif';x.globalAlpha=.66;
    x.fillText(st.sub,280,292);x.globalAlpha=1;
    x.fillStyle=c.acc;rr(280,312,200,40,10);x.fill();
    x.fillStyle=onC(c.acc);x.font='800 15px Pretendard, sans-serif';x.textAlign='center';
    x.fillText('팔로우',380,338);x.textAlign='left';
    x.fillStyle=c.sub;x.globalAlpha=.9;rr(494,312,110,40,10);x.fill();x.globalAlpha=1;
    x.fillStyle=onC(c.sub);x.font='700 14px Pretendard, sans-serif';x.textAlign='center';
    x.fillText('메시지',549,338);x.textAlign='left';
    const gs=(520-8)/3, gy=378;
    [c.main,c.sub,c.acc,c.bg,c.main,c.sub].forEach((hex,i)=>{
      const gx=240+(i%3)*(gs+4)+2, gyy=gy+Math.floor(i/3)*(gs*0.55+4);
      x.fillStyle=hex;x.globalAlpha=i>2?.78:1;x.fillRect(gx,gyy,gs,gs*0.55);x.globalAlpha=1;});
  }
  else if(base&&(base.src||(base.layers||[]).some(Boolean))){ /* 목업 라이브러리 이미지 */
    const isLayer=!!(base.layerMode||base.chroma);
    const bgc=isLayer?mockBgColor(base,curPal):null;   // 배경색: 잠금이면 고정색, 아니면 팔레트 메인
    const pr=base.logo||{x:.28,y:.32,w:.44,h:.2};
    const p={x:pr.x*W,y:pr.y*H,w:pr.w*W,h:pr.h*H};
    let bl=base.blend||'multiply', logoColor=c.main;
    const applyInk=(bgHex)=>{const r=mockInkColor(base,curPal,bgHex);logoColor=r.color;bl=r.blend;};
    const drawLogo=()=>{
      // v14.0: 텍스트든 업로드 로고든 한 장으로 렌더한 뒤 표면 형태에 맞춰 변형해 합성
      const pairOn=userLogoActive()&&userLogo.pair;
      const layer=renderLogoLayer({w:p.w,h:p.h,ss:2,
        text:name,fam,fw,color:logoColor,align:base.align||'center',
        img:userLogoActive()?userLogo.img:null, imgScale:userLogo?userLogo.scale:1,
        pair:pairOn});
      // 업로드한 로고는 브랜드 고유색이므로 합성 모드를 타지 않고 원색 그대로 얹는다.
      // 심볼+로고타입 병기 모드는 텍스트도 함께 그려지므로 살짝 배경에 눌리는 합성이 더 자연스럽다.
      compositeLogo(x,layer,p,base.warp, (userLogoActive()&&!pairOn)?'normal':bl, (userLogoActive()&&!pairOn)?1:.94);
    };
    if(isLayer){
      const srcs=(base.layers&&base.layers.some(Boolean))?base.layers.slice(0,3):[base.src];
      const above=base.layerAbove||[false,false,false];
      const imgs=await Promise.all(srcs.map(u=>u?new Promise(res=>{
        const im=new Image();im.crossOrigin='anonymous';
        im.onload=()=>res(im);im.onerror=()=>res(null);im.src=u;
      }):Promise.resolve(null)));
      const box=layerFitBox(imgs,W,H);
      x.fillStyle='#ECEAE6';x.fillRect(0,0,W,H);
      if(box){
        x.fillStyle=bgc;x.fillRect(box.dx,box.dy,box.dw,box.dh);                       // ① 배경색(팔레트 자동/잠금)
        const put=im=>{
          if(base.chroma&&!base.layerMode)im=chromaKeyCanvas(im,pick?pick[0]:null);     // v13.0 크로마 항목 하위 호환
          x.drawImage(im,box.dx,box.dy,box.dw,box.dh);
        };
        imgs.forEach((im,i)=>{if(im&&!above[i])put(im);});                              // ② 로고 아래 레이어
        applyInk(bgc);                                                                  // v13.11: 글자색 = 지정 역할색(대비 부족 시 자동)
        drawLogo();                                                                     // ③ 로고
        imgs.forEach((im,i)=>{if(im&&above[i])put(im);});                                // ④ 로고 위 레이어(그림자·광택)
      }
    }else{
      await new Promise(res=>{const im=new Image();im.crossOrigin='anonymous';
        im.onload=()=>{const s=Math.min(W/im.width,H/im.height);
          const dw=im.width*s,dh=im.height*s;
          x.fillStyle='#ECEAE6';x.fillRect(0,0,W,H);
          x.drawImage(im,(W-dw)/2,(H-dh)/2,dw,dh);res();};
        im.onerror=res;im.src=base.src;});
      // v13.11: 레이어가 아닌 실사 이미지는 로고가 놓일 자리의 실제 밝기를 읽어 글자색을 정한다
      applyInk(sampleAreaHex(x,p.x,p.y,p.w,p.h));
      drawLogo();
    }
  }
  else if(scene==='none'){ /* v13.11: 공통(미선택)인데 등록된 목업 이미지가 없을 때 — 가상 샘플 장면은 그리지 않는다 */
    x.fillStyle='#F1F4F2';x.fillRect(0,0,W,H);
    x.fillStyle='#8A9A93';x.font='700 20px Pretendard, sans-serif';x.textAlign='center';
    x.fillText('표시할 목업 이미지가 없어요',W/2,H/2-14);
    x.font='500 14px Pretendard, sans-serif';
    x.fillText('관리자 → 목업에서 이미지를 등록하면 이곳에 합성됩니다',W/2,H/2+16);
    x.textAlign='left';
  }
  else if(scene==='sign'){ /* 매장 간판 */
    const g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#E9E4DC');g.addColorStop(1,'#CFC8BD');
    x.fillStyle=g;x.fillRect(0,0,W,H);
    x.strokeStyle='rgba(0,0,0,.06)';x.lineWidth=2;
    for(let i=1;i<9;i++){x.beginPath();x.moveTo(i*(W/9),0);x.lineTo(i*(W/9),H);x.stroke();}
    x.save();x.translate(0,(H-620)/2);   // 620 기준 설계 콘텐츠를 세로 중앙에
    x.fillStyle='rgba(0,0,0,.16)';rr(96,118,W-192,190,10);x.fill();          // 간판 그림자
    x.fillStyle=c.main;rr(88,104,W-176,190,10);x.fill();                      // 간판 패널
    x.strokeStyle='rgba(255,255,255,.22)';x.lineWidth=3;rr(102,118,W-204,162,7);x.stroke();
    x.fillStyle=onC(c.main);
    const fs=fitFont(x,name,fam,W-300,96,fw);
    x.textAlign='center';x.fillText(name,W/2,199+fs*.36);x.textAlign='left';
    x.fillStyle=c.acc;rr(W/2-40,318,80,7,4);x.fill();                          // 포인트 라인
    const lg=x.createLinearGradient(0,90,0,320);lg.addColorStop(0,'rgba(255,255,255,.16)');lg.addColorStop(1,'rgba(255,255,255,0)');
    x.fillStyle=lg;rr(88,104,W-176,190,10);x.fill();                           // 조명
    x.fillStyle=c.bg;rr(150,392,300,140,8);x.fill();                           // 쇼윈도 두 칸
    x.fillStyle=c.sub;rr(550,392,300,140,8);x.fill();
    x.fillStyle='rgba(255,255,255,.35)';
    x.beginPath();x.moveTo(190,392);x.lineTo(260,392);x.lineTo(210,532);x.lineTo(140,532);x.closePath();x.fill();
    x.restore();
  }
  else if(scene==='card'){ /* 명함 */
    const g=x.createLinearGradient(0,0,W,H);g.addColorStop(0,'#DDD7CE');g.addColorStop(1,'#C6BFB4');
    x.fillStyle=g;x.fillRect(0,0,W,H);
    x.save();x.translate(W/2,H/2+8);x.rotate(-.045);
    x.shadowColor='rgba(0,0,0,.28)';x.shadowBlur=34;x.shadowOffsetY=16;
    x.fillStyle=c.bg;rr(-330,-186,660,372,14);x.fill();x.shadowColor='transparent';
    x.fillStyle=c.main;rr(-330,-186,660,96,14);x.fillRect(-330,-118,660,28);x.fill(); // 상단 밴드
    x.fillStyle=c.acc;rr(-330,-92,660,8,0);x.fill();
    x.fillStyle=yiq(c.bg)>150?c.main:onC(c.bg);
    const fs=fitFont(x,name,fam,560,72,fw);
    x.textAlign='center';x.fillText(name,0,26+fs*.32);
    x.font='600 21px Pretendard, sans-serif';x.fillStyle=c.ink;x.globalAlpha=.75;
    x.fillText(bizLabel()+' · '+st.adj,0,118);x.globalAlpha=1;x.textAlign='left';
    x.restore();
  }
  else if(scene==='screen'){ /* 앱 · 웹 화면 */
    x.fillStyle='#20262B';x.fillRect(0,0,W,H);
    x.fillStyle='#0E1215';rr(120,58,W-240,H-116,18);x.fill();                  // 디바이스
    x.fillStyle=c.bg;rr(138,76,W-276,H-152,10);x.fill();                       // 스크린
    x.fillStyle=c.main;rr(138,76,W-276,72,10);x.fillRect(138,120,W-276,28);x.fill(); // 상단바
    x.fillStyle=onC(c.main);x.font='800 24px Pretendard, sans-serif';x.fillText(name,168,122);
    x.fillStyle=yiq(c.bg)>150?c.main:onC(c.bg);
    const fs=fitFont(x,name,fam,W-420,84,fw);
    x.textAlign='center';x.fillText(name,W/2,306+fs*.3);
    x.font='600 20px Pretendard, sans-serif';x.fillStyle=c.ink;x.globalAlpha=.7;
    x.fillText(st.sub,W/2,352);x.globalAlpha=1;x.textAlign='left';
    x.fillStyle=c.acc;rr(W/2-108,392,216,52,26);x.fill();
    x.fillStyle=onC(c.acc);x.font='800 19px Pretendard, sans-serif';x.textAlign='center';
    x.fillText('시작하기',W/2,425);x.textAlign='left';
    x.fillStyle=c.sub;rr(206,486,170,40,10);x.fill();x.globalAlpha=.55;rr(410,486,170,40,10);x.fill();rr(614,486,170,40,10);x.fill();x.globalAlpha=1;
  }
  else{ /* package: 패키지 박스 */
    const g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#E7E2DA');g.addColorStop(1,'#CBC4B9');
    x.fillStyle=g;x.fillRect(0,0,W,H);
    x.save();x.translate(0,(H-620)/2);   // 620 기준 설계 콘텐츠를 세로 중앙에
    x.fillStyle='rgba(0,0,0,.2)';x.beginPath();x.ellipse(W/2,522,300,26,0,0,Math.PI*2);x.fill();
    x.fillStyle=c.main;x.beginPath();x.moveTo(310,180);x.lineTo(620,180);x.lineTo(620,520);x.lineTo(310,520);x.closePath();x.fill();   // 정면
    x.fillStyle=yiq(c.main)>150?'rgba(0,0,0,.16)':'rgba(0,0,0,.3)';
    x.beginPath();x.moveTo(620,180);x.lineTo(730,128);x.lineTo(730,468);x.lineTo(620,520);x.closePath();x.fill();                      // 측면
    x.fillStyle=yiq(c.main)>150?'rgba(255,255,255,.5)':'rgba(255,255,255,.18)';
    x.beginPath();x.moveTo(310,180);x.lineTo(420,128);x.lineTo(730,128);x.lineTo(620,180);x.closePath();x.fill();                      // 윗면
    x.fillStyle=c.bg;rr(348,300,234,120,8);x.fill();                            // 라벨
    x.fillStyle=c.acc;rr(348,300,234,10,0);x.fill();
    x.fillStyle=yiq(c.bg)>150?c.main:onC(c.bg);
    const fs=fitFont(x,name,fam,206,46,fw);
    x.textAlign='center';x.fillText(name,465,368+fs*.3);
    x.font='600 14px Pretendard, sans-serif';x.fillStyle=c.ink;x.globalAlpha=.7;x.fillText(bizLabel(),465,402);x.globalAlpha=1;x.textAlign='left';
    x.restore();
  }

  /* ---- 이미지 레이어 위 정보 바: 이름 · 업종 · 글꼴 · 색상 ---- */
  const bh=56;
  x.fillStyle='rgba(16,24,22,.82)';x.fillRect(0,H-bh,W,bh);
  x.fillStyle='#FFFFFF';x.font='800 17px Pretendard, sans-serif';
  x.fillText(name,26,H-bh+35);
  const nw=x.measureText(name).width;
  x.font='600 13px Pretendard, sans-serif';x.fillStyle='rgba(255,255,255,.72)';
  x.fillText(`${bizLabel()} · ${hf?hf.name:'Pretendard'} · ${st.adj}`,26+nw+18,H-bh+34);
  let sx=W-26;
  [c.ink,c.bg,c.acc,c.sub,c.main].forEach(hex=>{sx-=30;
    x.fillStyle=hex;rr(sx,H-bh+16,24,24,6);x.fill();
    x.strokeStyle='rgba(255,255,255,.4)';x.lineWidth=1;rr(sx,H-bh+16,24,24,6);x.stroke();});
  x.font='700 11px Pretendard, sans-serif';x.fillStyle='rgba(255,255,255,.6)';
  x.textAlign='right';x.fillText(`${c.main} · ${c.acc}`,sx-12,H-bh+34);x.textAlign='left';
}
/* 레이어들의 공통 contain 배치 박스 — 첫 유효 레이어 기준(모든 레이어는 같은 크기로 준비) */
function layerFitBox(imgs,W,H){
  const ref=imgs.find(Boolean); if(!ref)return null;
  const s=Math.min(W/ref.width,H/ref.height);
  const dw=ref.width*s,dh=ref.height*s;
  return {dx:(W-dw)/2,dy:(H-dh)/2,dw,dh};
}

const SCHEMES = {
  tot:{name:"톤온톤",easy:"같은 색, 밝기 차이"},
  tit:{name:"톤인톤",easy:"비슷한 색끼리"},
  acc:{name:"포인트",easy:"한 색만 강조"},
};

/* ================= COLOR ENGINE ================= */
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const rnd=(a,b)=>a+Math.random()*(b-a);
function hsb2hex(h,s,b){
  h=((h%360)+360)%360; s/=100; b/=100;
  const k=n=>(n+h/60)%6, f=n=>b*(1-s*Math.max(0,Math.min(k(n),4-k(n),1)));
  const to=v=>Math.round(v*255).toString(16).padStart(2,'0').toUpperCase();
  return '#'+to(f(5))+to(f(3))+to(f(1));
}
function pickHue(ranges){
  const spans=ranges.map(([a,b])=>a<=b?[a,b]:[a,b+360]);
  const total=spans.reduce((s,[a,b])=>s+(b-a),0);
  let r=Math.random()*total;
  for(const[a,b]of spans){ if(r<=b-a) return (a+r)%360; r-=(b-a); }
  return spans[0][0];
}
function inHue(h,ranges){
  h=((h%360)+360)%360;
  return ranges.some(([a,b])=>a<=b?(h>=a&&h<=b):(h>=a||h<=b));
}
/* 배색 생성기 — 스타일 범위(가드레일) 안에서 5개 역할 색을 만든다 */
/* 고정된 색을 기준으로 나머지를 조화롭게 다시 조색 */
function lockedAnchor(){
  // 잠긴 색 중 유채색(채도>12)을 우선 기준으로 삼는다
  const idx=curLocks.map((v,i)=>v?i:-1).filter(i=>i>=0);
  if(!idx.length||!curPal)return null;
  const chrom=idx.map(i=>curPal[i]).filter(c=>c.s>12);
  const base=(chrom.length?chrom:idx.map(i=>curPal[i]))
    .sort((a,b)=>b.s-a.s)[0];
  return base?{h:base.h,s:base.s,b:base.b,role:base.role}:null;
}
function harmonize(st,scheme){
  const anc=lockedAnchor();
  if(!anc)return genPalette(st,scheme,curAnchor);
  // 고정색의 색상을 축으로, 배색 방식에 맞는 관계색을 계산
  const S=st.sat,B=st.bri;
  const cl=(v,a,b)=>Math.min(b,Math.max(a,v));
  const inR=h=>inHue(h,st.hue)?h:clampHueToRanges(h,st.hue);
  let hs;
  if(scheme==='tot')      hs=[anc.h,anc.h,anc.h];                          // 동일 색상, 명도차
  else if(scheme==='tit') hs=[anc.h,inR(anc.h+26),inR(anc.h-26)];          // 인접 색상
  else if(scheme==='acc') hs=[anc.h,anc.h,anc.h];                          // 무채 바탕 + 강조
  else                    hs=[anc.h,inR(anc.h+152),anc.h];                 // 보색 + 중립
  const roles=["주조색","보조색","포인트","바탕색","글자색"];
  const easy=["브랜드 핵심 색","곁들이는 색","눈길 끄는 색","배경","텍스트"];
  const dark=B[1]<=25;
  let p;
  if(scheme==='tot'){
    const b0=cl(anc.b,B[0],B[1]);
    p=[[hs[0],anc.s,b0],[hs[0],anc.s*.82,cl(b0+22,B[0],100)],[hs[0],cl(anc.s*1.15,0,100),cl(b0+40,0,92)],
       [hs[0],cl(anc.s*.16,0,14),96],[hs[0],cl(anc.s*.5,0,30),14]];
  }else if(scheme==='tit'){
    const b0=cl(anc.b,Math.max(B[0],55),B[1]);
    p=[[hs[0],anc.s,b0],[hs[1],anc.s*.92,cl(b0+4,B[0],100)],[hs[2],anc.s*.96,cl(b0-4,B[0],100)],
       [hs[0],cl(anc.s*.15,0,12),97],[hs[0],cl(anc.s*.55,0,32),16]];
  }else if(scheme==='acc'){
    if(dark) p=[[hs[0],8,8],[hs[0],10,15],[hs[0],cl(Math.max(anc.s,55),S[0],100),cl(anc.b,60,92)],[hs[0],6,72],[hs[0],4,96]];
    else     p=[[hs[0],4,98],[hs[0],7,92],[hs[0],cl(Math.max(anc.s,55),S[0],100),cl(anc.b,45,95)],[hs[0],10,62],[hs[0],18,13]];
  }else{
    const b0=cl(anc.b,Math.max(B[0],35),Math.min(B[1],88));
    p=[[hs[0],anc.s,b0],[hs[1],anc.s*.9,cl(b0-6,25,88)],[hs[0],cl(anc.s*1.1,0,95),cl(b0+14,0,92)],
       [42,14,94],[28,30,15]];
  }
  const out=p.map(([hh,ss,bb],i)=>{
    const H=((hh%360)+360)%360, Sv=cl(ss,0,100), Bv=cl(bb,0,100);
    return {h:H,s:Sv,b:Bv,hex:hsb2hex(H,Sv,Bv),role:roles[i],easy:easy[i]};
  });
  // 「피하세요」 규칙 적용 후, 잠긴 색은 원본 그대로 유지
  const safe=postPalette(st,applyAvoid(st,out,scheme),scheme,curLocks);
  return safe.map((c,i)=>curLocks[i]?curPal[i]:c);
}
/* 「피하세요」 규칙을 실제 조색에 강제 적용 */
function applyAvoid(st,pal,scheme){
  const av=st.avoid||{};
  const chromIdxs=(scheme==='acc')?[2]:[0,1,2];
  return pal.map((c,i)=>{
    let s=c.s, b=c.b;
    const isChrom=chromIdxs.includes(i);
    if(isChrom){
      if(av.satMax!=null) s=Math.min(s,av.satMax);
      if(av.satMin!=null) s=Math.max(s,av.satMin);
    }
    if(av.briMax!=null && i!==3 && i!==4) b=Math.min(b,av.briMax);
    if(av.briMin!=null && i!==4) b=Math.max(b,av.briMin);
    // 순백 금지: 바탕색을 크림 톤으로
    if(av.noWhite && i===3 && b>96){ b=94; s=Math.max(s,8); }
    if(s===c.s && b===c.b) return c;
    return {...c,s:clamp(s,0,100),b:clamp(b,0,100),hex:hsb2hex(c.h,clamp(s,0,100),clamp(b,0,100))};
  });
}
/* ===== v2.29.0 팔레트 후처리: 너무 가까운 색 분리 · 무채색 코어(INTJ) · 중립색 섞기(ENFJ) ===== */
function hexToLab(hex){
  const h=hex.replace('#',''); const c=[0,2,4].map(i=>parseInt(h.substr(i,2),16)/255).map(v=>v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4));
  const X=(c[0]*.4124+c[1]*.3576+c[2]*.1805)/.95047, Y=(c[0]*.2126+c[1]*.7152+c[2]*.0722), Z=(c[0]*.0193+c[1]*.1192+c[2]*.9505)/1.08883;
  const f=t=>t>.008856?Math.cbrt(t):7.787*t+16/116;
  return [116*f(Y)-16,500*(f(X)-f(Y)),200*(f(Y)-f(Z))];
}
function deltaE(a,b){const x=hexToLab(a),y=hexToLab(b);return Math.sqrt((x[0]-y[0])**2+(x[1]-y[1])**2+(x[2]-y[2])**2);}
const PAL_MIN_DE={tot:22,tit:15,acc:0,sep:15};
/* 주조·보조·포인트(0~2번) 사이의 색 차이가 최소값(CIE ΔE) 미만이면 명도를 벌려 눈에 띄게 한다 */
function ensureDistinct(pal,scheme,locks){
  const min=PAL_MIN_DE[scheme]||0; if(!min)return pal;
  const out=pal.map(c=>({...c}));
  for(let i=1;i<3;i++){
    if(locks&&locks[i])continue;
    let dir=out[i].b<=55?1:-1;
    for(let t=0;t<40;t++){
      let bad=false;
      for(let j=0;j<i;j++)if(deltaE(out[i].hex,out[j].hex)<min)bad=true;
      if(!bad)break;
      const c=out[i];
      if((dir>0&&c.b>=96)||(dir<0&&c.b<=8))dir=-dir;   // 끝에 닿으면 반대 방향으로
      const nb=clamp(c.b+dir*4,6,98);
      out[i]={...c,b:nb,hex:hsb2hex(c.h,c.s,nb)};
    }
  }
  return out;
}
/* 스타일 옵션 후처리 — neutral: 주조·보조·바탕·글자는 무채색, 포인트만 유채색 / mixNeutral: 주조·보조 중 하나를 차콜·그레이로 바꾸는 변형을 섞는다 */
function postPalette(st,pal,scheme,locks){
  let out=pal.map(c=>({...c}));
  const lk=i=>locks&&locks[i];
  const setC=(i,h,sv,b)=>{if(lk(i))return;out[i]={...out[i],h:((h%360)+360)%360,s:clamp(sv,0,100),b:clamp(b,0,100),hex:hsb2hex(h,clamp(sv,0,100),clamp(b,0,100))};};
  if(st.neutral){
    const ns=st.neutralSat!=null?st.neutralSat:5, hh=out[0].h;
    const ac=out[2]; const accS=Math.max(ac.s,st.accentSat||55);
    setC(2,ac.h,accS,clamp(ac.b,40,85));
    const b0=out[0].b, tone=(i,b)=>setC(i,hh,ns,b);
    tone(0,clamp(b0,12,45)); tone(1,clamp(b0+26,40,72)); tone(3,95); tone(4,14);
  }else if(st.mixNeutral){
    const r=Math.random(), hh=out[0].h;
    if(r<.34){ /* 주조 = 와인, 보조 = 그레이 */ setC(1,hh,6,rnd(52,68)); }
    else if(r<.68){ /* 주조 = 차콜, 보조 = 원래 주조색 */ const m=out[0]; setC(1,m.h,m.s,m.b); setC(0,hh,8,rnd(20,30)); }
    /* 나머지 1/3 은 원래 배색 그대로 */
  }
  return ensureDistinct(out,scheme,locks);
}
function genPalette(st,scheme,anchor){anchor=anchor||{};
  const S=st.sat,B=st.bri;
  const midS=()=>rnd(S[0],S[1]), midB=()=>rnd(B[0],B[1]);
  const dark=B[1]<=25;                 // 다크 계열 스타일(예: 다크 시네마)
  const h=(anchor.h!=null)?anchor.h:pickHue(st.hue);
  let p;
  if(scheme==='tot'){
    const s0=(anchor.s!=null)?anchor.s:midS(),b0=(anchor.b!=null)?anchor.b:rnd(B[0],(B[0]+B[1])/2);
    p=[[h,s0,b0],[h,s0*.82,clamp(b0+22,B[0],Math.max(B[1],b0+22))],[h,clamp(s0*1.15,0,100),clamp(b0+40,0,92)],
       [h,clamp(s0*.16,0,14),96],[h,clamp(s0*.5,0,30),14]];
  }else if(scheme==='tit'){
    const off=rnd(20,34), s0=(anchor.s!=null)?anchor.s:midS(), b0=(anchor.b!=null)?anchor.b:clamp(midB(),60,B[1]);
    p=[[h,s0,b0],[h+off,s0*.92,clamp(b0+4,B[0],100)],[h-off,s0*.96,clamp(b0-4,B[0],100)],
       [h,clamp(s0*.15,0,12),97],[h,clamp(s0*.55,0,32),16]];
  }else if(scheme==='acc'){
    const s0=(anchor.s!=null)?anchor.s:clamp(Math.max(midS(),55),S[0],100);const bAcc=(anchor.b!=null)?anchor.b:null;
    if(dark){ // 어두운 바탕 + 발광 포인트
      p=[[h,8,8],[h,10,15],[h,s0,bAcc!=null?bAcc:rnd(60,85)],[h,6,72],[h,4,96]];
    }else{
      p=[[h,4,98],[h,7,92],[h,s0,bAcc!=null?bAcc:clamp(midB(),55,95)],[h,10,62],[h,18,13]];
    }
  }else{ // sep — 두 색 + 크림 중립
    const h2=st.hue.length>1?pickHue([st.hue[1]]):h+rnd(140,180);
    const s0=(anchor.s!=null)?anchor.s:midS(), b0=(anchor.b!=null)?anchor.b:clamp(midB(),40,85);
    p=[[h,s0,b0],[h2,s0*.9,clamp(b0-6,25,85)],[h,clamp(s0*1.1,0,95),clamp(b0+14,0,90)],
       [42,14,94],[28,30,15]];
  }
  const roles=["주조색","보조색","포인트","바탕색","글자색"];
  const easy=["브랜드 핵심 색","곁들이는 색","눈길 끄는 색","배경","텍스트"];
  const out=p.map(([hh,ss,bb],i)=>({h:((hh%360)+360)%360,s:clamp(ss,0,100),b:clamp(bb,0,100),
    hex:hsb2hex(hh,ss,bb),role:roles[i],easy:easy[i]}));
  return postPalette(st,applyAvoid(st,out,scheme),scheme);
}

/* ================= STATE ================= */
const sliders=[]; // input elements
let qIdx=0, qAns={};          // qAns: {questionId: 'A'|'B'|'N'}
let mbciResult=null, mbciTieFix={};   // 동점 축을 사용자가 직접 고른 값
let curCode=null, curScheme=null, curPal=null;
let brandName='', curFontIdx=0, fontTypeFilter='전체';
let curAnchor={h:null,s:null,b:null}, curLocks=[false,false,false,false,false];
const imgStore={}, cssInjected=new Set();
Object.keys(STYLES).forEach(c=>imgStore[c]=[null,null,null,null]);
const $=id=>document.getElementById(id);
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),1800);}
function mbciAxes(){return MBCI.axes.slice().sort((a,b)=>a.order-b.order);}
function mbciAxis(id){return MBCI.axes.find(a=>a.id===id);}
function mbciQs(){return MBCI.questions.filter(q=>q.active!==false).sort((a,b)=>a.order-b.order);}
function esc(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* 채점 — answers: {questionId:'A'|'B'|'N'} , qs: 채점 대상 문항 */
/* v2.4.0: MBCI Core Weight 채점 가이드 — 12문항(축당 최대 6점) + 업종 보정(축당 최대 +2점) = 자가 테스트 최대 8점(80%).
   1점 = Core Weight 10%. 표시는 3단계 다이아몬드(◇1단 ◆2단 ◈3단, 4점부터는 완성된 3점 단위마다 ◈를 하나씩 이어붙인다). */
function diamondNotation(score){
  score=Math.max(0,Math.min(9,Math.round(score)));
  if(score===0)return '';
  const full=Math.floor((score-1)/3);           // 이미 채워진 3점 단위(◈) 개수
  const rem=score-full*3;                        // 이번 단위에서의 나머지 1~3
  return '◈'.repeat(full)+['','◇','◆','◈'][rem];
}
/* v2.19.0 채점 — 축마다 지문형 3 + 이미지형 2 = 5문항, 문항당 1점(유형별 가중치 없음).
   ① 응답 다수결로 우세 성향을 먼저 정하고 ② 최종 점수 = min(9, 우세 응답 수 + 3 + 업종 보정)
   ③ 1점 = 10% — 우세 성향은 최종 점수×10%, 반대 성향은 100% − 우세 %.
   업종 보정(0~1점)은 다수결로 정해진 우세 성향과 업종이 가리키는 성향이 같을 때만 더한다. */
function scoreMbci(answers,qs,bizArg){
  qs=qs||mbciQs();
  const useBiz=arguments.length<3?bizCode:bizArg;  // 인자 없이 호출되면 홈에서 고른 업종(전역 bizCode)을 그대로 쓴다
  const qScores={};   // 원점수 — 극별 응답 수(문항당 1점)
  MBCI.axes.forEach(a=>{qScores[a.left.code]=0;qScores[a.right.code]=0;});
  qs.forEach(q=>{
    const pick=answers[q.id]; if(pick!=='A'&&pick!=='B')return;   // 중립·건너뛰기는 0점
    const an=q.answers.find(x=>x.id===pick); if(!an||!an.pole)return;
    qScores[an.pole]=(qScores[an.pole]||0)+1;
  });
  const wOn=!(MBCI.settings&&MBCI.settings.industryWeightEnabled===false);   // 관리자에서 업종 보정 적용을 끌 수 있다
  const ind=(wOn&&useBiz&&useBiz!=='etc')?(MBCI.industryWeights||{})[bizNorm(useBiz)]:null;   // 기타(미선택)는 업종 보정 없음
  const axisResult={}, ties=[], confidence={}, weight={}, bonus={}, scores={};
  mbciAxes().forEach(a=>{
    const L=qScores[a.left.code]||0, R=qScores[a.right.code]||0;
    let win=null;
    if(L>R)win=a.left.code; else if(R>L)win=a.right.code; else ties.push(a.id);
    axisResult[a.id]=win;
    const n=L+R;
    confidence[a.id]=n?Math.abs(L-R)/n:0;
    let bp=0;
    if(win&&ind&&ind[a.id]&&ind[a.id][0]===win&&(+ind[a.id][1]||0)>0)bp=1;   // 우세 성향에만, 축마다 최대 +1
    bonus[a.id]=bp;
    if(win){
      const fin=Math.min(9,Math.max(L,R)+3+bp);
      weight[a.id]=fin;
      const wp=fin*10;
      scores[win]=wp; scores[win===a.left.code?a.right.code:a.left.code]=100-wp;
    }else{ scores[a.left.code]=50; scores[a.right.code]=50; }   // 동점(문항 수가 짝수이거나 중립이 섞인 경우) — 표시만 50:50
  });
  const order=MBCI.codeOrder||mbciAxes().map(a=>a.id);
  const resultCode=ties.length?null:order.map(id=>axisResult[id]).join('');
  const coreId=ties.length?null:order.map(id=>diamondNotation(weight[id])).join('-');
  return {resultCode,axisResult,scores,qScores,ties,confidence,weight,bonus,coreId,bonusEnabled:!!ind};   // bonusEnabled: 업종 보정이 적용 가능한 상태(설정 ON + 업종 선택(기타 제외) + 그 업종의 보정표 있음)
}

/* 선택지 카드 — 라벨(A/B) → 답변 문구. v2.19.0: 선택지에는 이미지가 없다(이미지는 질문 단위로 질문과 선택지 사이에 한 장) */
/* v2.21.0 질문·채점 구성 식별자(content_version).
   질문 순서·문구·선택지·극·가중치·축·채점 설정·업종 보정표 중 하나라도 바뀌면 값이 달라진다.
   메모·이미지 파일 경로·대체 텍스트처럼 채점과 무관한 값은 제외한다(이미지 유무만 포함).
   형식: "{활성 문항 수}q-{해시 8자리}"  예) 20q-3a9f01b2 */
function mbciHash8(str){
  let h1=0xdeadbeef,h2=0x41c6ce57;
  for(let i=0;i<str.length;i++){const c=str.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677);}
  h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);
  h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);
  return (h1>>>0).toString(16).padStart(8,'0');
}
function mbciContentSnapshot(){
  const st=MBCI.settings||{}, order=MBCI.codeOrder||mbciAxes().map(a=>a.id);
  const sortObj=o=>{ if(Array.isArray(o))return o.map(sortObj); if(o&&typeof o==='object'){const r={};Object.keys(o).sort().forEach(k=>r[k]=sortObj(o[k]));return r;} return o; };
  return {
    axes:order.map(id=>{const a=mbciAxis(id);return a?[id,a.left.code,a.right.code]:[id];}),
    questions:mbciQs().map((q,i)=>({pos:i+1,id:q.id,axis:q.axisId,type:q.type||'text',text:q.text,img:!!(q.image&&q.image.src),
      answers:(q.answers||[]).map(x=>({id:x.id,text:x.text,pole:x.pole,w:x.weight}))})),
    scoring:{neutral:!!st.neutralEnabled,min:st.minWeight,max:st.maxWeight,tie:st.tiePolicy,industry:st.industryWeightEnabled!==false},
    industryWeights:sortObj(MBCI.industryWeights||{})
  };
}
function mbciContentVersion(){
  const s=mbciContentSnapshot();
  return s.questions.length+'q-'+mbciHash8(JSON.stringify(s));
}
function mbciOptionHTML(q,an,selected){
  return `<button type="button" class="mb-opt no-img${selected?' on':''}" data-ans="${an.id}" aria-pressed="${selected?'true':'false'}">
    <span class="mb-lab">${esc(an.id)}</span>
    <span class="mb-txt">${esc(an.text)}</span>
    <span class="mb-chk" aria-hidden="true"></span>
  </button>`;
}
function qImageHTML(q,preview){
  const im=q.image||{};
  if(q.type!=='image')return '';
  if(im.src)return `<figure class="mb-qimg"><img src="${esc(im.src)}" alt="${esc(im.alt||'')}" onerror="this.closest('.mb-qimg').classList.add('broken');this.remove()"></figure>`;
  return preview?`<figure class="mb-qimg empty"><span>이미지형 문항 — 질문 이미지를 등록해 주세요</span></figure>`:'';
}
function mbciQuestionHTML(q,idx,total,sel,preview){
  const ax=mbciAxis(q.axisId);
  return `<div class="progress"><i style="width:${(idx/total*100).toFixed(1)}%"></i></div>
    <div class="qno">질문 ${idx+1} / ${total}${ax?` · ${esc(ax.name)}`:''}</div>
    <div class="qtext">${esc(q.text)}</div>
    ${qImageHTML(q,preview)}
    <div class="mb-opts">${q.answers.map(an=>mbciOptionHTML(q,an,sel===an.id)).join('')}</div>`;
}
let qProgPrev=null;   // v2.24.0: 직전에 그려진 진행바 폭
function renderQ(){
  const qs=mbciQs(), stage=$('qStage'), res=$('mbciGauges');
  if(!stage)return;
  document.body.classList.remove('shared-core');
  document.body.classList.add('mbci-test-mode');   // v2.3.0: 질문 진행 중엔 라이트 버전처럼 한 화면 전체를 쓴다
  stage.classList.remove('hidden'); if(res)res.classList.add('hidden');
  if(!qs.length){stage.innerHTML='<p class="mb-empty">활성화된 질문이 없습니다 — 관리자에서 질문을 켜 주세요.</p>';return;}
  qIdx=Math.max(0,Math.min(qIdx,qs.length-1));
  const q=qs[qIdx];
  const st=MBCI.settings||{};
  stage.innerHTML=mbciQuestionHTML(q,qIdx,qs.length,qAns[q.id])
    +(st.neutralEnabled!==false?`<button type="button" class="opt opt-skip mb-neutral" data-ans="N">${esc(st.neutralLabel||'둘 다 애매해요')}</button>`:'')
    +`<div class="qnav"><button type="button" id="qPrev" style="visibility:${qIdx===0?'hidden':'visible'}">← 이전 질문</button><button type="button" id="qNext" ${(qAns[q.id]==='A'||qAns[q.id]==='B'||qAns[q.id]==='N')?'':'disabled'}>${qIdx===qs.length-1?'결과 보기 →':'다음 질문 →'}</button></div>`;
  /* v2.24.0: 질문은 디밍(페이드)으로 뜨고, 상단 진행바는 이전 폭에서 새 폭까지 부드럽게 찬다 */
  try{
    stage.querySelectorAll(':scope > :not(.progress)').forEach(e=>e.classList.add('q-fade'));
    const bar=stage.querySelector('.progress i');
    if(bar){
      const to=bar.style.width, from=(qProgPrev==null?'0%':qProgPrev);
      if(from!==to && !(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)){
        bar.style.transition='none'; bar.style.width=from; void bar.offsetWidth;
        bar.style.transition=''; requestAnimationFrame(()=>{bar.style.width=to;});
      }
      qProgPrev=to;
    }
  }catch(e){}
  qAdvTimer=null;   // 새 질문이 그려졌으니 이전 질문의 대기 중 이동은 끝난 것으로 본다
  stage.querySelectorAll('[data-ans]').forEach(b=>b.onclick=()=>answer(b.dataset.ans));
  const pv=$('qPrev'); if(pv)pv.onclick=()=>{ if(qAdvTimer){clearTimeout(qAdvTimer);qAdvTimer=null;} if(qIdx>0){qIdx--;renderQ();} };
  const nx=$('qNext'); if(nx)nx.onclick=()=>qGoNext();
  qPreload(qIdx+1); qPreload(qIdx+2);   // 다음 질문 이미지를 미리 받아 둔다
}
/* v2.22.0 — 다음 질문으로 이동. 현재 질문에 답이 있을 때만 움직인다 */
let qAdvTimer=null;
function qGoNext(){
  const qs=mbciQs(), q=qs[qIdx]; if(!q||!qAns[q.id])return;
  if(qAdvTimer){clearTimeout(qAdvTimer);qAdvTimer=null;}
  if(qIdx<qs.length-1){qIdx++;renderQ();} else finishQ();
}
window.addEventListener('load',()=>setTimeout(()=>{ for(let i=0;i<4;i++)qPreload(i); },1200));   // 테스트 시작 전에도 첫 이미지 문항들을 미리 받아 둔다
/* v2.22.0 — 이미지형 문항의 이미지를 미리 로딩·디코딩해 두어 질문이 바뀔 때 늦게 뜨지 않게 한다 */
const qImgCache=new Map();
function qPreload(i){
  try{
    const q=mbciQs()[i]; if(!q||q.type!=='image'||!q.image||!q.image.src)return;
    const src=q.image.src; if(qImgCache.has(src))return;
    const im=new Image(); im.decoding='async'; im.src=src; qImgCache.set(src,im);
    if(im.decode)im.decode().catch(()=>{});
  }catch(e){}
}
function answer(ansId){
  const qs=mbciQs(), q=qs[qIdx]; if(!q)return;
  qAns[q.id]=ansId;                                  // 답은 클릭 즉시 기록 — 이동은 그 뒤
  const st=$('qStage');
  st.querySelectorAll('.mb-opt.on').forEach(c=>c.classList.remove('on'));
  const card=st.querySelector(`.mb-opt[data-ans="${ansId}"]`);
  if(card)card.classList.add('on');
  const nx=$('qNext'); if(nx)nx.disabled=false;
  if(qAdvTimer)return;                               // 이미 이동 예약됨(빠른 연속 클릭): 답만 바꾸고 이동은 한 번만
  const my=qIdx;
  qAdvTimer=setTimeout(()=>{
    qAdvTimer=null;
    if(qIdx!==my)return;                             // 그 사이 이전/다음으로 이미 움직였으면 아무것도 하지 않는다
    if(qIdx<qs.length-1){qIdx++;renderQ();} else finishQ();
  },180);
}
function resetQ(){qProgPrev=null;qIdx=0;qAns={};mbciResult=null;mbciTieFix={};viewingCode=null;if(window.MBCI_RECORD)window.MBCI_RECORD.newAttempt();}
function resEnter(){
  try{
    const a=document.getElementById('app'); if(!a)return;
    a.classList.remove('res-enter'); void a.offsetWidth; a.classList.add('res-enter');
    setTimeout(()=>a.classList.remove('res-enter'),3200);
    window.scrollTo(0,0);
  }catch(e){}
}
function finishQ(){
  const qsAll=mbciQs(), miss=qsAll.findIndex(q=>qAns[q.id]!=='A'&&qAns[q.id]!=='B');
  if(miss>=0){qIdx=miss;renderQ();toast('아직 답하지 않은 질문이 있어요');return;}   // v2.19.0: 미응답이 있으면 결과를 계산하지 않는다
  mbciResult=scoreMbci(qAns);
  mbciTieFix={};
  indicatorCollapsed=isMobileView(); indicatorHint=indicatorCollapsed;
  document.body.classList.remove('mbci-test-mode');   // 결과 화면은 다시 2단 레이아웃(게이지+결과)으로
  renderMbciResult();
  resEnter();   // v2.24.0: 결과가 처음 표시될 때만 은은한 등장 모션
  /* v2.21.0: 20문항을 모두 답해 결과가 확정된 이 지점에서만 1회 기록한다(관리자·상담·다른 코어 보기는 이 함수를 거치지 않는다) */
  try{ if(window.MBCI_RECORD)window.MBCI_RECORD.onComplete({answers:qAns,result:mbciResult,brand:brandName,biz:(bizCode||(bizEtc?'etc':null))}); }catch(e){ console.warn('[record]',e); }
}
/* v2.1.0: 결과를 두 칸으로 나눈다 — 왼쪽(옛 질문 자리)은 4개 축 게이지를 읽기 전용으로 보여주고
   (가중치가 어디로 흘렀는지 확인용, 손잡이는 없다), 오른쪽(#result)은 브랜드 코어 이름·설명이다. */
function bindRetry(){
  const b=$('mbRetry'); if(!b)return;
  b.onclick=()=>{
    const shared=document.body.classList.contains('shared-core');   // v2.35.1: 공유 링크에서는 지울 결과가 없으니 묻지 않는다
    if(!shared&&!confirm('테스트 결과가 초기화돼요. 홈 화면으로 돌아갈까요?'))return;
    document.body.classList.remove('results-shown');
    viewingCode=null;otherGridOpen=false;
    goHome(true);   // v2.35.2: 「새 테스트 시작하기」는 바로 질문이 아니라 홈 화면으로 이동
  };
}
function renderMbciResult(){
  const r=mbciResult; if(!r)return;
  const stage=$('qStage'), gauges=$('mbciGauges');
  stage.classList.add('hidden'); gauges.classList.remove('hidden');
  document.body.classList.add('results-shown');   // v2.12.0: 결과가 나오면 단일 컬럼(위→아래)으로 바뀐다
  const axRes={...r.axisResult,...mbciTieFix};
  const pending=mbciAxes().filter(a=>!axRes[a.id]);
  const order=MBCI.codeOrder||mbciAxes().map(a=>a.id);
  const code=pending.length?null:order.map(id=>axRes[id]).join('');

  // v2.8.0: 10단계(단계당 10%) 표기 — 우세한 쪽 퍼센티지가 정해지면 반대쪽은 100%에서 뺀 나머지로 표시
  const rows=mbciAxes().map(a=>{
    const L=r.scores[a.left.code]||0, R=r.scores[a.right.code]||0, pick=axRes[a.id];
    const tied=!r.axisResult[a.id];
    // v2.10.0: 게이지에 보이는 퍼센트는 두 극의 점수 비율(L:R)로 계산한다 — 이긴 쪽이 항상 더 큰 숫자로 보이도록.
    // (맨 위 Core ID의 다이아몬드 표기는 채점 가이드대로 절대 점수를 그대로 쓴다 — 이 둘은 서로 다른 값이다)
    const total=L+R;
    const leftPct=total?Math.round(L/total*100):50;
    const rightPct=100-leftPct;
    return `<div class="mb-gauge${tied?' tie':''}">
      <div class="mb-arow">
        <span class="mb-pct${leftPct>rightPct?' win':''}">${leftPct}%</span>
        <span class="mb-gn">${esc(a.name)}</span>
        <span class="mb-pct${rightPct>leftPct?' win':''}">${rightPct}%</span>
      </div>
      <div class="mb-gpoles">
        <span class="${leftPct>rightPct?'win':''}">${esc(a.left.label)}</span>
        <span class="${rightPct>leftPct?'win':''}">${esc(a.right.label)}</span>
      </div>
      <div class="mb-gtrack"><i class="mb-gfill" style="left:${leftPct>rightPct?0:(100-rightPct)}%;width:${leftPct>rightPct?leftPct:rightPct}%"></i></div>
      ${tied?`<div class="mb-tie">
          <p>이 축은 답변이 같아 정해지지 않았어요. 더 가까운 쪽을 직접 골라 주세요.</p>
          <div class="mb-tie-btns">
            <button type="button" data-fix="${a.id}:${a.left.code}" class="${pick===a.left.code?'on':''}">${esc(a.left.code)} · ${esc(a.left.description)}</button>
            <button type="button" data-fix="${a.id}:${a.right.code}" class="${pick===a.right.code?'on':''}">${esc(a.right.code)} · ${esc(a.right.description)}</button>
          </div></div>`
        :''}
    </div>`;}).join('');
  const coreIdLine=r.coreId?`<div class="mb-coreid-label">Core ID</div><div class="mb-coreid-big">${esc(code)} <span>${esc(r.coreId)}</span></div>`:'';
  // v2.12.0: Core ID는 항상 보이고, 「자세히 보기」를 누르면 지표별 가중치가 펼쳐진다.
  //   「다른 코어 보기」는 이제 결과 맨 아래 16개 그리드로 옮겨서 여기서는 다루지 않는다.
  const mainContent = `<div class="mb-coreid-row"><div class="mb-coreid-col">${coreIdLine}</div>
         <button type="button" class="mb-collapse-btn${indicatorCollapsed?'':' open'}${(indicatorCollapsed&&indicatorHint)?' hint':''}" id="mbCollapse" aria-expanded="${indicatorCollapsed?'false':'true'}"><span id="mbCollapseLbl">${indicatorCollapsed?'자세히 보기':'접기'}</span><i></i></button>
       </div>
       <div class="mb-collapsible${indicatorCollapsed?' collapsed':''}" id="mbCollapseBody">
         <div class="mb-g-sub">브랜드가 어느 쪽 성향에 더 가까운지 확인해 보세요</div>
         <div class="mb-gauges-rows">${rows}</div>
       </div>`;
  gauges.innerHTML=mainContent;   // v2.25.0: 「다시 테스트하기」는 결과 맨 아래(다른 코어 보기 아래)로 옮겼다
  gauges.querySelectorAll('[data-fix]').forEach(b=>b.onclick=()=>{
    const [id,c]=b.dataset.fix.split(':'); mbciTieFix[id]=c; renderMbciResult();
  });
  indicatorHint=false;   // 깜빡임 안내는 결과가 처음 나올 때 한 번만
  const collapseBtn=$('mbCollapse');
  if(collapseBtn)collapseBtn.onclick=()=>{
    indicatorCollapsed=!indicatorCollapsed;
    collapseBtn.classList.remove('hint');
    collapseBtn.classList.toggle('open',!indicatorCollapsed);
    collapseBtn.setAttribute('aria-expanded',indicatorCollapsed?'false':'true');
    $('mbCollapseLbl').textContent=indicatorCollapsed?'자세히 보기':'접기';
    // v2.17.0: 접힐 때뿐 아니라 펼쳐질 때도 높이가 부드럽게 늘어난다(실제 높이를 재서 애니메이션)
    const body=$('mbCollapseBody'); if(!body)return;
    const clear=()=>{body.style.maxHeight='';body.removeEventListener('transitionend',onEnd);};
    const onEnd=e=>{if(e.propertyName==='max-height')clear();};
    body.addEventListener('transitionend',onEnd);
    if(indicatorCollapsed){
      body.style.transition='none'; body.style.maxHeight=body.scrollHeight+'px'; void body.offsetHeight;   // 4000px→실제 높이 구간은 애니메이션 없이 맞춘다
      body.style.transition=''; body.classList.add('collapsed'); body.style.maxHeight='0px';
    }else{
      body.style.maxHeight='0px'; body.classList.remove('collapsed'); void body.offsetHeight;
      body.style.maxHeight=body.scrollHeight+'px';
    }
    setTimeout(clear,600);
  };

  window.MBCI_LAST_RESULT={resultCode:code,axisResult:axRes,scores:r.scores};
  // v2.9.0: 다른 코어를 미리보는 중이면(viewingCode) 오른쪽 패널은 그 코어를 계속 보여준다
  if(viewingCode&&allCoreCodes().includes(viewingCode))renderBrandCoreResult(viewingCode,viewingCode);
  else renderBrandCoreResult(code, order.map(id=>axRes[id]||'?').join(''));
  window.scrollTo({top:0,behavior:'smooth'});
}
/* v2.2.0: 오른쪽 패널 — legacyStyleCode 매핑이 있으면 기존 결과창(색상·폰트·목업·이미지·스튜디오)을
   그대로 복원해서 보여준다. 이름·설명은 이미 MBCI 값으로 데이터 이전을 마쳤으므로 renderStyle()을
   그대로 불러도 MBCI 이름이 나온다 — 코드 배지 두 곳(sc-code, cm-code)만 legacy 글자 대신 MBCI 코드로 바꿔 준다. */
/* ================= v2.11.0 결과 이미지 다운로드 — 인디케이터 + 결과 설명만 담아 PNG로 저장 ================= */
function wrapCanvasText(ctx,text,maxWidth){
  const out=[]; let line='';
  for(const ch of String(text||'')){
    const test=line+ch;
    if(ctx.measureText(test).width>maxWidth && line){out.push(line); line=ch;}
    else line=test;
  }
  if(line)out.push(line);
  return out;
}
/* v2.16.0: 저장 이미지에 어디까지 담을지 — 관리자 → 일반 → 「결과 이미지 저장하기」. Core ID·결과는 항상 담긴다 */
function savePartsCfg(){
  const c=SITE_META.savePng||{};
  return {ref:c.ref!==false,font:c.font!==false,color:c.color!==false,mock:c.mock!==false};
}
function loadImgForCanvas(src,ms){
  return new Promise(res=>{
    const im=new Image(); let done=false;
    const fin=v=>{if(!done){done=true;res(v);}};
    im.crossOrigin='anonymous';
    im.onload=()=>fin(im.naturalWidth?im:null); im.onerror=()=>fin(null);
    setTimeout(()=>fin(null),ms||4000);
    im.src=src;
  });
}
async function exportResultPNG(){
  const inConsult=document.body.classList.contains('consult-mode');
  const r=inConsult?window.MBCI_ADMIN.consultResult():mbciResult; if(!r){toast('먼저 테스트를 완료해 주세요');return;}
  const axRes={...r.axisResult,...mbciTieFix};
  const order=MBCI.codeOrder||mbciAxes().map(a=>a.id);
  const pending=mbciAxes().filter(a=>!axRes[a.id]);
  /* v2.32.0: 「내가 테스트한 코어」와 「선택해서 보고 있는 코어」를 분리한다.
     Core ID·그래프·퍼센트는 항상 내 테스트 결과(myCode), 설명·폰트·색상·레퍼런스는 지금 보고 있는 코어(viewCode)를 담는다. */
  const myCode=pending.length?null:order.map(id=>axRes[id]).join('');
  const viewCode=viewingCode||myCode;
  const isOther=!!(viewingCode&&myCode&&viewingCode!==myCode);
  const shownCode=myCode;
  const st=STYLES[((MBCI.results||{})[viewCode]||{}).legacyStyleCode]||{};
  const info=(MBCI.results||{})[viewCode]||{};
  const cfg=savePartsCfg(), showMock=!!(MBCI.settings&&MBCI.settings.showMockup);
  const W=880, padX=56, rowH=118, headH=200, HD_H=92, FT_H=88;   // v2.23.0: 저장 이미지에도 사이트와 같은 헤더(위)·푸터(아래)를 넣는다 — 이미지만 봐도 출처를 알 수 있게
  const F="'Pretendard',sans-serif";
  /* v2.32.0: 폰트 미리보기 3×2 — ① 사용자가 선택한 폰트 ② 사용자가 추가한 폰트 ③ 나머지는 기본 알고리즘 추천 순서 */
  const allF=((FONTMAP[curCode]||{}).fonts||[]);
  const selF=allF[curFontIdx]||allF[0]||null;
  const fl=selF?[selF,...allF.filter(f=>f!==selF&&f.added),...allF.filter(f=>f!==selF&&!f.added)].slice(0,6):[];
  const sampleText=String(brandName||st.adj||'').slice(0,14)||'브랜드';
  // 이미지·글꼴 준비 — 하나라도 못 불러오면 그 항목만 건너뛴다
  let samples=[], mockCv=null;
  const lrBrands=refBrandsOf((MBCI.results||{})[mbciCodeFor(curCode)]||{});   // 보고 있는 코어 기준
  // v2.22.0: 저장 이미지에는 참고 브랜드의 로고 이미지를 넣지 않는다(실제 기업 로고 저작권). 브랜드 이름만 글자로 담는다.
  if(cfg.font&&fl.length){
    await Promise.race([Promise.all(fl.map(f=>document.fonts.load(fontFw(f)+' 40px '+f.family,sampleText).catch(()=>0))),new Promise(r=>setTimeout(r,3000))]);
  }
  if(cfg.mock&&showMock){const mc=$('mockCanvas'); if(mc&&mc.width)mockCv=mc;}
  const lr=(MBCI.results||{})[mbciCodeFor(curCode)]||{};
  const pal=(curPal||[]).slice(0,4);
  // 헤더 로고(사이트 헤더의 로고 파일) — 못 불러오면 글자 로고로 대신한다
  let logoImg=await new Promise(res=>{
    try{ const li=$('logoImg'); const src=li&&(li.currentSrc||li.src); if(!src){res(null);return;}
      const im=new Image(); im.onload=()=>res(im); im.onerror=()=>res(null); im.src=src; setTimeout(()=>res(null),3000);
    }catch(e){res(null);}
  });
  const hdTitle=(($('hdTitle')&&$('hdTitle').textContent)||'').trim()||'MBCI 테스트';
  const hdPrismEl=$('hdPrism'), hdPrism=(hdPrismEl&&!hdPrismEl.hidden&&getComputedStyle(hdPrismEl).display!=='none')?hdPrismEl.textContent.replace(/[→\s]+$/,'').trim():'';
  const draw=(x,dry,withMock)=>{
    const pill=(w,h,rad)=>{if(x.roundRect){x.beginPath();x.roundRect(0,0,w,h,rad);}else{x.beginPath();x.rect(0,0,w,h);}};
    const rr=(px,py,w,h,rad)=>{x.beginPath();if(x.roundRect)x.roundRect(px,py,w,h,rad);else x.rect(px,py,w,h);};
    x.textAlign='left';
    if(!dry){   // 상단 헤더 — 사이트 헤더와 같은 구성(왼쪽 로고 · 가운데 테스트 이름 · 오른쪽 프리즘 링크 글자)
      x.fillStyle='#fff'; x.fillRect(0,0,W,HD_H);
      x.fillStyle='#DBFFFF'; x.fillRect(0,HD_H-2,W,2);
      const lh=34;
      if(logoImg&&logoImg.naturalWidth){ const lw=Math.round(lh*logoImg.naturalWidth/logoImg.naturalHeight); x.drawImage(logoImg,padX-24,(HD_H-2-lh)/2,lw,lh); }
      else { x.fillStyle='#1A2420'; x.font=`900 24px ${F}`; x.textAlign='left'; x.fillText('MARKINFO',padX-24,HD_H/2+8); }
      x.textAlign='center'; x.fillStyle='#232F34'; x.font=`800 24px ${F}`; x.fillText(hdTitle,W/2,(HD_H-2)/2+9);
      if(hdPrism){
        x.font=`700 17px ${F}`; const t=hdPrism+' →', tw=x.measureText(t).width+28, bx=W-(padX-24)-tw, by=(HD_H-2-38)/2;
        x.fillStyle='#fff'; x.strokeStyle='#D9DEDC'; x.lineWidth=1.5; rr(bx,by,tw,38,19); x.fill(); x.stroke();
        x.fillStyle='#4A5550'; x.textAlign='left'; x.fillText(t,bx+14,by+25);
      }
      x.textAlign='left';
      x.save(); x.translate(0,HD_H);
    }
    // 본문
    if(!dry){
      x.fillStyle='#8A938F'; x.font=`700 20px ${F}`; x.fillText('Core ID',padX,64);
      x.fillStyle='#1A2420'; x.font=`900 56px ${F}`; x.fillText(shownCode||'—',padX,132);
      x.fillStyle='#333333'; x.font=`700 22px ${F}`; x.fillText(r.coreId?r.coreId:'', padX, 168);
      if(inConsult){x.textAlign='right'; x.fillStyle=r.manual?'#B3452F':'#8A938F'; x.font=`800 17px ${F}`; x.fillText(r.manual?'상담 수동 조정 결과':'테스트 원본 결과', W-padX, 64); x.textAlign='left';}
    }
    let y=headH;
    mbciAxes().forEach(a=>{
      if(!dry){
        const L=r.scores[a.left.code]||0, R=r.scores[a.right.code]||0, total=L+R;
        const leftPct=total?Math.round(L/total*100):50, rightPct=100-leftPct, winLeft=leftPct>rightPct;
        x.fillStyle='#fff'; x.strokeStyle='#E4E8E6'; x.lineWidth=1.5; rr(padX-24,y,W-2*(padX-24),rowH,16); x.fill(); x.stroke();
        x.font=`800 15px ${F}`;
        x.fillStyle=winLeft?'#333333':'#B7BEBA'; x.textAlign='left'; x.fillText(leftPct+'%', padX, y+34);
        x.fillStyle=!winLeft?'#333333':'#B7BEBA'; x.textAlign='right'; x.fillText(rightPct+'%', W-padX, y+34);
        x.fillStyle='#1A2420'; x.textAlign='center'; x.font=`800 17px ${F}`; x.fillText(a.name, W/2, y+34);
        x.textAlign='left'; x.font=`700 14px ${F}`;
        x.fillStyle=winLeft?'#1A2420':'#B7BEBA'; x.fillText(a.left.label, padX, y+62);
        x.textAlign='right'; x.fillStyle=!winLeft?'#1A2420':'#B7BEBA'; x.fillText(a.right.label, W-padX, y+62);
        const trackX=padX, trackW=W-2*padX, trackY=y+78, trackH=10;
        x.fillStyle='#EDF0EE'; rr(trackX,trackY,trackW,trackH,5); x.fill();
        const fillW=(winLeft?leftPct:rightPct)/100*trackW, fillX=winLeft?trackX:trackX+trackW-fillW;
        x.fillStyle='#333333'; rr(fillX,trackY,fillW,trackH,5); x.fill();
      }
      y+=rowH+18;
    });
    const rule=()=>{ if(!dry){x.strokeStyle='#DCE2DF'; x.lineWidth=1.5; x.beginPath(); x.moveTo(padX-24,y); x.lineTo(W-padX+24,y); x.stroke();} };
    const head=t=>{ y+=44; if(!dry){x.textAlign='left'; x.fillStyle='#1A2420'; x.font=`900 22px ${F}`; x.fillText(t,padX,y);} y+=22; };
    // 결과 설명
    y+=10; rule();
    if(isOther){   // v2.32.0: 내 결과가 아닌 코어를 보고 있을 때 — 아래 내용이 어느 코어의 것인지 표시
      const t='선택해서 본 코어 · '+viewCode;
      x.font=`800 16px ${F}`; const tw=x.measureText(t).width+32;
      if(!dry){ x.fillStyle='#333333'; rr(padX,y+18,tw,32,16); x.fill(); x.fillStyle='#fff'; x.textAlign='left'; x.fillText(t,padX+16,y+39);
        x.fillStyle='#8A938F'; x.font=`700 15px ${F}`; x.fillText('내 테스트 결과는 '+myCode+' 입니다',padX+tw+14,y+39); }
      y+=46;
    }
    y+=48;
    x.textAlign='left';
    if(!dry){x.fillStyle='#1A2420'; x.font=`900 30px ${F}`; x.fillText((st.adj||info.name||'')+(st.en?'  '+st.en+'Core':''), padX, y);}
    y+=38;
    if(!dry){x.fillStyle='#5B655F'; x.font=`700 16px ${F}`; x.fillText(st.sub||'', padX, y);}
    y+=34;
    x.font=`500 16px ${F}`;
    wrapCanvasText(x, (lr.desc||st.desc||'').replace(/\n+/g,' '), W-2*padX).slice(0,5).forEach(line=>{ if(!dry){x.fillStyle='#3A433F'; x.fillText(line, padX, y);} y+=26; });
    // 적합 분야
    const fitL=((lr.fitFields&&lr.fitFields.length)?lr.fitFields:(st.use||[])).filter(Boolean).slice(0,4);
    if(fitL.length){
      y+=14;
      x.font=`700 15px ${F}`;
      if(!dry){x.fillStyle='#8A938F'; x.fillText('적합 분야',padX,y+6);}
      let px=padX+84;
      fitL.forEach(u=>{
        const tw=x.measureText(u).width+24;
        if(!dry){x.fillStyle='#fff'; x.strokeStyle='#CBD3CF'; rr(px,y-16,tw,30,15); x.fill(); x.stroke(); x.fillStyle='#4A5550'; x.fillText(u,px+12,y+4);}
        px+=tw+8;
      });
      y+=28;
    }
    // 레퍼런스 — 스타일 키워드 · 참고 브랜드(이름만)
    if(cfg.ref&&(lrBrands.length||(lr.styleKeywords))){
      y+=20; rule(); head('레퍼런스'); y+=14;
      if(lr.styleKeywords){
        x.font=`700 16px ${F}`;
        wrapCanvasText(x, lr.styleKeywords, W-2*padX).forEach(line=>{ if(!dry){x.fillStyle='#1A2420'; x.fillText(line,padX,y);} y+=26; });
        y+=8;
      }
      if(lrBrands.length){
        x.font=`800 14px ${F}`;
        if(!dry){x.fillStyle='#8A938F'; x.fillText('참고 브랜드',padX,y+4);}
        let px=padX+92;
        lrBrands.forEach(b=>{
          const t=String(b.name||'').slice(0,16), tw=x.measureText(t).width+28;
          if(px+tw>W-padX){px=padX+92;y+=40;}
          if(!dry){x.fillStyle='#fff'; x.strokeStyle='#CBD3CF'; x.lineWidth=1.5; rr(px,y-16,tw,32,16); x.fill(); x.stroke(); x.fillStyle='#1A2420'; x.fillText(t,px+14,y+5);}
          px+=tw+8;
        });
        y+=44;
      }
    }
    // 폰트 — v2.32.0: 한 줄에 3개 × 2줄, 박스 안 가운데 정렬 (첫 칸 = 선택한 폰트 · 다음 = 추가한 폰트 · 나머지 = 알고리즘 추천)
    if(cfg.font&&fl.length){
      y+=20; rule(); head('폰트');
      const cols=3, rowsN=Math.ceil(fl.length/cols), cellH=104, boxX=padX-24, boxW=W-2*(padX-24), boxH=rowsN*cellH+24;
      if(!dry){ x.fillStyle='#fff'; x.strokeStyle='#E4E8E6'; x.lineWidth=1.5; rr(boxX,y,boxW,boxH,16); x.fill(); x.stroke(); }
      fl.forEach((f,i)=>{
        if(dry)return;
        const r=Math.floor(i/cols), c=i%cols, inRow=Math.min(cols,fl.length-r*cols);
        const cellW=boxW/cols, cx=boxX+boxW/2+(c-(inRow-1)/2)*cellW;   // 마지막 줄이 모자라면 가운데로 모은다
        const cy=y+12+r*cellH, fw=fontFw(f);
        let fs=36; x.font=`${fw} ${fs}px ${f.family}`;
        while(fs>16&&x.measureText(sampleText).width>cellW-28){fs-=2; x.font=`${fw} ${fs}px ${f.family}`;}
        x.textAlign='center'; x.fillStyle='#1A2420'; x.fillText(sampleText,cx,cy+54);
        const tg=[]; if(i===0)tg.push('선택'); else if(f.added)tg.push('추가'); if(f===allF[0]&&!f.added)tg.push('대표');
        const lb=(tg.length?tg.join('·')+' · ':'')+f.name;
        let ls=13; x.font=`700 ${ls}px ${F}`;
        while(ls>10&&x.measureText(lb).width>cellW-20){ls--; x.font=`700 ${ls}px ${F}`;}
        x.fillStyle='#8A938F'; x.fillText(lb,cx,cy+82);
        x.textAlign='left';
      });
      y+=boxH+8;
    }
    // 색상
    if(cfg.color&&pal.length){
      y+=20; rule(); head('색상');
      const gap=14, w=Math.floor((W-2*padX-gap*(pal.length-1))/pal.length), h=96;
      pal.forEach((c,i)=>{
        if(!dry){
          const px=padX+i*(w+gap);
          x.fillStyle=c.hex; rr(px,y,w,h,14); x.fill();
          x.strokeStyle='#E4E8E6'; x.lineWidth=1.5; rr(px,y,w,h,14); x.stroke();
          x.fillStyle='#1A2420'; x.font=`800 14px ${F}`; x.fillText(c.role||'',px,y+h+24);
          x.fillStyle='#8A938F'; x.font=`600 13px ${F}`; x.fillText(c.hex.toUpperCase(),px,y+h+44);
        }
      });
      y+=96+58;
      const rv=colorRatioCfg();
      if(rv&&pal.length>=4){   // v2.19.0: 사용 비율 바 — 확정된 수치가 있을 때만
        if(!dry){
          const bw=W-2*padX; let px=padX;
          x.save(); rr(padX,y,bw,22,11); x.clip();
          pal.slice(0,4).forEach((c,i)=>{const w=bw*rv[i]/100; x.fillStyle=c.hex; x.fillRect(px,y,w,22); px+=w;});
          x.restore(); x.strokeStyle='#E4E8E6'; x.lineWidth=1.5; rr(padX,y,bw,22,11); x.stroke();
          x.fillStyle='#5B655F'; x.font=`700 13px ${F}`;
          x.fillText(pal.slice(0,4).map((c,i)=>`${COLOR_ROLE_NAMES[i]} ${rv[i]}%`).join('   ·   '),padX,y+46);
        }
        y+=62;
      }
    }
    // 목업
    if(withMock&&mockCv){
      y+=14; rule(); head('목업');
      const w=W-2*padX, h=Math.round(w*mockCv.height/mockCv.width);
      if(!dry){ x.save(); rr(padX,y,w,h,14); x.clip(); x.drawImage(mockCv,padX,y,w,h); x.restore(); }
      y+=h;
    }
    // 하단 푸터 — 사이트 푸터와 같은 문구
    const fy=y+24;
    if(!dry){
      x.fillStyle='#fff'; x.fillRect(0,fy,W,FT_H);
      x.fillStyle='#E2EAE6'; x.fillRect(0,fy,W,2);
      x.textAlign='center'; x.fillStyle='#8A938F'; x.font=`700 18px ${F}`;
      x.fillText('MBCI · MARKINFO Brand Core Indicator  v'+APP_VERSION,W/2,fy+FT_H/2+6);
      x.textAlign='left';
      x.restore();
    }
    return fy+FT_H+HD_H;
  };
  const build=withMock=>{
    const sc=document.createElement('canvas'); sc.width=W; sc.height=10;
    const H=draw(sc.getContext('2d'),true,withMock);
    const cv=document.createElement('canvas'); cv.width=W; cv.height=H;
    const x=cv.getContext('2d'); x.fillStyle='#F5F7F6'; x.fillRect(0,0,W,H);
    draw(x,false,withMock);
    return cv;
  };
  let url;
  try{ url=build(true).toDataURL('image/png'); }
  catch(e){ try{ url=build(false).toDataURL('image/png'); toast('목업 이미지는 담지 못했어요'); }catch(e2){ try{ logoImg=null; url=build(false).toDataURL('image/png'); }catch(e3){ toast('이미지를 만들지 못했어요'); return; } } }
  const a=document.createElement('a');
  a.download=`MBCI_${myCode||'result'}${isOther?'_'+viewCode+'보기':''}.png`;
  a.href=url;
  document.body.appendChild(a); a.click(); a.remove();
}
function renderBrandCoreResult(code,partial){
  const box=$('result'); if(!box)return;
  box.classList.remove('res-style');
  if(!code){
    box.innerHTML=`<div class="placeholder">
      <div class="big">${esc(partial)}</div>
      <p>정해지지 않은 축이 있어요. 왼쪽에서 더 가까운 쪽을 골라 주세요.</p>
    </div>`;
    return;
  }
  const info=(MBCI.results||{})[code];
  const ax=mbciAxes(), order=MBCI.codeOrder||ax.map(a=>a.id);
  const letters=order.map(id=>{const a=mbciAxis(id), ch=code[order.indexOf(id)];
    return ch===a.left.code?a.left.label:a.right.label;}).join(' / ');
  if(!info){
    box.innerHTML=`<div class="mb-core">
      <div class="mb-core-code">${esc(code)}</div>
      <div class="mb-core-letters">${esc(letters)}</div>
      <p class="mb-core-empty">이 코드의 이름·설명이 아직 등록되지 않았어요 — 관리자 「결과」 탭에서 채울 수 있어요.</p>
    </div>`;
    return;
  }
  const legacy=info.legacyStyleCode;
  if(legacy&&STYLES[legacy]){
    curCode=legacy;
    { const ks=Object.keys(SCHEMES); curScheme=ks[Math.floor(Math.random()*ks.length)]; }   // v2.29.0: 처음 보이는 배색 방식은 무작위(추천 표시 없음)
    curAnchor={h:null,s:null,b:null};
    curLocks=[false,false,false,false,false];
    curFontIdx=0; fontTypeFilter='전체';
    curPal=genPalette(STYLES[legacy],curScheme);
    box.classList.add('res-style');   // v2.5.0: 바깥 박스 테두리는 모바일에서 걷어낸다
    renderStyle();   // 기존 결과창 전체(색상 조합·추천 글꼴·브랜드 목업·참고 이미지)를 그대로 그린다 — 코드·영문 표기는 이제 renderStyle() 내부에서 mbciCodeFor()로 정확히 나온다
    return;
  }
  // legacy 매핑이 없으면(또는 자산 연결 전) 이름·설명만 보여주는 기본 카드로 대체
  box.innerHTML=`<div class="mb-core">
    <div class="mb-core-head">당신의 브랜드 코어는</div>
    <div class="mb-core-name">'${esc(info.name)}'<span class="mb-core-code">${esc(code)}</span></div>
    <div class="mb-core-letters">${esc(letters)}</div>
    <div class="mb-core-kw">${(info.keywords||[]).map(k=>`<span>${esc(k)}</span>`).join('')}</div>
    <p class="mb-core-desc">${esc(info.desc||'')}</p>
    <button type="button" class="btn-line" id="mbShare">결과 링크 복사</button>
  </div>`;
  const sb=$('mbShare');
  if(sb)sb.onclick=()=>{
    const url=location.origin+location.pathname+'#/core/'+code;
    navigator.clipboard?.writeText(url).then(()=>toast('결과 링크를 복사했어요')).catch(()=>toast(url));
  };
}
function sentenceBreak(t){
  // v2.19.0: 콘텐츠에서 엔터로 직접 나눈 줄바꿈(빈 줄 = 문단 구분)을 그대로 쓰고, 없으면 문장 끝(. ! ?) 뒤에서 나눈다. HTML은 이스케이프한다.
  t=String(t||'').trim();
  if(/\n/.test(t))return esc(t).replace(/\n{2,}/g,'<br><br>').replace(/\n/g,'<br>');
  return esc(t).replace(/([.!?])\s+/g,'$1<br>');
}
function fontTagsHTML(f,compact){
  if(!f)return '';
  const t=[];
  if(f.type)t.push(`<span class="ftag t">${f.type}</span>`);
  if(f.weight)t.push(`<span class="ftag">${f.weight}</span>`);
  (f.mood||[]).slice(0,compact?1:2).forEach(m=>t.push(`<span class="ftag">${m}</span>`));
  return t.join('');
}
function injectFonts(code){
  (FONTMAP[code]?.fonts||[]).forEach(f=>{
    if(cssInjected.has(f.name))return;
    const s=document.createElement('style');s.textContent=f.css;document.head.appendChild(s);
    cssInjected.add(f.name);
  });
}
function yiq(hex){const n=parseInt(hex.slice(1),16);return ((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;}
function heroColors(){
  const p=curPal, bg=p[0].hex, bgY=yiq(bg);
  // 배경과 대비가 가장 좋은 전경 후보 선택
  const cands=[p[4].hex,p[3].hex,'#FFFFFF','#232F34'];
  let fg=cands[0],best=-1;
  cands.forEach(c=>{const d=Math.abs(yiq(c)-bgY);if(d>best){best=d;fg=c;}});
  return{bg,fg};
}
/* 참고 브랜드: 이름과 로고를 한 쌍으로 관리 — 이름이 비어 있으면 그 쌍은 표시하지 않는다(최대 4) */
/* v2.19.0 컬러 사용 비율: 확정된 수치(합계 100)만 표시한다. 값이 없거나 합계가 100이 아니면 바를 그리지 않는다. */
const COLOR_ROLE_NAMES=["주조색","보조색","포인트","바탕색"];
/* v2.28.0: 색 사용 비율 — 배색 방식(톤온톤·톤인톤·포인트)에 따라 기본 비율이 달라진다. 관리자가 확정한 값(colorRatio)이 있으면 그 값을 우선한다. */
const SCHEME_RATIO={tot:[35,30,5,30],tit:[35,25,10,30],acc:[20,15,8,57]};
const SCHEME_RATIO_NOTE={tot:'같은 색 계열이라 주조·보조를 넓게, 포인트는 아주 조금만 써요',tit:'비슷한 색끼리 어우러지도록 주조·보조·바탕을 고르게, 포인트는 적게 써요',acc:'바탕을 넓게 두고 포인트는 작게 — 한 색만 눈에 띄게 해요'};
function colorRatioCfg(){
  const r=(MBCI.settings||{}).colorRatio;
  if(Array.isArray(r)&&r.length===4){
    const v=r.map(Number);
    if(!(v.some(x=>!isFinite(x)||x<0)||Math.round(v.reduce((a,b)=>a+b,0)*100)/100!==100))return v;
  }
  return null;
}
function schemeRatio(){
  const k=(typeof curScheme!=='undefined'&&SCHEME_RATIO[curScheme])?curScheme:'tot';
  return {v:SCHEME_RATIO[k],note:SCHEME_RATIO_NOTE[k]};
}
function colorRatioHTML(pal){
  const adm=colorRatioCfg(), sr=schemeRatio(), v=adm||sr.v; if(!v||!pal||pal.length<4)return '';
  const items=pal.slice(0,4).map((c,i)=>({c,pct:v[i],role:COLOR_ROLE_NAMES[i]}));
  return `<div class="ratio-wrap"><div class="lr-cap">사용 비율 <em>${adm?'권장하는 색의 사용 비율이에요':sr.note}</em></div>
    <div class="ratio-bar" role="img" aria-label="${items.map(x=>`${x.role} ${x.c.hex} ${x.pct}%`).join(', ')}">${items.filter(x=>x.pct>0).map(x=>`<i style="flex:${x.pct} 1 0;background:${x.c.hex}" title="${x.role} ${x.pct}%"></i>`).join('')}</div>
    <ul class="ratio-legend">${items.map(x=>`<li><span class="rl-dot" style="background:${x.c.hex}"></span><span class="rl-role">${x.role}</span><span class="rl-hex">${x.c.hex.toUpperCase()}</span><b>${x.pct}%</b></li>`).join('')}</ul></div>`;
}
/* v2.23.0: CTA — 라벨 문구(메인 문구 위) · 메인 문구 · 이미지 1장(가로 1080px 권장, 세로 제한 없음) · 버튼 · 안내 문구.
   예전의 「절차 3단계」(단계별 문구+이미지)는 없어졌다. SITE_META.cta가 없거나 비어 있으면 아래 기본값을 쓴다. */
const CTA_DEFAULTS={
  chip:'브랜드 코어 심층 분석 × 맞춤 로고 디자인',
  head:'내 브랜드를 더 깊이 이해하고\n맞춤 로고를 만들어 보세요',
  foot:'※ 심층 분석에 따라서 브랜드 코어 및 코어 코드가 일부 달라질 수 있습니다.',
  copyNote:'버튼을 누르면 결과 요약이 자동으로 복사돼요. 상담·문의할 때 붙여 넣어 주세요.',
  consultLabel:'심층 분석 상담하기', prismLabel:'프리즘 로고제작 알아보기',
  saveLabel:'결과 이미지 저장하기', saveNote:'※ 상담·문의 시 결과 이미지를 보여주시면 원활하게 진행할 수 있습니다.',
  /* v2.24.0: 「절차 3단계」 이미지(가로 1080px) — 관리자에서 이미지를 따로 지정하지 않았을 때만 쓰는 기본 이미지 */
  image:{src:'assets/img/cta/steps-default.png',alt:'절차 3단계 — 01 발견·브랜드 성향 확인, 02 해석·브랜드 코어 심층 분석, 03 적용·맞춤 로고 디자인'}
};
function ctaCfg(over){
  const c=over||SITE_META.cta||{}, d=CTA_DEFAULTS;
  const pick=k=>(typeof c[k]==='string'&&c[k].trim())?c[k]:d[k];
  const im=(c.image===undefined||c.image===null)?d.image:c.image;   // 이미지 항목이 아예 없을 때만 기본 이미지(절차 3단계)
  return {chip:pick('chip'),head:pick('head'),image:{src:(typeof im.src==='string'?im.src:''),alt:(typeof im.alt==='string'?im.alt:'')},foot:pick('foot'),copyNote:pick('copyNote'),consultLabel:pick('consultLabel'),prismLabel:pick('prismLabel'),saveLabel:pick('saveLabel'),saveNote:pick('saveNote')};
}
function ctaSaveHTML(c,preview){
  return `<div class="save-wrap">
        <button type="button" class="cta-save"${preview?' tabindex="-1"':' id="mbDownload"'}><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></svg>${esc(c.saveLabel)}</button>
        <p class="cta-save-note">${esc(c.saveNote)}</p>
      </div>`;
}
function ctaCardHTML(c,preview){
  const br=t=>esc(t).replace(/\n/g,'<br>');
  return `<div class="cta-wrap">
        <div class="cta-card">
          <span class="cta-chip">${esc(c.chip).replace('×','<i>×</i>')}</span>
          <h3 class="cta-head">${br(c.head)}</h3>
          ${c.image.src?`<figure class="cta-img"><img src="${esc(c.image.src)}" alt="${esc(c.image.alt||c.head.replace(/\n/g,' '))}" loading="lazy" decoding="async" onerror="this.closest('.cta-img').remove()"></figure>`:''}
          <div class="cta-actions">
            <p class="cta-foot">${esc(c.foot)}</p>
            ${(preview||(SITE_META.consultUrl||'').trim())?`<button type="button" class="cta-btn cta-btn-dark"${preview?' tabindex="-1"':' id="consultBtn"'}><span>${esc(c.consultLabel)}</span><em>→</em></button>`:''}
            ${(preview||(SITE_META.prismUrl||'').trim())?`<button type="button" class="cta-btn cta-btn-dark"${preview?' tabindex="-1"':' id="prismBtn"'}><span>${esc(c.prismLabel)}</span><em>→</em></button>`:''}
            <p class="cta-copy-note">${esc(c.copyNote)}</p>
          </div>
        </div>
      </div>`;
}
function refTilesHTML(list,preview){
  const tiles=`<div class="ref-brands n${list.length}"${preview?'':' id="refBrands"'}>${list.map((b,i)=>`<button type="button" class="ref-brand${b.logo&&b.logo.url?'':' nologo'}" data-bi="${i}" aria-label="${esc(b.name)} 로고${b.logo&&b.logo.url?' 크게 보기':''}"${preview?' tabindex="-1"':''}>
        <span class="rb-logo">${b.logo&&b.logo.url?`<img src="${esc(b.logo.url)}" alt="${esc((b.logo&&b.logo.alt)||b.name+' 로고')}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.closest('.ref-brand').classList.add('broken');this.remove()">`:''}<i class="rb-msg">${b.logo&&b.logo.url?'로고를 불러오지 못했어요':'로고 준비 중'}</i></span>
        <span class="rb-name">${esc(b.name)}</span></button>`).join('')}</div>`;
  return tiles;   // v2.33.0: 캐러셀 없이 한 가로줄(3열)에 나열
}
function refBrandsOf(info){return ((info&&info.refBrands)||[]).filter(b=>b&&String(b.name||'').trim()).slice(0,3);}
function renderStyle(){
  const st=STYLES[curCode];
  injectFonts(curCode);
  fontmapPrune(curCode);   // v2.29.0: 검색 제외·로드 실패 글꼴은 결과 목록에서 뺀다(고객 화면 한정)
  const fonts=FONTMAP[curCode]?.fonts||[];
  const hero=heroColors();
  const schemeTabs=Object.entries(SCHEMES).map(([k,s])=>`
    <button class="scheme-tab ${k===curScheme?'on':''}" data-scheme="${k}">${s.name}<span style="font-weight:500;color:var(--ink3)"> · ${s.easy}</span></button>`).join('');
  // v2.4.0: '글자색'(5번째)은 내부적으로 계속 계산·사용하지만(히어로 대비 등) 사용자에게 보여주는
  // 색상 조합 카드에서는 뺀다 — 주조·보조·포인트·바탕이 배경 위에서 어떻게 보이는지만 보여주면 된다.
  const pal=curPal.slice(0,4).map((c,i)=>`
    <div class="sw" data-i="${i}"><div class="c sw-chip" data-i="${i}" title="눌러서 색 조정 · 고정" style="background:${c.hex};${c.b>93?'border-bottom:1px solid var(--line);':''}">${curLocks[i]?'<span class="lockmark">🔒</span>':''}</div>
    <div class="m"><div class="role">${c.role} <span style="font-weight:500">· ${c.easy}</span></div>
    <button class="hex" data-hex="${c.hex}" title="눌러서 복사">${c.hex}</button></div></div>`).join('');
  if(curFontIdx>=fonts.length)curFontIdx=0;
  const heroFont=fonts[curFontIdx]||fonts[0]||null;   // v13.5: 오류 폰트 제외로 목록이 비어도 안전하게
  if(!heroFont){
    const box=$('styleWrap')||$('app');
    console.warn(`${curCode} 유형에 표시할 폰트가 없습니다 — 관리자에서 웹폰트 오류 플래그를 확인하세요`);
  }
  const types=['전체',...new Set(fonts.map(f=>f.type).filter(Boolean))];
  const typeChips=types.map(t=>`<button class="fchip ${t===fontTypeFilter?'on':''}" data-type="${t}">${t}${t==='전체'?` <em>${fonts.length}</em>`:` <em>${fonts.filter(f=>f.type===t).length}</em>`}</button>`).join('');
  const fontCards=fonts.map((f,i)=>{
    const hidden=(fontTypeFilter!=='전체'&&f.type!==fontTypeFilter)?' hidden':'';
    return `<button class="font-card${i===curFontIdx?' on':''}${hidden}${f.added?' has-del':''}" data-i="${i}">
      ${f.added?`<span class="fc-del" role="button" tabindex="0" data-del="${i}" title="추가한 폰트 빼기" aria-label="${esc(f.name)} 제거">제거 <b>×</b></span>`:''}
      <div class="fc-sample" style="${fontStyleOf(f)}" data-fsample>${(brandName||st.adj)}</div>
      <div class="fc-foot"><span class="fc-name">${f.name}</span>${i===0?'<span class="fc-rec">대표</span>':''}${f.added?'<span class="fc-add">추가</span>':''}</div>
      <div class="fc-tags">${fontTagsHTML(f,true)}</div>
    </button>`;}).join('')
    +`<button class="font-card fc-more" id="fcMore"><span class="fcm-ico">＋</span>
      <span class="fcm-t">폰트 더보기</span><span class="fcm-s">전체 폰트에서 직접 골라 추가</span></button>`;
  const heroImg=((MBCI.results||{})[mbciCodeFor(curCode)]||{}).heroImageSrc||'';
  const realCode=(window.MBCI_LAST_RESULT&&window.MBCI_LAST_RESULT.resultCode)||'', realManual=!!(window.MBCI_LAST_RESULT&&window.MBCI_LAST_RESULT.manual);
  const lrInfo=(MBCI.results||{})[mbciCodeFor(curCode)]||{};
  /* v2.34.0: 코어 이미지가 있으면 상단 영역(설명 윗단)의 바탕·글자색을 코어마다 지정한 색(이미지 톤)으로 맞춘다.
     색이 비어 있으면 기존처럼 색상 조합의 주조색을 쓴다. 이미지가 없는 코어는 지금과 동일. */
  const okHex=v=>/^#[0-9a-fA-F]{6}$/.test(String(v||'').trim());
  const heroOwn=!!(heroImg&&okHex(lrInfo.heroBg));
  const heroBgC=heroOwn?String(lrInfo.heroBg).trim():hero.bg;
  const heroFgC=heroOwn?(okHex(lrInfo.heroFg)?String(lrInfo.heroFg).trim():(yiq(heroBgC)>150?'#232F34':'#FFFFFF')):hero.fg;
  // v2.19.0: 적합 분야(최대 4) — 독립 섹션. 있는 항목만 표시한다
  const fitList=((lrInfo.fitFields&&lrInfo.fitFields.length)?lrInfo.fitFields:(st.use||[])).map(x=>String(x||'').trim()).filter(Boolean).slice(0,4);
  const fitHTML=fitList.length?`<div class="sec sec-fit">
        <div class="sec-head sec-head-stack"><span class="sec-title">적합 분야</span><span class="sec-easy">이 코어가 특히 잘 어울리는 분야예요</span></div>
        <div class="fit-row">${fitList.map(u=>`<span class="fit-chip">${esc(u)}</span>`).join('')}</div>
      </div>`:'';
  // v2.19.0: 참고 브랜드 — 브랜드 이름과 로고를 한 쌍으로 같은 순서로 최대 4개
  const refList=refBrandsOf(lrInfo);
  const refHTML=refList.length?refTilesHTML(refList):'';
  const styleKwHTML=(lrInfo.styleKeywords||'').trim()?`<p class="logo-ref-style"><b>스타일 키워드</b>${esc(lrInfo.styleKeywords)}</p>`:'';
  $('result').innerHTML=`
  <div class="style-card">
    <div class="sc-hero${heroOwn?' has-img':''}" style="background:${heroBgC};color:${heroFgC};--hero-bg:${heroBgC}">
      ${heroOwn?`<div class="sc-hero-img"><img src="${esc(heroImg)}" alt="${esc(st.adj)} 코어 이미지" width="1280" height="720" decoding="async"></div>`:''}
      <div class="sc-hero-in">
      <div class="sc-kicker">브랜드 코어</div>
      ${(!heroOwn&&heroImg)?`<div class="sc-hero-img"><img src="${esc(heroImg)}" alt="${esc(st.adj)} 코어 이미지"></div>`:''}
      <div class="sc-code">${mbciCodeFor(curCode)}</div>
      <div class="sc-adj">${st.adj}${st.en?`<span class="sc-en">${st.en}Core</span>`:''}</div>
      <div class="sc-sub">${st.sub}</div>
      <p class="sc-desc">${sentenceBreak(lrInfo.desc||st.desc)}</p>
      </div>
    </div>
    <div class="sc-body">

      ${fitHTML}

      <div class="sec sec-ref">
        <div class="sec-head sec-head-stack"><span class="sec-title">추천 로고 스타일</span><span class="sec-easy">이 코어에 어울리는 로고 스타일이에요</span></div>
        ${styleKwHTML}
        ${refHTML?`<div class="ref-cap">참고 브랜드</div>${refHTML}`:''}
      </div>


      <div class="sec sec-font">
        <div class="sec-head"><span class="sec-title">어울리는 글꼴 <span class="sec-badge">${fonts.length}종 추천</span></span><span class="sec-easy">${customerFontCount()}종 가운데 이 스타일에 맞는 것만 골랐어요</span>
          <div class="tools"><button class="chip-btn" id="fontPrev">‹ 이전</button><button class="chip-btn" id="fontNext">다음 ›</button><button class="chip-btn solid" id="fontMoreTop">＋ 더보기</button></div></div>

        <div class="font-hero" id="fontHero">
          <div class="fh-name" id="fhSample" data-fsample style="${heroFont?fontStyleOf(heroFont):'font-family:inherit'}">${(brandName||st.adj)}</div>
          <div class="fh-meta">
            <div class="fh-title"><b id="fhName">${heroFont?heroFont.name:'표시할 글꼴이 없어요'}</b><span class="fh-idx" id="fhIdx">${fonts.length?`${curFontIdx+1} / ${fonts.length}`:'0'}</span></div>
            <div class="fh-tags" id="fhTags">${heroFont?fontTagsHTML(heroFont):'<span class="fh-tag">관리자 → 폰트 → 목록에서 이 유형의 웹폰트 오류를 확인해 주세요</span>'}</div>
          </div>
        </div>

        <div class="preview-row">
          <input class="preview-input" id="previewText" value="${(brandName||'').replace(/"/g,'&quot;')}" placeholder="브랜드 이름을 입력하면 모든 글꼴이 이 이름으로 바뀌어요" maxlength="30">
          <button type="button" class="pv-apply" id="pvApply" disabled>적용</button>
        </div>

        <div class="font-filter" id="fontFilter">${typeChips}</div>
        <div class="carousel">
          <button class="car-nav prev" id="carPrev" aria-label="이전 글꼴">‹</button>
          <div class="car-track" id="fontGrid">${fontCards}</div>
          <button class="car-nav next" id="carNext" aria-label="다음 글꼴">›</button>
        </div>
        <div class="car-dots" id="carDots"></div>
        <div class="font-note">상업용으로 사용이 가능한 무료폰트입니다.</div>
      </div>

      <div class="sec">
        <div class="sec-head"><span class="sec-title">색상 조합</span><span class="sec-easy">색을 눌러 직접 조정하고, 마음에 드는 색은 고정할 수 있어요</span></div>
        <div class="scheme-tabs">${schemeTabs}</div>
        <div class="pal">${pal}</div>
        ${colorRatioHTML(curPal)}
        <div class="pal-actions"><button type="button" class="chip-btn solid pal-reroll" id="reroll">🎨 다른 조합 보기</button></div>
      </div>

      ${(MBCI.settings&&MBCI.settings.showMockup)?`<div class="sec">
        <div class="sec-head"><span class="sec-title">적용 예시 <span class="sec-badge">Canvas</span></span><span class="sec-easy">업종 목업 위에 이름 · 글꼴 · 색상이 실시간으로 합성돼요</span></div>
        <div class="mock-toolbar">
          <div class="mock-tb-group">
            <select id="mockBiz" class="chip-btn" aria-label="업종 선택"></select>
            <button class="chip-btn" id="mockRefresh">↺ 다시 그리기</button>
          </div>
          <div class="mock-tb-group">
            <button class="chip-btn" id="ulPick">＋ 내 로고 올리기</button>
            <select id="mockExport" class="chip-btn solid" aria-label="내보내기"><option value="">⬇ 내보내기</option><option value="png">PNG · 목업 전체</option><option value="jpg">JPG · 목업 전체</option><option value="svg-outline">SVG · 로고 윤곽선 (간판 제작용)</option><option value="svg-text">SVG · 로고 텍스트 (글꼴 필요)</option></select>
          </div>
        </div>
        <div class="ul-bar">
          <input type="file" id="ulFile" accept="image/png,image/svg+xml,image/*" hidden>
          <div id="ulCtl" class="ul-ctl hidden">
            <span class="ul-name" id="ulName">로고 파일</span>
            <label class="ul-sl"><b>크기</b><input type="range" id="ulScale" min="30" max="150" value="100"></label>
            <label class="ul-pair"><input type="checkbox" id="ulPair"><b>추천 한글 로고타입과 함께 보기</b></label>
            <button class="chip-btn" id="ulClear">제거</button>
          </div>
          <span class="ul-note" id="ulNote"></span>
        </div>
        <div id="mockThumbs" class="mock-thumbs"></div>
        <div class="mock-wrap"><canvas id="mockCanvas" width="1000" height="750"></canvas></div>
        <div class="font-note">홈에서 고른 업종이 기본 적용됩니다 · 색을 다시 조합하거나 글꼴을 바꾸면 목업도 함께 바뀌어요.<br>
        <b>내보내기</b> — PNG·JPG는 목업 화면 전체를, SVG는 로고만 반듯한 원본으로 저장합니다. 간판·시트 커팅에는 <b>SVG · 로고 윤곽선</b>을 쓰세요(글꼴이 없는 컴퓨터에서도 같은 모양으로 열립니다). 직접 올린 로고는 비트맵이라 벡터로 완전히 바뀌지 않으니 원본 AI·SVG 파일을 함께 챙겨 주세요.</div>
      </div>`:''}

      ${ctaSaveHTML(ctaCfg())}

      ${ctaCardHTML(ctaCfg())}

      <div class="sec sec-others">
        <div class="sec-head"><span class="sec-title">다른 코어 보기</span><span class="sec-easy">다른 코어도 확인해볼 수 있어요</span></div>
        <div class="mb-other-grid mb-other-grid-bottom">${allCoreCodes().map(c=>{
          const info=(MBCI.results||{})[c];
          const isReal=realCode&&c===realCode, isView=c===mbciCodeFor(curCode);
          return `<button type="button" class="mb-other-cell${isView?' on':''}${isReal?' is-real':''}" data-core="${c}" aria-label="${c} ${esc((info&&info.name)||'')}${isView?' · 보고 있는 코어':''}${isReal?' · 내 결과':''}"${isView?' aria-current="true"':''}>
            <span class="moc-top"><b>${c}</b><span class="moc-badges">${isReal?`<em class="moc-badge real">${realManual?'조정 결과':'내 결과'}</em>`:''}</span></span>
            <span class="moc-name">${esc((info&&info.name)||'')}</span></button>`;
        }).join('')}</div>
        <div class="mb-r-acts mb-r-bottom"><button type="button" class="btn-line" id="mbRetry">새 테스트 시작하기</button></div>
      </div>
    </div>
  </div>`;
  bindRetry();
  renderRanges();
  renderApplyPreview();
  bindResultEvents();
  checkResultFonts();
  bindMockupUI();
  drawMockup();
}

/* ---------- 참고 이미지 뷰어 ---------- */
let ivIdx=0, ivList=[];
function openImgViewer(i){
  // v2.19.0: 크게 보기는 참고 브랜드 로고를 보여준다(이름·출처와 함께)
  const info=(MBCI.results||{})[mbciCodeFor(curCode)]||{};
  ivList=refBrandsOf(info).map((b,k)=>({url:b.logo&&b.logo.url,src:b.logo&&b.logo.src,credit:b.logo&&b.logo.credit,alt:b.logo&&b.logo.alt,name:b.name,k})).filter(x=>x.url);
  if(!ivList.length)return;
  ivIdx=Math.max(0,ivList.findIndex(s=>s.k===i));
  if(ivIdx<0)ivIdx=0;
  let ov=$('ivOv');
  if(!ov){
    ov=document.createElement('div'); ov.id='ivOv'; ov.className='iv-ov';
    ov.innerHTML=`
      <div class="iv-card" id="ivFigure" role="dialog" aria-modal="true" aria-label="참고 브랜드 로고">
        <button class="iv-close" id="ivClose" aria-label="닫기">×</button>
        <div class="iv-stage">
          <button class="iv-nav prev" id="ivPrev" aria-label="이전 이미지">‹</button>
          <img id="ivImg" alt=""><div class="iv-fail" id="ivFail" hidden>이미지를 불러오지 못했어요.<br>아래 출처 링크에서 원본을 확인할 수 있어요.</div>
          <button class="iv-nav next" id="ivNext" aria-label="다음 이미지">›</button>
        </div>
        <div class="iv-cap">
          <div class="iv-meta"><b id="ivTitle"></b><span id="ivCount"></span></div>
          <div class="iv-acts"><span id="ivCredit" class="iv-credit"></span></div>
        </div>
      </div>`;
    document.body.appendChild(ov);
    // 바깥(오버레이·여백) 클릭 시 닫기 — 그림·캡션 내부 클릭은 유지
    ov.addEventListener('click',e=>{
      if(!e.target.closest('#ivFigure'))closeImgViewer();
    });
    $('ivClose').onclick=closeImgViewer;
    $('ivPrev').onclick=e=>{e.stopPropagation();ivStep(-1);};
    $('ivNext').onclick=e=>{e.stopPropagation();ivStep(1);};
    document.addEventListener('keydown',e=>{
      const o=$('ivOv'); if(!o||o.style.display!=='flex'||o.classList.contains('closing'))return;
      if(e.key==='Escape')closeImgViewer();
      if(e.key==='ArrowLeft')ivStep(-1);
      if(e.key==='ArrowRight')ivStep(1);
    });
  }
  ov.classList.remove('closing'); ov.style.display='flex'; void ov.offsetWidth; ov.classList.add('open');
  document.body.style.overflow='hidden';
  renderImgViewer(0);
}
function ivStep(d){ ivIdx=(ivIdx+d+ivList.length)%ivList.length; renderImgViewer(d); }
function renderImgViewer(dir){
  const s=ivList[ivIdx], st=STYLES[curCode];
  const img=$('ivImg');
  img.classList.remove('slide-next','slide-prev'); if(dir){void img.offsetWidth; img.classList.add(dir>0?'slide-next':'slide-prev');}
  const fail=$('ivFail'); fail.hidden=true; img.style.display='';
  img.classList.remove('in'); img.referrerPolicy='no-referrer';
  img.onerror=()=>{img.style.display='none';fail.hidden=false;};
  img.onload=()=>{img.classList.add('in');};
  img.src=s.url;
  img.alt=s.alt||`${s.name} 로고`;
  $('ivTitle').textContent=s.name||`${st.adj}`;
  $('ivCount').textContent=`${ivIdx+1} / ${ivList.length}`;
  const cr=$('ivCredit'); cr.textContent='';
  if(s.src&&/^https?:\/\//.test(s.src)){const l=document.createElement('a');l.href=s.src;l.target='_blank';l.rel='noopener noreferrer';l.textContent=(s.credit||'출처')+' ↗';l.style.color='inherit';cr.appendChild(l);}
  else cr.textContent=s.credit||'';
  const multi=ivList.length>1;
  $('ivPrev').style.display=multi?'':'none';
  $('ivNext').style.display=multi?'':'none';
}
let ivCloseT=null;
function closeImgViewer(){
  const o=$('ivOv'); if(!o)return;
  document.body.style.overflow='';
  o.classList.remove('open'); o.classList.add('closing');
  clearTimeout(ivCloseT);
  ivCloseT=setTimeout(()=>{o.style.display='none';o.classList.remove('closing');},220);   // v2.29.0: 닫힐 때 짧은 페이드
}
/* ---------- 폰트 더보기: 둘러보기 팝업 ---------- */
let brFilter={type:'',mood:'',weight:'',q:''}, brShown=48, brOnlyStyle=true;
function openFontBrowse(){
  let ov=$('brOv');
  if(!ov){
    ov=document.createElement('div'); ov.id='brOv'; ov.className='br-ov';
    ov.innerHTML=`<div class="br-box" role="dialog" aria-label="폰트 둘러보기">
      <div class="br-head">
        <div><b>폰트 둘러보기</b><span id="brStat"></span></div>
        <button class="cp-x" id="brClose" aria-label="닫기">×</button>
      </div>
      <div class="br-bar">
        <input id="brQ" class="ad-search" placeholder="폰트 이름 검색…">
        <select id="brType"></select>
        <select id="brMood"></select>
        <select id="brWeight"></select>
        <label class="ad-check"><input type="checkbox" id="brOnly" checked> 이 스타일에 어울리는 것만</label>
      </div>
      <div class="br-grid" id="brGrid"></div>
      <div class="br-foot"><button class="chip-btn" id="brMore">더 보기</button>
        <span class="br-tip">고른 폰트는 결과 화면에 추가됩니다 · 「다시 고르기」를 누르면 사라져요</span></div>
    </div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click',e=>{if(e.target===ov)closeFontBrowse();});
    $('brClose').onclick=closeFontBrowse;
    $('brType').innerHTML='<option value="">전체 형태</option>'+CLS_AXES.type.opts.map(t=>`<option>${t}</option>`).join('');
    $('brMood').innerHTML='<option value="">전체 인상</option>'+CLS_AXES.mood.opts.map(t=>`<option>${t}</option>`).join('');
    $('brWeight').innerHTML='<option value="">전체 웨이트</option>'+CLS_AXES.weight.opts.map(t=>`<option>${t}</option>`).join('');
    ['brQ','brType','brMood','brWeight'].forEach(id=>$(id).oninput=()=>{brShown=48;renderBrowse();});
    $('brOnly').onchange=()=>{brOnlyStyle=$('brOnly').checked;brShown=48;renderBrowse();};
    $('brMore').onclick=()=>{brShown+=48;renderBrowse();};
  }
  ov.style.display='flex';
  brShown=48; renderBrowse();
}
function closeFontBrowse(){const o=$('brOv');if(o)o.style.display='none';}
function browseList(){
  const q=($('brQ').value||'').trim().toLowerCase();
  const ty=$('brType').value, mo=$('brMood').value, we=$('brWeight').value;
  const inUse=new Set((FONTMAP[curCode]?.fonts||[]).map(f=>f.family));
  const list=FONT_DB.filter(f=>{
    if(f.wfError||f.hideFromSearch||!f.css)return false;
    if(inUse.has(f.family))return false;
    if(q&&!f.name.toLowerCase().includes(q))return false;
    if(ty&&f.cls.type!==ty)return false;
    if(mo&&!(f.cls.mood||[]).includes(mo))return false;
    if(we&&f.cls.weight!==we)return false;
    if(brOnlyStyle&&!(f.style16||[]).includes(curCode))return false;
    return true;
  });
  if(!brOnlyStyle)return list;
  return list.map(f=>({f,r:fontRankFor(f,curCode),c:moodConflict(f.cls.mood||[])?1:0}))
    .sort((a,b)=>(a.r-b.r)||(a.c-b.c)||a.f.name.localeCompare(b.f.name)).map(x=>x.f);
}
function renderBrowse(){
  const list=browseList(), show=list.slice(0,brShown);
  show.forEach(injectFontCss);
  const st=STYLES[curCode];
  $('brStat').textContent=`${list.length}종${brOnlyStyle?` · ${st.adj} 기준`:' · 전체'}`;
  $('brMore').style.display=list.length>show.length?'':'none';
  $('brGrid').innerHTML=show.length?show.map(f=>`
    <button class="br-card" data-fam="${f.family.replace(/"/g,'&quot;')}" data-nm="${f.name.replace(/"/g,'&quot;')}">
      <div class="br-sample" style="${fontStyleOf(f)}">${brandName||st.adj}</div>
      <div class="br-name">${f.name}</div>
      <div class="fc-tags">${fontTagsHTML(f,true)}</div>
    </button>`).join('')
    :`<div class="br-empty">조건에 맞는 폰트가 없어요. 필터를 풀거나 '이 스타일에 어울리는 것만'을 꺼 보세요.</div>`;
  $('brGrid').querySelectorAll('.br-card').forEach(c=>c.onclick=()=>addFontFromBrowse(c.dataset.fam,c.dataset.nm));
}
function addFontFromBrowse(fam,nm){
  const src=FONT_DB.find(f=>f.name===nm)||FONT_DB.find(f=>f.family===fam); if(!src)return;
  const arr=FONTMAP[curCode].fonts;
  if(arr.some(f=>f.name===src.name)){toast('이미 목록에 있어요');return;}
  injectFontCss(src);
  const ent={name:src.name,family:src.family,css:src.css,type:src.cls.type,weight:src.cls.weight,mood:(src.cls.mood||[]).slice(),added:true};
  arr.push(ent); if(ORIG_FONTS[curCode]&&ORIG_FONTS[curCode]!==arr)ORIG_FONTS[curCode].push(ent);
  curFontIdx=arr.length-1;
  closeFontBrowse();
  renderStyle();
  toast(src.name+' 을 추가했어요');
}
/* v2.32.0: 사용자가 추가한 폰트만 목록에서 뺄 수 있다(알고리즘 추천 폰트는 제거 불가) */
function removeAddedFont(i){
  const arr=FONTMAP[curCode].fonts, f=arr[i]; if(!f||!f.added)return;
  const cur=arr[curFontIdx];
  arr.splice(i,1);
  const o=ORIG_FONTS[curCode]; if(o&&o!==arr){const k=o.findIndex(x=>x.name===f.name&&x.added);if(k>=0)o.splice(k,1);}
  curFontIdx=Math.max(0,cur&&cur!==f?arr.indexOf(cur):Math.min(i,arr.length-1));
  renderStyle();
  toast(f.name+' 을 뺐어요');
}
/* ---------- 적용 미리보기 + 이미지 저장 ---------- */
function roleColors(){
  const p=curPal;
  const byRole=r=>p.find(c=>c.role.indexOf(r)>-1)||p[0];
  return {main:byRole('주조'),sub:byRole('보조'),acc:byRole('포인트'),bg:byRole('바탕'),ink:byRole('글자')};
}
function renderApplyPreview(){
  const box=$('applyPrev'); if(!box)return;
  const c=roleColors(), st=STYLES[curCode];
  const fonts=FONTMAP[curCode].fonts, hf=fonts[curFontIdx]||fonts[0];
  const name=brandName||st.adj;
  const onBg=yiq(c.bg.hex)>150?c.ink.hex:'#FFFFFF';
  const btnText=yiq(c.acc.hex)>150?'#1B2A28':'#FFFFFF';
  box.innerHTML=`
    <div class="ap-card" id="apShot">
      <div class="ap-logo" style="background:${c.bg.hex};color:${onBg}">
        <span class="ap-eyebrow" style="background:${c.sub.hex};color:${yiq(c.sub.hex)>150?'#1B2A28':'#FFFFFF'}">${mbciCodeFor(curCode)}</span>
        <div class="lg" style="font-family:${hf?hf.family:'inherit'};color:${c.main.hex}">${name}</div>
        <div class="tag">${st.sub}</div>
        <div class="ap-rule" style="background:${c.sub.hex}"></div>
        <div class="ap-btnrow">
          <div class="btn" style="background:${c.acc.hex};color:${btnText}">브랜드 매트릭스</div>
          <div class="btn ghost" style="border:1.5px solid ${c.sub.hex};color:${c.sub.hex}">자세히 보기</div>
        </div>
      </div>
    </div>
    <div class="ap-card ap-card-mini">
      <div class="ap-mini" style="background:${c.main.hex};color:${yiq(c.main.hex)>150?'#1B2A28':'#FFFFFF'}">
        <span class="t" style="font-family:${hf?hf.family:'inherit'}">${name}</span>
        <span class="b">주조색을 배경으로 쓸 때의 모습입니다.</span>
        <span class="chipline"><i style="background:${c.acc.hex}"></i><i style="background:${c.sub.hex}"></i><i style="background:${c.bg.hex}"></i></span>
      </div>
      <div class="ap-mini" style="background:${c.bg.hex};color:${c.ink.hex};border-top:1px solid rgba(0,0,0,.07)">
        <span class="t" style="font-family:${hf?hf.family:'inherit'}">${name}</span>
        <span class="b">바탕색 위 본문 글자의 가독성을 확인하세요.</span>
      </div>
    </div>`;
  bindSaveMenu();
}
function bindSaveMenu(){
  const menu=$('saveMenu'); if(!menu)return;
  $('saveMain').onclick=()=>saveShot('png');
  $('saveArrow').onclick=e=>{e.stopPropagation();menu.classList.toggle('hidden');};
  menu.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{menu.classList.add('hidden');
    const k=b.dataset.save;
    if(k==='hex')return copyHexSet();
    if(k==='copy')return saveShot('copy');
    saveShot(k);});
  document.addEventListener('click',()=>menu.classList.add('hidden'),{once:true});
}
function copyHexSet(){
  const txt=curPal.map(c=>`${c.role} ${c.hex}`).join('\n');
  navigator.clipboard?.writeText(txt).then(()=>toast('색상 코드를 복사했어요'));
}
async function buildShotCanvas(transparent){
  const W=1200,H=1080,S=2;
  const cv=document.createElement('canvas'); cv.width=W*S; cv.height=H*S;
  const x=cv.getContext('2d'); x.scale(S,S);
  const c=roleColors(), st=STYLES[curCode];
  const fonts=FONTMAP[curCode].fonts, hf=fonts[curFontIdx]||fonts[0];
  const fam=(hf?hf.family:'sans-serif').replace(/^["']|["']$/g,'');
  const name=brandName||st.adj;
  if(!transparent){x.fillStyle=c.bg.hex;x.fillRect(0,0,W,H);}
  const shotW=hf?nearestWeight(hf.css,700):700;
  try{if(document.fonts)await document.fonts.load(`${shotW} 76px ${hf?hf.family:'sans-serif'}`,name);}catch(e){}
  // 로고 영역
  x.fillStyle=c.main.hex;
  x.font=`${shotW} 76px ${fam}, 'Pretendard', sans-serif`;
  x.textBaseline='alphabetic';
  x.fillText(name,90,268);
  x.fillStyle=transparent?c.main.hex:c.ink.hex;
  x.globalAlpha=.82;
  x.font=`600 24px 'Pretendard', sans-serif`;
  x.fillText(st.sub,90,312);
  x.globalAlpha=1;
  // 버튼
  const bw=196,bh=54,bx=90,by=352;
  x.fillStyle=c.acc.hex;
  if(x.roundRect){x.beginPath();x.roundRect(bx,by,bw,bh,27);x.fill();}else x.fillRect(bx,by,bw,bh);
  x.fillStyle=yiq(c.acc.hex)>150?'#1B2A28':'#FFFFFF';
  x.font=`800 19px 'Pretendard', sans-serif`;
  x.fillText('브랜드 매트릭스',bx+30,by+35);
  // 보조색: 코드 배지 + 구분선 + 아웃라인 버튼
  x.fillStyle=c.sub.hex;
  if(x.roundRect){x.beginPath();x.roundRect(90,166,150,30,15);x.fill();}else x.fillRect(90,166,150,30);
  x.fillStyle=yiq(c.sub.hex)>150?'#1B2A28':'#FFFFFF';
  x.font=`800 14px 'Pretendard', sans-serif`;
  x.fillText(mbciCodeFor(curCode),108,186);
  x.fillStyle=c.sub.hex; x.fillRect(90,330,72,4);
  x.strokeStyle=c.sub.hex; x.lineWidth=2;
  if(x.roundRect){x.beginPath();x.roundRect(bx+bw+14,by,168,bh,27);x.stroke();}
  x.fillStyle=c.sub.hex;
  x.font=`800 18px 'Pretendard', sans-serif`;
  x.fillText('자세히 보기',bx+bw+52,by+35);
  // 팔레트 스트립
  const sw=136,sh=136,sy=452,gap=14;
  curPal.slice(0,4).forEach((col,i)=>{
    const sx=90+i*(sw+gap);
    x.fillStyle=col.hex;
    if(x.roundRect){x.beginPath();x.roundRect(sx,sy,sw,sh-40,12);x.fill();}else x.fillRect(sx,sy,sw,sh-40);
    x.fillStyle=transparent?c.main.hex:c.ink.hex;
    x.globalAlpha=.72;
    x.font=`700 15px 'Pretendard', sans-serif`;
    x.fillText(col.hex,sx+2,sy+118);
    x.globalAlpha=1;
  });
  // ---- 하단: 주조색 배경 시안 + 본문 가독성 시안 ----
  const rr=(px,py,pw,ph,r)=>{if(x.roundRect){x.beginPath();x.roundRect(px,py,pw,ph,r);x.fill();}else x.fillRect(px,py,pw,ph);};
  const cardY=608, cardH=252, cw=(W-180-24)/2;
  // (1) 주조색 배경
  x.fillStyle=c.main.hex; rr(90,cardY,cw,cardH,18);
  const onMain=yiq(c.main.hex)>150?'#1B2A28':'#FFFFFF';
  x.fillStyle=onMain;
  x.font=`800 40px ${fam}, 'Pretendard', sans-serif`;
  x.fillText(name,126,cardY+80);
  x.globalAlpha=.85;
  x.font=`600 17px 'Pretendard', sans-serif`;
  x.fillText('주조색을 배경으로 쓸 때의 모습',126,cardY+114);
  x.globalAlpha=1;
  [c.acc,c.sub,c.bg].forEach((col,i)=>{x.fillStyle=col.hex;rr(126+i*40,cardY+142,30,30,8);});
  x.fillStyle=onMain; x.globalAlpha=.6;
  x.font=`700 14px 'Pretendard', sans-serif`;
  x.fillText('포인트 · 보조 · 바탕',126,cardY+204);
  x.globalAlpha=1;
  // (2) 본문 가독성
  const bx2=90+cw+24;
  x.fillStyle=c.bg.hex; rr(bx2,cardY,cw,cardH,18);
  x.strokeStyle='rgba(0,0,0,.08)'; x.lineWidth=1;
  if(x.roundRect){x.beginPath();x.roundRect(bx2,cardY,cw,cardH,18);x.stroke();}
  x.fillStyle=c.main.hex;
  x.font=`800 30px ${fam}, 'Pretendard', sans-serif`;
  x.fillText(name,bx2+36,cardY+70);
  x.fillStyle=c.ink.hex;
  x.font=`400 17px 'Pretendard', sans-serif`;
  ['바탕색 위 본문 글자의 가독성을 확인하세요.','작은 글씨도 충분히 읽히는지 보는 것이','실제 적용 단계에서 가장 중요합니다.'].forEach((ln,i)=>{
    x.fillText(ln,bx2+36,cardY+112+i*30);
  });
  x.fillStyle=c.acc.hex; rr(bx2+36,cardY+196,168,42,21);
  x.fillStyle=yiq(c.acc.hex)>150?'#1B2A28':'#FFFFFF';
  x.font=`800 16px 'Pretendard', sans-serif`;
  x.fillText('브랜드 매트릭스',bx2+52,cardY+223);
  // 캡션
  x.fillStyle=transparent?c.main.hex:c.ink.hex;
  x.globalAlpha=.5;
  x.font=`600 16px 'Pretendard', sans-serif`;
  x.fillText(`${st.adj} · ${mbciCodeFor(curCode)} · ${hf?hf.name:''}  |  MARKINFO MBCI`,90,1010);
  x.globalAlpha=1;
  return cv;
}
async function saveShot(kind){
  try{
    toast('이미지를 만들고 있어요…');
    const cv=await buildShotCanvas(kind==='png-nobg');
    const base=`${(brandName||STYLES[curCode].adj)}_${curCode}`;
    if(kind==='copy'){
      if(!navigator.clipboard||!window.ClipboardItem){toast('이 브라우저는 이미지 복사를 지원하지 않아요 — 저장을 이용해 주세요');return;}
      const blob=await new Promise(r=>cv.toBlob(r,'image/png'));
      await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
      toast('이미지를 클립보드에 복사했어요');return;
    }
    const isJpg=kind==='jpg';
    let out=cv;
    if(isJpg){const f=document.createElement('canvas');f.width=cv.width;f.height=cv.height;
      const fx=f.getContext('2d');fx.fillStyle='#FFFFFF';fx.fillRect(0,0,f.width,f.height);fx.drawImage(cv,0,0);out=f;}
    const a=document.createElement('a');
    a.download=`${base}${kind==='png-nobg'?'_투명':''}.${isJpg?'jpg':'png'}`;
    a.href=out.toDataURL(isJpg?'image/jpeg':'image/png',isJpg?0.92:undefined);
    a.click();
    toast(`${a.download} 저장 완료`);
  }catch(e){toast('이미지 생성에 실패했어요');}
}
/* ---------- HSB 범위 시각화 ---------- */
function chromIdx(){return curScheme==='acc'?2:0;} // 배색 기준색(포인트 방식은 강조색)
function anchorSwatch(){return curPal[chromIdx()];}
function clampHueToRanges(h,ranges){
  h=((h%360)+360)%360;
  if(inHue(h,ranges))return h;
  let best=ranges[0][0],bd=1e9;
  ranges.forEach(([a,b])=>{[a,b].forEach(e=>{const d=Math.min(Math.abs(h-e),360-Math.abs(h-e));if(d<bd){bd=d;best=e;}});});
  return best;
}
function renderRanges(){
  const st=STYLES[curCode], box=$('ranges'); if(!box)return;
  const ref=anchorSwatch();                      // ★ 실제 팔레트 기준색과 동기화
  const mid=Math.round(ref.h);
  const hueStops=[]; for(let i=0;i<=36;i++) hueStops.push(`${hsb2hex(i*10,65,90)} ${(i/36*100).toFixed(1)}%`);
  const hueMasks=(()=>{
    const spans=st.hue.map(([a,b])=>a<=b?[[a,b]]:[[a,360],[0,b]]).flat().sort((x,y)=>x[0]-y[0]);
    let cur=0,out='';
    spans.forEach(([a,b])=>{if(a>cur)out+=`<span class="mask" style="left:${cur/3.6}%;width:${(a-cur)/3.6}%"></span>`;cur=b;});
    if(cur<360)out+=`<span class="mask" style="left:${cur/3.6}%;width:${(360-cur)/3.6}%"></span>`;
    return out+st.hue.map(([a,b])=>a<=b
      ?`<span class="win" style="left:${a/3.6}%;width:${(b-a)/3.6}%"></span>`
      :`<span class="win" style="left:${a/3.6}%;width:${(360-a)/3.6}%"></span><span class="win" style="left:0%;width:${b/3.6}%"></span>`).join('');
  })();
  const bar=(cls,grad,lo,hi,dots)=>`
    <div class="rb rb-live" data-bar="${cls}" title="클릭해서 조색" style="background:linear-gradient(90deg,${grad})">
      <span class="mask" style="left:0;width:${lo}%"></span>
      <span class="mask" style="left:${hi}%;width:${100-hi}%"></span>
      <span class="win" style="left:${lo}%;width:${hi-lo}%"></span>
      ${dots}
    </div>`;
  const sGrad=[0,25,50,75,100].map(v=>hsb2hex(mid,v,Math.max(ref.b,45))).join(',');
  const bGrad=[0,25,50,75,100].map(v=>hsb2hex(mid,Math.max(ref.s,30),v)).join(',');
  const hueRangeTxt=st.hue.map(([a,b])=>`${a}°–${b}°`).join(' · ');
  const roleName=curScheme==='acc'?'포인트':'주조색';
  box.innerHTML=`
    <div>
      <div class="rb-label"><span>색상 <span class="easy">어떤 색 계열인지 · 기준: ${roleName}</span></span><span class="val">허용 ${hueRangeTxt}</span></div>
      <div class="rb rb-live" data-bar="h" title="클릭해서 조색" style="background:linear-gradient(90deg,${hueStops.join(',')})">${hueMasks}
        <span class="dot" style="left:${ref.h/3.6}%;background:${ref.hex}"></span></div>
    </div>
    <div>
      <div class="rb-label"><span>채도 <span class="easy">색이 쨍한 정도</span></span><span class="val">허용 ${st.sat[0]}–${st.sat[1]}</span></div>
      ${bar('s',sGrad,st.sat[0],st.sat[1],`<span class="dot" style="left:${ref.s}%;background:${ref.hex}"></span>`)}
    </div>
    <div>
      <div class="rb-label"><span>명도 <span class="easy">색의 밝기</span></span><span class="val">허용 ${st.bri[0]}–${st.bri[1]}</span></div>
      ${bar('b',bGrad,st.bri[0],st.bri[1],`<span class="dot" style="left:${ref.b}%;background:${ref.hex}"></span>`)}
    </div>`;
  box.querySelectorAll('.rb-live').forEach(el=>{
    el.onclick=e=>{
      const r=el.getBoundingClientRect(), t=(e.clientX-r.left)/r.width;
      const st2=STYLES[curCode];
      if(el.dataset.bar==='h') curAnchor.h=clampHueToRanges(t*360,st2.hue);
      if(el.dataset.bar==='s') curAnchor.s=clamp(t*100,st2.sat[0],st2.sat[1]);
      if(el.dataset.bar==='b') curAnchor.b=clamp(t*100,st2.bri[0],st2.bri[1]);
      const np=genPalette(st2,curScheme,curAnchor);
      curPal=np.map((c,i)=>curLocks[i]?curPal[i]:c);
      renderStyle();
    };
  });
}
/* ----- 스와치 미세 조정 (어도비 컬러식 개별 편집 · 범위 이탈 즉시 경고) ----- */
let tuneIdx=null;
function updateSwatchDom(i){
  const c=curPal[i];
  const sw=document.querySelector(`.sw[data-i="${i}"]`); if(!sw)return;
  const chip=sw.querySelector('.sw-chip');
  chip.style.background=c.hex;
  chip.style.borderBottom=c.b>93?'1px solid var(--line)':'none';
  const hx=sw.querySelector('.hex'); hx.textContent=c.hex; hx.dataset.hex=c.hex;
}
function tuneWarn(i){
  const st=STYLES[curCode], c=curPal[i];
  const chrom=(i===0&&curScheme!=='acc')||(i===2);
  if(!chrom) return '';
  const out=[];
  if(!inHue(c.h,st.hue)) out.push('색상');
  if(c.s<st.sat[0]-0.5||c.s>st.sat[1]+0.5) out.push('채도');
  if(c.b<st.bri[0]-0.5||c.b>st.bri[1]+0.5) out.push('명도');
  return out.length?`⚠ ${out.join('·')}이(가) 이 스타일의 허용 범위를 벗어났어요 — 저장은 되지만 스타일에서 멀어집니다`:'✓ 허용 범위 안입니다';
}
function openTuner(i){
  if(tuneIdx===i){closeTuner();return;}
  tuneIdx=i;
  const c=curPal[i];
  let pop=$('cpPop');
  if(!pop){
    pop=document.createElement('div');
    pop.id='cpPop'; pop.className='cp-pop';
    document.body.appendChild(pop);
  }
  pop.innerHTML=`
    <div class="cp-head"><b>${c.role}</b><span class="cp-hex" id="cpHex">${c.hex}</span>
      <button class="cp-x" id="cpClose" aria-label="닫기">×</button></div>
    <div class="cp-sv" id="cpSV"><span class="cp-cursor" id="cpCur"></span></div>
    <div class="cp-band" id="cpBand"></div>
    <div class="cp-slider"><input type="range" min="0" max="360" value="${Math.round(c.h)}" id="cpH" aria-label="색상"></div>
    <label class="cp-hexrow"><span>HEX</span><input id="cpHexIn" value="${c.hex}" maxlength="7" spellcheck="false"></label>
    <div class="cp-nums">
      <label>S<input type="number" min="0" max="100" value="${Math.round(c.s)}" data-k="s"></label>
      <label>B<input type="number" min="0" max="100" value="${Math.round(c.b)}" data-k="b"></label>
    </div>
    <div class="cp-warn" id="cpWarn">${tuneWarn(i)}</div>
    <label class="cp-lock"><input type="checkbox" id="cpLock" ${curLocks[i]?'checked':''}><span>🔒 색상 고정 <em>다른 조합을 볼 때 이 색은 유지돼요</em></span></label>
    <div class="cp-foot"><button class="chip-btn" id="cpReset">범위 안으로</button><button class="chip-btn solid" id="cpDone">완료</button></div>`;
  // 위치: 해당 스와치 아래
  const sw=document.querySelector(`.sw[data-i="${i}"]`);
  const r=sw?sw.getBoundingClientRect():{left:innerWidth/2-120,bottom:innerHeight/2,width:0};
  pop.style.display='block';
  const pw=248, left=Math.min(Math.max(8,r.left+r.width/2-pw/2),innerWidth-pw-8);
  pop.style.left=left+'px';
  pop.style.top=(r.bottom+window.scrollY+8)+'px';
  const paint=()=>{
    const cc=curPal[tuneIdx];
    $('cpSV').style.background=`linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,${hsb2hex(cc.h,100,100)})`;
    $('cpCur').style.left=cc.s+'%';
    $('cpCur').style.top=(100-cc.b)+'%';
    $('cpCur').style.background=cc.hex;
    $('cpHex').textContent=cc.hex;
    $('cpWarn').innerHTML=tuneWarn(tuneIdx);
    pop.querySelectorAll('.cp-nums input').forEach(inp=>{inp.value=Math.round(cc[inp.dataset.k]);});
    $('cpH').value=Math.round(cc.h);
    if(document.activeElement!==$('cpHexIn'))$('cpHexIn').value=cc.hex;
  };
  const commit=()=>{
    const cc=curPal[tuneIdx];
    cc.hex=hsb2hex(cc.h,cc.s,cc.b);
    curLocks[tuneIdx]=true; if($('cpLock'))$('cpLock').checked=true;   // 직접 손댄 색은 자동으로 고정(체크 해제 가능)
    const chip=document.querySelector(`.sw-chip[data-i="${tuneIdx}"]`);
    if(chip&&!chip.querySelector('.lockmark'))chip.innerHTML='<span class="lockmark">🔒</span>';
    updateSwatchDom(tuneIdx);
    renderRanges(); renderApplyPreview();
    paint();
  };
  const sv=$('cpSV');
  const pick=e=>{
    const b=sv.getBoundingClientRect();
    const x=Math.min(1,Math.max(0,((e.touches?e.touches[0].clientX:e.clientX)-b.left)/b.width));
    const y=Math.min(1,Math.max(0,((e.touches?e.touches[0].clientY:e.clientY)-b.top)/b.height));
    const cc=curPal[tuneIdx]; cc.s=x*100; cc.b=(1-y)*100; commit();
  };
  let dragging=false;
  sv.onmousedown=e=>{dragging=true;pick(e);};
  window.addEventListener('mousemove',e=>{if(dragging)pick(e);});
  window.addEventListener('mouseup',()=>{dragging=false;});
  sv.ontouchstart=e=>{pick(e);e.preventDefault();};
  sv.ontouchmove=e=>{pick(e);e.preventDefault();};
  $('cpH').oninput=e=>{curPal[tuneIdx].h=+e.target.value;commit();};
  pop.querySelectorAll('.cp-nums input').forEach(inp=>inp.oninput=()=>{
    const k=inp.dataset.k, max=k==='h'?360:100;
    curPal[tuneIdx][k]=Math.min(max,Math.max(0,+inp.value||0));commit();});
  $('cpHexIn').oninput=e=>{
    const v=e.target.value.trim().replace(/^#?/,'#');
    if(!/^#[0-9a-fA-F]{6}$/.test(v))return;
    const n=parseInt(v.slice(1),16), r=(n>>16)/255, g=((n>>8)&255)/255, b=(n&255)/255;
    const mx=Math.max(r,g,b), mn=Math.min(r,g,b), df=mx-mn;
    let hh=0;
    if(df){ if(mx===r)hh=60*(((g-b)/df)%6); else if(mx===g)hh=60*((b-r)/df+2); else hh=60*((r-g)/df+4); }
    const cc=curPal[tuneIdx];
    cc.h=((hh%360)+360)%360; cc.s=mx?df/mx*100:0; cc.b=mx*100;
    commit();
  };
  $('cpLock').onchange=e=>{
    const on=e.target.checked; curLocks[tuneIdx]=on;
    const chip=document.querySelector(`.sw-chip[data-i="${tuneIdx}"]`);
    if(chip)chip.innerHTML=on?'<span class="lockmark">🔒</span>':'';
    toast(on?curPal[tuneIdx].role+' 고정 — 이 색에 어울리게 나머지가 조색돼요':curPal[tuneIdx].role+' 고정 해제');
  };
  $('cpClose').onclick=closeTuner;
  $('cpDone').onclick=closeTuner;
  $('cpReset').onclick=()=>{
    const st=STYLES[curCode], cc=curPal[tuneIdx];
    cc.h=clampHueToRanges(cc.h,st.hue);
    cc.s=clamp(cc.s,st.sat[0],st.sat[1]);
    cc.b=clamp(cc.b,st.bri[0],st.bri[1]);
    commit(); toast('허용 범위 안으로 맞췄어요');
  };
  paint();
  setTimeout(()=>document.addEventListener('mousedown',outsideClose),0);
}
function outsideClose(e){
  const pop=$('cpPop');
  if(!pop||pop.style.display==='none')return;
  if(pop.contains(e.target)||e.target.closest('.sw-chip'))return;
  closeTuner();
}
function closeTuner(){
  tuneIdx=null;
  const pop=$('cpPop');
  if(pop)pop.style.display='none';
  document.removeEventListener('mousedown',outsideClose);
}

/* ---------- result events ---------- */
function bindResultEvents(){
  const dlBtn=$('mbDownload'); if(dlBtn)dlBtn.onclick=exportResultPNG;
  document.querySelectorAll('.mb-other-cell').forEach(b=>b.onclick=()=>{
    viewingCode=b.dataset.core;
    renderBrandCoreResult(viewingCode, viewingCode);
    window.scrollTo({top:0,behavior:'smooth'});
  });
  const bm=$('backMine');
  if(bm)bm.onclick=()=>{ viewingCode=null; const rc=window.MBCI_LAST_RESULT&&window.MBCI_LAST_RESULT.resultCode; if(rc)renderBrandCoreResult(rc,rc); window.scrollTo({top:0,behavior:'smooth'}); };
  const rt=$('rangesToggle');
  if(rt)rt.onclick=()=>{
    const w=$('rangesWrap'), open=w.classList.contains('hidden');
    w.classList.toggle('hidden',!open);
    rt.setAttribute('aria-expanded',open?'true':'false');
  };
  $('reroll').onclick=()=>{curAnchor={h:null,s:null,b:null};const anyLock=curLocks.some(x=>x);curPal=anyLock?harmonize(STYLES[curCode],curScheme):genPalette(STYLES[curCode],curScheme,curAnchor);renderStyle();toast(anyLock?'고정한 색에 어울리게 나머지를 다시 골랐어요':'허용 범위 안에서 새 조합을 만들었어요');};
  document.querySelectorAll('.scheme-tab').forEach(b=>b.onclick=()=>{
    if(b.dataset.scheme===curScheme)return;
    // v13.5: 배색 방식만 바꾸고 색은 유지 — 현재 기준색을 앵커로 잡아 결정적으로 재배치한다
    const st=STYLES[curCode], prev=curPal?curPal[chromIdx()]:null;
    if(prev){
      curAnchor={h:clampHueToRanges(prev.h,st.hue),
                 s:clamp(prev.s,st.sat[0],st.sat[1]),
                 b:clamp(prev.b,st.bri[0],st.bri[1])};
    }
    curScheme=b.dataset.scheme;
    curPal=curLocks.some(x=>x)?harmonize(st,curScheme):genPalette(st,curScheme,curAnchor);
    renderStyle();
    toast('같은 기준색으로 배색 방식만 바꿨어요 · 새 조합은 「다른 조합 보기」');});
  document.querySelectorAll('.sw .hex').forEach(b=>b.onclick=e=>{e.stopPropagation();
    navigator.clipboard?.writeText(b.dataset.hex).then(()=>toast(b.dataset.hex+' 복사됨'));});
  document.querySelectorAll('.sw-chip').forEach(ch=>ch.onclick=()=>openTuner(+ch.dataset.i));   // v2.6.0: 색을 누르면 조정 창(고정 체크 포함)
  // v0.16.0: 입력 즉시 반영하지 않고 「적용」을 눌러야 반영한다.
  // 적용된 값과 같아지면 버튼은 다시 비활성으로 돌아간다.
  const pv=$('previewText'), pb=$('pvApply');
  const syncApplyBtn=()=>{ if(pb)pb.disabled = pv.value.trim()===(brandName||''); };
  const applyBrand=()=>{
    const v=pv.value.trim();
    if(v===(brandName||'')){syncApplyBtn();return;}
    brandName=v;
    const t=brandName||STYLES[curCode].adj;
    document.querySelectorAll('#result [data-fsample]').forEach(el=>{el.textContent=t;});
    const bi=$('brandNameInput'); if(bi)bi.value=brandName;
    renderApplyPreview();
    drawMockup();
    syncApplyBtn();
    toast(brandName?`'${brandName}'(으)로 미리보기를 바꿨어요`:'브랜드 이름을 지웠어요');
  };
  pv.oninput=syncApplyBtn;
  pv.onkeydown=e=>{ if(e.key==='Enter'){e.preventDefault();applyBrand();} };
  if(pb)pb.onclick=applyBrand;
  syncApplyBtn();
  // ---- 캐러셀: 선택 시 DOM 전체를 다시 만들지 않고 필요한 부분만 갱신 ----
  const track=$('fontGrid');
  const visibleCards=()=>[...track.querySelectorAll('.font-card:not(.fc-more):not(.hidden)')];
  const allSlots=()=>[...track.querySelectorAll('.font-card:not(.hidden)')]; // 더보기 카드까지 포함
  // 선택한 카드가 화면 밖일 때만 최소 거리로 스크롤 (제자리면 움직이지 않음)
  let lastProg=0, swipeTimer=null;   // v2.5.0: 코드가 낸 스크롤과 사용자의 스와이프를 구분한다
  const revealCard=(i,smooth,el)=>{
    const t=el||track.querySelector(`.font-card[data-i="${i}"]`); if(!t)return;
    const tl=t.offsetLeft, tr=tl+t.offsetWidth;
    const vl=track.scrollLeft, vr=vl+track.clientWidth;
    let to=null;
    if(tl<vl+4) to=Math.max(0,tl-8);
    else if(tr>vr-4) to=Math.min(track.scrollWidth-track.clientWidth,tr-track.clientWidth+8);
    if(to!==null){lastProg=Date.now();track.scrollTo({left:to,behavior:smooth?'smooth':'auto'});}
  };
  const syncCarUI=()=>{
    track.querySelectorAll('.font-card:not(.fc-more)').forEach(c=>c.classList.toggle('on',+c.dataset.i===curFontIdx));
    $('carDots').querySelectorAll('.car-dot').forEach(d=>d.classList.toggle('on',+d.dataset.i===curFontIdx));
    const f=FONTMAP[curCode].fonts[curFontIdx];
    if(!f)return;
    const total=FONTMAP[curCode].fonts.length;
    $('fhSample').style.fontFamily=f.family;$('fhSample').style.fontWeight=fontFw(f);
    $('fhName').textContent=f.name;
    $('fhIdx').textContent=`${curFontIdx+1} / ${total}`;
    $('fhTags').innerHTML=fontTagsHTML(f);
    renderApplyPreview();
  };
  const pickFont=(i,smooth)=>{
    const total=FONTMAP[curCode].fonts.length;
    curFontIdx=(i+total)%total;
    syncCarUI();
    revealCard(curFontIdx,smooth!==false);
    drawMockup();
  };
  window.__pickFont=pickFont;
  track.querySelectorAll('.font-card:not(.fc-more)').forEach(c=>c.onclick=()=>{atMore=false;pickFont(+c.dataset.i);});
  track.querySelectorAll('.fc-del').forEach(d=>{
    const go=ev=>{ev.stopPropagation();ev.preventDefault();removeAddedFont(+d.dataset.del);};
    d.onclick=go; d.onkeydown=ev=>{if(ev.key==='Enter'||ev.key===' ')go(ev);};
  });
  if($('fcMore'))$('fcMore').onclick=openFontBrowse;
  if($('fontMoreTop'))$('fontMoreTop').onclick=openFontBrowse;
  let atMore=false; // '더보기' 카드에 머무는 중인지
  const step=dir=>{
    const slots=allSlots(); if(!slots.length)return;
    const cs=visibleCards(); if(!cs.length)return;
    const idxs=cs.map(c=>+c.dataset.i);
    // 더보기에 머무는 상태에서 다음 → 첫 폰트로, 이전 → 마지막 폰트로
    if(atMore){ atMore=false; pickFont(dir>0?idxs[0]:idxs[idxs.length-1]); return; }
    let p=slots.findIndex(c=>!c.classList.contains('fc-more')&&+c.dataset.i===curFontIdx);
    if(p<0)p=0;
    const np=p+dir;
    // 마지막 폰트에서 '다음'을 누르면 더보기 카드를 먼저 보여준다
    if(np>=0&&np<slots.length&&slots[np].classList.contains('fc-more')){
      atMore=true;
      revealCard(null,true,slots[np]);
      slots[np].classList.add('pulse');
      setTimeout(()=>slots[np].classList.remove('pulse'),900);
      return;
    }
    let q=idxs.indexOf(curFontIdx); if(q<0)q=0;
    pickFont(idxs[(q+dir+idxs.length)%idxs.length]);};
  $('fontNext').onclick=()=>step(1);
  $('fontPrev').onclick=()=>step(-1);
  $('carPrev').onclick=()=>step(-1);
  $('carNext').onclick=()=>step(1);
  $('carDots').innerHTML=visibleCards().map(c=>`<button class="car-dot${+c.dataset.i===curFontIdx?' on':''}" data-i="${c.dataset.i}" aria-label="${+c.dataset.i+1}번째 글꼴"></button>`).join('');
  $('carDots').querySelectorAll('.car-dot').forEach(d=>d.onclick=()=>pickFont(+d.dataset.i));
  // 최초 렌더 직후엔 애니메이션 없이 위치만 맞춘다
  const carEl=track.closest('.carousel');
  const updEnd=()=>{if(carEl)carEl.classList.toggle('at-end',track.scrollLeft+track.clientWidth>=track.scrollWidth-4);};
  // 스와이프가 멈추면 가장 가까운 글꼴 카드를 선택해 인디케이터·미리보기가 함께 따라가게 한다
  const settleSwipe=()=>{
    if(Date.now()-lastProg<700)return;
    const cs=visibleCards(); if(!cs.length)return;
    const atEnd=track.scrollLeft+track.clientWidth>=track.scrollWidth-4;
    let pick;
    if(atEnd)pick=cs[cs.length-1];
    else{
      const edge=track.scrollLeft+10;
      pick=cs.reduce((b,c)=>Math.abs(c.offsetLeft-edge)<Math.abs(b.offsetLeft-edge)?c:b,cs[0]);
    }
    if(track.scrollLeft<4)pick=cs[0];
    const i=+pick.dataset.i;
    if(i!==curFontIdx){atMore=false;curFontIdx=i;syncCarUI();drawMockup();}
  };
  track.onscroll=()=>{updEnd();clearTimeout(swipeTimer);swipeTimer=setTimeout(settleSwipe,140);};
  requestAnimationFrame(()=>{revealCard(curFontIdx,false);updEnd();});
  document.querySelectorAll('.fchip').forEach(c=>c.onclick=()=>{
    fontTypeFilter=c.dataset.type;
    const fs=FONTMAP[curCode].fonts;
    if(fontTypeFilter!=='전체'&&fs[curFontIdx]&&fs[curFontIdx].type!==fontTypeFilter){
      const ni=fs.findIndex(f=>f.type===fontTypeFilter);
      if(ni>=0)curFontIdx=ni;
    }
    renderStyle();});
  // v2.19.0: 참고 브랜드 로고 → 크게 보기
  document.querySelectorAll('.ref-brand:not(.nologo)').forEach(t=>{
    t.onclick=()=>openImgViewer(+t.dataset.bi);
  });
  document.querySelectorAll('.slot:not(.sample)').forEach(slot=>{
    const i=+slot.dataset.i;
    slot.querySelectorAll('[data-act]').forEach(btn=>btn.onclick=e=>{
      e.stopPropagation();
      if(btn.dataset.act==='file'){pendingSlot=i;const f=$('fileInput');f.value='';f.click();}
      else{const u=prompt('이미지 주소(URL)를 붙여 넣어 주세요');if(u){imgStore[curCode][i]=u.trim();renderStyle();}}
    });
    const del=slot.querySelector('.del');
    if(del)del.onclick=e=>{e.stopPropagation();imgStore[curCode][i]=null;renderStyle();};
    slot.ondragover=e=>{e.preventDefault();slot.classList.add('drag');};
    slot.ondragleave=()=>slot.classList.remove('drag');
    slot.ondrop=e=>{e.preventDefault();slot.classList.remove('drag');
      const f=[...e.dataTransfer.files].find(x=>x.type.startsWith('image/'));
      if(f){const r=new FileReader();r.onload=()=>{imgStore[curCode][i]=r.result;renderStyle();};r.readAsDataURL(f);}};
  });
  // v2.14.0: 버튼 문구 = 실제 이동처. 상담 전용 주소가 설정돼 있을 때만 상담 버튼이 보이고, 둘 다 이동 전에 결과 요약을 복사한다
  const goTo=(url,msg)=>()=>{
    const p=copyBrief(true);                       // 이동 전에 결과 요약 복사
    setTimeout(()=>window.open(url,'_blank'),150);
    p.then(ok=>toast(ok?msg:'요약 복사는 하지 못했어요 — 이동한 페이지에서 결과 이미지를 보여주세요'));
  };
  // v2.15.0: 두 버튼의 이동 주소를 관리자(메인 페이지 탭)에서 각각 따로 바꿀 수 있다. 비어 있으면 프리즘 기본 주소를 쓴다.
  // v2.16.0: 주소는 관리자 → 일반 → CTA에서 입력한 값만 쓴다(기본 주소로 대신하지 않는다). 비어 있으면 그 버튼은 나오지 않는다.
  const prismB=$('prismBtn'); if(prismB)prismB.onclick=goTo((SITE_META.prismUrl||'').trim(),'결과 요약을 복사했어요 — 문의할 때 붙여 넣어 주세요');
  const cb=$('consultBtn'); if(cb)cb.onclick=goTo((SITE_META.consultUrl||'').trim(),'결과 요약을 복사했어요 — 상담 신청 시 붙여 넣어 주세요');
}
let pendingSlot=-1;
$('fileInput').onchange=function(){
  const f=this.files[0];
  if(f&&pendingSlot>-1&&curCode){const r=new FileReader();r.onload=()=>{imgStore[curCode][pendingSlot]=r.result;renderStyle();};r.readAsDataURL(f);}
};
/* v2.14.0: 복사 성공 여부를 돌려준다 — 클립보드 API가 막힌 환경(로컬 파일 등)은 임시 입력창으로 한 번 더 시도 */
async function copyText(txt){
  try{await navigator.clipboard.writeText(txt);return true;}
  catch(e){
    try{const ta=document.createElement('textarea');ta.value=txt;ta.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(ta);ta.select();
      const ok=document.execCommand('copy');ta.remove();return ok;}
    catch(_){return false;}
  }
}
function copyBrief(quiet){
  // v2.12.1: 스튜디오/좌표 등 삭제된 데이터를 참조해 오류가 나던 요약을 현재 MBCI 구조로 다시 작성
  const st=STYLES[curCode]||{}, mb=mbciCodeFor(curCode);
  const fonts=(FONTMAP[curCode]?.fonts||[]);
  const r=document.body.classList.contains('consult-mode')?window.MBCI_ADMIN.consultResult():((typeof mbciResult!=='undefined'&&mbciResult)||null);
  const real=(window.MBCI_LAST_RESULT&&window.MBCI_LAST_RESULT.resultCode)||'';
  const axisLines=r?mbciAxes().map(a=>{const L=r.scores[a.left.code]||0,R=r.scores[a.right.code]||0,t=L+R,lp=t?Math.round(L/t*100):50;
    return `  ${a.name}: ${a.left.code} ${lp}% / ${a.right.code} ${100-lp}%`;}).join('\n'):'';
  const txt=
`[MBCI 브랜드 코어 진단 결과 · 마크인포]
브랜드 코어: ${st.adj||''}${st.en?' ('+st.en+'Core)':''} — ${mb}${real&&real!==mb?' (미리보기, 내 결과: '+real+')':''}
Core ID: ${(r&&r.coreId)?(real||mb)+' '+r.coreId:'-'}
${axisLines?'\n지표별 비율\n'+axisLines+'\n':''}
설명: ${st.desc||''}
적합 분야: ${(((MBCI.results||{})[mb]||{}).fitFields||st.use||[]).join(', ')}
참고 브랜드: ${refBrandsOf((MBCI.results||{})[mb]).map(b=>b.name).join(', ')}
스타일 키워드: ${((MBCI.results||{})[mb]||{}).styleKeywords||''}${(r&&r.manual&&document.body.classList.contains('consult-mode'))?'\n※ 상담 수동 조정 결과(테스트 응답 원본과 다름)':''}

브랜드 이름: ${brandName||'(미입력)'}
업종: ${bizLabel()}

색상 조합(${(SCHEMES[curScheme]||{}).name||''}):
${curPal.slice(0,4).map(c=>`  ${c.role} ${c.hex}`).join('\n')}

대표 글꼴: ${fonts[curFontIdx]?.name||'-'}
추천 글꼴: ${fonts.map(f=>f.name).join(', ')}

— MBCI · MARKINFO Brand Core Indicator`;
  return copyText(txt).then(ok=>{if(!quiet)toast(ok?'결과 요약이 복사됐어요':'복사하지 못했어요 — 브라우저 설정에서 클립보드 권한을 확인해 주세요');return ok;});
}

/* ================= NAV ================= */
/* v2.1.0: 직접 조절하기가 사라지면서 모드 전환 자체가 없어졌다 — 시작 버튼 하나만 남는다 */
function showApp(){$('intro').classList.add('hidden');$('app').classList.add('on');window.scrollTo(0,0);}
/* v2.17.0: 첫 화면(홈)일 때만 body에 on-home — 모바일에서 상단 바를 가려 시작 버튼이 잘리지 않게 한다 */
(function trackHome(){
  const intro=document.getElementById('intro'); if(!intro)return;
  const sync=()=>document.body.classList.toggle('on-home',!intro.classList.contains('hidden')&&!document.body.classList.contains('admin-mode'));
  new MutationObserver(sync).observe(intro,{attributes:true,attributeFilter:['class']});
  new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});
  sync();
})();
$('modeQ').onclick=()=>{brandName=($('brandNameInput').value||'').trim();showApp();resetQ();renderQ();
  const box=$('result'); if(box)box.innerHTML=`<div class="placeholder"><div class="big">질문에 답하면 브랜드 코어가 나타납니다</div><p>왼쪽에서 테스트를 진행해 주세요. 네 개의 축이 모두 정해지면 이름과 설명이 함께 표시됩니다.</p></div>`;};
/* v0.17.0: 홈 이동은 새 상태로 완전히 초기화한다. 진단 중(입력한 데이터가 있는 상태)에는
   경고 후 확인·취소를 받는다 — 이미 있는 confirm() 패턴을 그대로 따른다. */
function hasProgress(){
  return $('app').classList.contains('on');   // 인트로를 벗어나 질문·직접조절·결과 화면에 있으면 진행 중으로 본다
}
function resetAllState(){
  resetQ();
  curCode=null; curScheme=null; curPal=null;
  curAnchor={h:null,s:null,b:null}; curLocks=[false,false,false,false,false];
  curFontIdx=0; fontTypeFilter='전체';
  brandName=''; bizCode=null; bizEtc=false; bizRandom=null; mockImgSel=null;
  userLogo=null;
  const ulc=$('ulCtl'); if(ulc)ulc.classList.add('hidden');
  sliders.forEach(sl=>sl.value=3);
  const bi=$('brandNameInput'); if(bi)bi.value='';
  const pv=$('previewText'); if(pv)pv.value='';
  paintBizChips();
  const sel=$('mockBiz'); if(sel){sel.dataset.ready='';sel.innerHTML='';}
}
function goHome(skipAsk){
  if(document.body.classList.contains('admin-mode')&&window.MBCI_ADMIN.leave&&!window.MBCI_ADMIN.leave())return;   // 관리자 화면에서만 동작(고객용 파일에는 없음)
  const wasShared=document.body.classList.contains('shared-core');
  if(!skipAsk&&!wasShared&&hasProgress()&&!confirm('현재까지 진행한 내용이 초기화됩니다.\n\n처음부터 다시 시작할까요?'))return;
  resetAllState();
  document.body.classList.remove('mbci-mode','mbci-test-mode','shared-core');
  if(location.hash)history.replaceState(null,'',location.pathname+location.search);   // v2.35.2: 공유 링크(#/core/…)에서 홈으로 가면 주소도 정리
  $('app').classList.remove('on');
  $('intro').classList.remove('hidden');
  $('intro').classList.remove('show');
  requestAnimationFrame(()=>requestAnimationFrame(()=>$('intro').classList.add('show')));
  window.scrollTo({top:0,behavior:'smooth'});
  window.scrollTo(0,0);
}
/* ===== 버전 체계 =====
   · 관리자에서 정보 수정 후 저장 → 마이너 +0.1
   · 코드 레벨의 큰 개편 → 메이저 +1.0 (APP_VERSION 직접 수정)      */
let APP_VERSION='2.37.0';
let BUILD_DATE='2026-10-21';
/* 표시용 버전·빌드일자를 화면에 반영 */
function paintVersion(){
  const v=document.getElementById('verLabel'); if(v)v.textContent='v'+APP_VERSION;
  const d=document.getElementById('buildDate'); if(d)d.textContent=BUILD_DATE;
  const av=document.getElementById('adVer'); if(av)av.textContent='v'+APP_VERSION+' · '+BUILD_DATE;   // 날짜는 관리자 창·상담용 페이지에만 보인다
}
document.addEventListener('DOMContentLoaded',paintVersion);
/* v2.19.0: 최신 배포본 확인 — 캐시된 옛 HTML/JS/데이터가 섞이면 한 번 자동으로 새로 불러오고, 그래도 다르면 안내 띠를 띄운다.
   version.json은 항상 새로 받아 오고(cache:'no-store'), 로드된 app.js·데이터 파일의 버전과 비교한다. */
(function(){
  if(location.protocol==='file:'||window.MBCI_ADMIN.page)return;   // 관리자 화면(로컬)에서는 건너뜀
  const cmp=(a,b)=>{const x=String(a).split('.').map(Number),y=String(b).split('.').map(Number);for(let i=0;i<3;i++){const d=(x[i]||0)-(y[i]||0);if(d)return d;}return 0;};
  const banner=(msg)=>{
    if(document.getElementById('verBanner'))return;
    const b=document.createElement('div'); b.id='verBanner'; b.className='ver-banner';
    b.innerHTML=`<span>${msg}</span><button type="button" id="verReload">새로고침</button>`;
    document.body.appendChild(b);
    document.getElementById('verReload').onclick=()=>{location.href=location.pathname+'?_v='+Date.now()+location.hash;};
  };
  const run=async()=>{
    let remote=null;
    try{const r=await fetch('version.json?t='+Date.now(),{cache:'no-store'}); if(r.ok)remote=(await r.json()).version;}catch(e){return;}
    if(!remote)return;
    const dataVer=(BSM_DATA.__meta||{}).version;
    const stale=cmp(remote,APP_VERSION)>0;                         // 서버가 더 새 버전
    const mixed=dataVer&&cmp(dataVer,APP_VERSION)!==0&&cmp(dataVer,remote)!==0;   // 데이터·앱 파일 버전이 서로 다름
    if(!stale&&!mixed)return;
    let tried=''; try{tried=sessionStorage.getItem('mbciVerReload')||'';}catch(e){}
    if(tried!==remote){
      try{sessionStorage.setItem('mbciVerReload',remote);}catch(e){}
      location.replace(location.pathname+'?_v='+remote+'-'+Date.now()+location.hash);   // 주소가 달라지면 캐시된 HTML을 쓰지 않는다
      return;
    }
    banner(stale?`새 버전(v${remote})이 배포됐어요. 화면을 새로고침해 주세요.`:`파일 버전이 서로 달라요(앱 v${APP_VERSION} · 데이터 v${dataVer}). 새로고침해 주세요.`);
    console.warn('[버전 확인] 앱',APP_VERSION,'· 데이터',dataVer,'· 서버',remote);
  };
  if(document.readyState==='complete')run(); else window.addEventListener('load',run);
})();
/* ===== 인상(무드) 상충 규칙 — 한글로고 스튜디오 기준 ===== */
const MOOD_CONFLICT=[['부드러운','강한'],['진지한','귀여운']];
function moodConflict(list){
  for(const [a,b] of MOOD_CONFLICT){
    if(list.includes(a)&&list.includes(b))return [a,b];
  }
  return null;
}
/* ===== v2.27.0 서체 추천 알고리즘 — 코어 4축 점수 =====
   서체 분류(cls: 형태·인상·굵기)를 4축 벡터(EI·SN·TF·JP, 각 −1~+1, +방향 = 코어 코드의 왼쪽 극)로 바꾸고,
   코어의 목표 벡터와의 거리로 적합도(0~100)를 계산한다. 코어별 브리프(유형 비율·굵기·인상)와 유형 쿼터가 선별을 돕는다.
   BSM_DATA.FONT_ALGO가 없으면 예전 결정표(ALGO16) 방식으로 동작한다. */
/* FA-BEGIN */
const FONT_ALGO=BSM_DATA.FONT_ALGO||null;
const FA_AX=['EI','SN','TF','JP'];
let _fa=null;
function faReset(){_fa=null;}
function faCores(){   // [{mb:'ESTJ', legacy:'GSRM'}...]
  return Object.entries(MBCI.results||{}).filter(([,r])=>r&&r.legacyStyleCode).map(([mb,r])=>({mb,legacy:r.legacyStyleCode}));
}
function faLeft(ax){const a=(MBCI.axes||[]).find(x=>x.id===ax);return a?a.left.code:({EI:'E',SN:'N',TF:'F',JP:'J'})[ax];}
function faRaw(cls,f){
  const C=FONT_ALGO.coef, ms=cls.mood||[], ov=(f&&f.fv_override)||{}, out={};
  FA_AX.forEach(ax=>{
    const t=((C.type||{})[ax]||{})[cls.type]||0;
    const m=ms.length?ms.reduce((s,x)=>s+((((C.mood||{})[ax])||{})[x]||0),0)/ms.length:0;
    const w=((C.weight||{})[ax]||{})[cls.weight]||0;
    out[ax]=t+m+w+(+ov[ax]||0);
  });
  return out;
}
function faVec(raw){
  const v={}; FA_AX.forEach(ax=>{const z=(raw[ax]-_fa.st[ax].mean)/_fa.st[ax].sd; v[ax]=Math.max(-1,Math.min(1,z/2));}); return v;
}
/* 코어 mb에 대한 적합도. w = 축별 강도(6~9) — 없으면 코어 표준 강도(defaultMag) */
function faScoreRaw(raw,cls,mb,w){
  const A=FONT_ALGO, br=(A.brief||{})[mb]||{}, v=faVec(raw);
  if((cls.mood||[]).some(m=>(br.moodExclude||[]).includes(m)))return -Infinity;
  if((br.typeExclude||[]).includes(cls.type))return -Infinity;   // v2.29.0: 코어별 제외 형태
  if(br.moodRequire&&br.moodRequire.length&&!(cls.mood||[]).some(m=>br.moodRequire.includes(m)))return -Infinity;   // v2.32.0: 코어별 필수 인상(예: INTP는 '강한' 인상이 있는 서체만)
  let d=0, ls=0;
  FA_AX.forEach((ax,i)=>{
    const sign=mb[i]===faLeft(ax)?1:-1;
    const mag=(w&&w[ax])?0.5+(w[ax]-6)/6:A.defaultMag;
    const lam=(A.lambda||{})[ax]||1;
    d+=lam*Math.pow(v[ax]-sign*mag,2); ls+=lam;
  });
  let s=100*(1-Math.sqrt(d/ls)/2);
  if(moodConflict(cls.mood||[]))s-=A.conflictPenalty;
  if(br.weightBand&&!br.weightBand.includes(cls.weight))s-=A.weightBandPenalty;
  const sh=(br.typeShare||{})[cls.type]||0;
  s+=A.typeBonus*sh; if(!sh)s-=A.typeMissPenalty;
  if(br.moodBoost)(cls.mood||[]).forEach(m=>{s+=(br.moodBoost[m]||0);});   // v2.29.0: 코어별 인상 가산(예: INTJ 중립 우선)
  return s;
}
function faInit(){
  if(_fa)return _fa;
  const fonts=FONT_DB.filter(f=>f.cls&&f.cls.type&&f.cls.weight);
  const raws=fonts.map(f=>faRaw(f.cls,f));
  const st={};
  FA_AX.forEach(ax=>{
    const v=raws.map(r=>r[ax]), mean=v.reduce((a,b)=>a+b,0)/(v.length||1);
    const sd=Math.sqrt(v.reduce((a,b)=>a+Math.pow(b-mean,2),0)/(v.length||1))||1;
    st[ax]={mean,sd};
  });
  _fa={st,cut:{}};
  faCores().forEach(c=>{
    const sc=fonts.map((f,i)=>faScoreRaw(raws[i],f.cls,c.mb,null)).filter(isFinite).sort((a,b)=>b-a);
    const at=p=>sc.length?sc[Math.min(sc.length-1,Math.floor(sc.length*p))]:Infinity;
    _fa.cut[c.mb]={primary:at(FONT_ALGO.cut.primary),secondary:at(FONT_ALGO.cut.secondary)};
  });
  return _fa;
}
/* 레거시 코드(GSRM 등)든 MBCI 코드(ESTJ 등)든 받아서 MBCI 코드로 */
function faMb(code){return (typeof LEGACY_TO_MBCI!=='undefined'&&LEGACY_TO_MBCI[code])||code;}
function faScoreFor(f,code,w){
  if(!FONT_ALGO||!f||!f.cls||!f.cls.type)return 0;
  faInit();
  const s=faScoreRaw(faRaw(f.cls,f),f.cls,faMb(code),w);
  return isFinite(s)?Math.max(0,s):0;
}
/* 유형 쿼터 — 상위 N개에서 한 형태가 cap을 넘지 않게, 브리프 대표 형태는 최소 minDominant개.
   pre = 이미 확정된 서체(고정분). 같은 계열(family)은 한 번만 뽑는다. */
function faQuota(list,mb,pre){
  const A=FONT_ALGO, n=A.topN, capBase=Math.ceil(n*A.typeCapRatio), shr=((A.brief||{})[mb]||{}).typeShare||{};
  const capOf=t=>Math.max(capBase,Math.ceil(n*(shr[t]||0)));   // 브리프가 한 형태에 몰아주면(예 고딕 0.8) 그 비율까지 허용
  const cnt={}, fams=new Set(), pick=[], rest=[];
  (pre||[]).forEach(f=>{const t=f.cls?f.cls.type:f.type;cnt[t]=(cnt[t]||0)+1;fams.add(f.family);});
  const slots=Math.max(0,n-(pre||[]).length);
  list.forEach(f=>{
    const t=f.cls.type;
    if(pick.length<slots&&!fams.has(f.family)&&(cnt[t]||0)<capOf(t)){pick.push(f);cnt[t]=(cnt[t]||0)+1;fams.add(f.family);}
    else rest.push(f);
  });
  const sh=((A.brief||{})[mb]||{}).typeShare||{};
  const dom=Object.keys(sh).sort((a,b)=>sh[b]-sh[a])[0];
  if(dom){
    const need=A.minDominant||2;
    let have=(pre||[]).concat(pick).filter(f=>(f.cls?f.cls.type:f.type)===dom).length;
    while(have<need){
      const j=rest.findIndex(f=>f.cls.type===dom&&!fams.has(f.family)); if(j<0)break;
      let k=-1; for(let i=pick.length-1;i>=0;i--)if(pick[i].cls.type!==dom){k=i;break;}
      if(k<0)break;
      const out=pick.splice(k,1)[0], inn=rest.splice(j,1)[0];
      fams.add(inn.family); pick.push(inn); rest.unshift(out); have++;
    }
    const idx=new Map(list.map((f,i)=>[f,i])); pick.sort((a,b)=>idx.get(a)-idx.get(b));
  }
  return pick.concat(rest);
}
/* FA-END */
function autoStylesLegacy(cls){
  const type=cls.type, weight=cls.weight, moods=(cls.mood||[]);
  if(!type||!weight||!moods.length)return {codes:[],primary:[],secondary:[]};
  const seen=new Set(), primary=[], secondary=[];
  moods.forEach((m,mi)=>{
    const hit=ALGO16[`${type}|${m}|${weight}`]||[];
    hit.forEach(c=>{
      if(seen.has(c))return;
      seen.add(c);
      (mi===0?primary:secondary).push(c);
    });
  });
  return {codes:[...primary,...secondary],primary,secondary};
}
/* v2.27.0: 서체 분류 → 어울리는 코어(저장 키는 기존처럼 레거시 코드). 상위 12% = 대표, 상위 35% = 보조 */
function autoStyles(cls,f){
  if(!FONT_ALGO)return autoStylesLegacy(cls);
  const type=cls.type, weight=cls.weight, moods=(cls.mood||[]);
  if(!type||!weight||!moods.length)return {codes:[],primary:[],secondary:[]};
  faInit();
  const raw=faRaw(cls,f), sc=[];
  faCores().forEach(c=>{const s=faScoreRaw(raw,cls,c.mb,null); if(isFinite(s))sc.push({c:c.legacy,mb:c.mb,s});});
  const primary=sc.filter(x=>x.s>=_fa.cut[x.mb].primary).sort((a,b)=>b.s-a.s).map(x=>x.c);
  const secondary=sc.filter(x=>x.s>=_fa.cut[x.mb].secondary&&!primary.includes(x.c)).sort((a,b)=>b.s-a.s).map(x=>x.c);
  return {codes:[...primary,...secondary],primary,secondary};
}
/* 대표 → 보조 순. 저장된 style16/style16p를 우선 쓰고, 없으면 그 자리에서 계산 */
function fontRankFor(f,code){
  if((f.repStyles||[]).includes(code))return -1;  // 관리자가 고정한 대표체 — 항상 최우선
  if(f.style16p||f.style16){
    if((f.style16p||[]).includes(code))return 0;
    if((f.style16||[]).includes(code))return 1;
    return 2;
  }
  const a=autoStyles(f.cls||{},f);
  if(a.primary.includes(code))return 0;
  if(a.secondary.includes(code))return 1;
  return 2;
}
function applyAutoStyles(f){
  const a=autoStyles(f.cls||{},f);
  f.style16=a.codes.slice();
  f.style16p=a.primary.slice();
  return a;
}
/* v2.2.0: 레거시 16코드(GSRM 등) → MBCI 코드(ESTJ 등) 역방향 조회.
   자산(폰트·색상·목업)은 레거시 코드로 그대로 저장돼 있지만, 사람에게 보여줄 코드·이름은 MBCI 기준이다. */
const LEGACY_TO_MBCI={};
Object.entries((MBCI.results||{})).forEach(([mb,info])=>{ if(info.legacyStyleCode)LEGACY_TO_MBCI[info.legacyStyleCode]=mb; });
function mbciCodeFor(legacyCode){ return LEGACY_TO_MBCI[legacyCode]||legacyCode; }
/* 4개 축이 만드는 16개 코드를 codeOrder 순서로 나열 — 결과 탭·공유 링크의 기준 목록 */
function allCoreCodes(){
  const order=MBCI.codeOrder||mbciAxes().map(a=>a.id);
  const axesByOrder=order.map(id=>mbciAxis(id));
  const out=[];
  const rec=(i,acc)=>{ if(i===axesByOrder.length){out.push(acc);return;}
    const a=axesByOrder[i]; rec(i+1,acc+a.left.code); rec(i+1,acc+a.right.code); };
  rec(0,'');
  return out;
}
function injectFontCss(f){
  if(!f||!f.css||cssInjected.has(f.name))return;
  const s=document.createElement('style');s.dataset.fontcss='1';s.textContent=f.css;document.head.appendChild(s);cssInjected.add(f.name);
}
function declaredWeights(css){
  // @font-face에 선언된 모든 font-weight 수집 — 볼드·라이트 전용 패밀리 대응
  if(!css)return [400];
  const ws=new Set(); const re=/font-weight\s*:\s*([^;}{]+)/gi; let m;
  while((m=re.exec(css))){
    const v=m[1].trim().toLowerCase();
    if(v==='bold')ws.add(700); else if(v==='normal')ws.add(400);
    else{const nums=v.match(/\d{3}/g); if(nums)nums.forEach(n=>ws.add(+n));}
  }
  return ws.size?[...ws].sort((a,b)=>a-b):[400];
}
function nearestWeight(css,target){
  const ws=declaredWeights(css);
  return ws.reduce((p,c)=>Math.abs(c-target)<Math.abs(p-target)?c:p,ws[0]);
}
/* v2.29.0: 같은 글꼴 패밀리(예 G마켓 산스·에스코어드림·함렛)에 여러 굵기 항목이 있을 때, 항목 이름이 가리키는 웨이트를 숫자로 돌려준다.
   예전에는 웨이트를 지정하지 않아 모든 굵기가 기본(400)에 가장 가까운 한 가지로 보였다. */
const FW_KEYS=[['ExtraLight',200],['Extralight',200],['UltraLight',200],['SemiBold',600],['Semibold',600],['ExtraBold',800],['Extrabold',800],['Thin',100],['Light',300],['Regular',400],['Medium',500],['Bold',700],['Black',900],['Heavy',900]];
function fontFw(f){
  if(!f)return 400;
  const d=(f.css?f:fontDbOf(f))||f, css=f.css||d.css, ws=declaredWeights(css);
  if(ws.length===1)return ws[0];
  const n=String(f.name||d.name||''), k=FW_KEYS.find(([w])=>n.includes(w));
  return nearestWeight(css,k?k[1]:400);
}
const fontStyleOf=f=>`font-family:${f.family};font-weight:${fontFw(f)}`;
/* v2.14.0: 고객이 실제로 고를 수 있는 글꼴 수 = 전체 − 웹폰트 오류 − 검색 제외 (관리자 리포트와 같은 기준) */
function customerFontCount(){return FONT_DB.filter(f=>!f.wfError&&!f.hideFromSearch).length;}
/* 추천 목록 항목 → 글꼴 DB 항목. 같은 계열(family)에 굵기별 항목이 여럿이라 이름으로 먼저 찾는다 */
function fontDbOf(e){return FONT_DB.find(f=>f.name===e.name)||FONT_DB.find(f=>f.family===e.family);}
/* 폐지된 분류가 남아 있으면 현재 분류로 옮긴다 */
const TYPE_ALIAS={'픽셀체':'장식체','탈네모':'장식체','캘리폰트':'손글씨','코딩체':'고딕'};
function syncFontmapAttrs(){
  let n=0;
  FONT_DB.forEach(f=>{if(f.cls&&TYPE_ALIAS[f.cls.type]){f.cls.type=TYPE_ALIAS[f.cls.type];n++;}if(TYPE_ALIAS[f.cat]){f.cat=TYPE_ALIAS[f.cat];}});
  Object.values(FONTMAP).forEach(fm=>{
    if(fm.filter&&fm.filter.types)fm.filter.types=[...new Set(fm.filter.types.map(t=>TYPE_ALIAS[t]||t))];
    (fm.fonts||[]).forEach(e=>{
      const d=fontDbOf(e); if(!d||!d.cls)return;
      if(e.type!==d.cls.type||e.weight!==d.cls.weight||JSON.stringify(e.mood||[])!==JSON.stringify(d.cls.mood||[])){
        e.type=d.cls.type;e.weight=d.cls.weight;e.mood=(d.cls.mood||[]).slice();n++;}
    });
  });
  return n;
}
function poolFor(code,pre){
  // 대표(primary) 우선 → 보조(secondary) 후순위. v2.27.0: 같은 등급 안에서는 코어 적합도 순, 상위 8개는 유형 쿼터 적용
  const base=FONT_DB
    .filter(f=>!f.wfError&&!f.hideFromSearch&&f.css&&(f.style16||[]).includes(code))
    .map(f=>({f,r:fontRankFor(f,code),c:moodConflict(f.cls.mood||[])?1:0,s:FONT_ALGO?faScoreFor(f,code):0}))
    .sort((a,b)=>(a.r-b.r)||(b.s-a.s)||(a.c-b.c)||a.f.name.localeCompare(b.f.name))
    .map(x=>x.f);
  return FONT_ALGO?faQuota(base,faMb(code),pre):base;
}
/* 추천 목록(FONTMAP[코드].fonts)을 n개까지 채운다 — keep은 남겨 둘 항목 */
function fontmapFill(code,keep,n){
  n=n||8;
  const out=keep.slice(), fams=new Set(out.map(x=>x.family));
  const pre=out.map(fontDbOf).filter(Boolean);
  for(const f of poolFor(code,pre)){
    if(out.length>=n)break;
    if(fams.has(f.family))continue;
    fams.add(f.family);
    out.push({name:f.name,family:f.family,css:f.css,type:f.cls.type,weight:f.cls.weight,mood:(f.cls.mood||[]).slice()});
  }
  return out;
}
/* 결과 화면 글꼴 로드 상태 표시 (v2.25.0: 정의가 빠져 있던 checkFontLoad·fontFamilyKey 를 채우고, 오류가 새어 나오지 않게 감쌌다) */
const fontFamilyKey=f=>{const t=String(f||'').split(',')[0].trim().replace(/^["']|["']$/g,'');return t?`"${t}"`:'';};
/* v2.29.0: 웹폰트를 불러오지 못한 글꼴은 추천에서 제외한다(고객 화면). 시간이 오래 걸리는 경우(응답 지연)는 제외하지 않는다. */
const FONT_FAIL=new Set(), ORIG_FONTS={};
function fontmapPrune(code){
  const m=FONTMAP[code]; if(!m||!m.fonts)return;
  if(document.body.classList.contains('admin-mode'))return;
  if(!ORIG_FONTS[code])ORIG_FONTS[code]=m.fonts.slice();
  m.fonts=ORIG_FONTS[code].filter(f=>{const d=fontDbOf(f);return !(d&&d.hideFromSearch)&&!FONT_FAIL.has(f.name);});
}
/* 관리자 편집·내보내기 전에는 가지치기 전 원본 목록으로 되돌린다(일시적 네트워크 오류가 저장되지 않게) */
function fontmapRestore(){for(const c in ORIG_FONTS){if(FONTMAP[c])FONTMAP[c].fonts=ORIG_FONTS[c];delete ORIG_FONTS[c];}}
async function checkFontLoad(fam,fw){
  if(!fam||!document.fonts)return null;
  try{
    const r=await Promise.race([document.fonts.load((fw||400)+' 16px '+fam,'가나다'),new Promise(res=>setTimeout(()=>res('timeout'),6000))]);
    if(r==='timeout')return null;
    return Array.isArray(r)&&r.length>0&&r.every(f=>f.status==='loaded');
  }catch(e){ return false; }
}
async function checkResultFonts(){
  try{ await checkResultFonts_(); }catch(e){ console.warn('[fonts]',e); }
}
async function checkResultFonts_(){
  if(!document.fonts||!curCode||document.body.classList.contains('admin-mode'))return;
  const code=curCode, fonts=(FONTMAP[code]?.fonts||[]).slice();
  const res=await Promise.all(fonts.map(f=>checkFontLoad(fontFamilyKey(f.family),fontFw(f))));
  if(code!==curCode)return;
  if(fonts.length>1&&res.every(r=>r===false))return;   // 전부 실패 = 개별 글꼴이 아니라 네트워크·차단 문제일 가능성이 커서 제외하지 않는다
  let changed=false;
  res.forEach((ok,i)=>{ if(ok===false&&!FONT_FAIL.has(fonts[i].name)){FONT_FAIL.add(fonts[i].name);changed=true;} });
  if(changed&&FONTMAP[code]){
    const cur=fonts[curFontIdx];
    fontmapPrune(code);
    const nf=FONTMAP[code].fonts, k=cur?nf.findIndex(f=>f.name===cur.name):-1;
    curFontIdx=k>=0?k:0;
    renderStyle();
  }
}

/* ================= INIT ================= */
(function initVer(){const el=document.getElementById('verLabel');if(el)el.textContent='v'+APP_VERSION;})();
/* v2.1.0: 직접 조절하기·16유형 지도 삭제로 초기 렌더는 더 이상 필요 없다.
   buildAxes/buildMap 함수 자체는 관리자의 색상 가이드라인 저장 등에서 안전하게(가드됨) 호출될 수 있어 남겨둔다. */
/* 부팅 시 화면 상태 강제 정규화 — 저장본에 어떤 상태가 남아 있어도 항상 홈으로 */
(function(){
  document.body.classList.remove('admin-mode');
  $('intro').classList.remove('hidden');$('intro').classList.add('show');
  $('app').classList.remove('on');
})();
syncFontmapAttrs();   // v2.14.0: 추천 카드의 분류를 글꼴 DB 기준으로 맞춘다
initBizChips();
applyHomeContent();
tryOpenSharedCore();
function tryOpenSharedCore(){
  const m=/^#\/core\/([A-Za-z]{2,6})\/?$/.exec(location.hash);
  if(!m)return;
  const code=m[1].toUpperCase();   // v2.35.0: 소문자·끝 슬래시도 허용
  if(!allCoreCodes().includes(code))return;
  showApp();
  const stage=$('qStage'), gauges=$('mbciGauges');
  if(stage)stage.classList.add('hidden');
  document.body.classList.add('shared-core');   // v2.35.1: 왼쪽 빈 패널도 함께 숨긴다
  if(gauges){gauges.classList.add('hidden');gauges.innerHTML='';}   // v2.35.1: 공유 링크는 안내 문구·버튼 없이 결과(이미지)부터 바로 보여준다
  const order=MBCI.codeOrder||mbciAxes().map(a=>a.id);
  renderBrandCoreResult(code, code);
  resEnter();   // v2.35.1: 일반 결과와 같은 부드러운 등장 애니메이션
}
(function normalizeAllStyles(){
  // 알고리즘 기준으로 16유형을 일괄 재산출 (사용자 주관 제거)
  let n=0;
  FONT_DB.forEach(f=>{
    if(!f.cls)f.cls={type:f.cat||'고딕',mood:[],weight:'보통'};
    // 상충 무드가 저장돼 있으면 두 번째를 제거
    const cf=moodConflict(f.cls.mood||[]);
    if(cf){f.cls.mood=f.cls.mood.filter(m=>m!==cf[1]);n++;}
    applyAutoStyles(f);
  });
  if(n)console.info(`[무드 상충 정리] ${n}종`);
  // 추천 목록도 알고리즘 순서로 재구성
  // v2.27.0: 새 알고리즘을 처음 적용할 때(FONT_ALGO.fontmapApplied=false) 한 번만, 코어에 맞는 대표 서체 최대 3개를 남기고 나머지를 새로 뽑는다.
  //          이후에는 예전처럼 관리자가 고른 목록을 존중한다(조건에 맞는 항목은 유지, 모자라면 보충).
  const mig=!!(FONT_ALGO&&!FONT_ALGO.fontmapApplied);
  Object.keys(FONTMAP).forEach(code=>{
    let keep=FONTMAP[code].fonts.filter(x=>{
      const src=fontDbOf(x);
      return src&&!src.wfError&&!src.hideFromSearch&&(src.style16||[]).includes(code);
    });
    if(mig)keep=keep.filter(x=>(fontDbOf(x).style16p||[]).includes(code)).slice(0,3);
    keep=fontmapFill(code,keep,8);
    if(!mig){
      // 대표(primary) → 보조(secondary) 순으로 최종 정렬
      keep.sort((a,b)=>{
        const sa=fontDbOf(a), sb=fontDbOf(b);
        const ra=sa?fontRankFor(sa,code):9, rb=sb?fontRankFor(sb,code):9;
        return ra-rb;
      });
    }
    FONTMAP[code].fonts=keep.slice(0,8);
    if(mig){
      const br=((FONT_ALGO.brief||{})[faMb(code)])||null;
      if(br&&FONTMAP[code].filter){   // 관리자 화면에 보이는 조건 요약도 코어 브리프에 맞춘다
        const sh=br.typeShare||{};
        FONTMAP[code].filter={types:Object.keys(sh).filter(t=>sh[t]>0).sort((x,y)=>sh[y]-sh[x]),moods:br.moodPrimary.slice(),weights:br.weightBand.slice(),tags:br.tagBoost.slice()};
      }
    }
  });
  if(mig)FONT_ALGO.fontmapApplied=true;
})();
window.addEventListener('hashchange',()=>{ tryOpenSharedCore(); });   // 같은 탭에서 해시만 바뀌는 경우(새로고침 없이)도 공유 링크가 반영되게
/* 랜딩 디밍 연출 — 처음 열릴 때만 부드럽게 걷힘 */
requestAnimationFrame(()=>{
  requestAnimationFrame(()=>{
    const intro=$('intro'); if(intro)intro.classList.add('show');
    const veil=$('dimVeil');
    if(veil){veil.classList.add('hide');setTimeout(()=>veil.remove(),1300);}
  });
});


/* ---- 로컬 파일(file://)로 열었을 때 안내 ----
   목업 이미지가 별도 파일이라 file:// 에서는 캔버스가 오염되어
   합성 결과 저장(PNG·JPG·SVG)이 브라우저에서 차단된다. */
(function(){
  if(location.protocol!=='file:')return;
  document.addEventListener('DOMContentLoaded',()=>{
    // v2.13.0: 목업(적용 예시)을 켰거나 관리자일 때만, 화면에 떠다니지 않는 일반 안내 띠로 보여준다
    const need=(typeof MBCI!=='undefined'&&MBCI.settings&&MBCI.settings.showMockup); 
    if(!need)return;
    const b=document.createElement('div'); b.className='file-warn';
    b.innerHTML='로컬 파일로 열려 있어 목업 합성·내보내기가 브라우저에 의해 차단될 수 있어요 · 폴더에서 <b>python3 -m http.server 8080</b> 실행 후 <b>localhost:8080</b> 으로 여세요'
      +'<button type="button" aria-label="닫기">×</button>';
    b.querySelector('button').onclick=()=>b.remove();
    document.body.insertBefore(b,document.body.firstChild);
  });
})();

/* v2.23.0: 모바일 우선(mbf) — 고객 화면에만 켠다. 관리자(admin-mode)·상담(consult-mode) 화면은 기존 반응형 그대로. */
(function mbfSync(){
  const root=document.documentElement, b=document.body; if(!b)return;
  const apply=()=>{ const on=!b.classList.contains('admin-mode')&&!b.classList.contains('consult-mode')&&!root.classList.contains('consult-locked'); if(root.classList.contains('mbf')!==on)root.classList.toggle('mbf',on); };
  apply();
  try{ new MutationObserver(apply).observe(b,{attributes:true,attributeFilter:['class']}); }catch(e){}
})();
