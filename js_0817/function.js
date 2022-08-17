/** 함수 사용법  */

/** 함수 === 객체 */
// function hello(){
// console.log('hello world');
// }
// hello();
// hello.myName = 'gil-dong';
// console.log(hello.myName);

/** 값을 전달받아 합을 반환하는 함수 */
// function add(x) {
//   return x+x;
// }
const add = (x)=> x+x;    //return값이 하나일경우  return생략가능{}도생략가능
console.log(add(5));     //10
const data =add;        // 객체의 값은 객체의값의 주소를 참조한다.
console.log(data(6));  //12



/** 나이가 어리면 hi()호출 많으면 hello()호출 */
const hello = ()=>{
  console.log('hello~~'); 
}
const hi = ()=>{
  console.log('hi~~');
}

const meet = (type , fnHllo , fnHi)=>{    //매개변수로 끝에2개의 함수를 받는다
if(type === 'high'){
  fnHllo();
}else{
  fnHi();
}
}
meet( 'high' , hello, hi );