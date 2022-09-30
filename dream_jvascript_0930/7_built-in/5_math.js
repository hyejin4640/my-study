// Math
// static propertids, method

console.log(Math.E); //오일러의 상수 , 자연로그의 밑
console.log(Math.PI); //원주율 pi값

// static method
// 절대값
console.log(Math.abs(-10)); //절대값으로 반환(-을 뺌)
// 소수점 이하를 올림
console.log(Math.ceil(1.4)); // 2
// 소수점 이하를 내림
console.log(Math.ceil(1.4)); // 1
// 소수점 이하를 반올림
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.5)); // 2
// 정수만 반환
console.log(Math.trunc(1.5423));

// 최대, 최소 값을 찾기!
console.log(Math.max(1, 2, 3, 7, 8)); // 8
console.log(Math.min(1, 2, 3, 7, 8)); // 1

// 거듭제곱
console.log(3 ** 2); //9
console.log(Math.pow(3, 2)); //9

// 제곱근 - 어떤걸 제곱해야 지정한 숫자가되는지
console.log(Math.sqrt(9)); //3

// 랜덤한 값을 반환
// 0-1 사이 랜덤한 값 반환
console.log(Math.random());

//1-10
console.log(Math.floor(Math.random() * 10 + 1));
// math.random 범위가 0-1 이니까 *10 에 1을더해 줬다 (random 벙위 만듬)
// math.floor => 소수로 반환하니까 정수로 반환시키는 메소드 사용
