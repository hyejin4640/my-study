// 삼항 조건 연산자 Ternary Operator
//조건식 ? true : flase;
let fruit = "apple";

if (fruit === "apple") {
  console.log("🍎");
  let a = 1;
  console.log(a);
} else {
  console.log("아무도아님");
}

//ternary operater 사용하면...(if와 else를 사용하는경우)
fruit === "apple" ? console.log("🍎") : console.log("아무도아님");

console.clear();
//변수안에 할당해서 값을 반환
let emoji = fruit === "apple" ? "🍎" : "아무도아님";
// enoji 라는변수를 선언하고 값은 삼항연산자를사용해서,
// fruit이 apple과 타입과값이 같으면 "🍎",아니면 " 아무도아님"을 할당해라!(이러면 위에 처럼 console.log를 반복하지않고 마지막에 출력을 한번만 해주면됨)
console.log(emoji);
