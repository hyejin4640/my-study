/** 6개의 추첨번호를 추출한다 */
// 1 <= num <= 45
let winResult = [];
let result = [];
let bonus = 0;



/** 함수정의 *********************************************************************/
const addRandom = (value, objParent) => {
  const drawNum = document.createElement("div");
  const colorCode = '#'+Math.ceil( Math.random()*0xffffff).toString(16);  //16진수ffffff 
  
  drawNum.className = "choice";
  drawNum.textContent = value;
  drawNum.style.backgroundColor = colorCode;
  objParent.appendChild(drawNum);
};

const shuffleData = () => {
  const number = new Array(45).fill().map((v, i) => i + 1); //1-45숫자를 담은 배열(인덱스로 값을 채움)
  console.log( number );
  for (let i = 0; i < 7; i++) {
    const idx = Math.floor(Math.random() * number.length);
    result.push(number[idx]);
    number.splice(idx, 1);
  }
  bonus = result[6];
  winResult = result.splice(0, 6).sort((a, b) => a - b);
  console.log(winResult);
  // winResult = result.sort((a,b)=>a-b);  //a-b:올림차순, b-a:내림차순
// bonus = number[Math.floor( Math.random()*number.length )]   //number 에는 result에 들어간값은 빼버린후니까
/* 보너스 숫자를 아예 복권넘버를 7개받아서 마지막1개를 사용한다 */
};

const drawBall = () => {
  // 객체를 생성한다
  const tagResult = document.querySelector("#result");
  // 객체의 속성을 생성한다
  winResult.forEach((value,idx) => {
    setTimeout(()=>{
      addRandom(value, tagResult);
    },(idx+1)*1000)
  });

};

const drawBonus = ()=>{
  const tagBonus = document.querySelector("#bonus");
  setTimeout(()=>{
    addRandom(bonus, tagBonus);
  },7000)
}

const init = () => {
  /* 숫자6개를 추출한다 */
  shuffleData();
  /* 숫자6개를 그려준다 */
  drawBall();
  // bonus그려주기
  drawBonus();
};


init();








/** 2번째 6개숫자 생성방법 */
// while (result.length < 6) {
//   let num = Math.floor(Math.random()*44+1);
//   if (result.includes(num)){
//     continue
//   }else{
//     result.push(num);
//   }
// }
// console.log(result);

//보너스
