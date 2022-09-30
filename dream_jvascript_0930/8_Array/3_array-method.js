// 배열의 함수들
// 배열 자체를 변경하는지, 새로운배열을 반환하는지
// 인자를 전달하는지, 안해도되는 기본이있는건지

// 모든 함수가 그런건지는 모르지만, 범위를 지정해주는 함수의 시작값, 미만값 을 생략하면 처음부터 끝까지로 간주
// 둘중 하나만 적어도 그지정한 시작값부터 끝까지 

const fruits = ['🍌','🍎','🍇'];

/*💜접근해서 값을 불러오는 method💜*/ 

// 특정한 object가 Array인지 체크
console.log(Array.isArray(fruits));  //true
console.log(Array.isArray({}));  //false : 빈 object이니까

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));  //1

// 배열안에 특정한 아이템이 있는지 확인
console.log(fruits.includes('🍎'));  //true

/*💜배열자체를 수정해서 배열자체가 변경되는 method💜*/ 

// const fruits = ['🍌','🍎','🍇'];
// 추가 - 제일뒤
let length = fruits.push('🥝')  //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일앞
length = fruits.unshift('🍊')  //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일뒤
let lastItem = fruits.pop();  //배열 자체를 수정하고 제거된 아이템을 반환(return)
console.log(fruits);
console.log(lastItem);  //🥝제거된 아이템을 반환

// 제거 - 제일앞
lastItem = fruits.shift();  //배열 자체를 수정하고 제거된 아이템을 반환(return)
console.log(fruits);
console.log(lastItem);  //🍊제거된 아이템을 반환

// 중간 - 추가,삭제
// splice를 이용해 삭제만해보기
const deleted = fruits.splice(1,1)  // 시작인덱스 , 삭제개수 , 추가값 
console.log(fruits);
console.log(deleted);  //🍎 제거된 아이템을 반환(return)

// splice를 이용해 삭제 & 추가 같이 하기
fruits.splice(1,1,'🍕','🍔')   //1부터 시작해서 1개만 삭제하고, 🍕🍔를  추가한다.
console.log(fruits);   //1번 인덱스값이 삭제되고 그1번위치에 추가하려는 🍕🍔 이 추가됨.
 


/*💜기존배열은 그대로있고 , 새로운배열을 반환하는 method💜*/ 

// slice 잘라진 새로운 배열을 만듬
// fruits = [ '🍌', '🍕', '🍔' ]
let newArr = fruits.slice(0,2)  // 시작값, 미만값
console.log(newArr);   //잘라진 새로운배열을 값으로할당
console.log(fruits);  // 원본배열은 그대로유지됨

newArr = fruits.slice()  // 시작값,미만값을 생략가능
console.log(newArr);   // 전체 index벙위가 새로운배열의 값으로할당
console.log(fruits);  // 원본배열은 그대로유지됨

// concat 여러개의 배열을 붙여줌 (기존의 배열들은 그대로유지하고 새로운배열을 반환)
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);  
console.log(arr1);  //변경X
console.log(arr2);  //변경X
console.log(arr3);  



//💜 기존배열이 수정되는지 안되는지 구별하지않고 적은 함수들💜
// 순서를 거꾸로
const arr4 = arr3.reverse();  // 기본배열 수정O
console.log(arr4);
console.log(arr3);

console.clear();
// flat 중첩 배열을 하나의 배열로 쫙 펴기 (기존배열수정x ,새로운배열 return)
let arr = [
  [1,2,3],
  [4,[5,6, [7,8]]],
];
console.log(arr);
console.log(arr.flat(3));  // 단을 지정해 풀어줄수있음(기본:1단계)

// fill 특정한 값으로 배열을 채우기 - (기존배열자체를 수정O)
arr = arr.flat(3);
arr.fill(0);   // 0으로채우고 범위는 지정안했으니 전체 인덱스에 0으로 채움
console.log(arr);

arr.fill('s',1,3);   // 채우려는값, 시작값, 미만값 (즉's'로 인덱스 1번,2번 위치에 할당한다)
console.log(arr);

// join 배열을 하나의 문자열로 합하기 -(기존배열 수정X,새로운값 return)
let text = arr.join();   // 기본:','를 기준으로 하나의 문자열이 탄생.
console.log(text);

text = arr.join(' | ');   // 지정한 값(' | ')을 기준으로 하나의 문자열이 탄생
console.log(text);

text = arr.join('');   // 공백''을 기준으로 하나의 문자열 탄생
console.log(text);




