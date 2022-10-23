const tagNavMenu = document.querySelector('.nav-menu');
const tagNavBar = document.querySelector('.nav-bar');
const tagHello = document.querySelector('.hello');
const tagArticle = document.querySelectorAll('article');

// 소개멘트의 애니메이션 함수
const introTxtAnimate = () => {
  new TypeIt(".hello", {
    speed: 50,
    startDelay: 800,
  }).go();
}




// navbar click fn
const handlerNavBarClick = (e) => {
  tagNavMenu.classList.toggle('nav-open');
}

const init = () => {
  introTxtAnimate();
  marqueeText_init();
  tagNavBar.addEventListener('click', handlerNavBarClick);
  window.addEventListener('scroll', () => {
    handlerMarqueeScroll()
    handlerScWebScroll()
  })
}
window.addEventListener('load', init)