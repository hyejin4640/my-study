//🧡 higher order function (고차함수)

const fruits = ["🍌", "🍓", "🍇", "🍓"];
// for (let i = 0; i < fruits; i++) {
//   console.log(fruits[i]);
// }

// 🧡forEach 배열을 빙글 빙글 돌면서 원하는것(콜백함수)을 할때
// return값은 없음
fruits.forEach(function (value /* index, array*/) {
  console.log("------------------------------");
  console.log(value);
  // console.log(index);
  // console.log(array);
});
// index, array 까지 필요없다면 생략가능

//arrow function expression 사용
fruits.forEach((value) => {
  console.log(value);
});

//🧡 find 조건에 맞는(콜백함수) 아이템을 찾을때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "🥛", price: 2 };
const item2 = { name: "🍫", price: 2 };
const item3 = { name: "🍔", price: 2 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === "🍫");
// 콜백함수에서 바로 return 하는경우는 {}와 return 을 생략할수있음!
console.log(result);
// 해석 : find라는 함수가 배열중에서 배열의 키의 값이 🍫과같은 값을 찾아주어서 반환해주는함수로
// 사용됨

// 🧡findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === "🍫");
console.log(result); // 1

// 🧡some : 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === "🍫");
console.log(result); //true

// 🧡every : 배열의 아이템들이 "전부" 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === "🍫");
console.log(result); //false

// 🧡filter : 조건에 맞는 "모든" 아이템들을 새로운 배열로 반환
result = products.filter((item) => item.name === "🍫");
console.log(result); // priduct배열안에 item2가 2개가 들어있으니, 2개가 배열로 반환됨

///////////////////////////////////////////////////////////////////////////////////////

/*🧡 Map : 배열의 아이템들을 각각 다른 아이템으로 매핑할수있는 ,새로운배열로 생성 */
// 배열을 순회하면 각각의 아이템들을 지정한함수에서 사용할수있는 함수
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => console.log(item * 2));
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 10;
  } else {
    return item;
  }
});
console.log(result);

// 🧡flatmap 중첩된 배열을 쫘악 펴줌
// flatmap vs map 차이
// faltmap은 배열안에 여러단으로 엮어진 배열을 풀어준다.
result = nums.map((item) => [1, 2]);
// 위에 retult안에는 5개의 값이 들어있엇다. 그래서 그값들의 개수에 mapping 해서 조건을 개수
// 만큼 실행함
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["dream", "coding"].map((text) => text.split(""));
console.log(result);

result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);

// 🧡sort 배열의 아이템들을 정열
// 문자열 형태의 오름차순으로 요소를 정열하고, 기존의 배열을 변경

const texts = ["hi", "abc"];
const lie = texts.sort();
console.log(texts);
console.log(lie);
// 새로운 변수안에 sort함수를 실행해서 넣어도 기존배열과 새로운배열 모두 수정되어있음

const numbers = [5, 9, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ]
// 문자열을 오름차순으로 정열하기때문에 문자형태 그자체로 10의 앞자리인 1이 2보다작으니까
// 출력결과처럼 결과가 나옴

// ! 그래서 ! 숫자로 정열시엔 sort 의 정렬 기준점을 콜백하무로 전달해줘야함
// a,b 를 배열안의 첫번째 요소,두번째요소에 대입해 인자로 전달하고, \
// a,b 를 - 한 값이 음수면 a<b,양수면 a>b, 0이면 a===b,
// 이걸 왜하냐?숫자가 누가더큰지작은지같은지는 숫자의 오름차순 내립차순의 기준을 알려주는거니까
// 즉, 문자의 정열기준이아닌 숫자의 정열기준을 전달하는것과같음
numbers.sort((a, b) => a - b);
console.log(numbers);

//🧡 reduce 배열의 요소들을 지정한 행동(콜백함수)을 하게하면서 접어서 접어서 값을 하나로 만들어주는 함수
// 콜백함수의 첫번째 인자 sum은 접혀져서 최종적으로 정해지는값, 두번째 인자 value는 배열의 요소들이 한번씩 대입하는 인자
// 콜백함수, 0은 sum의 초기화 값임
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
