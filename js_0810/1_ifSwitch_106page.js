let cond = true;
let value = "";

// 💛 if 문
// if (cond){
//   value = "참";
// }else{
//   value = "거짓";
// }
// console.log(value);

// 💛 삼항연산자 
// 변수에 저장하면서 참과거짓의 조건중에 하나를 저장할때 사용함
value = (cond) ? "참" : "거짓";
console.log(value);

// 홀짝 판별 값을 변수에 저장해서 출력해보기 ( 삼항연산자 사용해서)
let num = 5;
let oddQ = (num % 2) ? "홀수" : "짝수";
console.log(oddQ);
console.log(num % 2 ? "홀수" : "짝수");

 

// 💛 switch 문
// switch (cond) {
//   case true:
//     value = "참";
//     break;
//   default:
//     value = "거짓";
//     break;
// }
// console.log(value);
