/*1번*/
(()=>{

})();

/*2번*/
const init =()=>{

}
init();

/*3번*/
window.addEventListener('load',init);
// html 전체가다 로드가 되자마자실행한다. 즉 dom구조가 셋팅이된다음에 실행한다.
// html문서에 script파일이 로딩되는 위치가 head 영역에있을때 documnet구조를 만들기도전에 
// js먼저 읽으면 객체를 가져오거나 하는 문제에서 문제가되니 dom구조가 다완성되면 init함수를 실행해라.