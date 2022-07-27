// 사용예제 1
function add(a, b) {
  return a + b;
}

const result = add(1, 2);
console.log(result);

// 사용예제2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 🤨`;
}
console.log(fullName("박", "혜진"));

let lastName = "김";
let firstName = "지수";
console.log(fullName(firstName, lastName));

let lastName2 = "박";
let firstName2 = "철수";
console.log(fullName(firstName2, lastName2));
