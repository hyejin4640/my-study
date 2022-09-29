//object란 ? 서로 연관있는 properties(속성) 과 method,function(기능)  의 하나의 묶음

/**
 * object 생성법
 * 1. Object literal {key : value}
 * 2. new Object()
 * 3. Object.create();
 */

// key - 문자 ,숫자 , 문자열, 심볼
// value - 원시값 , 객체 (함수)

let apple = {
  name: "apple",
  helloBye: "👅",
  /*밑에 표기법도 다가능하지만 보통위2개형식을 많이씀*/
  // "hello-bye": "👅",
  // 0: 1,
  // ["hello-bye"]: "👅",
};

// 속성, 데이터에 접근하기 위해서는
console.log( apple.name); //->  마침표 표기법(dot notation)
console.log( apple["hello-bye"]); //-> 대괄호 표기법(bracket notation)
apple["name"];

//속성 추가
// key 가있으면 있는값을 출력, 없으면 생성함
apple.emoji = "🍎";
console.log(apple["emoji"]);
console.log(apple.emoji);

//속성삭제
delete apple.emoji;
console.log(apple); //삭제됨
