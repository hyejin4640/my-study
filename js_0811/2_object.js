// 객체 : 배열 ,함수, 배열이나 함수가 아닌객체들

// 배열이나 함수가 아닌객체유형 :  딕셔너리 와 같은
// 객체명 ={
//   속성 : 속성값,
//   속성 : 속성값,
// }
// 값을 불러오는 2가지 방법
// 객체명.속성
// 객체명['속성']
let kim ={
  firstName:'gil-dong',
  lastName : 'kim',
  age: 35,
  phon : '010-0000-0000',
  address : function () {
    console.log('주소출력')
  },
};
// 값을 불러오는 2가지 방법
console.log( kim.age );
console.log( kim['age'] );
kim.age = 40;
console.log( kim.age );
kim.address();    // 객체 메소드 호출

let copyB = kim;
console.log(copyB);
kim.age=35;
console.log(copyB);   // 객체copyB의 값도 바껴있음 (주소값 참조를 복사했기때문에) 

// 객체 메소드 사용해서 랜덤 1-10 까지의 수갖고오기
const h = Math.floor(Math.random()*10);
console.log(h);
