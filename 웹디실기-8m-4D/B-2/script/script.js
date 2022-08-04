$(function(){
// slide ------------------------------------------------------
  const MAX = 2;
  let currentIndex = 0;
  let pos = 0;
 
  setInterval(function(){
    if (currentIndex < MAX){
      currentIndex++;
    }else{
      currentIndex = 0;
    }
     // pos값을 함수안에서 다시 설정하는 이유는 함수를 실행하면서 값을 주기적으로 바꿔야하니까
    pos = currentIndex*-1200+"PX"
    $('.slide-list').animate({left:pos},1000);
  },3000);

// popUp ----------------------------------------------
  $('.popOpen').click(function(){
    $('.popUp').show();
  });
  $('.popUp a').click(function(){
    $('.popUp').hide();
  });
  // menu slide --------------------------------------------

  //🦢 mainmenu의 각각의 submenu 만 slide시킬때
// $('.mainMenu').mouseenter(function(){
//   $(this).children('.subMenu').stop().slideDown();
// });
// $('.mainMenu').mouseleave(function(){
//   $(this).children(".subMenu").stop().slideUp();
// });

// 🦢 mainmenu,submenu를 같이 내릴때
$('.mainMenu').mouseenter(function(){
  $('.subMenu,.menuBg').stop().slideDown();
});
$('.mainMenu').mouseleave(function(){
  $('.subMenu,.menuBg').stop().slideUp();
})

})