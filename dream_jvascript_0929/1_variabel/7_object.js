let appleName = 'apple';
let appleColor = 'red';
let appleDisplay = '🍎';
let orangeName = 'orange';
let orangeColor = 'orange';
let orangeDisplay = '🍊';
/**위에 apple이라는주제의 대한 데이터들을 저장하는데 각각의변수명과 변수를 지정해야햇다.
이 번거로움을 덜기위해 object를 사용한다*/

// !!!연관된 데이터들을 그룹지어서 패키지화 할수있는것 == object 
let apple = {
  name:'apple',
  color:'red',
  display:'🍎'
};  

let orange = {
  name:'orange',
  color:'orange',
  display:'🍊'
}
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);