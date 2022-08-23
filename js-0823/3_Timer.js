/**
 * setTimeout / clearTimeout
 * setinterval / clearInterval
 */

/* setTimeout : 지정한 시간뒤에 "1번만" 실행함(일회성) */
// let count=0;
// const timerID = setTimeout(()=>{
//   console.log(`${count}`);
//   count++;
//   if(count > 4){
//     clearTimeout(timerID);
//   }
// },5000);
// // clearTimeout( timerID ); // 비동기식 처리 위에 함순setTimeout이 실행후 clearTimeout이 실행되야하지만 런타임을 실행하자마자 두개가다 실행되서 
// // hi 가출력안됨
// // console.log( timerID );


/* setInterval : 지정한시간마다 기다린후 함수실행(반복적) */
let count = 0;
const timerID = setInterval(()=>{
  console.log(`${count}`);
    count++;
    if(count > 4){
      clearInterval(timerID);
    }
},2000)



