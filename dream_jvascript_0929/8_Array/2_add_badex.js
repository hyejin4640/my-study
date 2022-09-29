const fruits = ['🍌','🍎','🍇','🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

//for statement 사용
for (let i =0; i<fruits.length; i++){
  console.log(fruits[i]);
} 

// const fruits = ['🍌','🍎','🍇','🍑'];
// 💩추가, 삭제 - 좋지 않은 방식 💩

// index로 접근해수 추가,수정하는것x
fruits[fruits.length] = '🍓'
console.log(fruits);

// delete 로 삭제x
delete fruits[1];  //  <1 empty item> 라고 비어있는표식이 남아버림
console.log(fruits);



