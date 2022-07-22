
/* window.prompt(); */
let value = prompt('숫자를 입력하세요: ');    //파이썬에서 input과 같은 역할을함 (브라우저창에 값을 입력하면 콘솔창에서 결과값을 볼수있다.), 
// 값은 무조건 string타입으로 받음
let change = parseInt(value);
console.log(typeof change);
console.log(typeof value);


// window 객체가 bom구조에서 가장 최상위 객체이다
window.document.write();  //<-원래 이렇게 작성했어야함 but,window는 생략가능
// document는 html상에 작성하는것(즉,브라우저에 출력한다)


/**
 *  이름을 입력받아 로그인 메세지를 출력해 보세요.
  입력: 이름(사용자가 입력하는이름)
  출력: ${이름} 님이 로그인 하셨습니다. 메시지 출력(입력받은이름과 메세지 출력)

  0.변수 선언  - let loginName
  1. 입력창을 띄운다.(이름을 입력받기위해서)
  1-1. 입력창에 입력된 이름을 변수에 저장한다.(loginName)
        ->입력을받아 처리할때 그데이터를 임시저장하기위해 변수를 사용한다! 잊지말것!!
  2. 메세지를 출력한다.
 */



let loginName = prompt('사용자 이름을 입력하세요.');
document.write(`${loginName} 님이 로그인 하셨습니다.`);

// 프로그램을 만들때
// 입력
// 처리
// 출력 
// 입력값과 출력값 과 처리를 어떻게 해야할지를 생각해봐라!!!!!