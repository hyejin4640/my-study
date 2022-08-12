(function () {
  "use strict";
  // 새로운 배열생성 2가지 방법
  let item_list = [];
  // let item_list = new Array();
  // 객체 가져오기
  const tagBtn = document.querySelector("#add");
  const tagUl = document.querySelector('#item_list');
  // 이벤트 등록
  tagBtn.addEventListener("click", addBtnClick);
  // 함수정의
  // showList();
  // 인풋창에 값을 가져오는 함수
  function addBtnClick() {
    // input창에 입력값을 갖고와라
    let value = document.querySelector("#item").value;
    // 위에서 input의 value값을 가져왓으니 이제 인풋창을 비우기위해 빈값을 넣어줌
    document.querySelector('#item').value="";
    // value값이 참일경우만 item_list 배열에 저장해라
    if( value ){
      item_list.push(value);
    }
    showList();
  };
  //  인풋값을 받아온 item_list의 요소하나하나를 html에 보여주는함수
  function showList() {
    let strTag ='';
    for(let i=0; i<item_list.length; i++){
      // 배열은 인덱스 값을 가져와 삭제를 시켜야하는데 ,js에는 인덱스를 얻어오는 방법은x,
      // 그래서 id로 for문을 돌려 차례대로 인덱스 값을 부여한다 
      strTag += `<li id=${i} class=close>`;
      // calss는 li가 생성될때 모든 li에 클래스를 부여해 li의 요소를 객체로가져올때 실플하게 지정해주기위해 넣어주었다
      strTag += item_list[i];
      strTag += '<span>X</span>'
      strTag += '</li>';
    }
    tagUl.innerHTML = strTag;
    clickRemove();
  };
  // li의요소들에 addEventLitener을등록시켜주는 함수
  function clickRemove(){
    // li의 클래스인 .close로 요소를 객체로가져와 가져온 요소들을 반복문으로 click 이벤트를 지정한다음에 삭제하는 함수를 등록한다.
    let obj = document.querySelectorAll('.close');
    for(let i of obj){
      i.addEventListener('click', removeList);
    }
  }
  //삭제하는함수
  function removeList() {
    // 지금 내가 누른 clickRemove함수에서 실행한 요소의 속성값인id를 가져온다
    let idx = this.getAttribute('id');
    // splice 기능 커서 데서 사용법 확인하기
    // 가져온속성인 id값을 삭제 시켜준다.
    item_list.splice(idx,1);
    console.log(idx);
    showList();
  }

  //끝
})();
