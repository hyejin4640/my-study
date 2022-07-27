// 💜배열 생성 방법
// 배열의 사이즈를 정해 배열생성
let array = new Array(2);
console.log(array);

// 배열의 값을 할당해 배열생성
array = new Array(1,2,3);
console.log(array);

//  Array 의 static함수를 사용해 배열 생성
array = Array.of(1,2,3,4);
console.log(array);

// 배열 리터럴 사용해 생성
const anotherArray = [1,2,3,4];
console.log(anotherArray);

// 만들어진 배열을 담아 생성할수있음
array = Array.from(anotherArray);
console.log(array);

// iterable = 순회가가능한  
// 순회가가능한 것을 배열로 만들수있음
// ex : 문자열을 담아 문자열의 문자를 하나씩 순회해 각각으로 배열안에 담을수있다
const textArray = Array.from('text');
console.log(textArray);

// 💜자바스크립트의 배열은 다른언어와 조금다름
// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// but, 자바스크립트 에서의 배열은 연속적으로 이어져 있지않고,
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음(typed collection)
// int8Array, uint8Array,Float32Array,Float64Array..........
// 이렇게 같은 종류의데이터,사이즈별로타입끼리묶은 타입배열이있음


// 💜object를 배열로 만들기
array = Array.from({
  0:'안',
  1:'녕',
  length : 2,
});
console.log(array);  // ['안','녕']

// object 를 배열로 만들때,
// key = 인덱스, value = 값 ,length = 아이템의 개수
// 위에처럼 인덱스와 그에해당하는 데이터 , 아이템의 개수를 지정하면 오브젝트를 배열로 만들수있음