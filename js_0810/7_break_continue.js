// 안녕하세요 5번 출력.
// for(let i =0; i<5; i++){
//   console.log(`안녕하세요===${i}`);
// }

// break문 i가 2보다 크면 반복문종료.
// for(let i =0; i<5; i++){
//   if(i>2){
//     break;
//   }
//   console.log(`안녕하세요===${i}`);
// }

// continue문 : 지정한 조건에해당하면 그이전까지실행문만 실행후 다시 처음으로이동 즉,나머지 실행문은 수행하지않는다.
for(let i =0; i<5; i++){
  console.log(`i = ${i}`);
  if(i<2){
    continue;
  }  
  console.log(`안녕하세요-------${i}`);
  
}