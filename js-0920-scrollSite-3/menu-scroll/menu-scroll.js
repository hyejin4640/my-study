'use strict';
const tagScrollBar = document.querySelector('.scroll-bar');
const tagSection = document.querySelectorAll('main section');

// ********************함수정의 ***********************************
const scrollBarWidth = (percent) => {
  tagScrollBar.style.width = percent + "%";
}
const removeClass = (tagA_list) => {
  tagA_list.forEach((a) => {
    a.classList.remove('nowMenu');
  })
}
const menuScroll = (percent, tagA_list) => {
  tagSection.forEach((elem, idx) => {
    const elemTop = elem.getBoundingClientRect().top;
    if (elemTop <= window.innerHeight/2) {
      removeClass(tagA_list);
      tagA_list[idx].classList.add('nowMenu');
    }
  })
}
const handlerScroll = (e, tagA_list) => {
  const totalPage = document.querySelector('.wrap').offsetHeight;
  const viewPage = window.innerHeight;
  const scrollTop = window.scrollY;
  const realScrollPage = totalPage - viewPage;
  const percent = Math.floor((scrollTop / realScrollPage) * 100);
  scrollBarWidth(percent);
  menuScroll(percent, tagA_list);


}
const init = () => {
  window.addEventListener('scroll', (e) => {
    const tagA_list = document.querySelectorAll('nav a');
    handlerScroll(e, tagA_list)
  })
}

// ************ 이벤트 등록 ***************************************
window.addEventListener('load', init);