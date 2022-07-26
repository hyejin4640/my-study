// while (조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행,조건이 참인경우만 실행함
let num = 5;
while (num >= 0) {
  //num이 0과같거나 클동안만 반복문을 실행해라
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log("while  :아직살아있다!!");
  if (i === 1000) {
    break;
  }
  i++;
}

//while문: 조건이 참인경우만 실행함
// do{}while문 : 조건이 참/거짓을 분별하기전에 한번은 실행하고 검사한다.
do {
  console.log("do - while문 : 아직살아있다!!");
} while (isActive);
