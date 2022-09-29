const ellie = {
  name: "엘리",
  age: 20,
};

/*코딩 하는 시점에, 정적으로 접근이 확정됨*/
ellie.name;
ellie.age;

/*동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용! */
// 객체와 key를 입력하면 해당값을 반환하는 함수 생성
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(ellie, "name")); //"name"이라는문자열, key의 이름을 함수의 매개변수로 대입시킴

//객체와 key,value를 입력해서 새로운key,value를 생성하는 함수
function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(ellie, "food", "🍔");
console.log(ellie);

// 삭제하는 함수
function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(ellie, "food");
console.log(ellie);

/*잘못된 예 */
function test(obj, key) {
  return obj.key; //속성명은 argument로 입력한다해도 .뒤에속성명으로 함수내부의 매개변수로 대입되지않음
}
console.log(test(ellie, "name")); //undefined 함수내부의 return값의 key라는이름의 key가없기때문에
