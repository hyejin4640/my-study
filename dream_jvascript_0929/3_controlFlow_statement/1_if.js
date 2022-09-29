// 조건문 conditional statement
// if(조건) {}
// if(조건) {} else {}
// if(조건1) {} else if(조건2){} else {}
let fruit = "orange";

if (fruit === "apple") {
  console.log("🍎");
  let a = 1;
  console.log(a);
} else if (fruit === "orange") {
  console.log("orange");
} else {
  console.log("아무도아님");
}

if ("") {
  console.log("출력되면 안됨!"); //왜출력되면안될까? '' <-공백은 false니까 조건이 거짓이되서
  //실행되면안됨
}
