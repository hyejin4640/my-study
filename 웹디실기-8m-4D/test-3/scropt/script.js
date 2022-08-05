$(function () {
  //header menu------------------------------------
  $("li.lv1").mouseenter(function () {
    $(this).find("ul.lv2").stop().slideDown();
  });
  $("li.lv1").mouseleave(function () {
    $("ul.lv2").stop().slideUp();
  });

  //slide------------------------------------
  $(".slide:gt(0)").hide();
  setInterval(function () {
    $(".slide:first").fadeOut(1500).next().fadeIn(1500);
    $(".slide:first").appendTo(".slideWrap");
  }, 3000);

  //tab------------------------------------
  $(".tabMenu li").click(function () {
    $(".tabMenu li").removeClass("on");
    $(this).addClass("on");

    var idx = $(this).index();
    $(".tabItem >*").hide().removeClass("on");
    $(".tabItem >*").eq(idx).show().addClass("on");
  });

  //popUpBox------------------------------------
  $(".notice li:nth-child(1)").click(function () {
    $(".popUpBox").show();
  });
  $(".popUpBox button").click(function () {
    $(".popUpBox").hide();
  });
});
