/**
 * 전역변수(global) : 스크립트 소스 전체에서 사용이 되는 변수
 * 지역변수(local) : 함수 내에서만 사용이 되는 변수(그냥 큰틀에서 블록안에서 사용되는 변수들 블록밖에선 사용못함)
 * 블록변수 : {} 블록안에서만 사용 되는 변수
 * let, const =>  블록변수를 기반
 * var => 지역변수를 기반
 */


let myVar = 100;   // 전역변수 

let myFunction = ()=>{
  let secondVar = 200;
  let myVar=300;
  if (myVar >= 300){
    let var3 = 500;
    var var4 = 600;
  }
  console.log(`myVar : ${myVar}`);     // 지역변수와 전역변수의 이름이같다면 지역변수가 사용됨
  console.log(`myVar : ${secondVar}`);
  // console.log(`var3 : ${var3}`);  // let 으로 변수를 선언했기때문에 if 문안에서 선언했기때문에 if블록밖에서는 var3을 알지못함
  console.log(`var4 ${var4}`);    //var는 전역변수를 기반으로 하기때문에 블록밖에서도 사용된다
  console.log(`var5 ${var5}`);
  var var5 = 700;  //밑에서 선언해서 값을 알지못하지만 var5는 undefined 값을 출력을 해주긴함
}
myFunction();   // 
// console.log(secondVar);      // 지역변수 : 출력안됨 함수내에서만 사용하는변수라서






