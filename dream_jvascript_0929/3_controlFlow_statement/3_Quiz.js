//퀴즈 !
//num의 숫자가 짝수면👍홀수면👎를 출력
let num = 5;

//if
if (num % 2 === 0) {
  console.log("👍");
} else {
  console.log("👎");
}

//ternary
num % 2 === 0 ? console.log("👍") : console.log("👎");

//변수선인및할당으로 ternary operator사용
let goodBad = num % 2 === 0 ? "😊" : "😒";
console.log(goodBad);
