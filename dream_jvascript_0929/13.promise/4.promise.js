
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!'))    // resolve : 성공했을때
  .catch(console.error)                     // reject : 실패했을때
  .finally(() => console.log('끝났다!'));  //  성공하든 실패하든 
