const mines = {
  row: 10,
  col: 10,
  count: 14,
  // total : this.row * this.col,
};

const playTable = new Array(mines.row)
  .fill(0)
  .map(() => new Array(mines.col).fill(0));
// 배열을 먼저 1개 만들고 길이를 row만큼(5) 로 정함 => 그각각의 자리에 배열을생성해 할당함 => 그생성한 배열의 자릿수도  col(5)만큼 의 길이로 정하고 0으로 채운다
// [0,0,0,0,0] => [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]

// 지뢰 주위에 숫자를 1씩 증가 시키도록 하는 함수
const pushBoard = (x, y) => {
  playTable[x][y] = "B";
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (
        i < 0 ||
        j < 0 ||
        i === playTable.length ||
        j === playTable[x].length
      ) {
        continue; /* 블럭을 벗어남 */
      }
      playTable[i][j] += playTable[i][j] !== "B" ? 1 : "";
    }
  }
};

const pushRandomMimes = () => {
  // playTable[1][0] ='B';
  // pushBoard(1,0);
  // playTable[1][2] ='B';
  // pushBoard(1,2);
  // playTable[4][4] ='B';
  // pushBoard(4,4);

  // x의 범위를 0-9중에서 3개만 제외시키기 => 즉 랜덤한수7개만 뽑기
  const rowArr = new Array(10).fill().map((v, i) => i);
  for (let i = 0; i < 3; i++) {
    const idx = Math.floor(Math.random() * rowArr.length);
    rowArr.splice(idx, 1);
  }
// playTable의 x,y좌표값을 랜덤하게 생성하기
// x = rowArr에서 뽑기
// y = colArr에서 뽑기  x가 1개뽑힐때 , 0-9 를 담은 배열을생성(colArr) => 반복범위가 2번 반복하는 이중for문으로 1번for문에서 생성한 배열에서 숫자 2개를추출한다.(1개추출후 배열에서 삭제 후 다음 숫자를 그배열에서 추출)=> 그리고 다시 x를 뽑는 반복문이 실행된다 이작업을 7번반복 
// => 즉 x는 7번반복 , y는 그 x줄에서 2번반복 
  for (let i = 0; i < rowArr.length; i++) {
    const colArr = new Array(10).fill().map((v, i) => i);
    for (let j = 0; j < 2; j++) {
      const idx = Math.floor(Math.random() * colArr.length);
      pushBoard( rowArr[i], colArr[idx]); 
      // i는 똑같은 숫자이고 , idx는 다른 숫자  
      colArr.splice(idx, 1);
    }
  }
  console.log(playTable);
  
};

const getBoardIndex = (target) => {
  const obj = target.parentNode;
  for (let i = 0; i < obj.children.length; i++) {
    if (obj.children[i] === target) {
      return i;
    }
  }
};

const findEmptyItem = (objList, x, y) => {
  setTimeout(() => {
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (
          i < 0 ||
          j < 0 ||
          i === playTable.length ||
          j === playTable[x].length
        ) {
          continue; /* 블럭을 벗어남 */
        }
        let idx = i * mines.col + j;
        objList[idx].classList.add("show");
        objList[idx].textContent = playTable[i][j];
        if (playTable[i][j] === 0) {
          findEmptyItem(objList, i, j);
        }
      }
    }
  }, 0);
};

const handlerClickLeft = (event) => {

  const obj = event.target;
  if (obj.classList.contains("show") || obj.classList.contains("flag")) {
    return;
  }
  const idx = getBoardIndex(obj);
  if (idx >= 0) {
    //객체를 제대로 클릭했을때
    obj.classList.add("show");
    let x = Math.floor(idx / mines.col);
    let y = idx % mines.col;
    let item = playTable[x][y];
    //item 의 상태
    switch (item) {
      case "B": //지뢰일경우
        obj.textContent = "꽝";
        break;
      case 0: //빈값 처리 , 쫙 퍼져서 보이도록
        findEmptyItem(obj.parentNode.children, x, y);
        break;
      default:
        obj.textContent = item;
        break;
    }
    /* 반복되는 구간의 값을 정해줄때는 나누기를 이용해 나머지값을 사용하는 경우가 많다.
     => 총 구할수있는 1차원배열(부모요소의 자식요소들은 배열로 읽을수있음)의 인덱스 값은 0-24 인데 이걸 2개의 값을 나눠서 2차원배열의 인덱스값을 구해야한다  */
  }
};

const handlerClickRight = (event) => {
  event.preventDefault();
  const obj = event.target;
  if (obj.classList.contains("show")) {
    return;
  }
  if (obj.classList.contains("flag")) {
    //flag가 있는 상태
    obj.classList.remove("flag");
    obj.textContent = "";
  } else {
    //flag가 없는 상태
    obj.classList.add("flag");
    obj.textContent = "!";
  }
  
};

const createMinesBoard = () => {
  const tagMine = document.querySelector(".mine");
  for (let i = 0; i < mines.row; i++) {
    for (let j = 0; j < mines.col; j++) {
      let obj = document.createElement("div");
      obj.textContent = "";
      //좌클릭
      obj.addEventListener("click", handlerClickLeft);
      //우클릭
      obj.addEventListener("contextmenu", handlerClickRight);
      // 태그 추가
      tagMine.appendChild(obj);
    }
  }
};


const init = () => {
  pushRandomMimes();
  createMinesBoard();
};
window.addEventListener('load',init);
// html 전체가다 로드가 되자마자실행한다. 즉 dom구조가 셋팅이된다음에 실행한다.

// init();
