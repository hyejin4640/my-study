// if문 & swith문


if(5 < 3) {
  // 참일때 명령문
  console.log("🤩맞습니다");
}else if ( 4 > 8){
  console.log("💦4보다 당연크죠");
}else{
  // 거짓일때 명령문
  console.log(" ☠ 둘다 아닙니다");
}

// null은 변수 초기값설정시 
let check="";
// ""  -> false
// NaN -> false
// null -> false
// undefined ->false
// 숫자는 0빼고는 다 true
// " " -> true
// -5  -> true
if(check){
  console.log("true");
}else{
  console.log("false");
}

/**
 * switch - case문
 * 
 * switch(조건문){
 * case 값1 :    //조건문장 값 === 값1
 *      명령문장;
 *      break;    //continue; 
 *      ->switch문에 해당되는 속성만이 아니라 단독으로 사용된다
 *   }
 */

// if 문
let subject = 'js';
// C , javascript, java , 아무것도 아닐경우
if(subject == 'C'){
  console.log('c언어 입니다.');
}else if (subject == 'js'){
  console.log('javascript 입니다');
}else if ( subject == 'java'){
  console.log('java언어 입니다');
}else{
  console.log('선택언어 없습니다.');
}

// switch 문
// 조건식이아니라 switch문의 넣은값이 case들중 하나이면 실행해라

let subject2 = 'js';
switch(subject2){
  case 'C':
    console.log('c언어 입니다.');
    break;
  case 'js':
    console.log('javascript 입니다.');
    break;
  case 'java':
    console.log('java언어 입니다.');
    break;
  default:
    console.log('선택언어 없습니다.');
    break;
}

// break문 -> 블럭구간의 나머지 수행문을 수행하지않고 블럭을 나온다,블럭 === {}

/**
 * 5의 배수일 경우에는 5의 배수입니다를 출력
 * 아닐경우는 5의 배수가 아닙니다 출력
 */

let n =8;
let num = n % 5;
// 1번째 방법
switch (num) {
  case 0:
    console.log("5의 배수 입니다");
    break;
  default :
    console.log("5의 배수가 아닙니다");
    break;
}
// 2번째 방법
switch(num){
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('5의 배수가 아닙니다');
    break;
  default :
   console.log('5의배수 입니다');
   break;
}
