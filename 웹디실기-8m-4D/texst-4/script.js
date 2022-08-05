$(function () {
  //header menu------------------------------------
  $("header nav >ul").mouseenter(function () {
    $("ul.lv2, .headerBg").stop().slideDown();
  });
  $("header nav >ul").mouseleave(function () {
    $("ul.lv2, .headerBg").stop().slideUp();
  });

  //slide------------------------------------
  $(".slide:gt(0)").hide();
  setInterval(function () {
    $(".slide:first").fadeOut(1500).next().fadeIn(1500);
    $(".slide:first").appendTo(".slideWrap");
  }, 3000);

  //popUpBox---------------------------------------------------------
  $(".notice li:nth-child(1)").click(function () {
    $(".popUpBox").show();
  });

  $(".popUpBox button").click(function () {
    $(".popUpBox").hide();
  });
});
