// import { increase as increase1 } from './counter.js';    /* 외부 특정 함수를 받아올때 이름을 그대로사용하고싶으면 as 를 안쓰고 바꾸고 싶으면 as뒤에 사용할이름  */
// import { increase, getCount } from './counter.js';      /* 여러개 사용할때  */         

// increase();
// increase();
// const a = getCount();
// console.log( a);

/* 해당파일에 모든것을 갖고올때  ***********************************************************************/
import * as counter from './counter.js';   
/* 전부다 가져올때는 가져오는 이름명.사용할메소드/변수명 */    
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());


