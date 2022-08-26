const $slide = document.querySelector(".slide");
const $slideList = document.querySelector(".slide-list");
const $prevButton = document.querySelector(".prev");
const $nextButton = document.querySelector(".next");
const $Imgs = document.querySelectorAll(".slide-list > img");
const $circle = document.querySelector(".circle");
let $dot;
const SLIDE_LEN = $Imgs.length;
const IMG_WIDTH = $Imgs[0].clientWidth;
const SLIDE_SPEED = 100;
let currentIdx = 0;

// ------ prev 버튼을 클릭했을때-----------------
const handlerClickPrev = (e) => {
  currentIdx--;
  if (currentIdx < 0) {
    // currentIdx = 0;
    setTimeout(() => {
      $slideList.style.transition = "0";
      $slideList.style.transform = `translateX(-${SLIDE_LEN * IMG_WIDTH}px)`;
    }, SLIDE_SPEED);
    currentIdx = SLIDE_LEN - 1;
  }
  // if (currentIdx === 0) {
  //   $prevButton.setAttribute("disabled", "true");
  // }
  // $nextButton.removeAttribute("disabled");
  if (currentIdx >= 0) {
    $slideList.style.transition = SLIDE_SPEED + "ms";
    $slideList.style.transform = `translateX(-${
      IMG_WIDTH * (currentIdx + 1)
    }px)`;
  }

  drawClickDot($dot[currentIdx]);
};
// ------ next 버튼을 클릭했을때-----------------
const handlerClickNext = (e) => {
  currentIdx++;
  if (currentIdx > SLIDE_LEN - 1) {
    // currentIdx = SLIDE_LEN-1 ;
    setTimeout(() => {
      $slideList.style.transition = SLIDE_SPEED + "ms";
      $slideList.style.transform = `translateX(-${IMG_WIDTH}px)`;
    }, SLIDE_SPEED);
    currentIdx = 0;
  }
  // if (currentIdx === SLIDE_LEN - 1) {
  //   $nextButton.setAttribute("disabled", "true");
  // }
  // $prevButton.removeAttribute("disabled");
  if (currentIdx <= SLIDE_LEN ) {
    $slideList.style.transition = SLIDE_SPEED + "ms";
    $slideList.style.transform = `translateX(-${
      IMG_WIDTH * (currentIdx + 1)
    }px)`;
  }
  drawClickDot($dot[currentIdx]);
};

const getChildIndex = (obj) => {
  const elem = obj.parentNode.childNodes;
  console.log(elem);

  for (let i = 0; i < elem.length; i++) {
    if (elem[i] === obj) {
      return i - 3;
    }
  }
  return -1;
};

const drawClickDot = (obj) => {
  const curDot = document.querySelector(".dot-active");
  curDot.classList.remove("dot-active");
  obj.classList.add("dot-active");
};

const handlerClickDot = (e) => {
  let obj = e.target;
  drawClickDot(obj);
  // const curDot = document.querySelector(".dot-active");
  // curDot.classList.remove("dot-active");
  // obj.classList.add("dot-active");
  getChildIndex(obj);
  currentIdx = getChildIndex(obj);
  console.log(currentIdx);
  if (currentIdx < 0) currentIdx = 0;
  $slideList.style.transform = `translateX(-${IMG_WIDTH * (currentIdx+1) }px)`;
};

const createElemDot = (num) => {
  for (let i = 0; i < num; i++) {
    const tagdot = document.createElement("p");
    tagdot.classList.add("dot");
    $circle.appendChild(tagdot);
  }
  $dot = document.querySelectorAll(".dot");
  $dot.forEach((v, i) => {
    if (i === 0) {
      v.classList.add("dot-active");
    }
    v.setAttribute("data-idx", i);
    v.addEventListener("click", handlerClickDot);
  });
};
// 1번 이미지와 5번이미지를 양끝에 복제해서 붙이는 함수
const cloneImage = () => {
  const firstNode = $slideList.firstElementChild;
  const lastNode = $slideList.lastElementChild;
  const cloneFirst = firstNode.cloneNode(true); //복제 메소드
  const cloneLast = lastNode.cloneNode(true); //복제 메소드
  $slideList.appendChild(cloneFirst);
  $slideList.insertBefore(cloneLast, firstNode);
};

const init = () => {
  $prevButton.addEventListener("click", handlerClickPrev);
  $nextButton.addEventListener("click", handlerClickNext);
  createElemDot(SLIDE_LEN);
  cloneImage();
};
init();
