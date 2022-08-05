$(function () {
  // menu slide
  $(".mainmenu").mouseenter(function () {
    $(this).children(".submenu").stop().slideDown();
  });
  $(".mainmenu").mouseleave(function () {
    $(this).children(".submenu").stop().slideUp();
  });
  // slide
  // 1. 이미지의 위치가 이동하며 변환
  // 2. fadein fadeout은 인덱스x
  let currentIndex = 0;
  // 포지션에 따라 이동할때 전체width 값에따라 이동해야하는데 자동적으로 증가하기위해 곱해지는 값
  const MAX = 2;
  // 포지션 위치값에 곱해질 인덱스값의 최대값
  let slidePos = 0;
  // 최종 포지션에 값을 담을 변수
  setInterval(() => {
    if (currentIndex < MAX) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    slidePos = currentIndex * -1200 + "px";
    $(".slide-list").animate({ left: slidePos }, 1000);
  }, 3000);
  // tab------------------------------------------
  $(".tab-title li").click(function () {
    $(".tab-title li").removeClass("on");
    $(this).addClass("on");
    // ul 배경색
    let pos = $(this).index();
    $(".tab-item ul").hide().removeClass("on");
    $(".tab-item ul").eq(pos).show().addClass("on");
  });
  // pop -----------------------------------------------
  $(".popOpen").click(function () {
    $(".pop").show("nomal");
  });
  $(".pop a").click(function () {
    $(".pop").hide("nomal");
  });
  // end
});
