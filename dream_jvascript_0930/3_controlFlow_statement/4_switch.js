//조건문 conditional Statement
//swich
// if else if esle if esle.... else
// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우
let day = 10; // 0:월요일,1:화요일,2:수요일....6:일요일
let dayName;
if (day === 0) {
  dayName = "월요일";
} else if (day === 1) {
  dayName = "화요일";
} else if (day === 2) {
  dayName = "수요일";
} else if (day === 3) {
  dayName = "목요일";
} else if (day === 4) {
  dayName = "금요일";
} else if (day === 5) {
  dayName = "토요일";
} else if (day === 6) {
  dayName = "일요일";
}
console.log(`if 사용시 : ${dayName}`);

// swich
switch (day) {
  case 0:
    dayName = "월요일";
    break; //각case마다 break를 사용하지않으면 실행문이 계속 넘어가 마지막 case가 실행됨
  case 1:
    dayName = "화요일";
    break;
  case 2:
    dayName = "수요일";
    break;
  case 3:
    dayName = "목요일";
    break;
  case 4:
    dayName = "금요일";
    break;
  case 5:
    dayName = "토요일";
    break;
  case 6:
    dayName = "일요일";
    break;
  default: //(어떤case에도 해당하지않으면)===(if문의 else와같은 역할)
    console.log("해당하는 요일이 없음!");
}
console.log(`swich 사용시 : ${dayName}`);

let condition = "okay"; // okay,good ->좋음!, bad ->나쁨!
let text;
switch (condition) {
  case "okay":
  case "good":
    text = "좋음";
    break; //여러개의 case이긴하지만 동일한 코드를 수행할경우 묶어서 하나의수행문 을 실행하고 brake를 건다
  case "bad":
    text = "나쁨";
    break;
}

console.log(text);
