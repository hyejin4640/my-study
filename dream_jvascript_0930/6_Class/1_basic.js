// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수(오래된 고전 방법)
// 2. class 사용 ✨

// class
class Fruit {
  constructor(name, emoji) {
    //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    //class함수만들땐 함수명 앞에 function 쓰면 안됨!
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎"); // apple은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🍊"); // orange은 Fruit 클래스의 인스턴스이다.
const obj = { name: "heyjin" }; // obj는 객체이고,어떤 클래스의 인스턴스도 아니다.

console.log(apple);
console.log(orange);
console.log(apple.name);
apple.display();

// 클래스를통해 만들어진 객체 : 인스턴스
// 그냥 만들어진 객체 : 객체
