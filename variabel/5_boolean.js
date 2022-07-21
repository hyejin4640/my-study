// 불리언 타입
// True or False 만 존재
let 참  = true;
let 거짓 = false;
console.log(참);
console.log( 거짓);

// 활용 ex
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isEntrolled);
console.clear();

// !! <-느낌표2개연산자는 값이 True 인지 False인지 변환해주는연산자
// Falshy 거짓인 값
console.log(!!0);    
console.log(!!-0);    
console.log(!!'');    
console.log(!!null);    
console.log(!!undefined);    
console.log(!!NaN);    

//Trushy 참인 값
console.log(!!1);    
console.log(!!-1);    
console.log(!!'text');    
console.log(!!{});    
console.log(!!Infinity);  