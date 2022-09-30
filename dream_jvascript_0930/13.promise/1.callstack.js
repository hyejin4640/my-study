function a() {
  for (let i = 0; i < 10000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c();  
console.log(result);  // c() -> b() -> a() => a()가먼저 실행된후에 완료하면 -> b() -> c()  실행


// js가동작하는 runtime환경이라면 engine이 탑제 됨
// 동기적 : 순서대로 하나끝내고 하나실행하고
