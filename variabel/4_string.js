// str 문자열 타입
let string = '안녕하세요';

// 특수문자 출력하는법
string = '"안녕!"'
string = '안녕!\n엘리야'  //한줄내리기
string = '안녕!\t메리야'  //몇칸띄어쓰기
string = '안녕!\t메리야\\'  //백슬러싀 출력하기
string = '안녕!\t메리야\\\u02AC'  //유니코드 출력하기
console.log(string);

// 템플릿 리터럴(template Literal) -> `` <-꺾새사용 
let id = '엘리';
let greetings = "'안녕!," + id +"🙌\n즐거운 하루보내'";
console.log(greetings);

greetings = `'안녕,${id}🙌
즐거운 하루보내'`;
console.log(greetings);