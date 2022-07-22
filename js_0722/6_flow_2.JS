
'use strict';

/**
 * 숫자 3과 숫자5의 덧셈과 곳셈을 출력하세요.
 *
 * 입력 : 숫자 3,5
 * 출력 : 숫자 3,5의 덧셈과 곳셈의값
 * 
 * 1.변수를 선언 : num3,num5
 * 2.값을 할당한다. num3 = 3 , num5 = 5
 * 3.연산을 한다.
 * 4.연산을하여 변수에 저장한다(add , mult)
 * 5.출력한다(add,mult)
 */

// const num3 = 3;
// const num5 = 5;
// let add = num3+num5;
// let mult = num3*num5;
// console.log(`두수의합은 : ${add} 두수의 곱은 : ${mult}`);



// 산술연산자를 이용하여 간단한 프로그램 짜보기
/**
 * 두 수를 입력받아 사칙연산의 값을 출력하세요(+,-,*,/)
 * 입력:2개의 숫자(사용자로부터 입력받은 두수)
 * 출력:총 4개의 숫자 (2개의숫자를 더한값, 뺀값, 곱한값,나누값 )
 *
 * 
 * 1.두수를 입력받는다(prompt) ->2번과 동시 실행
 * 1-1 각각의 수를 따로입력받아 변수에 저장한다(inputNum1,inputNum2)
 * 2.두수의 값을 숫자형으로 바꾼다
 * 3.연산을한다(=->+->-->*->/)
 * 4.연산을 바로출력받는다
 * 
 */


// let inputNum1 = parseInt(prompt('정수를 입력하세요'))
// let inputNum2 = parseInt(prompt('정수를 입력하세요'))
// console.log(`두수의합은 :  ${inputNum1 + inputNum2}`);
// console.log(`두수의차은 :  ${inputNum1 - inputNum2}`);
// console.log(`두수의곱은 :  ${inputNum1 * inputNum2}`);
// console.log(`두수의몫은 :  ${inputNum1 / inputNum2}`);

let a = 10;
let b = 20;
/*********************************본인변수에 증감연산자를 대입하는건 결과에 큰차이가없다 */
++a;
console.log(a);

a--;
console.log( a );
a++;    //a에 10을 먼저 대입하고
console.log( a ); // 증가값이연산되어들어가있다.


// ****************************대입해서 반환시 차이가발생
let calc;
calc = b++; //b에 연산을 하고 나서 반환
console.log( calc , b );

calc = ++b;
console.log( calc , b );

// 증감연산자는 변수자체에 연산을 할때에는 차이가없다 본인에게1을증가,감소
// BUT, 변수를 다른변수에 대입과동시에 연산을 하고싶을때의 차이가 발생한다.

// b=a++;
// b에다가 a를 저장하고 ,그다음라인에서 1을증가시켜라
// b=++a;
// b에다가 저장을하는데 연산도같이하면서(1을 증가시키는걸) 저장해라.


let t = 5;
console.log('안녕');
console.log(t++);  //명령을 실행해서바로출력해야하니까 이때는 연산한게 아직 들어가지않고 원래값ㅇㄹ 먼저 대입해주었다
console.log(t);    //이제 연산한값이 들어가있다



// 문자 -> 숫자
a='10';
console.log(typeof a);
    
a=Number(a);
console.log(typeof a);


// 숫자 -> 문자
let k = 10;
k=k+''
console.log(typeof k);

let num = 10;
num = `${num}`;
console.log(typeof num);

let n=10;
n = String(n);
console.log(typeof n);

let v=10;
v = v.toString()
console.log(typeof v);


// 알파벳 아스키코드 값 
let ch;
ch='a'.charCodeAt();


// 논리연산자
// || (or) : 피연산자 중에 값이 하나라도 true 이면 true값을 반환
// && (and) : 피연산자 중에 값이 하나라도 false가 존재하면 false 값을 반환
// !  (not) : 피연산자 값이 true 이면 false를, false이면 true를 반환