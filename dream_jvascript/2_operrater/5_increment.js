//증가 & 감소 연산자 increment & decrement Operators
let a = 0;
console.log(a);
a++; //a = a+1;
console.log(a);
a--; //a = a-1;
console.log(a);

console.clear();
//주의!
// a++; 값을 먼저할당하고, 그뒤값을 증가시킴
// ++a;  먼저 증가하고, 값을 할당함(동시에일어남)
a = 0;
console.log(a++); // a변수 즉 자기자신에 먼저 원래값을 대입하고 그뒤에 1을 증가시켜야하니, 즉0을 할당함 결과 : a는 아직 0 임
console.log(a); //필요한연산(a원래값 0 할당)이끝났으니 값을 증가시켜서 출력함  결과 : 1
let b = a++;
console.log(a); //a는 1이 증가되고
console.log(b); //b는 a를 값으로 먼저 할당받아야하니 a가 증가되기전의 값이 출력됨

let v = 5;
v++; // v자기자신에게 먼저 원래값인 5를 할당
console.log(v); //이제 1을 증가시켜 출력함 결과 : 6

let c = ++v;
console.log(v);
console.log(c);
