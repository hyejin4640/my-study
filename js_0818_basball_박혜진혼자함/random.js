//난수값 받아오기

/* 0<= num < 1 */
for( let i=0 ; i<10 ; i++ ){
    let num = Math.random();    //
    // console.log( num );
    /* 0 <= num <10 */
    // console.log( Math.floor(num*10) );
    /* 2 < = num < 10 */
    console.log( Math.floor(num*8+2) ); // 랜덤함수를 지정하는데 0-1사이에 수를 반환하는 메소드 : random
    // floor : 소수점밑으로는 무조건 버림 , 랜덤함수의 범위를 지정하고싶으면
    // 일단  random + floor 을 같이사용하는데 최대값에서 시작값만큼  뺀후에 뺀값을 다시 더한다.
    // 시작값이 0이아니라 2를 하고싶으면 0에서2를 더하면되니까 , 하지만 나머지값들에도 +2가되면 최대값이 늘어나니까
    // 최대값에서 더해준 시작값만큼 빼준다.
    n = Math.random(); 
console.log(`n : ${n}, ${n*10}  ${n*6+2}`); // 2-7까지의 랜덤수
}






