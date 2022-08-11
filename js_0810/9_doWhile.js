// do while문

/*do{
  반복명령문;
}while(조건문);
*/


//while문: 조건식이false이면 아예 실행안됨
while(false){
  console.log(`--while문`);
}

// do while문 :조건식이 true,false인지 판별하기전에 실행문을 1번은 실행하고 조건을 검토한다.
do{
  console.log(`---do while문`);
  
}while(false);

// let i=0;
// do{
//   console.log(`안녕하세요---------------${i}`);
//   i++;
// }while(i<5);