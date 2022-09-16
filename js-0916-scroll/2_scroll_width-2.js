


const fn_scroll =(e, barElem , txtElem, wrapElem)=>{
  const totalPage2 = wrapElem.offsetHeight;
  const totalPage = document.documentElement.scrollHeight; 
  
  console.log( totalPage , totalPage2);

  const viewHeight =window.innerHeight;
  const scrollY = window.pageYOffset;
  const percent  = Math.ceil((scrollY / (totalPage-viewHeight))*100 );
  // viewHeight를 빼주는 이유는 view포트영역에 보여지는 페이지영역만큼은 스크롤바를 이동하지않아도 스크롤바에서 영역에서 차지 하고있기때문에 전체페이지에서 스크롤이동역역을 구하는 지금 문제에선 전체페이지영역에서 스크롤되지않는 페이지영역을빼야 스크롤이 이동되는 전체 페이지영역을 알수있다.
  barElem.style.width = percent+"%"; 
  txtElem.textContent = percent+"%";
}
const init =()=>{
  const tagScollBar = document.querySelector('#scroll-bar');
  const tagTxt = document.querySelector('#txt');
  const tagWrap = document.querySelector('#wrap');
  window.addEventListener('scroll',(e)=>{
    fn_scroll(e, tagScollBar , tagTxt ,tagWrap);
  });
}
window.addEventListener('load',init);