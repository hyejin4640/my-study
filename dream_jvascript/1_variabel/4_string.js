// str 문자열 타입
let string = '안녕하세요';

// 특수문자 출력하는법
string = '"안녕!"'
string = '안녕!\n엘리야'  //한줄내리기
string = '안녕!\t메리야'  //몇칸띄어쓰기
string = '안녕!\t메리야\\'  //백슬러싀 출력하기
string = '안녕!\t메리야\\\u02AC'  //유니코드 출력하기
console.log(string);

// ``템플릿 리터럴(template Literal) -> `` <-꺾새사용 : 파이썬에서 fstring 처럼 사용함
let id = '엘리';
let greetings = "'안녕!," + id +"🙌\n즐거운 하루보내'";
console.log(greetings);

greetings = `'안녕,${id}🙌


즐거운 하루보내'${4*5}`;
console.log(greetings);

let cart = [
  {name:'옷', price:2000},      //<- object
  {name:'가방',price:1000}
];

let count = cart.length;
console.log('카트에' + count + '개의 아이템이 있습니다');    //문자열의 결합
console.log(`카트에 ${count} 개의 


아이템이잇습니다`);      //template Literal 사용하면....