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


// let vs const //*******************************************************************
// let - 변수 (재할당가능)
let value ;
value = 5;    //숫자5만들어가는 메모리를 차지한다.
value = 'hello'     //h,e,l,l,o 각각1개씩 메모리에 들어야하니 그전에 숫자5를 넣었던 데이터 용량이 늘어난다.
// 이렇게 변수의값의 할당에따라 메모리용량을 자동적으로 늘어나게 하는걸 동적인언어의 특징이라한다.
console.log(value);
console.log(typeof value);


// const - 상수(재할당불가능)
// const 로만들어지 변수에 초기값이 무조건 갖고있어야한다
const number = 5;
// number = 10;
console.log(number);


