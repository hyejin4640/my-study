
// test
// star6 라는 변수안에 값을 공백 & 별을 넣어주어야함
// 일단 총5줄 => 총for문
// 한줄당 공백의수 : n--, 별의 개수:n++    =>각각의 for문 ,중첩for문

/**

    *
   **
  ***
 ****
*****

 * 
 */



let star2 ="";
for(let i = 1; i<6; i++){
  for(let j=1; j < 6-i; j++){
    star2+=" ";
  }
  for(let k =1; k<i+1; k++){
    star2+="*";
  }
  console.log(star2);
  star2="";
}

/**

*****
 ****
  ***
   **
    *

 * 
 */



let star="";
for(let i =1; i<=5; i++){
  for(let j = 1; j<=i-1; j++ ){
    star+=" ";
  }
  for(let k =1; k<=6-i; k++){
    star+="*";
  }
  console.log(star);
  star="";
}


/**
 * 
 *    *
 *   ***
 *  ******
 * ********

*/
let star3="";
for(let i=0; i<4; i++){
  for(let j=3; j>i; j-- ){
    star3+=" ";
  }
  for(let k =0; k < (i*2)+1; k++){
    star3+="*";
  }
  console.log(star3);
  star3="";
}

