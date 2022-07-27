// 정직원과 파트타임직원을 나타낼수있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름 , 한달 근무시간
// 매달 직원들의 정보를 이용해서 한다 월급을 계산할수있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// const ellie = new FullTimeEmployee("엘리", "s/w", "30");
// const bob = new PartTimeEmployee("밥", "s/w", "20");
// console.log(ellie.calculatepay());
// console.log(bob.calculatepay());

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatepay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}
const ellie = new FullTimeEmployee("엘리", "s/w", "30");
const bob = new PartTimeEmployee("밥", "s/w", "20");
console.log(ellie.calculatepay());
console.log(bob.calculatepay());
