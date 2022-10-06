"use strict";

// 함수정의 --------------------------------------------------------
// 새로고침 하면  현재활성화된section이 누구인지index를 담고있는 currnetScene의 값을 초기화시킨다.
const setCurrentScene = () => {
  yOffset = window.pageYOffset || window.scrollY;
  let total = 0;
  for (let i = 0; i < sceneInfo.length - 1; i++) {
    total += sceneInfo[i].scrollHeight;
    //  console.log( total , yOffset );
    if (total >= yOffset) {
      currentScene = i;
      break;
    }
  }
};


const calc_values = (values , ratio)=>{
  let calc=0;
  calc = ratio *(values[1]-values[0])+values[0];
  return calc;
}


const sectionAniPlay = (prevHeight) => {
  const currentYoffset = yOffset - prevHeight; /* 현재섹션에서의 스크롤 위치값 */
  let scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;   /* 선택값 / 전체 */
  // console.log( scrollRatio );

  const tagObjs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;
  switch (currentScene) {
    case 0: //section-0
      if( scrollRatio <= 0.2){
        tagObjs.msgA.style.opacity = calc_values(values.msgA_opacity_in , scrollRatio );
      }else{
        tagObjs.msgA.style.opcity = calc_values(values.msgA_opacity_out, scrollRatio );
      }
      break;
    case 1: //section-1
      break;
    case 2: //section-2
      break;
    case 3: //section-3
      break;

  }
};



//스크롤이 발생될때 현재 보여지는 section을 가르키는 idx 값을 가져오도록 함.
const handlerScroll = () => {
  const yOffset = window.pageYOffset || window.scrollY;
  let prevHeight = 0;
  for (let i = 0; i < currentScene; i++) {
    prevHeight += sceneInfo[i].scrollHeight;
  }
  if (yOffset > prevHeight + sceneInfo[currentScene].scrollHeight) {
    currentScene++;
  }
  if (yOffset < prevHeight) {
    currentScene--;
  }
  // console.log( currentScene);
  document.body.setAttribute("id", `show-section-${currentScene}`);
  sectionAniPlay( prevHeight );
};



const setSecHeight = () => {
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].scrollHeight =
      sceneInfo[i].heightCnt * window.innerHeight; /* 높이값 설정 */
    sceneInfo[i].objs.container.style.height =
      sceneInfo[i].scrollHeight + "px"; /* 높이값 css적용 */
  }
  setCurrentScene();
  // console.log( currentScene );
};

const init = () => {
  setSecHeight(); // 각각의 섹션의 height 설정
  window.addEventListener("scroll", () => {
    handlerScroll();
  });
};

window.addEventListener("load", init);
window.addEventListener("resize", setSecHeight); /* resize되면 실행해라. */

// 사용자가 일으키는 이벤트와 브라우저가 일으키는 이벤트를 구분해서 표시해주기!!!
