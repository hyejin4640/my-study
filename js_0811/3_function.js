//🧡함수 : 할일을 모아놓은 묶음 , 기능을 수행


  // 함수 정의 (선언문)
  // function 함수명(){
  //   명령들;
  // }


// 함수실행
// 함수명();

//🧡함수 호이스팅
// 실행문이 먼저 나와도 자바스크립트는 함수가정의되어진곳을 먼저 확인하고 실행문을 실행하기때문에 작성 순서는 상관없다.
// 그래서 함수를 한곳에 모아놓고 가독성을 좋게함

addNumber(10);
addNumber(30,50);  
addNumber(10,10,10);  //인자(argument)- 값을 전달하는애

const a = addNumber(1,1,1);
console.log(a);

//  🧡 매개변수의 기본값을 지정할수있음
function addNumber(num1,num2=10,num3=30) { //매개변수(parameter)-값을 전달받는애
  // let sum = num1+num2+num3;
  // console.log(sum);
  // return sum;            // return : 반환값을 호출한곳으로 되돌려준다.
  // return num1+num2+num3; 
  if(num1 < 10){
    return    // return : 두번째쓰임은 조건에 해당하지않으면 지정한값을 하고 되돌아가기대문에 값을 지정안하면 그냥 되돌아가게된다    
  } 
  return num1+num2+num3;
}

//🧡익명함수 : 함수명을지정안하고 변수에 저장해서사용 , 함수호이스팅은 안됨❌(정의 -> 호출)
// let fnCall = function(){
//   console.log('익명함수');
// }
// fnCall(); 

//🧡arrow 함수 표현식 :함수를 선언할뿐만아니라 변수에 값까지 할당하기때문에 표현식이라함
// arrow 함수도 함수호이스팅이 안된다❌. 
const fnCall = () => console.log('function call');
fnCall();

// return값이 1개일때는 생략해도됨
const hi = ()=> 'hi, javascript';
console.log(hi());

// 매개변수가 1개이면 괄호도 생략가능
const bye = name => `bye ,${name}`;
console.log(bye('수진'));

// 매배변수 2개, return값1개 식표현
const add = (a,b) => a+b;
console.log(add(10,20));

// 함수를 변수에 저장할때는 const를 써준다 함수도 객체이므로 값은 값의 주소값을 참조한 주소값을 갖고있기때문에 인자값이계속 변화하며 할당해도 상관없음

//🧡즉시실행함수 : 호출을 따로 하지않고 선언한즉시 실행한다.
// 즉시실행하기위해서 호출하는 괄호도 붙여준다. (함수정의)(함수호출);

// 즉시실행함수 1번
(function(a,b){})();

(function(){
  console.log('1버전 즉시실행함수');
})();

// ✨arrow 함수표현식의 즉시실행함수식 (내장함수나 외부함수의 즉시실행함수의 표현식이 가장많은 식!!!!!!)
// this 때문에 즉시실행함수를 쓴다. "지금 바로" 해당되는 지금 행동에 이벤트를 줘야하니까 !!!!!
(()=>{
  console.log('arrow ---즉시실행함수');
})();

// 즉시실행함수 2번
(function(a,b){}());

(function(){
console.log('2버전 즉시실행함수');
}())













