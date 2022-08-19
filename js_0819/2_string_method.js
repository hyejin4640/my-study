/** String method */
// trim (양끝에 공백을 없애주는 메서드)
// const str = '                  abc  ABC';
// console.log( str );
// console.log( str.trim() );

/** 문자열slice(시작index , 미만index) */
const sentence = 'the sun shine';
console.log( sentence.slice(4,7));
console.log( sentence.slice(0) );

/** 문자열 substr, charAt 값잘라오기 */
console.log( sentence.substr(4,3));  //시작인덱스 , 시작인덱스부터 몇개인지
console.log( sentence.charAt(4));    // s

/** 문자열 indexOf : 지정한값이 문자열의인덱스 어디에있는지 찾는 method*/
console.log( sentence.indexOf('d'));   // 0

/** 문자열 대소문자 변환 method  */
console.log( sentence.toLowerCase());
console.log( sentence.toUpperCase());



/**문자열 toString : 문자열로 변환시켜줌 */
const arr =[1,2,3];
console.log( arr.toString() );
const bool = true;  
console.log(typeof bool.toString(), bool.toString() );  //=>boolean자료형을 문자열로 변환함



/** 문자열을 배열로 from */
const str = '123456789';
// const arr1 =[]
// for(let i=0; i<str.length; i++){
//   arr[i] = str[i];
// }
// console.log(arr);


const arr2 = Array.from(str);
const arr3 = Array.from(str, el=>el**2);
console.log(arr2);
console.log(arr3);


/**split  문자열을 지정한것을 기준으로 잘라서 배열로 반환 */
const won='1,234,577';
console.log(won.split(','));

const temp ='gpwls@naver.com';
const idSite = temp.split('@');
console.log(idSite);



/** 배열을 문자열로 join */
const data =['a','b','c']
console.log(data.join('-'));  //지정한것을 기준으로 하나의 문자열로 반환


