// let a=5;
// let b=0;
// b=a;
// a=10;
// console.log(`a:${a}`);
// console.log(`b:${b}`);


// array: 주소값을 참조한다.
let a=[1,2,3,4,5];
let b =[];
b=a;
u=b;

u[1]=100;
a[2]=10;
// array는 주소값을 공유하기때문에 값을 바꾸면 같이 바뀐다.
console.log(`a:${a}`);
console.log(`b:${b}`);
console.log(`u ${u}`);

// 🧡for문이용해서 읽어오기
// for(let i=0; i<a.length; i++){
//   console.log(`for문이용해서 읽어오기 : ${a[i]}`);
// }

// 🧡for문이용해서 배열에 추가해서 주소값을 공유하지않고 데이터만 갖고오기
// c=[];
// for(let i=0; i<a.length; i++){
//   c.push(a[i]);
// }
// console.log(c);
// c[1]=7;
// console.log(c);
// console.log(a);

// 🧡 배열 === 스택구조
// push : 맨끝에서 추가
// pop : 맨끝에서 삭제

