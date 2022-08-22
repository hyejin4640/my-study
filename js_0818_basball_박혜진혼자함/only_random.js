/*
    0<= random <10
*/
///////////////////// 중복되지않는 램덤한 4개의수 배열 생성 방법 1 
const choiseNumber = () => {
    // const number = []; //0~9
    // for( let i=0 ; i<10 ; i++ ){
    //     number.push(i);
    // }
    // const number = Array(10).fill().map( (value,index)=>index );    
    const number = new Array(10).fill(1);
    number.forEach( (value,index) => {
        number[index] = index;
    })  

    const answer = [];  //4개 저장
    for( let n=0 ; n<4 ; n++ ){
        const idx = Math.floor(Math.random()*number.length);    //숫자4개를 저장하는데 , 위에 0-9까지의 숫자를 담은 배열의 길이만큼의 범위를 지정해 그안에서 랜덤한 숫자를 생성한다.
        answer.push( number[idx] );   //number의 랜덤한숫자를 인덱스로넣어 number안에서 추출해서 새로운 배열에 담는다
        number.splice(idx,1);   // 담은수는 number안에서 삭제한다.=> 삭제하고나면 number의 길이는 줄어들고, 그 값도 없으니까 줄어든 길이만큼을 다시 random메소드의 최대값의 범위로 지정해 그안에서 랜덤한 숫자를 다시생성해 4개가 완성 될때 까지 반복한다
    }
    console.log( answer );
}

/////////////////////////// 중복되지않는 램덤한 4개의수 배열 생성 방법 2
const analysisNumber = ()=>{
    let answer = [];   /* 4개의 랜덤한 숫자를 저장 */
    while( answer.length < 4 ){
        let temp = Math.floor(Math.random()*10);  /* 0~9*/
        // if( !answer.includes(temp) )
        if( answer.includes(temp) == false ){   // 0-9사이에 랜덤한 숫자로 나온수가 새로운배열에 포함되어있으면 true이니까 false가나오면 새로운배열에 추가해라(중복검사)
            answer.push(temp);
        }
    }
    console.log( answer );
}
// analysisNumber();

const arrIncludes = (arr,value) => { 
    for( let i=0 ; i<arr.length ; i++ ){
        if( arr[i] === value ) {
            return true;
        }
    }
    return false;
}

let data = arrIncludes( [1,2,3,4,5] , 3 );
console.log( data );

