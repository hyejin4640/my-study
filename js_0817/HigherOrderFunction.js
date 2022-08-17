/** Higher order function(고차함수) */ 

const arr1 = [2,4,6];
const arr2 = [];    //n*n : 4,16,36

//for문이용해 새로운배열생성
for(let i of arr1){
  arr2.push(i*i);
}
console.log(arr2);

// 배열을 순회하면서 인자로넘겨준 함수를 매개변수로 받아서 그함수안에서 각각의 아이템들을
// 하나씩 실행해 조건에 맞는값을 다시   return해준다
const arr3 = arr1.map((item)=> item * item);
console.log(arr3);

// 문자열의 배열을 가지고 각각의 문자의 길이를 표시해주는함수
// arrString  = ['aaa','bbbb','ggggg','h']
// newArr = [3,4,5,1]




const arrString  = ['aaa','bbbb','ggggg','h'];
const lenArray = [];
// map사용
// const lenghtArr = arrString.map((item)=>{
//   return item.length;
// })
// console.log(lenghtArr);


//함수에서 반복문과 함수사용
// const lenForEach = (arr,fn)=>{
//   const newArray =[];
//   for(let i=0; i<arr.length; i++){
//     newArray.push( fn(arr[i]));  // 함수를 실행하는데,0 매개변수배열을 매개변수함수가 실행하는데 반복문으로 배열의 값을 하나씩 순회하며 매개변수 함수를 실행한다
//   }
//   return newArray;
// }
// const lenArray = lenForEach(arrString , function(item){ return item.length;} );   // 매개변수로 함수를 받음
// console.log(lenArray);


// for( let arr of arrString){
//   lenArray.push(arr.length);
// }

// function fn(value , index, array){    

//   console.log(`value : ${value}`);
//   console.log(`index : ${index}`);
//   console.log(`array : ${array}`);
//   console.log('----------------------');
  
// }


//foreach 사용
// 배열을 순회하면 지정한 함수(콜백함수)를 실행할때
// return 값이있는건아님
arrString.forEach((item) => {
  lenArray.push(item.length)   //return 값이 없기때문에 새로운 배열에 직접추가해주는 명령문을 넣어줌
});   
console.log(lenArray);



////////////////////// 함수를 인자로 받고 함수를 리턴하는 경우 ////////////////////////////////////////////
// 데이터를 주고받을때 (값을 갖고와서 가공시킬때 사용함)
function double(num) {
  return num * 2;
}
// doubleSubtractor 함수는 고차 함수이다.
function doubleSubtractor(subtract, func) {
  const doubled = func(subtract);  //10
  return function (num) {
    return num - doubled;   //18 - 10
  }
}
// double 함수는 doubleSubtractor 함수의 콜백으로 전달되었다.
const a = doubleSubtractor(5, double)(18); // --> 8
console.log(a);


// 함수로 리턴이 되는경우(책예시)

const func =(msg) =>{
  return ()=>{
    console.log( msg);
  }
}

const msg1 =func('안녕하세요');
const msg2 =func('잘가요');
msg1();   // 고차함수안에 인자를 넣어서 새로운 함수를만듬 , 그래서 생성된함수에 인자를 새로 전달할순없음
msg2();


// 각각의 객체안에서 다르게 함수를 사용해야할때 예시......
person = {
  name : '안상희',
  add : function (a,b) {
    a+b
  }
}
const jason = new person;
const tom = new person;
