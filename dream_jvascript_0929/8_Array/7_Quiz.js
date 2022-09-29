/** Higher order function */

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const array = ["🍌", "🍓", "🍇", "🍓"];
const result = array.map((item) => {
  if (item === "🍓") {
    return "🥝";
  } else {
    return item;
  }
});
console.log(result);


// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// const input2 =  [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// const count = result.reduce((count,value)=>{
// if (value == "🥝"){
//   count++;
// }
// return count
// },0)
// console.log(count);

function count(array,item) {
  return array.filter((value)=>value ==="🥝").length;  
}

console.log(count(result,"🥝"));
console.log(result);



// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]


function math(arr1,arr2) {
  return arr1.filter((item) =>  arr2.includes(item))
}

console.log(math(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));


// 퀴즈 4
// 5이상 (보다 큰) 의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
let arr;
function Average(array) {
 arr = array.filter((item)=> item >= 5);
 arr.reduce((hab,item)=>{
  hab +=item;
},0)
}
console.log(Average(nums));

