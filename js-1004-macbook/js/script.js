"use strict";


// 함수정의 --------------------------------------------------------
const setCurrentScene =()=>{
  yOffset =window.pageYOffset || window.scrollY;
  let total = 0;
  for( let i=0; i<sceneInfo.length; i++){
    total += sceneInfo[i].scrollHeight;
    //  console.log( total , yOffset );
  if( total >= yOffset ){
    currentScene =i;
    break;
  }
  }
}

const handlerScroll =()=>{
  yOffset = window.pageYOffset || window.scrollY;
 console.log( scrollY );
}


const setSecHeight =()=>{
  for(let i=0; i<sceneInfo.length; i++){
    sceneInfo[i].scrollHeight = sceneInfo[i].heightCnt * window.innerHeight;   /* 높이값 설정 */
    sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + 'px'; /* 높이값 css적용 */
  }
  setCurrentScene();
  // console.log( currentScene );
}


const init =()=>{
  setSecHeight(); // 각각의 섹션의 height 설정
  window.addEventListener('scroll',handlerScroll); // 초기화
}



window.addEventListener('load',init);