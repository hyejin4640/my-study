const tagNavMenu = document.querySelector('.nav-menu');
const tagNavBar = document.querySelector('.nav-bar');
const tagHello = document.querySelector('.hello');
const tagArticle = document.querySelectorAll('article');


// json파일로부터 패치appi를 사용해 받아온다.
const loadProjectData=()=>{
  return fetch('./data/data.json')
    .then(reponse => reponse.json())
    .then(json => json.project);
}

// 뷰포트의 max-width:768일때 메뉴바와 메뉴의 위치를 정하는 함수
const handlerNavBarClick = (e) => {
  tagNavMenu.classList.toggle('nav-open');
}



// 소개멘트의 애니메이션 함수
const introTxtAnimate = () => {
  new TypeIt(".hello", {
    speed: 50,
    startDelay: 800,
  }).go();
}


const createElement =( item )=>{
  const tagA = document.createElement('a');
  const tagImg = document.createElement('img');
  const tagdiv = document.createElement('div');
  const tagH4 = document.createElement('h4');

  tagA.classList.add('mini-content');
  tagImg.classList.add('mini-img');
  tagdiv.classList.add('mini-desc');
  tagH4.classList.add('mini-desc-h4');

  tagA.setAttribute('data-type',item.type);
  tagA.href = item.siteURL;
  tagImg.src = item.image;
  tagImg.alt = item.alt;
  tagH4.textContent =`click this project!`;

  tagdiv.append( tagH4 );
  tagA.append( tagImg );
  tagA.append( tagdiv );
return tagA
}


const onBtnClick =( event,items)=>{
  
}

const init = () => {
  introTxtAnimate();
  marqueeText_init();

  loadProjectData()
    .then( items => {
      const elements = items.map( createElement );
      const tagMiniContainer  = document.querySelector('.mini-contents');
      tagMiniContainer.append(...elements);
      const btns = document.querySelector('.mini-btn-wrap');
      btns.addEventListener('click', event => onBtnClick );
    })

  tagNavBar.addEventListener('click', handlerNavBarClick);

  window.addEventListener('scroll', () => {
    handlerMarqueeScroll()
    
  })
}
window.addEventListener('load', init)