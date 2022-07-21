// let 재할당이 가능
let a = 1;
a = 2;
console.log(a);

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi';  <-이렇게 하면 안되! error발생!
console.log(text);

// 1.상수
// 대문자 , 2개이상단어는 언더바로 연결해줘야함
const MAX_FRUITS = 5;
console.clear();

// 2.재할당 불가능한 상수변수 또는 변수
const apple = {
  name:'apple',
  color:'red',
  display:'🍎'
};  
apple.name = 'orange';
// apple 이라는 object에 재할당은 불가능하지만, object안에있는 각각의데이터들의주소에는 변경이 가능하다
// 왜냐하면, const라고 선언하고 생성한 object가저장된메모리 주소에는 재할당이불가능하지만,const라고 선언하고 생성한 object의 값들이 저장된 메모리주소는 다르기때문에, 변경이 가능하다!!
console.log(apple);
