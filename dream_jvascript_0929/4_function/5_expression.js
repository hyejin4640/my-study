// ✔️함수 선언문 function name() {}
// ✔️함수 표현식 const name = function     //표현식은 값을 할당까지하는 문장
// ✔️화살표 함수 const name = () => {}
// 함수도 object(객체) 이기때문에다른 변수에 할당하거나 재할당하는게 가능하다.
// 함수표현식에선 함수이름은 생략 : 함수표현식에선 함수이름은 외부에선 접근불가

//✔️  함수표현식
let add = function (a, b) {
  return a + b;
};
//먼저 function 으로 시작하는 실행문 이 메모리에 만들어진다. 그리고 그 메모리주소가 add라는변수에 할당된다.
console.log(add(1, 2)); //add를호출해서 1,2를 인자로 전달한다(arggument)

//함수표현식의 함수 이름은 외부에서는 접근불가
let min = function sub(a, b) {
  return a - b;
};
// console.log(sub(2, 1)); <- error 발생
console.log(min(2, 1));

//✔️ 화살표 함수
// arrow function expression
let mul = (a, b) => {
  return a * b;
};
console.log(mul(2, 2));

//화살표함수인데 return값없이 더간단히 표현도 가능
// mul = (a,b) => a+b;

// ✔️생성자함수 const object = new Function();  //➡️5.object > 5_create.js 에서 다룸

// ✔️IIFE (Immediately-Invoked Function Expressions 즉각적으로 호출되는 함수표현식)
(function run() {
  console.log("😶");
})();
