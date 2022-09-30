// 퀴즈!
////// 1. 문자열의 모든 캐릭터를 하나씩출력하라
const text = "          hello world!";
const text_no = text.trim().replace(" ", "");
console.log(text_no);

for (const i in text_no) {
  console.log(text_no[i]);
}

// ELLIE version
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

////// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = " user1,user2,user3,user4";
const idsList = ids.split(",");
console.log(idsList);


// setInterval
// setInterval 함수는 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용합니다.(주기적시간설정)
// 사용양식 : setIntercal(콜백함수, 시간설정)
// setInterval(() => console.log(new Date()), 2000);
// 1.setIntercal 함수를사용하는데, 함수를 외부에서 만들어서 지정하지않고 함수실행문안에 함수를 정의해서사용한다
// 2. () => 의미는 ()는 인자를 넣는곳 즉 인자를 안받음, => 는 function역할 
// 2-1. 아!그리고 위에  기본함수선언문에는 함수이름을 지정하지만 화살표함수표현식에선 변수안에담아 값을
// 돌려 주는것이기때문에함수명은 지정안함, 기본함수표현식에선 인자 왼쪽에 입력함 
// 3. console.log(new Date())는 함수실행문 : 현재시간을 출력
// 4. 2000은 밀리세컨단위 2초 단위로 콜백함수를 호출


////// 3. 5초에 한번씩 시계를 (날짜포함) 출력해보자!
// const now = new Date();
// function timeText() {
//   console.log(now.toLocaleString());
// }

// setInterval(timeText, 5000);


// ELLIE version
// 콜백함수를 1번째 인자로전달, 몇초단위로 콜백함수를 호출할건지 정함
// setInterval(() => {},5000);

setInterval(()=>{
  const now = new Date();
  console.log(now.toLocaleString('ko-kr'));
  
},5000);
