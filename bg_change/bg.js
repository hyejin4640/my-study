'use strict';
const $smallWrap = document.querySelector('.smallWrap');
const $wrap = document.querySelector('.wrap');
const $section = document.querySelectorAll('section');
const moveTime = 3000;
let idx = 1;
const MAX = $section.length; /* 3 */
const $btnlist = document.querySelectorAll('.btn > p');


// 이미지의 개수가 clone으로 이미지를 복사해서 생성했는데 이미지의 리스트의 lenght값은 변화가 없는데
// 함수바ㄲ의 변수는 자동으로 값이 저장되지않는것인가?
// const slideInterval = () => {
//   idx++;
//   setInterval(() => {
//     console.log(idx);
//     $smallWrap.style.transition = '500ms';
//     $smallWrap.style.left = idx * (-100) + "%";
//   }, moveTime);

/* init() 함수는 호출이 웹브라우저를 시작할때 한번호출되니까 idx도 증가를 한번만 하는걸까?
setInterval함수는 계속 진행되어도 idx를 증가시키는 함수는 한번밖에 호출이 안되었으니까?? */
// }

const btnBgChange =(idx)=>{
  document.querySelector('.dot').classList.remove('dot');
  $btnlist[idx].classList.add('dot');
}


const setIntervalSlide = () => {
  idx++;
  if (idx <= MAX + 1) {
    $smallWrap.style.transition = '1s';
    $smallWrap.style.left = idx * (-100) + "%";
  }
  if (idx === MAX + 1) {
    idx = 1;
    setTimeout(() => {
      $smallWrap.style.transition = '0ms';
      $smallWrap.style.left = idx * (-100) + "%";
    }, 1000);
  }
  btnBgChange(idx-1);
  // console.log(idx);
}

const slideInterval = () => {
  // setInterval을 이용해 반복적으로 슬라이드하는 함수가 호출되도록함
  setInterval(() => {
    setIntervalSlide();
  }, moveTime);
}

const createSection = () => {
  const firtstSection = $smallWrap.firstElementChild;
  const lastSection = $smallWrap.lastElementChild;
  const cloneFirst = firtstSection.cloneNode(true);
  const cloneLast = lastSection.cloneNode(true);
  $smallWrap.appendChild(cloneFirst);
  $smallWrap.insertBefore(cloneLast, firtstSection);
}

const btnClick = (e) => {
  
}

const init = () => {
  createSection();
  slideInterval();
}
init();


// *********************이벤트 등록 *********************************
for (let i = 0; i < $btnlist.length; i++) {
  $btnlist[i].addEventListener('click', btnClick);
}