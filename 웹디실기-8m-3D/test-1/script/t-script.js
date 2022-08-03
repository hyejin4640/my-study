$(function(){
  // menu slide
  $('nav > ul').mouseenter(function(){
    $('.submenu').stop().slideDown('nomal');
  });
  $('nav > ul').mouseleave(function(){
    $('ul.submenu').stop().slideUp('nomal');
  });
// slide
// 1. 이미지의 위치가 변화할댄 : 인덱스값을 걔산
// 2. fadein fadeout은 인덱스x

const MAX= 2;
let currentIndex = 0;
setInterval(function(
if (currentIndex > MAX)
){},3000);

  // end
});
