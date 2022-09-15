// let user ={
//   firstName : 'hong',
//   lastName : 'gil-dong',
//   age : 30,
//   introduce : function(){
//     console.log(`안녕하세요 저는 ${this.firstName}이고, 나이는 ${this.age}입니다`);   //객체내에 속성명을 사용할때는  this를 붙임
//   },
//   getUserName : function(){
//     return this.firstName + this.lastName;  // 객체내의 속성값을 연산해서 갖고오고싶을땐 함수를 정의해서 사용해야함.
//   },
// }
// console.log( user.userName);
// console.log( user.age);
// user.introduce();
// console.log( user.getUserName() );

/* 생성자 (constructor)함수 ************************************************************************************************ */
function User(nickName , age ) {
  this.nickName = nickName;
  this.age = age;
  this.introduce = function(){
    console.log(`안녕하세요 저는 ${this.nickName}이고, 나이는 ${this.age}입니다`);   //객체내에 속성명을 사용할때는  this를 붙임
  }
}

// 인스턴스(instance) => 각각의 다른 객체
const jimin = new User('jm',28); 
const j_hope = new User('홉이',29); 
console.log( jimin );
console.log( j_hope );
jimin.introduce();
j_hope.introduce();
