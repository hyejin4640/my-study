const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); //number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);

//사용예 = 숫자인지 아닌지
if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}

// 지수 표기법 (매우크거나 작은숫자를 표기할때 사용 , 10의 n승으로 표기 )
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); //실수 -> 정수 -> 문자열로반환

console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG")); //해당언어로 표기하는 메소드(아라빅언어)

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법

console.log(Number.EPSILON); // 0과  1사이에서 나타낼수있는 가장 작은 숫자
//2.220446049250313e-16
// 0 보다는 크고 1보다는 작은게 맞은지 확인하기!
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(`true`);
} else {
  console.log("false");
}
const num = 0.1 + 0.2 - 0.2;
console.log(num); //0.10000000000000003
//우리는 10진수로 계산
//js는 2진수로 더하고빼서 다시 10진수로 반환 중 작은 오차가발생

// function isEqual(original, expected) {
//   return original === expected;
// }

// 위 num => 0.10000000000000003 은 0.1 과 아주작은 차이로 false가나온다
//이런 미세한 차이를 간주하고싶지않다면, 둘을 같다고 칭하고싶다면...
function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}

//비교하는 2개의값이 같은지검사하는함수
// 2개를 - 하면 같으면 0 이나오니까 빼주었고(-값이되지않도록 절대값함수사용),
//그 작은 미세한 차이가 0보다는크고1보다는 작은지 안작은지 검사하게함
// < 비교연산자는  값으로 비교해서 true || false 를 검사해줌
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1)); //위에 주석을 단함수를 사용하면 둘은 같지않다고나옴//
// 위 num => 0.10000000000000003 은 0.1 과 아주작은 차이로 false가나온다
//이런 미세한 차이를 간주하고싶지않다면, 둘을 같다고 칭하고싶다면...위에
//isEqual 함수를 다시만들어서 식을 세움
