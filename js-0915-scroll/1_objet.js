/**
 * 배열 : for-of, foreach
 * 객체 : for-in 
 */



'use strict';
let empty_obj = {
  속성: "속성값",
  // key : 속성 , value : 속성값 
  // 우리가필요한건 속성값
};
const abcArr = ['a','b','c'];

let man = {
  name: "홍길동",
  age: 20,
  height: 100,
  alpa : abcArr,
};

console.log( typeof empty_obj);
console.log( man.name);
man.name = "jimin";
console.log( man['name']);

/** 객체 - for in  */
for( let k in man){
  console.log( `for in 사용해보기 => ${k}`);
  console.log( man[k]);
  
}
/******************************************************************************************************* */
/** 객체의 접근하기  */
/**
 * 예약어(변수선언) 객체명 ={
 *     속성이름 : 속성값
 * }
 * 객체명.속성이름 ;
 * 객체명['속성이름'] ;
 */

// 하나의 변수의 값을 key로 사용 -> 하나의 key에 + 문자열을 더해 여러개의 key로 사용
let fruit = 'apple';
let wishList ={
  banana : 5, // 기본property
  [fruit+"_Red"] : 5, // 객체밖에서 정의된 원시"값"을 가져온 property(변수명이아니라 변수안에 담긴 값을 key로 사용)
  [fruit+"_Green"] : 10,
  [fruit+"_Blue"] : 7,
  // 둘의 차이를 보여주기위해 밖에서 정의된 원시값을 가져올때는 [] 를 붙여줌
  // 객체 내에서 속성값을 사용할대는 this를 붙임
};
console.log( wishList );

/** 객체안에 key,value가 있는지 확인법  */
console.log( 'banana' in wishList);   //true

/******************************************************************************************************* */
/* 함수에서 객체를 생성하기 */
// const makeUser =( userName , age)=>{
//   return {
//     userName : userName,
//     age : age,
//   }
// }

// return 값이 매개변수명과 객체의 key값이 같을땐 생략가능
const makeUser =( userName , age)=>{
  return {
    userName ,
    age ,
  }
}
let user = makeUser('hong' , 30);
console.log( user);

console.log( 'age' in user );

/** 예약어와 키워드는 변수명으로는 사용불가X , BUT, 객체안에서 key명으로는 사용가능
 *  하지만 , 헷갈릴수있으니 잘안씀
 */
// let return = 0;
let obj ={
  let : 0,
  const :3,
  return :2,
}
console.log( obj.return );


