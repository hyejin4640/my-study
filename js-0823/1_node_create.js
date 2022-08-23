"use strict";
// const tagFruits = document.getElementById('fruits');
const tagFruits = document.querySelector('#fruits');
// HTMLCollection 으로가져옴 getElement는.....

// tagfruits 요소의 자식 노드의 정보를 읽기
//  console.log( tagFruits.childNodes );

// 자식 노드만
console.log( tagFruits.children );

console.log( tagFruits.firstChild );   //공백노드 (노드중에서 첫번째자식)
console.log( tagFruits.lastChild );   //공백노드 

console.log( tagFruits.firstElementChild );  //요소의 첫번째자식
console.log( tagFruits.lastElementChild );   // 요소의 마지막자식


// 자식 노드 확인하기 (공백노드포함⭕) 
console.log( tagFruits.hasChildNodes() );     // ture (has : 존재유무확인)
console.log( tagFruits.childElementCount );  // 3

// 부모 노드의 정보 알기 (부모노드를읽을땐 공백은포함❌)
console.log( tagFruits.parentNode );  // body 

// 형제 노드의 정보 알기
// 현재 ul 태그 양옆은 공백노드가 만들어져있다 ( dom 구조가형성될때 원래 만들어짐)
console.log( tagFruits.previousSibling );     // 공백
console.log( tagFruits.nextSibling );        // 공백

console.log( tagFruits.nextElementSibling );  // script(태그는 브라우저에서 만들어질땐 요소로 다 만들어짐)

const tagBanana = document.querySelector('.banana');
console.log( tagBanana.previousElementSibling );  //apple
console.log( tagBanana.nextElementSibling );    //orange

// 노드 정보를 알아오기
console.log( tagBanana.nodeName );    // LI (대문자로 정보를 받아옴 ,소문자로바꾸는 메소드사용해서 바꿔서 자주사용함)





