/* 논리연산자 Logical Operater */

// && and - 모든조건이 true
// || or - 조건중에 하나라도 true
// ! 부정(단항연산자에서 온것)
// !! boolean값으로 변환-참인지 거짓인지 판별(단항연산자 응용버전)

let num = 4;
if (num >= 0 || num < 20) {
  console.log("👍");
}
if (num != 8) {
  console.log("💕");
}

// &&
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// ||
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

// !
console.log(!"text"); //false
console.log(!!"text"); //true
