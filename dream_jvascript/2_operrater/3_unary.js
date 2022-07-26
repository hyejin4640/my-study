//단항연산자 Unary Operators
// + (양)
//-  (음)
// !  (부정)

let a = 5;
a = -a; //-1에 곱하기 5를 하는것
console.log(a); //-5
a = -a;
console.log(a); //5

a = +a;
console.log(a); //5
a = -a; //5
a = +a; //+(-5)
console.log(a); //-5

let booleam = true;
console.log(booleam);
console.log(!booleam);
console.log(!!booleam);
console.log(!!!!booleam); //부정의부정의부정의부정

//+ 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 낭는지 확인할수있음
console.clear();
console.log(+false);
console.log(+null);
console.log(+"");
console.log(true);
console.log(+"text");
console.log(+undefined);

//
console.log(!l); // ! 부정연산자
console.log(!!1); // !!값을 boolean 타입으로 변환함
