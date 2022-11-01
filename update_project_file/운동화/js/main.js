const btnToggle = document.querySelector('.navbar_toogleBtn');
const tagNavMenu = document.querySelector('.navbar_menu');
const tagNavIcons = document.querySelector('.navbar_icons');


const handlerToggleBtnClick =()=>{
tagNavMenu.classList.toggle('toogle-open');
tagNavIcons.classList.toggle('toogle-open');
}

const init =()=>{
  btnToggle.addEventListener('click',handlerToggleBtnClick );
}
window.addEventListener('load',init);


