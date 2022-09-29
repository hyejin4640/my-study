//UTC기준 (협정 세계시, 1970년 1월1일 UTC 자정과의 시간차이를 밀리초 단위(MS))
// 💜static 메소드,속성 (class level)
console.log(new Date()); // date생성시 인자를 주지않고 생성하면 현재시간 출력
console.log(new Date("jun 5,2022")); //날짜 지정해 생성
console.log(new Date("2022-12-17T03:24:00")); //시간까지 지정해생성

//밀리초 단위로 표현
console.log(Date.now());
console.log(Date.parse("2022-12-17T03:24:00"));

//💜instant level 메소드,속성
const now = new Date();
now.setFullYear(2023); // 년도지정
now.setMonth(0); // 월지정 (0 : 1월)
console.log(now.getFullYear()); //년도를 갖고옴
console.log(now.getDate()); //날짜를 갖고옴 (0:1)
console.log(now.getDay()); //요일을 갖고옴(0:일요일,1:월요일......6:토요일)
console.log(now.getTime()); //전체 시간을 갖고옴
console.log(now.getHours()); // 시 를 갖고옴
console.log(now);

console.log(now.toString()); //date를 문자열로 변환
console.log(now.toDateString()); //날짜만 문자열로 변환
console.log(now.toTimeString()); //시간만 표기
console.log(now.toISOString());  // ISO 8601 형식
console.log(now.toLocaleString('en-us'));   // 나라별로 표현(미국)
console.log(now.toLocaleString('ko-kr'));   // 나라별로 표현(한국)
