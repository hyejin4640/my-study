// 접근제어자 - 캡슐화
// ✨js :  private(#), public(기본), protected
// 다른언어 : private(외부접근불가), public(외부접근가능), protected(외부접근불가 but,상속받은자식은 가능)
class Fruit {
  #name;
  #emoji;
  #value;
  #type = "과일"; // instant 생성시 초기화 값
  constructor(name, emoji, test) {
    this.#name = name;
    this.#emoji = emoji;
    this.#value = test;
  }
  //인스턴스 레벨의 method
  display = () => {
    //class함수만들땐 함수명 앞에 function 쓰면 안됨!
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

//instant level 의 method는 만들어진 instant를 통해 사용
const apple = new Fruit("apple", "🍎", "테스트");
// apple.#name = "오렌지"; // #Field는 외부에서 접근불가
console.log(apple);
