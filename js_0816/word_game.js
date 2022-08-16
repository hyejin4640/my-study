(function () {
  "use strict";

  /****************** 요소를 객체로 가져오기 ************************************************************ */
  const MAX_MEMBER = Number(prompt("몇 명이 참가하나요?")); /* basic : 3 */
  const tagInput = document.querySelector("input");
  const tagBtn = document.querySelector("button");
  let inputWord = "";
  let preWord = "";
  const tagWord = document.querySelector(".word");
  const tagOrder = document.querySelector(".order");
  const tagHistory = document.querySelector('#history');
  let arrWord = [];  

  /******************** 함수정의 ************************************************************************ */
  const onInputKeypress = function (event) {
    // KEY 값으로 설정
    if (event.key === "Enter") {
      event.preventDefault();
      onBtnClick();
    }
    // keycode 값으로 설정
    // if(event.keyCode === 13){
    //   event.preventDefault();   /* 태그 기본 속성을 초기화시키는 메소드 : preventDefault(); */
    //   // 예를들어a태그는 클릭하면  href로설정한 주소로 이동한다는 기본속성
    // }
  };
  const onTextInput = function (event) {
    console.log(event.target.value);
  };
  const onBtnClick = function (event) {
    preWord = inputWord;
    if (tagInput.value) {
      
      if ( !preWord || preWord[preWord.length-1] === inputWord[0]) {
        inputWord = tagInput.value;
        let number = Number(tagOrder.textContent);
        tagWord.textContent = inputWord; 
        tagOrder.textContent = (number + 1 > MAX_MEMBER) ? 1 : ++number;
        // let text = tagHistory.textContent;
        // tagHistory.textContent = (text)? `${text} => ${inputWord}` : inputWord;
        arrWord.push(inputWord);
        let viewText = '';
        for(let text of arrWord){
          viewText += text + '=>'; 
        }
        tagHistory.textContent = viewText;
      } else {
        alert("올바르지 않은 단어 입니다");
        // inputWord = preWord;
        // console.log(`pre : ${preWord} input: ${inputWord}`);
      }
    } else {
      //input 박스에 공백을 줄때
      alert("올바르지 않은 단어 입니다");
    }
    tagInput.value = "";
    tagInput.focus(); //커서가 깜빡이는 상태로 설정해주는 메소드
  };

  /****************** 이벤트 등록 ************************************************************************ */
  tagInput.focus();
  tagInput.addEventListener("keypress", onInputKeypress);
  tagInput.addEventListener("input", onTextInput);
  tagBtn.addEventListener("click", onBtnClick);
})();
