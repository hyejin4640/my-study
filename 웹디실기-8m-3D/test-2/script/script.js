$(function () {
  // 1. menu slide----------------------------------
  // //마우스가 올려졌을때
  // $('.mainmenu').mouseenter(function(){
  //   $(this).children('.submenu').stop().slideDown('nomal');
  // });
  // //마우스가 벗어났을때
  // $('.mainmenu').mouseleave(function(){
  //   $(this).children('.submenu').stop().slideUp('nomal');
  // });
  $(".mainmenu").mouseenter(function () {
    $(this).children(".submenu").stop().slideDown();
  });
  $(".mainmenu").mouseleave(function () {
    $(this).children(".submenu").stop().slideUp();
  });
  // 2. slide fade in/out-------------------------------------
  // const MAX = 2;
  // let currentIndex = 0;
  // //첫번째 이미지의 fade In
  // //setInterval은 기다린후 실행이기때문에 첫이미지는 설정해야함
  // $('.slide-list > li').eq(currentIndex).fadeIn(1000);
  // // 3초기다리면서 3초마다 실행
  // setInterval(function(){
  //   if (currentIndex < MAX){
  //     currentIndex++;
  //   }else{
  //     currentIndex = 0;
  //   }
  //   $('.slide-list li').fadeOut(800);
  //   $('.slide-list li').eq(currentIndex).fadeIn(800);
  // },3000);
  setInterval(function () {
    let currentIndex = 0;
    const MAX = 2;
    let posi = 0;
    if (currentIndex < MAX) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    $(".slide-list").animate({ left: posi }, 1000);
  }, 3000);
  // 3. tab click ---------------------------------------------------
  $(".tab-menu li").click(function () {
    //tab menu change
    $(".tab-menu li").removeClass("on");
    $(this).addClass("on");
    //tab item view
    let pos = $(this).index();
    $(".tab-item ul").hide().removeClass("on");
    $(".tab-item ul").eq(pos).show().addClass("on");
  });

  //4. popup -------------------------------------------------------
  $(".popOpen").click(function () {
    $("#popup").show();
  });
  $("#popup a").click(function () {
    $("#popup").hide();
  });
  // 제일 끝
});
