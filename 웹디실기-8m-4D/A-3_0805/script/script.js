$(function(){
  // menu slideDown,Up ----------------------------------------------
  $('.main-menu').mouseenter(function(){
    $(".sub-menu , .menu-bg").stop().slideDown();
  })
  $('.main-menu').mouseleave(function(){
    $(".sub-menu, .menu-bg").stop().slideUp();
  })
  // slide ------------------------------------------------------------
  
  let currentIndex = 0;
  const MAX = 2;
  $('.slide a').eq(currentIndex).fadeIn(800);
  setInterval(function(){
    if (currentIndex < MAX){
      currentIndex ++;
    }else{
      currentIndex =0;
    }
    $('.slide a').fadeOut(800);
    $('.slide a').eq(currentIndex).fadeIn(800);
  },3000)


  // 갤러리를 처음엔없앤후에  크릭해서 위치값을 갖여온 노티스나 갤러리를 보여준다.
  // 갤러리를 제이쿼리에서 먼저없앤후에 setinteval을 수행하면
  // 갤러리를를 tab안에 겹쳐서 영역을 맞추지않아도 
  // 둘중 하나를 보여주면 tab위치안으로 들어간다. 

  $('.gallery').hide();
  $('.tab-title h3').click(function(){
    $('.tab-title h3').removeClass("on");
    $(this).addClass("on")
    // 
    let view = $(this).index();
    $('.tab-item ul').hide().removeClass("on");
    $('.tab-item ul').eq(view).show().addClass("on");
  })


})




// 사용자가 브라우저에 imput값을 준 장소가 this
// 즉, 마우를올리면 그올린곳이 this