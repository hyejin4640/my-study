/** 객체가져오기 *************************************************/
 'use strict';

const tagCards = document.querySelectorAll('.card p');
const cardLeght = tagCards.length;
let randomNums = [];
let choice5 =[];
const level =5;
const color = ['red', 'purple' , 'yellow','pink','aqua'];



const fn_close =()=>{
  for ( let i=0; i<level; i++){
    setTimeout(() => {
      tagCards[randomNums[i]].style.backgroundColor='lightskyblue';
    },3500 );
   }
  //  console.log('끝');
   
}

const fn_start =()=>{
  for ( let i=0; i<level; i++){
  setTimeout(() => {
      tagCards[randomNums[i]].style.backgroundColor=color[i];
      
    },(500*i)+500 );
  }
   
   fn_close(); 
// setTimeout : 시간이 지정된후에 순서대로 함수가 실행되는게아니라 지정한 시간별로 반복문에 의해 한번에 실행되어있는상태이다
// 시간 순서대로 setTimeout이 실행되는게 아니라 이미 동시에 시간별로 진행이되고있는데 i 라는 변수를사용해 실행되는 시간을 늘려서 반복하는것뿐이다.
}

const fn_randomNum =()=>{
  while (level > randomNums.length) {
    let num = Math.floor(Math.random()*10);
    if ( randomNums.includes(num)){
      continue;
    }else{
      randomNums.push(num);
      console.log(num);
      
    }
  }

fn_start();
}



const init=()=>{
fn_randomNum();
}


window.addEventListener('load',init);