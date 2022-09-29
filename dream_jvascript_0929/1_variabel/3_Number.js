// number 숫자형 타입
// js는 실수,음수,정수를구분하지않고 "number형" 안에 다넣어줌
let num1 = 1;      //정수
let num2 = 1.0;     //실수
                               //BUT,JS는 구분하지않고 실수형으로 처리가된다.
if (num1 === num2){           //===타입까지 같다는 의미               
  console.log('TRUE'); 
}


let integer = 123;   //정수
let negarive = -123; //음수
let double = 1.23;  //실수

console.log(integer);
console.log(negarive);
console.log(double);

let binary = 0b1111011;    //2진수
let octal = 0o173;    //8진수
let hex = 0x7b;      //16진수

console.log(binary);
console.log(octal);
console.log(hex);

// 숫자를 0 으로 나누었을때 유의사항!!
console.log(0/123);    //0
console.log(123/0);    // Infinity==무한대
console.log(123/-0);   //-Infinity==무한대
console.log(123/'text');  // NaN (Not a Number)
//메모리유효범위를 넘어서는 숫자로 표현했을때 nan이나온다.


// 정말 큰수를 담을시 끝에n을붙임
let bigint = 123456789032493280498230982390482398429393829n;
console.log(bigint);