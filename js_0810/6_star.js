// 💛별개수만큼 출력 하기
// 자바스크립트는 문자열과 숫자 곱하기는 안됨!!

// 변수 2개로 for문 밖에서 한번에 출력하기.
let star = "";
let result = "";
for(let i =1; i<6; i++){
  star+="*";
  result += star + "\n";
  console.log(star);
}
console.log(result);

// 변수 하나만으로 증가할때마다 출력하기.
let star2 = "";
for(let i =1; i<6; i++){
  star+="*";
  console.log(star2);
}

// 거꾸로 찍기
let star3 = "";
for(let i = 5; i >=1; i--){
  for (let k = 1;  k<=i; k++){
    star3+="*";
  }
  console.log(star3);
  star3="";
}

// 가운데를기준으로 찍기
/*
 4줄인 삼각형이니 공백은 3칸 대입 다음에 별이 한개 대입되고,,,,
    *       1    1(1*2)-1 1
   ***      2    3(2*2)-1 3
  *****     3    5(3*2)-1 5
 *******    4    7(4*2)-1 7

 */

//4줄 출력
let star5="";
for(let i =1; i<=4; i++){
  for(let j=i; j<4; j++){
    star5+=" ";
  }
for(let k=1; k<=(i*2)-1; k++){
  star5 += "*";
}
console.log(star5);
star5 ="";
}

//5줄 출력
let star4 = '';
for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
        star4 += ' ';
    }
    for (let k = 0; k <= (i * 2); k++) {
        star4 += '*';
    }
    star4 += '\n';
}
console.log(star4);




