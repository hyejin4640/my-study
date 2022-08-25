/**
 * 가위: 0 , 바위: 1, 보: 2
 */


/** 객체 가져오기 **************************************************************** */
const tagCom = document.querySelector("#com");
const tagBtn = document.querySelectorAll("#self > p > button");
const tagSelf = document.querySelector("#self");
const body = document.querySelector('body');
const tagP = document.createElement('p');
let user = 0;
let comChoice = 0;
let intervalID = null;
const jumsu = {
  computer : 0,
  human : 0,
};


// 전역변수를 함수내에서 갖고와서 사용할순있지만 함수내에서 변한 값을 전역변수에 동기화할순없다.

/** 함수 정의  ******************************************************************** */
const handlerInterval = () => {
  comChoice++;
  if (comChoice > 2) comChoice = 0;
  tagCom.style.backgroundPosition = `${comChoice * -220}px`;
};

intervalID = setInterval(handlerInterval, 500); //setInterval 의 id값을 가져왔다.

const drawScore =(message)=> {
  body.appendChild(tagP)
  tagP.textContent = message;
  tagP.className ='result bg';
  // tagP.classList.add('bg');   // 추가
  tagP.classList.remove('bg');   // 삭제 
}

const checkScore = ()=>{
  if ( jumsu.computer >=3 ){
    return '컴퓨터가 3판을 먼저 이겼습니다!';
  }else if ( jumsu.human >=3 ){
    return '사람이 3판을 먼저 이겼습니다!';
  }
  return '';
}

const compareNum = () => {
  // 가위:0 ,주먹 :1, 보:2
  let result = comChoice - user;
  let message = "무승부";
  
  if ([-1, 2].includes(result)) {
    message = "이겼다!😎";
    jumsu.human ++;
  } else if ([-2, 1].includes(result)) {
    message = "졌다💩";
    jumsu.computer ++;
}
  drawScore( message );
  
  // switch( result ){
  //   case -1 :
  //   case 2:
  //     message ='이겼다!';
  //     break;
  //   case -2:
  //   case 1:
  //     message ='졌다';
  //     break;
  // }

  // switch (comChoice ) {
  //   case 0 : // 가위
  //     if( result === -1) message = '이겼다!';
  //     if( result === -2) message = '졌다'
  //     break;
  //   case 1 : // 주먹
  //     if( result === 1) message = '졌다';
  //     if( result === -1) message = '이겼다!'
  //     break;
  //   case 2 : // 보
  //     if( result === 2) message = '이겼다!';
  //     if( result === 1) message = '졌다'
  //     break;
  // }
};

const handlerBtnClick = (e) => {
  user = parseInt(e.target.dataset.num);
  tagSelf.style.backgroundPosition = `${user * -220}px`;
  clearInterval(intervalID);
  compareNum();
  let data = checkScore();
  if ( data ){
    drawScore(data);
  }else{
    setTimeout(() => {
      intervalID = setInterval(handlerInterval, 500); 
    }, 3000);
  }

};

/** 이벤트 등록 ******************************************************************** */


const addListenter =()=>{
  tagBtn.forEach((v) => {
    v.addEventListener("click", handlerBtnClick);
  });
  
  window.addEventListener('blur', ()=>{  
    console.log('떠납니다');    
    
  })
  window.addEventListener('focus',()=>{
    console.log( '돌아왔습니다 ');
    
  })
}
// window.addEventListener('beforeunload',(e)=>{
//   e.preventDefault();
//   e.returnValue ='';
//   alert( '가니?');
// });
addListenter();




// const handlerBtnClick = (e) => {
// // let objBtn = e.target.className;
// // let number = 0;

// // switch (objBtn) {
// //   case 'scissors':
// //     number =0;
// //     break;
// //   case 'rock':
// //     number =1;
// //     break;
// //   case 'paper':
// //     number =2;
// //     break;
// // }
// // tagSelf.style.backgroundPosition = `${ number*(-220) }px`;
// };
