// 문자열
'use strict';
console.log('hello');
console.log("world");
console.log(`javascript`);     // ``->파이썬에서 fstring 처럼 사용됨(테플릿 문자열)

let text = 'hello';
let add = 1;
// let add = ' javascrit';
let value = text + add;    //문자 + 숫자 = "문자로인식"하고 string타입으로 변환(연산자+만가능)
console.log(value);
console.log(typeof value);


// 문자열 템플릿(template Literal)
let textT = 'hello';
let camel = `${textT} ${3*5}🖤💦💢💔`;
console.log(camel);


let cart = [
  {name:'옷', price:2000},      //<- object
  {name:'가방',price:1000}
];

let count = cart.length;
console.log('카트에' + count + '개의 아이템이 있습니다');    //문자열의 결합
console.log(`카트에 ${cart.length} 개의 아이템이잇습니다`);      //template Literal 사용하면....



