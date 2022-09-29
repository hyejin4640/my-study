// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자! ⏱

function runInDelay(callback, seconds) {
    if (!seconds || seconds <0) {
      throw new Error('seconds는 0보다 커야함');
    }
    if( !callback ){
      throw new Error('call백함수를 전달해야함');
    }
    const time = seconds * 1000;
    setTimeout(callback, time);

}
try{
  runInDelay(() => {
    console.log("hi~ im happy");
  }, 2);
}catch (error){}



