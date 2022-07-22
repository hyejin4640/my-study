/**
 *  자바스크립트 기초
 */

// let name;   //변수선언
// name = 'gilDONG';
// // console.log(name);     //콘솔창에 출력해라
// document.write(name);     //html에 써줘라(브라우저웹페이지에 출력한다)
// //name에 들어간형식이 문자열 이기때문에 문자열만추가된다

// bob = '<p>bob</p>';    //브라우저 검사 -> 요소에 태그까지지정해서 추가한다
// document.write(bob);  


// 브라우저 오브젝트 모델 = BOM
// 렌더링 : 사용자에의해서 변경된걸 다시보여주게 하는것



let value;        //변수선언 -> 브라우저에게 메모리에 변수를 어디에넣을건지, value라는 이름을 변수로사용한다고 알려줘야한다
value = 3 
// 변수선언과 변수에 값을 할당해서저장하는건 따로 실행한다

let num1 = 1;      //정수
let num2 = 1.0;     //실수
console.log(num1/num2);   //BUT,JS는 구분하지않음

if (num1 === num2){           //===타입까지 같다는 의미               
  console.log('TRUE'); 
}
// 정수/정수 = 실수 -> 기본적으로 숫자를 실수형으로할당하기때문에(3.0,5.0)
// 다른언어는 정수/정수 = 정수
console.log(value,typeof value);    
//undefined : 변수는선언됬으나 값이 있는지없는지모르는상태
// undefied : 주로 값을 초기화시켜줄때 사용한다.
//null : 값이없다는걸 "지정" 해주는형
console.log(1/'a');

//유효범위를 넘어서는 숫자로 표현했을때 nan이나온다.