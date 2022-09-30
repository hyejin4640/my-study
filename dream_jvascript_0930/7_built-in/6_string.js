// 문자열 관련 메소드들
// 원시타입이 이런 함수(행위)를 갖을수있는건 단일 값을 받을땐 원시타입으로 메모리에 할당되지만,
// 기능을 사용하고싶으면 객체로 감싸진다  wrapping 
const textObj = new String("Hello world"); //객체에 할당
const text = "Hello world!";
console.log(textObj);
console.log(text);

//😛string.method😛//

// 문자열의 길이
console.log(text.length);

// 문자열의 위치(index)의 해다하는 값을 불러오기
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);


// 문자열의 해당 문자의 인덱스 위치값을 불러오기
// indexof = 처음(왼쪾)에서 부터 해당문자의 위치를 찾음
console.log(text.indexOf('l'));
// lastindexof = 마지막부터 해당문자의 위치를 찾음
console.log(text.lastIndexOf('l'));
// 문자열의 해당 문자가 포함되는지 여부
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

// 문자열의 시작하는문자 인지 아닌지
console.log(text.startsWith('h'));
console.log(text.startsWith('H'));

//문자열의 끝나는 문자 인지 아닌지
console.log(text.endsWith('!'));
console.log(text.endsWith('d'));

// 문자열 전체를 대문자로 반환(실제 원본데이터에는 영향없음)
console.log(text.toUpperCase());
//문자열 전체를 소문자로 반환(실제 원본데이터에는 영향없음)
console.log(text.toLowerCase());

// 지정한범위의 문자를 갖고옴(시작, 미만)
console.log(text.substring(0,2));

// 문자열의 지정한 범위부터 문자만 잘라서 갖고옴 
console.log(text.slice(2));  //양수 : 시작
console.log(text.slice(-2));  //음수 : 거기까지

// 문자열의 좌우공백만 제거 trim
const space = '                   space       ';
console.log(space.trim());

// 1개의문자열을 지정한 기준으로 끊어서 여러개로 만듬(배열로 변환)
// split
const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(' ',2)); // 배열로나눠진것중에 개수를 지정해 반환 가능









