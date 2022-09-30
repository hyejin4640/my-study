function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add; //sum이라는 변수에 add라는함수의 이름을 할당하는것은 add라는 함수의 함수실행코드가 담긴 메모리주소를 할당하는것과같다.
//함수의 이름은 함수를 참조하고있다.
console.log(sum(1, 2));
console.log(add(1));
// 둘의 결과가같다.
