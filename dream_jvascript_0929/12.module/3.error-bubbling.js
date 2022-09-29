// Bubbling up, Propagating 🧼
function a() {
  throw new Error('error!');
  // throw는 에러가발생했다라는 걸 알릴때 
}

function b() {
  try {
    a(); 
  } catch (error) {
    // catch는 에러를 잡아서, 실행하는 구문을 설정할때 사용
    //try구문에서  a()함수를 실행했는데 에러가 잡힐때 명령문 실행 
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    throw error;  /* throw는 error를 여기서 catch하지않고 error를 던져줄때  */

  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done!');
