//return을 명시적으로 하지않으면 자동으로 undefined이 반환됨!
//즉 return값이 없는 함수는 특정한일을 수행할뿐 값을 갖지않는다!!

//return 기본사용
function add(a, b) {
  return a + b;
}
const result = add(1, 2);
console.log(result);

//return 기능- 지정한 값을 반환하고 함수를종료시킨다.
//사용예 : 조건에 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 정료함!
function number(num) {
  //함수를 수행하는데 특정한 조건이있다면,함수를 메인프로그램을 수행하기이전에 전달된 값이 조건에 맞는지 아닌지 검사할수있게 return을 맨위에 적어주었다.
  if (num < 0) {
    return; //return 값에  값을안적고 함수를 종료시킨다.
  }
  console.log(num);
}
number(12);
number(-12);

// return이없는경우
function print(text) {
  console.log(text);
}
const outcome = print("text"); //함수안에이미 콘솔출력문을 실행하는구문이있기때문에 실행하는 특정한 일은 수행함
console.log(outcome); //BUT, 새로운변수 "outcome"에 print함수를 값으로 할당하면 outcome의 값은 undefined 라고 나옴
// 특정한 일은 수행하지만 함수를사용해 값으로 할당할시에는 값이 없는 것과마찬가지
//왜냐하면 return 이없으면 일은 수행하지만 결과값은 갖지않는것과 같음
