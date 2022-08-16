(function () {
  "use strict";


  /** 객체 설정 **************************************************************************/ 
  const tagBtnWrap = document.querySelector(".button-wrap");
  const tagInput = document.querySelector('input');
  let displayCalc = '';

  /** 함수정의  ***************************************************************************/
  const updateDisplay =()=>{
    tagInput.value = displayCalc;
  }
  const addDisplay = (text)=>{
    displayCalc += text;
    updateDisplay();
  }
  const displayClear = ()=>{  
    displayCalc='';
    updateDisplay();
  }
  const Calc =()=>{
    // console.log(displayCalc);
    let value = eval( displayCalc );
    displayCalc += '=';
    displayCalc += value;
    updateDisplay();
  }
  const onBtnClick = (event) => {
    // console.log(event.target.textContent); //이벤트가발생하면 이벤트가발생한 객체를 알수있다 : target
    // console.dir(event.target);     // dir : 트리형태로 출력해서 볼수있음
    let type = event.target
    switch (type.className) {
      case "ac":
        //입력된 계산식을 초기화
        displayClear();
        break;
      case "equals":
        // 입력된 계산식을 계산
        Calc();
        break;
      default:
        // textContent 를 읽어와서 연결시켜 연산식을 나열한다.
        addDisplay(type.textContent);  
        break;
    }
  };

  /** 이벤트 등록 ************************************************************************************/
  tagBtnWrap.addEventListener("click", onBtnClick);

})();
