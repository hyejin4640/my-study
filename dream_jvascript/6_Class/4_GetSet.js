// 접근자 property (Accessro property)
//6_Quiz 편에 예제를 꼭 보기!!
// get => 함수처럼 접근해서 값을 처리한후 새로운 값을 만들어내는게 아니라, 접근해서 해당값을
// 가져오고싶을때 사용한다

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName =  `${this.lastName} ${this.firstName}`;
    // 위처럼 create property 로 지정하면, firstName에 값을 수저하면 fullname에는  업데이트가
    //되지않음! 그래서 함수처럼 업데이트되게 사용은하고싶고, 그렇다고 함수의 행위을 통해 값을
    //얻어오는 행위가아닌 속성처럼 사용하는 함수라면 "Accessro property"를 사용하면됨
  }
  // 호출하는 시점에 데이터를 만들어서 return(즉,업데이트됨)
  //접근 = get
  get fullName() {
    return `get : ${this.lastName} ${this.firstName}`;
  }
  //할당 = set
  set schoolClass(value) {
    console.log("set:", value);
  }
}

const student = new Student("park", "hyejin");
console.log(student.firstName);
console.log(student.fullName);
student.schoolClass = "1반";

// method는 호출해서사요하고 , property는 접근해서 사용하는데.
// 메소드,함수는 기본적으로 어떤 행위를 통해 값을 얻어오는것인데, 위에 메소드는 property처럼
// 객체에 접근해서 정보를 얻어오기만 하거나 또는 할당 시켜새로운 값을 할당 한다.
// 이럴때 , 함수처럼 호출시에 데이터를 만들어서 return은 하고(그때그때 업데이트),
// property처럼 접근하고싶을땐.....
// "Accessro property" 형태로 사용한다.

// student.fullnName(); => student.fullName;
