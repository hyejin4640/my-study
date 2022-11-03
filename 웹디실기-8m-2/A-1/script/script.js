// $ 는 제이쿼리의 선택자를 지정하기위한 틀
$(document).ready(function () {
  //메뉴 슬라이드
  $(".subMenu").slideUp(0);
  $(".mainMenu").hover(
    //over
    function () {
      $(".subMenu").stop().slideDown("fast");
    },
    //out
    function () {
      $(".subMenu").stop().slideUp("fast");
    }
  );

  // $('.mainMenu').hover(
  //   function(){
  //     $(this).children('.subMenu').stop().slideDown('fast');
  //   },
  //   function(){
  //     $(this).children('.subMenu').stop().slideUp('fast');
  //   }
  // );

  // 상 하 슬라이드
  const MAX = 2;
  let currentIndex = 0; // 0,1,2
  let slidePos = 0;
  // 변수를 생성해서 적는이유는 숫자를 적기보다 변수를통해 적는다
  setInterval(loopSlide, 3000);
  // setInterval  : 실행함수,실행함수를 기다리는 시간(지정한시간을 기다린후 함수실행(반복적))
  function loopSlide() {
    if (currentIndex < MAX) {
      // 0 이 2보다 작다면
      currentIndex++;
      //0 1씩증가
    } else {
      currentIndex = 0;
      // 0이 2와 같거나 크다면 0을 다시 대입해라
    }
    // currentIndex = (currentIndex == MAX) ? 0 : currentIndex++;
    slidePos = currentIndex * -300 + "px";
    $(".slide-list").animate({ top: slidePos }, 1000);
    //animate안에서 숫자 1000은 동작이 실행되는 시간
  }

  //tab menu
  $(".tabMenu li").click(function () {
    // 내가 클릭한 태그의 인덱스 값을 가져오기(.index)
    let pos = $(this).index();
    $(".tabItem > ul").hide().removeClass("on");
    // 지정한태그의 모든영역을 안보이게했다가
    $(".tabItem > ul ").eq(pos).show().addClass("on");
    // 지정한태그의 인덱스값에 모든영역을 보이게함
    //show,hide를 지정한태그에 해준이유는 display를 none처리 해논상태에서
    //다시class에 display를block 처리 해야하기때문에 또 class를 추가해야함
    //그래서 내가 지정한 태그의 show/hide지정
    //
    $(".tabMenu li").removeClass("on");
    $(this).addClass("on");

    // 선택한 태그의 class를 remove 즉 삭제하라
    // 지금 내가 클릭한 선택자태그에 class를 추가해라
  });
});

// 다큐먼트(html)의 돔구조가 준비가 다 되면(ready) 실행을(function) 시켜라
// 정의와 함께 실행 => 생성자함수

// 함수의 () 여부의 차이점
// loopSlide() : 즉시 호출
// loopSlide : 지정할때 호출
