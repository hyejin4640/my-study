// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는것은 좋지않음
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트,값 ) 만들어서 반환해야함
// 원시값(primitive) : 값에 의한 복사(값그자체를복사)
// 객체값 (object): 참조에 의한 복사(메모리주소)
function display(num) {
  num = 6; //<-❌
  console.log(num);
  return num;
}
let value = 4;
display(value);
console.log(value); //✔️원시값일경우 : 함수인자로 변수를 주었다, 변수안에 값이 그대로 복사되어 실행문을
//수행하기때문에 실제 그변수에는 영향이없다 , 이유는 변수의 주소안에 값이 변형되어 담는게 아니기땜누에
//그냥 매개변수로 변수의 값을 준것일뿐

// object의 경우 더큰일(함수내부에서 값을 바꿀때!)
function displayObj(obj) {
  obj.name = "Bob"; // ❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경❌
  console.log(obj);
}
const ellie = {
  name: "Ellie",
};
displayObj(ellie); //ellie라는 오브젝트의 값의 메모리주소가 전달됨,
console.log(ellie); //✔️ 객체값일경우 : 객체를 함수의 매개변수로 주어졌는데,
// 객체의 값의 메모리 주소가 그대로 주어졌기때문에, 실제 객체에 함수의 실행문의 리턴값을 할당하지도
//않았는데 객체의 값이 변해있다

// 함수내에서 변경하고싶을땐
function changeName(obj) {
  //이름부터 변경한다는 느낌을 주도록!
  return { ...obj, name: "Bob" }; //반환시엔 새로운 오브젝트를 만듬
  //오브젝트 리터럴을 쓰면 새로운 오브젝트생성 -> 기존오브젝트값은 유지함녀서 name만 바꿈
}
