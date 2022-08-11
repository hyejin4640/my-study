// while문
// while(조건식===true){
//   반복문 명령문;
//   i++;
// }

// let i= 1;
// while (i<11) {
//   console.log(`i안녕하세요--------${i}`);
//   i++;
// }

// let k=0;
// while(true){
//   console.log(`k안녕하세요--------${k}`);
//   k++;
//   if(k>=10) break;
// // == 라는 조건보다는 >=처럼 한번더거를수있는 조건을 써주면좋다
// }

// 💛 문자열인 자릿수의합
/**
 * 사용자로부터 정수를 입력받아서 각 자리수
 * 합을 구하는 프로그램을 작성하세요 
 * 입력값 : 3849 (문자열)
 * 출력값 : 24 (3+8+4+9)
 * */

let user= 3849;
let j = 0;
let sum=0;
user+='';
// 숫자를 문자열로 바꿔서 length와 인덱스값을 갖고온다.(숫자+문자열 해주면 문자열로변환)
while (j<user.length) {
  sum+=Number(user[j]);
  j++;
}
console.log(`문자열의 자릿수의 합은 : ${sum}`);


// 💛 숫자형인 자릿수의합
let value=3849;
let hab=0;
// while (value > 1) {
//   hab += value%10;
//   value =parseInt(value/10);
// }
// console.log(`숫자의 자릿수의 합은 : ${hab}`);

//하나하나 출력해서 값을 테스트 해보기
// hab=value%10
// value =parseInt(value/10);
// hab=value%10
// value =parseInt(value/10);
// hab=value%10
// value =parseInt(value/10);
// hab=value%10
// value =parseInt(value/10);

// console.log(hab);
// console.log(value);

//내가 해본것
while(value >1){
  hab += value%10;
  value = parseInt(value/10);
}
console.log(`내가따라해본 ${hab}`);

// 1-100까지의 수의 합
// 짝수는-를붙여서 하기
// 1-2 3-4 5 -6 7 -8
let num=0;
let sum_n = 0;
while (num <=100) { //98 //99 //100 //101멈춤
  // num++; //99 // 100  //101 실행
  if(num %2){
    sum_n+=num;
  }else{
    // sum_n+=(num*(-1))
    sum_n -= num;
  }
  num++;
  // console.log(sum_n);
  
}
console.log(sum_n);


// 💛 숫자를나열해서 한자리씩의 숫자를 더하는 값구하기
// 시작:10 ,끝:15


let num_o = 15;
let s = 10;
let oneOne = 0;
while (s <= num_o) {
  oneOne+=parseInt(s/10);
  // console.log(`몫 ${s/10}`);
  oneOne+=parseInt(s%10);
  // console.log(`나머지 ${s%10}`);
  s++;
}
console.log(`내가한것 : ${oneOne}`);

let startNum = 10;
let value_s=startNum;
let sum_s=0;
while(startNum <= 15){
  while (value_s > 0) {
     // 한자리씩나눠서 나머지를 더해줌
    sum_s+=value_s%10;  //sum_S = 0 //sum_S=1
    value_s=parseInt(value_s/10);   //value_S =1 이들어오면 0보다크니까 위에 2번재 while문이 다시 실행된다. //다시실행된 실행 value = 0이되서 이제 2번쩨와일문을
    //벗어나 첫번째 while문을 실행한다 
    //  
  }
  // startNum++;
  // value_s =startNum;
  value_s = ++startNum;
             //위에 두문장을 한문장으로 바꾸고싶으면 증감연산자를 변수 앞에 오게 해야한다.그래야 증감을 하고 다시 그 장가값을 value에 넣을수있으니까
}
console.log(`교수님한자리씩합 : ${sum_s}`);

