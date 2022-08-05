$(function () {
  // 1. menu slide----------------------------------
  //마우스가 올려졌을때
  $('.mainmenu').mouseenter(function(){
    $(this).children('.submenu').stop().slideDown('nomal');
  });
  //마우스가 벗어났을때
  $('.mainmenu').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp('nomal');
  });

  // 2. slide fade in/out-------------------------------------
//  slide 가 fadeIn,fedeOut 일땐 이동하면서 움직이는것처럼 이미지를 펼쳐서 전체를감싸는 태그가 이동하는게아니라
//각각의 이미지들을 전체를 감싸는 태그에 absolut로 준후 겹치게하고 지금 내가 보여주는 이미지의 인덱스값을 받아서
//각각의 이미지를 보여준다.
  const MAX = 2;
  let currentIndex = 0;
  //첫번째 이미지의 fade In
  //setInterval은 기다린후 실행이기때문에 첫이미지는 설정해야함
  $('.slide-list > li').eq(currentIndex).fadeIn(1000);
  // 3초기다리면서 3초마다 실행
  setInterval(function(){
    if (currentIndex < MAX){
      currentIndex++;
    }else{
      currentIndex = 0;
    }
    //fadein(),fadeout() => 괄호안에는 동작을 취하는 시간을 지정할수있다.
    $('.slide-list li').fadeOut(800);
    // 모든 slide를 fadeout 시키고
    $('.slide-list li').eq(currentIndex).fadeIn(800);
    // setInterval 로 변하는 인덱스값의 슬라이드의 인덱스값을 가져온후 지정한 슬라이드의 페이드아웃을 해라
  },3000);

  // 3. tab click ---------------------------------------------------
  $('.tab-menu li').click(function() {
    //tab menu change
    $('.tab-menu li').removeClass('on');
    $(this).addClass('on');
    //tab item view
    let pos = $(this).index();
    $('.tab-item ul').hide().removeClass('on');
    $('.tab-item ul').eq(pos).show().addClass('on');
  });



  //4. popup -------------------------------------------------------
$('.popOpen').click(function() {
  $('#popup').show();
});
$('#popup a').click(function(){
  $('#popup').hide();
});
  // 제일 끝
});
