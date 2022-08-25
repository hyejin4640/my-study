
/** get : 가져오기
 * set : 저장하기
 */

// let now = new Date();
// console.log( now.getFullYear() );    // 풀년도
// console.log( now.getDate() );       // 날짜
// console.log( now.getDay() );       // 0~6 (일주일을 0-6까지의 숫자로나타냄)
// console.log( now.getMonth()+1 );  //월 ( 0:1월 ~)
// console.log( now.getHours() );
// console.log( now.getMinutes() );
// console.log( now.getSeconds() );
// console.log( now.getTime() );  // 1910년 1월1일 00:00~ 밀리초 (기준점이있어서 지정한시간부터 흐른시간을 구하는데 사용)



/**
 * 오늘 날짜로부터 28일이 지난 후의 날짜 계산 해보기!
 */
// console.log( now);
// now.setDate( now.getDate()+28)
// console.log( now);

let now = new Date();
let firstDay = new Date('2022-05-16');
let passedTime = now.getTime() - firstDay.getTime();
console.log( passedTime );
let passedDay =Math.round(passedTime / (24*60*60*1000));   // 일 / 시 / 분 / 초
console.log( passedDay );

/**
 * 날짜를 2022-05-16
 * 100일이 지난 일자
 * 200일이 지난 일자
 * 300일이 지난 일자
 */

// 100일이 지난 일짜


fn_getPassedDate(100);
fn_getPassedDate(200);
fn_getPassedDate(300);
fn_getPassedDate(365);







 