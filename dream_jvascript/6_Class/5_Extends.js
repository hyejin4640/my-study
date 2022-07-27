/* Extends => 확장하다 */
/* Expansion of the class (클래스의 확장 & 상속)
  class Tiger extends Animal {} 
  super */

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("놀자아~!");
//   }
// }

/**
 * 위에 주석class 처럼 같은 기능과 속성을 가진 class를 여러번 만들지않고,
 * class를 하나 생성후, 상속받아 사용하면 번거로움을 줄임
 * +상속받은 class에는 기능과 속성도 추가할수있음
 * */

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다");
  }
}

// class 를 상속해서 calss 만들기!
class Tiger extends Animal {} //class를 생성후 틀을 만들지않아도 Animal class의 틀을 상속받음
const tiger = new Tiger("노랑이"); // 상속받아 만든 Class(Tiger)를 통해 객체(tiger) 생성
console.log(tiger);
tiger.sleep();

//class 를 상속받아생성하고 ,property,method를 추가할수있음!
class Dog extends Animal {
  //생성자property를 추가할땐, 부모 class읭 property 도 작성한후, 추가해야함
  constructor(color, ownerName) {
    super(color); //부모class의 생성자property
    this.ownerName = ownerName; // 자신의class생성자property
  }
  // 상속받은것 외에 method를 추가한다.
  play() {
    console.log("놀자아~!");
  }
  // 오버라이딩 overriding -부모class의 상속받은 속성이나 메소드를 덮어쓰고 새롭게 바꾼다
  // 함수를 그대로 선언후 다른행동 구현
  eat() {
    super.eat(); // super 부모의 메소드를 그대로 구현해서 사용하고,
    console.log("강아지가 와구와구 먹는다!!"); //이건 새롭게 추가했다.
  }
}
const dog = new Dog("점박이", "heyjin");
console.log(dog);
dog.sleep();
dog.play();
dog.eat();

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  get wee() {
    return console.log(`get : ${this.name} ,${this.color} `);
  }
}

// practise //
const cat = new Cat("happy", "yellow");
console.log(cat);
cat.wee;

class Dojcat extends Cat {
  constructor(name, color, house) {
    super(name, color);
    this.house = house;
  }
  get wee() {
    console.log(`${this.house}`);
    super.wee;
  }
}
const dojicat = new Dojcat("dongle", "blue", "광주");
console.log(dojicat);
dojicat.wee;
