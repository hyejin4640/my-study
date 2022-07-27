// 카운터 만들기
// 0 이상의 값으로 초기화 한뒤 하나씩 숫자를 증가할수있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  #value; //내부에서사용하는 privit field를 생성
  constructor(startValue) {
    //초기값을 전달받음
    if (isNaN(startValue) || startValue < 0) {
      // 숫자가아니거나 , 0보다작으면 0을 할당
      this.value = 0;
    } else {
      this.#value = startValue; //위에 2조건이 아니라면, 생성시 입력한 초기값을 할당
    }
  }
  get value() {
    return this.#value; //접근만하고 외부에선 수정할수없게 하기위해서 접근제어자get사용
  }
  increment() {
    this.#value++; // 함수호출시 1씩 증가시키는 함수
  }
}

//유니테스트  - 먼저출력하려는 식을 세워본다
const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);
