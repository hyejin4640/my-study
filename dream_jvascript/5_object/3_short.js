// object의 key와 value 로할당하려는 변수의 이름이 같다면 , 한쪽은 생략가능

// x 변수에 담긴0을 coordinate obj에 값으로 담고, key명도 같은x로 하고싶음
//즉,key와 value 명이 같을때(여기서 value는 변수여야함 그래야 값을 담을수있으니까)
const x = 0;
const y = 0;
const coordinate = { x, y }; // <-축약버전-> {x: x,y: y};
console.log(coordinate);

// function nakeObject(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

//바로위 축약버전
function nakeObject(name, age) {
  return {
    name,
    age,
  };
}
