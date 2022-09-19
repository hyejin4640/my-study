"use strict";

// ******************* 객체 가져오기 *************************************************************
const $btnStart = document.querySelector(".start");
const $btnUser = document.querySelector(".input-btn");
const $inputStarts = document.querySelectorAll(".quest > input");
const $inputUsers = document.querySelectorAll(".user > input");
const $history = document.querySelector(".history");
let computer_number = [];
let user_number = [];
let count = 0;

// ******************* 함수정의 *************************************************************

const finish =( txt)=>{
  $history.style.fontSize = '2rem';
  $history.append(txt);
  computer_number.forEach((v,i)=>{
    $inputStarts[i].value = v;
  })
  $btnUser.setAttribute("disabled", "true");
}


const fn_drawResult = (result) => {
  $history.append(result);
  $history.append(document.createElement("br"));
  $inputUsers.forEach((v)=>{
    v.value='';
  })
  // 시도횟수를 모두 마치면...
  if( count > 2){
    const txt = '준비된 시도가 모두 끝났습니다😫';
    document.querySelector('body').style.backgroundColor="gray";
    finish( txt );
  }
};

const fn_confirm = () => {
  let strike = 0;
  let ball = 0;
  let out = 0;
  for (let i = 0; i < computer_number.length; i++) {
    let findNum = computer_number.indexOf(
      user_number[i]
    ); /* 배열에 원소가있다면 인덱스값을 반환 ,없다면-1반환 */
    console.log(findNum);
    if (findNum > -1) {
      // 입력한숫자가 정답에 포함되어있으면
      if (computer_number[findNum] === user_number[findNum]) {
        // 입력한 숫자가 포함되어있으면서 인덱스도 같으면
        strike++;
      } else {
        ball++;
      }
    } else if (findNum === -1) {
      // 입력한 숫자가 포함되어있지않으면
      out++;
    }
  }
// strike 가 3점이면 게임종료 
  if ( strike >= 3){
    finish( answer );
    const answer = '3Strike!! 모두 맞추었습니다😎';
    document.querySelector('body').style.backgroundColor="green";
  }
  const result = `strike=${strike},ball=${ball} , out=${out}`;
  fn_drawResult(result);
  user_number = [];

};

// 랜덤 숫자 3개 생성해서 배열에 담기
const fn_randomNumber = () => {
  while (computer_number.length < 3) {
    const num = Math.floor(Math.random() * 10);
    if (computer_number.includes(num)) {
      continue;
    } else {
      computer_number.push(num);
    }
  }
  console.log( computer_number );
  
};

// "입력"버튼 클릭하면 실행하는 함수
const handlerInputClick = (e) => {
  count++;
  $inputUsers.forEach((v) => {
    // 사용자입력숫자3개를 배열에 담는다.
    if( v.value  ){
      user_number.push(Number(v.value));
    }else{
      window.alert('숫자 3개를 입력해주세요!');
    }
  });
  fn_confirm();
};

const handlerStartClick = () => {
  init();
  $btnUser.removeAttribute("disabled");
};

const init = () => {
  count = 0;
  computer_number=[];
  fn_randomNumber();
  computer_number.forEach((v,i)=>{
    $inputStarts[i].value = '?';
  })
  $history.textContent = '';
  document.querySelector('body').style.backgroundColor="coral";
};
// ******************* 이벤트 등록 *************************************************************
$btnStart.addEventListener("click", handlerStartClick);
$btnUser.addEventListener("click", handlerInputClick);

init();

// 출력 : 1. 시도를 5번했거나 , 정답이면 $inputStarts 3개에 값을 출력 
