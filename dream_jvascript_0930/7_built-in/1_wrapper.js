// 래퍼 객체 ( wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; //number 원시 타입
console.log(number.toString()); // number 원시타입을 감싸고있는  Number 객체로 감싸짐
console.log(number); //number 원시타입

const text = "text"; // string 문자열 원시타입
console.log(text); //string 객체
text.length;

// wrapping => rapping 한다, 감싼다
//그럼애초에 문자열이나 인티저 등등 원시타입을 객체로 만들지 왜?
//이유는: 객체는 속성과기능이 모두합쳐잇어 메모리를 많이차지한다. 어플리케이션 실행시 무거워짐
// 즉 데이터를 그냥 담을때는 원시타입으로 상용하다 기능을 쓰고싶으면 객체로감싸져서 기능을 사용할수있다
