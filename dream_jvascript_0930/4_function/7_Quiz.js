/**
 * 주어진 숫자 만큼 0부터 순회하는 함수
 * 순회하면서 특정한 일을 수행해야함
 * ex 5, 순회하는숫자를 다 출력하고싶음
 * ex 5, 순회하는 숫자의 두배값을 다출력하고 싶음
 * function iterate(max,action)
 */

const odd = function (a) {
  if (a % 2 === 0) {
    console.log(`${a} : 짝수`);
  } else {
    console.log(`${a} : 홀수`);
  }
};

const mul = (a) => {
  return console.log(a * 2);
};

function iterate(a, action) {
  if (a < 0) {
    return console.log("양수를 입력하세요->함수종료");
  }
  for (let i = 0; i < a + 1; i++) {
    action(i);
  }
}
iterate(6, odd);
iterate(-1, odd);
iterate(4, mul);
iterate(3, (a) => console.log(a - 2)); //함수를 argument 로 줄때 그안에서정의해서 매개변수로
//넘길수도있음(화살표 함수사용)

// 실제사용예 -setTimeout이라는 고차함수에 콜백함수를 매개변수로 전달해 시간을 조절해 호출할수있다
setTimeout(() => {
  console.log("3초뒤 함수가 실행될꺼예요");
}, 3000); //3초뒤에 호출해줘

//입력: 최대값(숫자1개)
//출력 : 0-최대값 까지 1씩증가하며 순회하면서 짝수 || 홀수 인지를 판별해 출력한다.
/**
 * 1. 순회하는 기능을 하는 함수를 먼저 생성한다.(고차함수안에 들어갈 )
 * 1-1 . 조건문을 이용해 홀짝을 판별한다(2로나눈 % 값이 0 과같거나 아니거나)
 * 1-2 . return값은 굳이필요없으니, console.log 를이요해 출력하게한다
 * 1-3. 함수가잘작동하는지 테스트한다
 * 2.고차함수를 생성한다.
 * 2-1. 이름은 iterate , 매개변수 : 최대값, 홀짝 판별함수, 반복문()(0-최대값, 1씩증가)
 * 2-2. iterate 함수가 잘작동하는지 테스트한다.
 */
