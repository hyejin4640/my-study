// 💛반복문이 없다면.....
let sum =0;
sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;
console.log(`1부터 5까지의 합 = ${sum}`);

 
// 💛for문
// 3개의 문장이 동시에 작성
/*for(초기값; 조건식; 반복값){
   실행명령문;
}   */

// 1씩증가
// for(let i=0; i<=10; i++ ){
//   console.log(i);
// }

// 2씩증가
// for (let i=2; i<=10; i+=2){
//   console.log(i);
// }


// 💛for in문  : 인덱스값출력
let text = ['a','b','c','d'];
for(let i in text){
  console.log(i);
}

// 💛for of문 : 값을 출력
for(let i of text){
  console.log(i);
}

// for문 : 인덱스와 값모두출력가능
for(let i=0; i < text.length; i++){
  console.log(i);
  console.log(text[i]);
}