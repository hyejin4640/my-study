// card 12 개생성 - wrap안에 위치
// card-f, card-b 를 생성 - card 안에 위치
"use strict";

const $wrap = document.querySelector('#wrap');
const TOTAL =12;
const color_list=[]

const randomColor=()=>{
  const color = ['red', 'purple' , 'yellow','pink','aqua','green'];
  const totalcolors = color.concat(color);
  for ( let i=0; i<TOTAL; i++){    
    const pick = Math.floor(Math.random()*totalcolors.length);
    color_list.push( totalcolors[pick]);
    totalcolors.splice(pick,1);
  }

}
/* color=none 은 매개변수가 들어오지않을때 기본값으로 설정함 */
const createDiv =( divClass, color="none" )=>{
  const divElem = document.createElement('div');
  divElem.classList.add( divClass );
  divElem.style.backgroundColor = color;
  return divElem;   //return : 함수를 호출한곳으로 다시 값을 가지고 되돌아간다
}


const creatCardElem = ()=>{
  for(let i=0; i< TOTAL; i++){
    const front = createDiv( 'card-front' , color_list[i] );   //함수안에서 return 값이있으니까 반환된 즉 생성된 태그가 변수에 저장됨
    const back = createDiv( 'card-back', 'blue' );
    const card = createDiv( 'card' );
    card.appendChild(front);  
    card.appendChild(back);    //파랑
    $wrap.appendChild(card);
  }

}

const init =()=>{
  randomColor();
  creatCardElem();

}

init();