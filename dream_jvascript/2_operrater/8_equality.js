//동등 비교 관계 연산자(Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
//!== 갑과 타입이 둘다 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == "2"); //true 타입은 다르지만 담고있는 값의 형태는 같음
console.log(2 === "2"); // false 타입이 다름
console.log(1 == true); //1을 boolean으로 변환하면 true
console.log(1 === true); //타입은 다르니false
console.log(0 == false);
console.log(0 === false);

console.clear();

const obj1 = {
  name: "js",
};
const obj2 = {
  name: "js",
};

console.log(obj1 === obj2);
console.log(obj1 == obj2); //false
//false인이유 : object안에는 값의 메모리주소가 할당되어있다,
//즉, 각각의 값의 "메모리주소"끼리 비교하기때문에둘은 false임
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);
//object 안에 key가 name인 변수안에 들어있는 값이 'js' 이기때문에 true

let obj3 = obj1;
console.log(obj3 == obj1); //true
console.log(obj3 === obj1); //true
//obj1 이 const라고 선언한 오브젝트여도 obj1의 값을 바꾸는게아니라 복사(값의 메모리 주소)해서 다른변수에 대입하는것이기 때문에 당연히가능

const a = 1;
const b = 1;
console.log(a === b); //true - 변수안에 들어있는 값 그자체로 비교하기 때문에 둘은 타입과 값의 형태도 모두 같음
