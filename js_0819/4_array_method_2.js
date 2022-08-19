const arr =[
  { id:0 ,name:'aaa',age:6 },
  { id:1 ,name:'ccc',age:3 },
  { id:2 ,name:'ddd',age:5 },
  { id:3 ,name:'bbb',age:2 }
];

/* some 배열요소의  특정조건을 확인하는 method 
( 조건이 맞으면 true를 return) */
let answer = arr.some( item => item.name === 'bbb');
// answer = arr.some( item => item.age > 6);

/* every 배열요소의 특정조건이 맞으면 false를 retrun */
// answer = arr.every( item => item.name === 'bbb' );

/** ✨✨filter  특정조건에 맞는 요소를 추려서 새로운 배열생성 */
answer = arr.filter(num => num.age>=5);
// console.log(answer);

const num = [1,2,3,4,5,6,7,8,9];
const arrNum = num.filter(el => el % 3 === 0);   // 3의배수만 가져오기
// console.log(arrNum);


/** ✨✨ reduce ( 주적된값 , 현재요소값, 현재인덱스, 원본배열){
 * return 변화되는 값;
 * },초기값)
*/
const numbers = [1,2,3,4,5]
const resultN = numbers.reduce((sum,el) => {
  return sum+el;
},0);
console.log(resultN);

const value =[1,[2,3],[4,5,6],['a','b',['a','b','c']]];
let result = value.reduce((arr , el)=>arr.concat(el),[]);

/** flat 메소드 */
let flatTest = value.flat(2); //차원을 지정해 몇단까지 풀수있음
console.log(flatTest);

// console.log( result );




