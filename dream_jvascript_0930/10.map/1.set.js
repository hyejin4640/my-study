// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;  // obj1의 값을 변경한다 
objs.add(obj1);  // obj1을 다시 objs 에 담는다 
console.log(objs); // 결과는 obj1의 내용물이 바껴써 set에 추가가될것같지만 ❌=> 왜냐하면 객체를 담는 객체명의 주소값과 객체가담고있는 내용물의 주소값은 다르다. 그래서 객체명의 주소값이 중복이되므로 추가가 안되는것임

// 퀴즈
const obj3 = { name: '🍌', price: 5 }; //obj1의 내용물과 일치하는 obj3을 생성해
objs.add(obj3); // objs 에 추가한다
console.log(objs); // obj3의 내용물 자체는 중복이지만, obj3의 변수명의 주소값은 새로운 데이터에 배정되어있어, 주소값이 중복이안되기때문에 objs에 담을수있다
obj3.price = 8;
console.log(objs);
