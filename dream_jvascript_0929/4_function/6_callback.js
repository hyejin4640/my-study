// callback function

// 화살표함수표현식으로 함수를 변수에 할당함
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다
// 전달될 당시에 함수를 바로 호출해서 반환된값을 전달하는 것이 아니라
// 함수를 가리키고잇는 함수의 reference(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에됨

function calculator(a, b, action) {
  //calculator함수는 매개변수로 a,b를 전달받고,action함수를 전달받는다.
  if (a < 0 || b < 0) {
    return; //->a or b 가 0보다작으면 반환값없이 함수종료
  }
  let result = action(a, b);  //콜백함수 호출되는지점
  console.log(result);
  return result;
}
calculator(1, 2, add); //->add함수를 호출하지않고 전달만했음 , 호출 => add(1,2);
calculator(-1, -2, multiply);
//-> 반환값이없다,즉 함수를 전달 한다고해서 바로 호출되서 값이 반환되는게 아니라, 함수의 reference가 전달되어서 함수내에서 순서대로 실행하는데 위에 구문은 0보다 작으면 리턴값이없이 함수를 종료시켰기때문에, multiply 변수에담은 함수는 호출되지않은걸 볼수있다.
