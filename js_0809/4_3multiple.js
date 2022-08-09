/**
 * 3의 배수검사기
 * 사용자로부터 숫자를 입력받아 3의배수이면 "3의 배수입니다"
 * 아니면 "3의 배수가 아닙니다"  출력해주세요
 */

// 다큐먼트 객체 가지고오기
let userNumber = parseInt(prompt("숫자를 입력하세요"));
// let value= userNumber %3;
const elemDiv = document.querySelector(".output");
console.log(elemDiv);



// value
// 조건식이 무조건 비교연산자만으로 조건을 정할수있는건아니다!!!
// false값 ,  true 값을 넣어서 조건을 만들어주어됨
if(userNumber){
  if(userNumber % 3){
    // 나눈나머지의값이 0이면 0 자체는false값이니까 false영역인else에 출력문을 넣으면된다
    elemDiv.innerText = `${userNumber}은 3의 배수가아닙니다❗`;
  }else{
    elemDiv.innerText =`${userNumber}은 3의 배수입니다😊` ;
  }
}else if (userNumber ===0){
  elemDiv.innerText = `입력하신 숫자는 0 입니다.`
}else{
  elemDiv.innerText = `❗❗❗ 숫자가 아닙니다 ❗❗❗`
}

//삼항연산자
// value = (userNumber % 3) ? '3의배수가아니다':'3의배수이다';
// console.log(value);
