"use strict";

let yOffset= 0;  /* window.pageYoffset 정보 */
let currentScene = 0;  /* 현재 활성화된 section */
const sceneInfo = [
{
  //section-0
  heightCnt : 5,   /* window.innerHeight의 몇배로 height값 설정*/
  scrollHeight :0,   /* section의 height값의초기값 (script파일에서 위에 값과 * innerheight값을 설정해줌) */
  objs : {
    container : document.querySelector('#scroll-section-0'),
  }
},
{
  //section-1
  heightCnt : 3,
  scrollHeight :0,
  objs : {
    container : document.querySelector('#scroll-section-1'),
  }
},
{
  //section-2
  heightCnt : 4,
  scrollHeight :0,
  objs : {
    container : document.querySelector('#scroll-section-2'),
  }
},
{
  //section-3
  heightCnt : 5,
  scrollHeight :0,
  objs : {
    container : document.querySelector('#scroll-section-3'),
  }
},
]

