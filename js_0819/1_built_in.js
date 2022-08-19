/**
 * 내장 함수 객체를  활용
 * String
 * Number
 * Boolean
 * Math
 * Date
 * Json 
 * Set
 * Array
 */

const str = new String('javaScript');   //type Object
const str2 = 'javaScript';  // type string
console.log(typeof str , str);
console.log(typeof str2 , str2);


console.log( str === 'javaScript');   // false  왜냐하면 주소값이 들어가있기때문에
console.log( str2=== 'javaScript');  // true  자료형이원시타입은 자료그자체가들어있기때문에 ?   
// => 메로리가 저장된 곳이다르기때문에 ??
 

console.log( str.valueOf());
console.log( str2.valueOf());
 
console.log( str.valueOf() === str2.valueOf() );   //true


