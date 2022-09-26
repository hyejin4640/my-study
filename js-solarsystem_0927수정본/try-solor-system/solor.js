
const posList = [100, -100, -300, -500];
const END_POSITION = -750;
const arrPos = [];



const setSectionPos = (tagSecFront) => {
  let endPos = END_POSITION;
  //  100 -100 -300 -500
  for (let i = 1; i <= tagSecFront.length; i++) {
    arrPos[tagSecFront.length - i] = endPos;
    /* 4-1 , 4-2, 4-3, 4-4 */
    tagSecFront[tagSecFront.length - i].style.transform = `translateZ(${endPos}vw)`;
    endPos += 200;
  }
}

const handlerScroll = (e, tagBox, tagProBar) => {
  const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
  //  window.innerHeight를 뺀이유는 전체페이지에서 항상 보여지는 뷰포트값은
  //스크롤 하지않는 값이니까 그값을 뺀값이 진짜 스크롤 전체 영역 값이다
  const scroll = window.scrollY;
  // 전체 스크롤을 숫자()로 바꿔서 그숫자중에 내가 선택한 값이
  // 몇% 차지하는지를 구하는게 몇분율 이라는 개념임
  const percent = scroll / totalScroll; /* 선택값/전체값 x100(기준값) */
  const zPos = percent * 1500 + (-750);
  // 전체값의 범위가 절대값으로 는 1000이맞는데, 벙위는 500~-500의 범위니까
  // -500 부터 500 까지 점점 값이 올라가야하니까 
  //전체끝값인 -500 에서 스크롤내린값만큼을 더해줘서 점점 값이 올라가도록 하기위해 end_position의 값을 
  // 더해준것임
  tagBox.style.transform = `translateZ(${zPos}vw)`;
  tagProBar.style.width = `${percent * 100}%`;
  // 왜 100을 곱했냐면 width값의 전체기준값은 100%이다.
  // 스크롤내리는 전체값의 스크롤내린값에 따라 tagBox의 width값을 동기화하는 효과가목적이니가
  // width의 전체기준값인 100을 곱해서 전체스크롤값을 100이라는 기준값으로
  // 바꾸고 선택값인 스크롤내린값을 기준값으로 바꾼 100안에서 어디ㅏ에 차지하는지 
  // 값을  구할수있따 ㅏ왜냐 width값의 100 을 기준으로 스크롤값을 
  // 정해줘야하니까

  // nav



}


// 그래서 내가 지금 해야할게
// 스크롤을 내린 전체값에서 스크롤내린값과tagBox의 transform(tlanslateZ)
// 내가 지정할 전체값을 기준값으로 갖고온다
// 선택값 /전체값 x (지정할 기준전체값);
// 기준값에서 선택한값을 기준값안에서 어디에 차지하는지 그값을 
// 계산할수있다. 
// 전체값에서 선택한값을 내가지정한 기준값에서 선택한값이 어디쯤 차지하는지
// 그값을 구하는게 백분율의 원리이다



const init = () => {
  const tagBox = document.querySelector('.box');
  const tagProBar = document.querySelector('.pro-bar');
  const tagSecFront = document.querySelectorAll('.front');
  setSectionPos(tagSecFront);

  window.addEventListener('scroll', (e) => {
    handlerScroll(e, tagBox, tagProBar);
  });
}

window.addEventListener('load', init);