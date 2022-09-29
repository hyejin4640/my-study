// static 정적 property , method
//👅Class 생성문 👅
class Fruit {
  // 클래스레벨의 property
  static MAX_FRUITS = 444;
  //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 method
  static makeRandomFruit() {
    // 클래스 레벨의 method 에서는 this를 참조할수없음, 템플릿그자체이기때문에
    return new Fruit("banana", "🍌");
  }

  //인스턴스 레벨의 method
  display = () => {
    //class함수만들땐 함수명 앞에 function 쓰면 안됨!
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 👅class/instat 호출문👅
//class level 의 method는 class를 통해 method사용
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

//instant level 의 method는 만들어진 instant를 통해 사용
const apple = new Fruit("apple", "🍎"); // apple은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🍊"); // orange은 Fruit 클래스의 인스턴스이다.
const obj = { name: "heyjin" }; // obj는 객체이고,어떤 클래스의 인스턴스도 아니다.

//instat lecvel의 property,method는 생성된 instant를 통해서만 사용이가능함

console.log(apple);
console.log(orange);
console.log(apple.name);
apple.display();

// 👅Class 사용예👅
Math.pow(); //math 라는 클래스에 pow메소드이다. 즉 인스턴스or 객체를 생성하지않아도 클래스레벨의 메소드를이용해 객체를 손쉽게 생성할수있다
Number.isFinite(1);

//Fruit 이라는 같은 class로 생성된 각각의 instant 의 property 는 독립된 값을 유지한다
apple.name = "사과아님사과아님";
console.log(apple);
console.log(orange);
