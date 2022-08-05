$(function(){
  // menu slide stop.slideDown------------------------------------------------
  $('.main-menu').mouseenter(function(){
    $('.sub-menu, .menu-Bg').stop().slideDown('nomal');
  })
  $(".main-menu").mouseleave(function(){
    $('.sub-menu, .menu-Bg').stop().slideUp('nomal');
  })
  // tab click--------------------------------------------------------------
  $('.tab-title h3').click(function(){
    // 배경색
    $('.tab-title h3').removeClass("on");
    $(this).addClass("on");
    // hide&show , 배경색
    let view = $(this).index();
    $('.tab-item ul').hide().removeClass("on");
    $('.tab-item ul').eq(view).show().addClass("on");
  });

  //slide setinterval------------------------------------------------------------------
  let  currentIndex = 0;
  let  pos = 0;
  const MAX = 2;
  setInterval(function(){
    if (currentIndex < MAX){
      currentIndex ++;
    }else{
      currentIndex =0;
    }
    pos = currentIndex*-1200+"px"
    $('.slide-list').animate({left:pos},1000)
  },3000);
})