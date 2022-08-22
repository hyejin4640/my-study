
    'use strict';

    // 변수선언-------------------------------------------------------------------------------------------------------
    let arrNumber = '';
    // 객체 가져오기---------------------------------------------------------------------------------------------------
    const tagButton = document.querySelector('button');
    const tagInput = document.querySelector('input');
    const tagDiv = document.querySelector('.result');
    // 함수정의-------------------------------------------------------------------------------------------------------
    
    const checkUserNumber =(user)=>{
        let strike = 0;
        let out = 0;
        let ball =0;
        for(let i=0; i<arrNumber.length; i++){
            if(-1 < arrNumber.indexOf(user[i])){
                if (user[i] === arrNumber[i]){
                    strike++;
                }else{
                    ball++;
                }
            }
            else{
                out++;
            }
        }
        tagDiv.append(`strike${strike} , ball${ball} out${out}`);
    }
    
    const confirmNumber = ()=>{
        let user = tagInput.value;
        if (user.length === arrNumber.length){
            checkUserNumber(user);
        }else{
            alert('숫자 4개를 입력하세요!!')
           
        }
    }
    const arrNumberInnit = ()=>{
        let num='';
        while (arrNumber.length <  4 ) {
        num =String( Math.floor(Math.random()*10));
        if ( arrNumber[arrNumber.length-1] === num){
            continue
        }else{
            arrNumber +=num;
        }
      }
      console.log(arrNumber);
      return arrNumber;
    }


    // 이벤트등록------------------------------------------------------------------------------------------------------
tagButton.addEventListener('click',confirmNumber)
arrNumberInnit();

