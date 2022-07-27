//매개변수의 기본값은 무조건 undefined
//undefined인이유는 사용자가 전달해준 값이 없기때문
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본값 Default Parameters a = 1,b = 2 , 기본값으로 주어진값은 argument가 주어지면 주어진값으로 함수가 실행된다.

function add(a = 1, b = 2) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  return a + b;
}
console.log(add(3, 2)); //argument 가 주어졌으니까 매개변수(parameter)의 기본값으로 설정된1,2는 무시된다

// Rest Parameters(받는값의 개수를 정해놓지않고 자유롭게 받을때 사용)
function sum(a, b, ...hello) {
  //앞에 지정한 매개변수는 값을 받을때a와b 에 순서대로 값이 할당되어전달됨
  console.log(a);
  console.log(b);
  console.log(hello);
}
sum(1, 2, 3, 4, 5, 6, 6, 7, 8, 9);
