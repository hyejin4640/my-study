let fruits = ['apple','banana'];
// console.log(fruits[0]);

fruits[2] = 'orange';
// console.log(fruits[2]);

/** 배열의 맨끝에 추가 */
fruits.push('melon');
// console.log( fruits );

fruits[fruits.length] = 'berry';
// console.log( fruits );


/** 배열의 앞자리에 추가 */
fruits.unshift('제일앞에추가함');
// console.log(fruits);

/** 배열의 맨뒤에 값 삭제 pop , shift */
// 원본데이터가 변환
fruits.pop();
// console.log(fruits);

fruits.shift();
// console.log(fruits);

fruits.splice(1,1,'추가당');  //시작인덱스 , 삭제개수 , 추가값 
// console.log(fruits);

console.log(fruits.indexOf('apple'));


/*  forEach 사용 */
// fruits.forEach((v,i)=>{
//   console.log(`v : ${v} i : ${i}`);
// })
