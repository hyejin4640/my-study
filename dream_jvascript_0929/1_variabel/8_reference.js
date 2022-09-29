// primitive(원시타입)은 값이 복사되어 전달됨
let a = 1;
let b = a;   //출력 : 1
b =2   
console.log(a);   //출력:1
console.log(b);   //출력:2

// object(객체)은 참조값(reference==메모리주소)가 복사되어 전달됨
 let apple = {    //메모리주소:0x1234
  name:'사과'
}
 let orange = apple;  //메모리주소:0x1234
 orange.name = '오렌지';
 console.log(apple);  //출력 : 오렌지
 console.log(orange); //츨력 : 오렌지