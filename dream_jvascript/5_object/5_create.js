//✔️생성자 함수 const object = new Function();

// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: 🍎`); //this === 자기자신의객체
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: 🍊`); //this === 자기자신의객체
//   },
// };

//생성자함수 - 함수명: 맨앞 upper
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = function () {
    console.log(`${this.name}: ${this.emoji}`);
  };
  //return this; //생략가능
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
apple.display();
// 새로운객체를 생성시, 생성되자마자 갖는 자기자신의 변수(속성)와 함수(메소드)를 정의할수있다.
/**
 * this.name -> 자기자신의 변수
 * this.display -> 자기자신의 함수
 * */
