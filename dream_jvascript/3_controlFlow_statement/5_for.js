// 반복문 Loop Statement
// for (변수선언문; 조건식; 증감식) { }
/** 실행순서 :
 * 1. 변수선언문
 * 2. 조건식의 값이 참이면 {} 코드블럭을 수행
 * 3. 증감식을 수행
 * 4. 조건식이 거짓이 될때 까지 2번과 3번을 반복함
 */

// for문 기본
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2중 for문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프
// for (;;) {
//   console.log("😶");
// }

//반복문 제어 : continue , break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("i가 드디어 10이 되었다.! ");
    continue; //<-continue 는 그아래조건은 수행하지않고 건너뛴후 그다음실행문을 수행한다
    break; //<- 반복문을 멈추고 빠져나간다
  }
  console.log(i);
}
