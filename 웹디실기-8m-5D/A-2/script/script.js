$(function(){
// menu-slide------------------------------------------
$('.main-menu').mouseenter(function(){
  $('.sub-menu,.h-wrap').stop().slideDown();
});
$('.main-menu').mouseleave(function(){
  $('.sub-menu,.h-wrap').stop().slideUp();
});

// slide  --------------------------------------------------
let currentIndex = 0;
const MAX=2;
let posi = 0;
setInterval(function(){
  if(currentIndex < MAX){
    currentIndex ++;
  }else{
    currentIndex = 0;
  }
  posi = currentIndex*-300+"px";
  $('.slide-list').animate({top:posi},1000)
},3000)
// tab -------------------------------------------------------
$('.tab-title li').click(function(){
  $('.tab-title li').removeClass("on");
  $(this).addClass("on");
  //
  let poss= $(this).index();
  $('.tab-item ul').hide().removeClass("on");
  $('.tab-item ul').eq(poss).show().addClass("on");
});
  
// pop -----------------------------
$('.popOpen').click(function(){
  $('.pop').show();
})
$('.pop a').click(function(){
  $('.pop').hide();
})
});