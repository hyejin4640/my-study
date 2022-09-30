// promis is a javascript object for asynchronous operation.(비동기적)
// 콜백함수대신사용할수있음
// - state(상태) - 무거운프로세스를 진행중인지 성공했는지 실패했는지
//    state : pending -> fulfilled or rejected
// - producer vs consumer 
 

// 1. Producer 
// when new Promise is created, the executor runs automatically.=> excuter 라는 콜백함수는 바로실행하다
const promise = new Promise((resolve , reject)=>{
  // doing some heavy work (network , read files)
  // 무거운일을 수행하는 코드를 sync(동기적)으로 처리하면 완료전까진 그다음코드는 실행이안되기때문에 promis를 이용해 비동기적으로코드를 수행한다
  console.log('doing something...');
  setTimeout(() => {
    // resolve('ellie'); 
    reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers : then, catch, finally
promise
  .then((value)=>{
  console.log( value );
}).catch((error)=>{
  console.log(error);
}).finally(()=>{
  console.log('finally');
  
})


// 3. Promise chaining
const fetchNumber  = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(1)
  }, 1000);
})

fetchNumber
.then(num => num*2 ) // 2
.then(num => num*3 ) // 6
.then(num => {
  return new Promise((resolve,reject)=>{
setTimeout(() => {
  resolve(num-1) // 6-1 = 5
}, 1000);
  })
} )
.then(num => console.log( num ));  // 5 


// 4. Error Handling
