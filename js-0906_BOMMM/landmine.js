/** .mine 의 요소아래에 div * 100개를 생성 */
const ROW = 10;
const COL = 10;
const TOTAL = ROW * COL;
const MAX_MINE = 10;
const tagMine = document.querySelector(".mine");
let arrMine =[];

/** 함수정의 ************************************************************************* */

const shuffleMine = () => {
  const mine = [];
  while (mine.length < 10) {
    let temp = Math.floor(Math.random() * TOTAL);
    if (mine.includes(temp) == false) {
      mine.push(temp);
    }
  }
  // return mine.sort((a, b) => a - b);
};



const createMineTabel = (arrMine) => {
  for (let i = 0; i < TOTAL; i++) {
    const tagNum =
      document.createElement(
        "div"
      ); /* 태그 : 작성한 텍스트 , 요소 : 브라우저에 적용된상태 */
    tagMine.appendChild(tagNum);
    tagNum.classList.add("num");
    if (arrMine.includes(i)) {
      tagNum.textContent = "●";
    } else {
      tagNum.textContent = i;
    }
  }
};


// *********************이벤트등록*************************************************************************************
const addEvent = () => {
  tagMine.addEventListener("contextmenu", (event) => {
    /** .mine 영역에 우클릭하면 기본내제된 속성창이뜨는 기능을 초기화시킴(작동x) */
    event.preventDefault();
    const target = event.target;
    let target_idx = 0;
    for (let i = 0; i < tagMine.children.length; i++) {
      if (tagMine.children[i] === target) target_idx = i;
    }
    console.log( `idx = ${target_idx}`);
    
  });
};

/*************** 초기값 함수 ****************************************************************************************** */
const init = () => {
  const setMine = shuffleMine();
  console.log( arrMine );
  createMineTabel(setMine);
  addEvent();
};

init();

/**
 * 1. 함수는 호출한곳에서 부터 시작되서 값을 전달한다. 만약 정의만 한곳에서바로 변한값을 출력한다면 당연히 변한값이 아닌 현재 값이 그대로 출력된다.
 *  값을 출력하고 싶다면 함수를 호출한후 그밑에서 출력해라!!!
 * 프로그래밍은 순서대로 읽는다
 * 2. return : 호출한 곳으로 값을 가지고 되돌아간다 ( 블락을 벗어나는게아니라!!!!!)
 */
