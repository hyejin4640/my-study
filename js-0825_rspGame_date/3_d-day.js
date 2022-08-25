
const tagH3 = document.querySelector('h3');
const tagWrap = document.querySelector('#wrap');
let firstDay = new Date('2022-05-16');   //기준이 되는날짜 (지금날짜로부터 몇일됬는지: 가장위에 지정한일수로 부터 몇일이 됬는지 : div들  )



/** 함수정의 -------------------------------------------------------------------------------- */

// 전체 년 월 일 날짜 구하는함수
const fn_getPassedDate =(days)=>{
  let passedTime = firstDay.getTime() + ( 1000*60*60*24*days);
  let someDay = new Date(passedTime);
  let someDayString = `${someDay.getFullYear()} 년 ${someDay.getMonth()+1}월 ${someDay.getDate()}일`;
  fn_drawDiv(days , someDayString)
  printDayString(days)
}

// 현재날짜로 부터 몇일이 지났느지 날짜를 계산해서 1년을넘으면 몇년 몇일 , 안넘으면 몇일 형식의 값을 전달하는 함수
const printDayString =(days)=>{
  let year = Math.floor( days / 365);
  let day = Math.floor( days % 365);
  let strYear = year ? year+"년" : '';
  let strDay = day ? day +"일" : '';
  let result = strYear + strDay;
  fn_getNowDay(result)
}

// div 태그를 생성하는함수
const fn_drawDiv =(days , after)=>{
  tagDiv = document.createElement('div');
  tagWrap.appendChild(tagDiv);
  tagDiv.className = 'divCreate';
  tagDiv.innerHTML = `<p>${days}일<p><p>${after}<p>`;
}


// 현재날짜로 부터 몇일이 지났느지 날짜를 태그에 전달해 브라우저에 그리는 함수
const fn_getNowDay =(days)=>{
  // let nowDay = new Date();
  // nowDay = nowDay.getTime() - firstDay.getTime();
  // nowDay=Math.round(nowDay / ( 1000*60*60*24)); 
  tagSpan = document.querySelector('h3 > span');
  // tagSpan.textContent = nowDay;
  tagSpan.textContent = days
}

/** 함수호출 -------------------------------------------------------------------------------- */
fn_getNowDay();

fn_getPassedDate(100);
fn_getPassedDate(200);
fn_getPassedDate(300);
fn_getPassedDate(365);
fn_getPassedDate(365+10);
fn_getPassedDate(365+20);
