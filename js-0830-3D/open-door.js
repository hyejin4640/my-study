const tagWrap = document.querySelector(".wrap");
let currentObj =null;   // 클릭했을때 클래스가 추가된함수가 실행된적이있는지 확인하는 변수

const activeDoor = (obj)=>{
  obj.classList.add("door-open");
  currentObj =obj;
}

const inactiveDoor = (obj)=>{
 obj.classList.remove("door-open");
}

const fn_click = (e) => {
  // if ( e.target.className === 'door-front'){
  //   console.log( e.target );
  // }
  const targetElem = e.target;
  if (targetElem.classList.contains("door-front")) {
    if( currentObj){
      inactiveDoor(currentObj);
    }
    activeDoor( targetElem.parentNode );
  }
};

tagWrap.addEventListener("click", fn_click);
activeDoor( document.querySelector('.door:nth-child(1)'));
/** wrap이라는 상위태그를 객체로 가져와 이벤트를 발생시켰을때 그밑에 하위태그의 지정한 클래스를 가진 태그에 이벤트가 발생이되면
 * 이벤트함수를 실행시키려한다
 * 이런 위에서 아래로 내려와 찾을수있는 구조가 event flow의 캡쳐링이 있기 때문이다.
 */