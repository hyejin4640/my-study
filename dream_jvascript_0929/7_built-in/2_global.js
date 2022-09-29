// 전역 객체 & 함수 & 속성
// object(객체)를 통하지않고 함수 그자체, 속성 그자체로 사용할수있는 것 => global

console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)");
console.log(isFinite(1)); //숫자가 유한한지 아닌지
console.log(isFinite(Infinity)); //무한대이기때문에 false가나옴

console.log(parseFloat("12.43")); //문자열이지만 소수와 형태가같아면 소수로 변환
console.log(parseInt("12.43")); //문자열이지만 정수로 변환

// URL (URI, Uniform Resource Idenifier 하위개념)
// 아스키 문자로만 구성되어야함
// 한글이나 특수문자는 이스케이프 처리를 해야함
const URL = "http://드림코딩.com";
const encoded = encodeURI(URL); // encodeURI => 아스키문자가아닌걸 이스케이프 처리하는함수
console.log(encoded); // 변수endoded 에 담아 출력해봄

const decoded = decodeURI(encoded); //이스케이프처리한url주소를 다시 원본으로 되돌리는 함수
console.log(decoded); //변수 decoded 에 담아 출력함

//전체 URL이 아니라 부부적인 것은 Component이용
const part = "드림코딩.com";
console.log(encodeURIComponent(part));
