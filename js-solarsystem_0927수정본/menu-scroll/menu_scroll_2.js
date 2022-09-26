'use strict';
//객체가져오기 --------------------------------------------------------------------------------
const tagSec = document.querySelectorAll('section');
const tagMenu = document.querySelector('nav');
const secPos = [];
const totalpage = document.documentElement.scrollHeight;

// 함수정의 --------------------------------------------------------------------------------
// section의 offsetTop값이 뷰포트의 절반값을뺀 값들을 배열에 저장하는 함수
const saveSectionPos =()=>{
  tagSec.forEach((elem,idx)=>{
    console.log( elem.offsetTop);
    secPos[idx]=elem.offsetTop-(window.innerHeight*0.5);
    
  })
secPos[tagSec.length] = document.documentElement.scrollHeight;  /*handleryScroll 함수의 if문 조건에서 && 마지막조건이 배열의 마지막값보다는 스크롤값이 작아야 실행하는 구문이들어있어
 배열에 마지막에 전체스크롤값에 해당하지않는 넘어가는 값을 지정해 넣어줌 */
 console.log( secPos);
    
}

// 메뉴에 클래스를 추가하고 빼주는 함수
const setMenuActive =(idx)=>{
  const prevObj = document.querySelector('.active');
  prevObj.classList.remove('active');
  tagMenu.children[idx].classList.add('active');
}

// 스크롤했을때 실행하는 함수
const handlerScroll =()=>{
  const scroll = window.pageYOffset || window.scrollY;
  console.log("scroll:", scroll , scrollY );  //둘의 값이 같음
  tagSec.forEach((elem,idx)=>{
    if ( scroll >= secPos[idx] && scrollY < secPos[idx+1]){
      //만약 스크롤바를내린값이더크거나같으면 각섹션의offsetheight값- 뷰포트절반값을 뺀값보다
      // 스크롤바를 내린값이 다음 섹션의 뷰포트절반에위치값보다 작으면 현재 섹션의 인덱스번호를 
      // 클래스를 지정하는 함수에 전달한다
      setMenuActive(idx);
    }
  })
}

// 이벤트등록--------------------------------------------------------------------------------
const init =()=>{
  saveSectionPos();
  window.addEventListener('scroll',handlerScroll );
}
window.addEventListener('load',init)
