// 정직원과 파트타임직원을 나타낼수있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름 , 한달 근무시간
// 매달 직원들의 정보를 이용해서 한다 월급을 계산할수있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// 전체직원의 기본정보가 담긴 부모 class생성
class Employee {
  static HOURLYWAGE;
  constructor(name, section, month_Dutyhours) {
    this.name = name;
    this.section = `${section} 부서`;
    this.month_Dutyhours = month_Dutyhours;
  }
  pay() {
    paycheck = this.month_Dutyhours * Employee.HOURLYWAGE;
    return paycheck;
  }
}

// 정직원 class생성
class Fulltime_employee extends Employee {
  static HOURLYWAGE = 10000;
  pay() {
    const paycheck = this.month_Dutyhours * Fulltime_employee.HOURLYWAGE;
    return console.log(`한달급여 : ${paycheck}원`);
  }
}
const miso = new Fulltime_employee("miso", "제경", "300");
console.log(miso);
miso.pay();

// 파트타임 직원 class 생성
class Parttime_Employee extends Employee {
  static HOURLYWAGE = 8000;
  pay() {
    const paycheck = this.month_Dutyhours * Parttime_Employee.HOURLYWAGE;
    return console.log(`한달급여 : ${paycheck}원`);
  }
}
const heesoo = new Parttime_Employee("heesoo", "마케팅", "200");
console.log(heesoo);
heesoo.pay();
