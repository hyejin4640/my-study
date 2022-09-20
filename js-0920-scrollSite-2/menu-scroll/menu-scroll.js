'use strict';
const tagScrollBar = document.querySelector('.scroll-bar');


// ********************함수정의 ***********************************
const scrollBarWidth =( percent )=>{
  tagScrollBar.style.width = percent+"%";
}
const menuScroll =( percent , tagA_list )=>{
  if( percent < 25){
    tagA_list[0].classList.add('nowMenu');
  }else if( percent >= 25 && percent <50){
    tagA_list[1].classList.add('nowMenu');
  }else if ( percent >=50 && percent < 75){
    tagA_list[2].classList.add('nowMenu');
  }else if( percent >=75 && percent <100){
    tagA_list[3].classList.add('nowMenu');
  }
}
const handlerScroll=(e, tagA_list)=>{
  const totalPage= document.querySelector('.wrap').offsetHeight;
  const viewPage  = window.innerHeight;
  const scrollTop = window.scrollY;
  const realScrollPage = totalPage-viewPage;
  const percent =  Math.floor((scrollTop / realScrollPage )*100);
  scrollBarWidth(percent);
  menuScroll( percent ,tagA_list );
  
  
}
const init =()=>{
  window.addEventListener('scroll',(e)=>{
    const tagA_list = document.querySelectorAll('nav a');
    handlerScroll(e,tagA_list)
  } )
}

// ************ 이벤트 등록 ***************************************
window.addEventListener('load', init);