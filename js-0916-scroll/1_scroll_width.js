

// 스크롤 이벤트 처리
const handlerScroll =(event,barElem)=>{
   //body === documentElement
  // const totalHeight = document.documentElement.offsetHeight; /* 요소의 border포함 높이 사이즈 */
  const totalHeight = document.documentElement.scrollHeight;  /* view포트말고 전체 페이지의 높이사이즈(스크롤되서 안보인)*/
  // const totalHeight2 = window.innerHeight;  /* vh === view포트 */
  const clientHeight = document.documentElement.clientHeight;  /* clientheight는 객체를 기준으로 객체의 높이를 구할때사용을 많이함,
    body에 clientHeight를 가져오면 window.innerHeight값을 가져오는 것과 동일 */
  const scrollY = Math.floor(document.documentElement.scrollTop); /* pageYoffset 과같은역할 : 스크롤이동거리 */
  // const scrollY2 = window.pageYOffset; /* pageYoffset 과같은역할 : 스크롤이동거리 */

  // if ( totalHeight - Math.floor(scrollY) === clientHeight ){
  //   console.log( '--------여기가끝입니다----------------------');    
  // }
const a = document.querySelector('#wrap').offsetHeight;
console.log( totalHeight , scrollY ,  clientHeight,a );

  const maxScrollHeight = totalHeight - clientHeight;
  const percent = (scrollY / maxScrollHeight)*100;  /* 전체페이제에서 스크롤을 내린 거리만큼을 백분율로 계산한다 */
  // console.log( percent );
  barElem.style.width = percent+"%";
}

const init=()=>{
  // window.addEventListener('scroll', handlerScroll);
  /*태그를 객체로 가져올때 전역변수로 사용안하기위한 방법*/
  const tagBar = document.querySelector('#scroll-bar');
  window.addEventListener('scroll', (e)=>{
    handlerScroll(e,tagBar);
  });
}

window.addEventListener('load',init);