
// 비동기 실행

function execute() {
  console.log('1');  /* 1번실행 */
  setTimeout(() => {
    console.log('2');  /* 2번실행인데, node가 setTimeout함수를 실행하는데 그안에 callback함수를 2.5초 뒤에 실행하라고 던져둔다. =>
    그리고 시간이 다되면 taskQue로 옯겨놓고 js엔진의 이벤트루프가 callstack과 taskQue를 감시하며 callstack이 비어있으면 callback함수를
    callstack으로 옮겨 실행한다 */
  }, 2500); 
  console.log('3');   /* 3번실행 */
}
execute();
