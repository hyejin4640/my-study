// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function itemChange(arr, a, achange) {
  const list = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      list[i] = achange;
    } else {
      list[i] = arr[i];
    }
  }
  return list;
}
const input = ["🍌", "🍓", "🍇", "🍓"];
const output = itemChange(input, "🍓", "🥝");
console.log(itemChange(input));
console.log(output);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// const input2 =  [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function countArr(arr, a) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      count++;
    }
  }
  return count;
}
const input2 = ["🍌", "🥝", "🍇", "🥝"];
const output2 = countArr(input2, "🥝");
console.log(output2);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result.push(arr1[i]);
    }
  }
  return result;
}

const input3 = ["🍫", "🥝", "🥪"];
const input4 = ["🍫", "🍓", "🥪", "🍓"];
const output3 = match(input3, input4);
console.log(output3);
