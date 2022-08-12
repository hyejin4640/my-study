//생성자함수 (즉시실행함수 1버전)
(function(){
  /* 모든 명령문- 지역변수 */
  "use strict";    //<-ES6부터 js에서 널널하게 허용되던 문법들을 좀더 확실히 구분해주는 명령문

  // 객체가없다면 무엇을 반환하는지도 정해줘야함
  // const elemID = document.getElementById('prod-pic');  // ->함수가 객체안에 들어가면메소드(document객체 안에 만들어진 객체)
  // if (elemID == null) return;
  // console.log( elemID );
  // 메소드이고 document 객체안에서 지정한 요소를 찾는다.

  //주석 여기서부터푸리💛
  // const elemID =document.querySelector('#prod-pic');
  // const eleClass = document.getElementsByClassName("small-wrap");
  // console.log(elemID);
  // // console.log(eleClass);
  // // console.log(eleClass[0]);

  // // query셀렉터에서는 상위객체에서 요소를 가져올수도있다.
  // const elemSmall =elemID.querySelector('.small-wrap');
  // console.log(elemSmall);

  // //span태그 가져오기-getElementsByTagName
  // const elemSpan = document.getElementsByTagName('span');
  // console.log(elemSpan);     // 배열로 5개가 가져옴
  // // console.log(elemSpan[0].innerText);
  // // console.log(elemSpan[1].innerText);
  // // console.log(elemSpan[2].innerText);
  // // console.log(elemSpan[3].innerText);
  // // console.log(elemSpan[4].innerText);
  
  // // for문으로 가져오기.
  // for ( let i=0; i < elemSpan.length; i++ ){
  //   console.log(`for문 : ${elemSpan[i].innerText}`);
  // }
  // // for of문 으로 가져오기 (값).
  // for (let value of elemSpan ) {
  //   console.log( `for of => ${value.innerText}` );  
  // }
  // //for in문 으로 가져오기 (인덱스).
  // for ( let idx in elemSpan){
  //   console.log( `for in문 : ${idx}` );
  // }

  // // span태그 가져오기 -querySelectorAll 
  // // querySelector - 가장먼저나온 1개만 가져온다
  // const tagSpan = document.querySelectorAll('span');
  // // console.log(tagSpan);
  
  // for (let value of tagSpan ) {
  //   console.log( `for of인데 쿼리셀렉터로 가져온 => ${value.innerText}` );  
  // }

  // //css처럼 태그한번에 지정해줄수없음 , 각각의 지정해야함.
  // tagSpan[0].style.fontWeight='bolder';  //스타일을 각각지정해야함. 
  // for (let value of tagSpan){        //그래서 fot문을 이용해 스타일주기
  //   value.style.fontWeight='bolder';
  // }

// ---------------------------------------------------------------------------------------------------------------------------------

// images 바꾸기
/**객체를 가져오는 변수 */
const tagImg = document.querySelectorAll('.small-wrap > img');
const tagBigimg = document.querySelector('.big-wrap > img');
const tagBtn = document.querySelectorAll('.big-btn > button');
const prevBtn = document.querySelector('.big-btn > button:first-child');
const nextBtn = document.querySelector('.big-btn > button:last-child');
let currentIdx = 0;
const MAX = tagImg.length;   // 3



// get, set 
console.log(tagBigimg.getAttribute('src'));
// tagBigimg.src = '../images/image-02.png';
// tagBigimg.setAttribute('src','../images/image-02.png');

// small img 에서 클릭하면 big img가 바뀌는 액션
// const showBigImage =()=>{
//   let path = this.getAttribute('src');
//   console.log(path);
//   tagBigimg.setAttribute('');
// }


// this값은 화살표함수내에선 사용할순없다

/**2. 현재 small 이미지를 누른 this의 값을 받아오기 */
const smallImageClick = function(){
  //클릭이되면
  showBigImage(this);
}
/** 3.큰이미지가 변하는 함수 */
const showBigImage = function(obj){
  // console.log(this); 
  let path = obj.getAttribute('src');
  tagBigimg.setAttribute('src', path);
 showImgBorder(obj);
}

/** 작은이미지의 테두리가 쳐지는 함수 */
const showImgBorder = function( obj ){
  // 테두리를 다없앤후
  for( let elemImg of tagImg){
    elemImg.style.outline = "none";
  }
  // 지금 내가 클릭한 이미지에만 테두리가 쳐짐
  obj.style.outline="10px solid #000";
}

/** 초기화 함수 */
const init = function(){
  showImgBorder(tagImg[currentIdx]);
}

/*** 1.이벤트 등록  */

for ( let elemImg of tagImg){
  elemImg.onclick = smallImageClick;
}


/** 큰이미지를 오른쪽으로 넘기기*/
prevBtn.addEventListener('click',function(){
// if(currentIdx)
if(currentIdx <=0){
  currentIdx=0;
}else{
  currentIdx--;
}
// let path = tagImg[currentIdx].getAttribute('src');
// tagBigimg.setAttribute('src', path);
showBigImage(tagImg[currentIdx]);
});

/** 큰이미지를 왼쪽으로 넘기기 */
nextBtn.addEventListener('click',function(){
if(currentIdx < MAX-1){
  currentIdx++;
}else{
  currentIdx = MAX-1;
}
// let path = tagImg[currentIdx].getAttribute('src');
// tagBigimg.setAttribute('src', path);
showBigImage(tagImg[currentIdx]);
});
init();


// 끝
})();




// //생성자함수 (즉시실행함수 2버전)
// let init = ()=>{
//   //모든 명령문 // 지역변수

// }
// init();