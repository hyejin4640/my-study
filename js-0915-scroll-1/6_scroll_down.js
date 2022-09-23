
/** 객체가져오기 ------------------------------------------------------------------------ */
  const tagNav = document.querySelector("#menu");
  const offsetTop = tagNav.offsetTop;  /* 요소가 상위 요소를 기준으로의 위치값 (상위요소의 position이 rerative이면 그상위요소가기준이되고 상위요소를 찾다가 없으면 가장위에 요소가 기준이된다) */
  const navHeight = tagNav.clientHeight;  /* 요소의 padding+컨텐츠의 높이값 */
  // console.log( navHeight );
  
/** 함수정의 ----------------------------------------------------------------------------- */
const handlerScroll =()=>{
  /*🟢 스크롤을했을때 메뉴바가 브라우저영역에 상단에 닿을때 메뉴바를 고정 시키는 명령문 */
  const navOffsetTop = tagNav.getBoundingClientRect().top; /* view포트를 기준으로 요소의 위치값 */
  // console.log( navOffsetTop );  
let scroll = window.pageYOffset || window.scrollY; /* 스크롤바의 위치값 */
// console.log( scroll );
console.log( scroll );

/* 요소가 스크롤에의해 위치값이 변하는  getBoundingClientRect값으로 위치값의 변동에의해 이벤트를 실행시키고 싶은데 position:fixed에의해
바뀐 위치값이 변동이없는 문제가 발생함  */
// if( navOffsetTop < 10 ){
//   tagNav.classList.add('turn');
// }else{
//   // fixed된상태라 요소가 이미 브라우저에 고정되있어서 위치값의 변동이없다 즉0그대로 그래서
//   // 스크롤바의 위치값과 메뉴바의 처음 고정된 위치값이 같으면(스크롤을 내리면 요소는 위로 올라가고 요소가 브라우저 가장 상단에 닿은 위치가
//   // 요소가 페이지에서 고정된 위치값만큼 이니까 그값과 스크롤바의 위치값이 같으면 고정을 시키고 그게아니라면 다시원상태로 )
//   tagNav.classList.remove('turn');
// }

/* position:fixed로 인한 위치값변동이없는 문제가 발생했고 그걸 해결한 명령문 ⬇ */


/*🟢 스크롤 한번에 메뉴바가 보이면서 슬라이드되게 */
// if( scroll > 0){
//  tagNav.style.top='0';
// }else{
//   tagNav.style.top=`-${navHeight}px`;
// }

}
const init =()=>{
  // tagNav.style.top=`-${navHeight}px`; 
  window.addEventListener('scroll',handlerScroll ); /* 윈도우에 스크롤 이벤트 등록 */
}
init();

