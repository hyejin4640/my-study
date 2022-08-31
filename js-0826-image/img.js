"use strict";

const $slide = document.querySelector(".slide");
const $slideList = document.querySelector(".slide-list");
const $prevButton = document.querySelector(".prev");
const $nextButton = document.querySelector(".next");
const $Imgs = document.querySelectorAll(".slide-list > img");  // images를 리스트형식으로 여러개 갖고옴
const $circle = document.querySelector(".circle");
const $play = document.querySelector(".play-btn > .play");
const $stop = document.querySelector(".play-btn > .stop");
const $bg = document.querySelector(".bg");
const SLIDE_LEN = $Imgs.length;
const IMG_WIDTH = $Imgs[0].clientWidth;
let currentIdx = 0;
const MOVE_TIME = 300;
let IntervalId;
let check = false;
let dot_list;
// *************************************************************************************


const dotSlide=( i )=>{
  $slideList.style.transition= MOVE_TIME+'ms';
  $slideList.style.transform = `translateX(-${IMG_WIDTH * ( i +1 )}px)`;
  currentIdx = i;
}

const dotAddRemoveClass =(obj )=>{
  const tgRemove = document.querySelector('.dot-active');
  tgRemove.classList.remove('dot-active');
  for(let i=0; i<dot_list.length; i++){
    if( dot_list[i] === obj ){
     dot_list[i].classList.add('dot-active');
     dotSlide( i );
    }
  }
 
}

const dotTatget = (e)=>{
  let obj = e.target;
  dotAddRemoveClass( obj );
}

const createDot =()=>{
  $Imgs.forEach((v,i)=>{
    const dot = document.createElement('p');
    $circle.appendChild(dot);
    dot.classList.add('dot');
    dot.addEventListener('click' ,dotTatget  );
    
  })
 dot_list = document.querySelectorAll('.dot');
dot_list[0].classList.add('dot-active');

}

const prevClick =()=>{
  currentIdx --;
  if( currentIdx >= -1 ){
    $slideList.style.transition= MOVE_TIME+'ms';
    $slideList.style.transform = `translateX(-${IMG_WIDTH * (currentIdx + 1)}px)`; 
  }
  if( currentIdx === -1){
   setTimeout(()=>{
    $slideList.style.transition= '0ms';   // 위치가옮겨지는 행동의 속도는 0을 둔다.
    $slideList.style.transform = `translateX(-${IMG_WIDTH * SLIDE_LEN}px)`;   
   },MOVE_TIME);
   currentIdx = SLIDE_LEN-1;
  }
 dotAddRemoveClass( dot_list[currentIdx] );
}

const nextClick =()=>{
  currentIdx++;
  if( currentIdx <= SLIDE_LEN ){
    $slideList.style.transition= MOVE_TIME+'ms'
    $slideList.style.transform = `translateX(-${IMG_WIDTH * (currentIdx + 1)}px)`; 
  }
  if( currentIdx === SLIDE_LEN ){
    setTimeout(()=>{
      $slideList.style.transition= '0ms';
      $slideList.style.transform = `translateX(-${ IMG_WIDTH }px)`; 
    },MOVE_TIME)
    currentIdx = 0;
  }
  dotAddRemoveClass( dot_list[currentIdx] );
}


const cloneImage =()=>{
  const firstNode = $slideList.firstElementChild.cloneNode(true);
  const lastNode = $slideList.lastElementChild.cloneNode(true);
  $slideList.insertBefore( lastNode,$slideList.firstElementChild);
  $slideList.appendChild(firstNode);
  
}

const init =()=>{
  createDot();
  cloneImage();
}

const playImgSlide =()=>{
  IntervalId = setInterval(() => {
    nextClick();
  }, 2000);
}
const stopImgSlide=()=>{
  clearInterval( IntervalId);
}

const changeBGColor =()=>{
  if ( check){
    document.querySelector('body').style.backgroundColor = "#ffffff";
    check = false;
  }else{
    document.querySelector('body').style.backgroundColor = "#000000";
    check= true;
  }
}
// *************************************************************************************

$prevButton.addEventListener('click', prevClick);
$nextButton.addEventListener('click', nextClick);
$play.addEventListener('click', playImgSlide );
$stop.addEventListener('click', stopImgSlide );

$bg.addEventListener('click', changeBGColor );
init();