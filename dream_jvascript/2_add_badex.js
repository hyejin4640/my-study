const fruits = ['π','π','π','π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

//for statement μ¬μ©
for (let i =0; i<fruits.length; i++){
  console.log(fruits[i]);
} 

// const fruits = ['π','π','π','π'];
// π©μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ π©

// indexλ‘ μ κ·Όν΄μ μΆκ°,μμ νλκ²x
fruits[fruits.length] = 'π'
console.log(fruits);

// delete λ‘ μ­μ x
delete fruits[1];  //  <1 empty item> λΌκ³  λΉμ΄μλνμμ΄ λ¨μλ²λ¦Ό
console.log(fruits);



