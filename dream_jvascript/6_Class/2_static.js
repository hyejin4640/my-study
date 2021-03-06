// static ์ ์  property , method
//๐Class ์์ฑ๋ฌธ ๐
class Fruit {
  // ํด๋์ค๋ ๋ฒจ์ property
  static MAX_FRUITS = 444;
  //์์ฑ์ : new ํค์๋๋ก ๊ฐ์ฒด๋ฅผ ์์ฑํ ๋ ํธ์ถ๋๋ ํจ์
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // ํด๋์ค ๋ ๋ฒจ์ method
  static makeRandomFruit() {
    // ํด๋์ค ๋ ๋ฒจ์ method ์์๋ this๋ฅผ ์ฐธ์กฐํ ์์์, ํํ๋ฆฟ๊ทธ์์ฒด์ด๊ธฐ๋๋ฌธ์
    return new Fruit("banana", "๐");
  }

  //์ธ์คํด์ค ๋ ๋ฒจ์ method
  display = () => {
    //classํจ์๋ง๋ค๋ ํจ์๋ช ์์ function ์ฐ๋ฉด ์๋จ!
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// ๐class/instat ํธ์ถ๋ฌธ๐
//class level ์ method๋ class๋ฅผ ํตํด method์ฌ์ฉ
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

//instant level ์ method๋ ๋ง๋ค์ด์ง instant๋ฅผ ํตํด ์ฌ์ฉ
const apple = new Fruit("apple", "๐"); // apple์ Fruit ํด๋์ค์ ์ธ์คํด์ค์ด๋ค.
const orange = new Fruit("orange", "๐"); // orange์ Fruit ํด๋์ค์ ์ธ์คํด์ค์ด๋ค.
const obj = { name: "heyjin" }; // obj๋ ๊ฐ์ฒด์ด๊ณ ,์ด๋ค ํด๋์ค์ ์ธ์คํด์ค๋ ์๋๋ค.

//instat lecvel์ property,method๋ ์์ฑ๋ instant๋ฅผ ํตํด์๋ง ์ฌ์ฉ์ด๊ฐ๋ฅํจ

console.log(apple);
console.log(orange);
console.log(apple.name);
apple.display();

// ๐Class ์ฌ์ฉ์๐
Math.pow(); //math ๋ผ๋ ํด๋์ค์ pow๋ฉ์๋์ด๋ค. ์ฆ ์ธ์คํด์คor ๊ฐ์ฒด๋ฅผ ์์ฑํ์ง์์๋ ํด๋์ค๋ ๋ฒจ์ ๋ฉ์๋๋ฅผ์ด์ฉํด ๊ฐ์ฒด๋ฅผ ์์ฝ๊ฒ ์์ฑํ ์์๋ค
Number.isFinite(1);

//Fruit ์ด๋ผ๋ ๊ฐ์ class๋ก ์์ฑ๋ ๊ฐ๊ฐ์ instant ์ property ๋ ๋๋ฆฝ๋ ๊ฐ์ ์ ์งํ๋ค
apple.name = "์ฌ๊ณผ์๋์ฌ๊ณผ์๋";
console.log(apple);
console.log(orange);
