$(function(){
// menu slide  slideDown/Up-----------------------------------
$('.main-menu').mouseenter(function(){
  $(this).children(".sub-menu").stop().slideDown('nomal');
});
$('.main-menu').mouseleave(function(){
  $(this).children(".sub-menu").stop().slideUp('nomal');
});

// slide 좌우이동---------------------------------------
let currentIndex = 0;
// let pos = 0;
const MAX =2;
setInterval(function(){
  if (currentIndex < MAX){
    currentIndex++;
  }else{
    currentIndex =0;
  }
  $('.slide-list').animate({left:currentIndex*-800+"px"},1000)
},3000)
//pop ------------------------------------------------
$('.popOpen').click(function(){
  $('#pop').show();
})
$('#pop a').click(function(){
  $('#pop').hide();
})

// $("공지사항타이틀").click(function(){
//   // 타이틀 배경색
//   $('공지사항타이틀').removeClass("oc");
//   $(this).addClass("oc");
//   // 아이템 배경색 , 아이템 show,hide
//   let tt = this.index();
//   $('공지사항 아이템 ').hide().removeClass("oc");
//   $('공지사항 아이템').eq(tt).show().addClass("oc");
// })
});