// null, undefined

//undefinded : 변수에 값이 있는지 없는지 아직정해지지않은상태
let variabel;   //변수만 선언하고 값을 안줌
console.log(variabel);


//null : 비어있다고 정해진 상태
variabel = null;
console.log(variabel);

let activItem;   //아직 활성화된 아이템이 있는지 없는지 "모르는상태"
activItem = null; // 활성화된 아이템이 "없는 상태"

console.log(typeof 123);
console.log(typeof null);   //->Object
console.log(typeof undefined);   //->undefined

let a =10;  //선언하고 저장해라 기때문에 반환값이없어 undefined 로결과가나온다
a = 10;   //선언된 a안에 10을 저장했가때문에 반환값이있따.