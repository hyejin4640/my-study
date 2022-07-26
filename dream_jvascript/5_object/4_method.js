// key:함수명 , value : 함수
const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}: 🍎`); //this === 자기자신의객체
  },
};

//apple이라는 객체는 name이라는 속성, display라는 함수를 가짐
apple.display();
appleName = apple.name;
console.log(appleName);
