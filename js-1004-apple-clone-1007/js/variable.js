"use strict";

let yOffset = 0; /* window.pageYoffset 정보 */
let currentScene = 0; /* 현재 활성화된 section */
const sceneInfo = [
  {
    //section-0
    heightCnt: 5 /* window.innerHeight의 몇배로 height값 설정*/,
    scrollHeight: 0 /* section의 height값의초기값 (script파일에서 heightcnt 값과 * innerheight값을 설정해줌) */,
    objs: {
      container: document.querySelector("#scroll-section-0"),
      msgA : document.querySelector('#scroll-section-0 > .a'),
      msgB : document.querySelector('#scroll-section-0 > .b'),
      msgC : document.querySelector('#scroll-section-0 > .c'),
      msgD : document.querySelector('#scroll-section-0 > .d'),
    },
    values : {
      // msgA_opacity_in : [0,1,{ start:0.2 , end : 0.3 }],
      // magA_position_in : [30,0,{start:0.1 , end : 0.3 }],
      // masA_opacity_out : [1,0,{ start:0.3 , end : 0.4 }],
      // masA_position_out : [0,-30,{ start:0.3 , end : 0.4 }],
      msgA_opacity_in : [0,1],
      magA_position_in : [30,0],
      masA_opacity_out : [1,0],
      masA_position_out : [0,-30],
    },
    imgCount : 117,
  },
  {
    //section-1
    heightCnt: 2,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-1"),
    },
  },
  {
    //section-2
    heightCnt: 4,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-2"),
    },
  },
  {
    //section-3
    heightCnt: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-3"),
    },
  },
];
