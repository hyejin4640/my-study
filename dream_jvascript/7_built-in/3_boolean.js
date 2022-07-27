// Boolean 함수들
// Boolean은 객체로 감싸지면 사용되는 함수는 별로없음
//const isTrue = true; // 메모리때문에 바로 변수에 할당
const isTrue = new Boolean(true); //=> 객체로도 값을 할당
console.log(isTrue.valueOf());

/**
 * falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 *  Trueshy
 *  1
 * -1
 * 'false'   //false여도 문자열로되있으면 true
 * '0'
 * []
 * {}
 */
