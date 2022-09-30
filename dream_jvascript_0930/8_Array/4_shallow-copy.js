// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat,slice,spread(...), object.assign
const pizza ={name:'🍕',price:2};
const ramen ={name:'🍜',price:3};
const sushi ={name:'🦪',price:1};


const store1 = [pizza,ramen];
const store2 = Array.from(store1)  // store1(배열) 을 복사해서 값으로할당
console.log('store1->',store1);
console.log('store2->',store2);

// store1의 주소를 store2가 복사한것이아니라, store1의 값을 복사한것이기때문에 store2가 가르키고있는
// 메모리주소에 값을 추가하면 당연히store1에는 영향이없음
store2.push(sushi);  // store2에 sushi 를 추가함.
console.log('store1->',store1);  //기존 값을 유지.
console.log('store2->',store2);  // 추가된 값이 들어가있다.


// 배열에 값이 object일때 값으로 할당된 object의 item을 변경하면, object의 값의 메모리주소가 공유
// 되기때문에 복사한배열과 기존배열의 object item의 값이 변경된다.
pizza.price = 4;
sushi.price = 9;
console.log('store1->',store1);
console.log('store2->',store2);


// 기존객체를 생성한 객체의 값으로할당하고, 생성한 객체에 아이템을 추가하면 기존 객체에도 같이 추가됨!
const bts ={
  name:'bts',
  body:'good',
};

const army = bts;
console.log(bts);
console.log(army);

army.hook = 456;
console.log(bts);
console.log(army);


