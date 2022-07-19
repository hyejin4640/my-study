let pElem = document.querySelector('p');       /* document = html ,html의 p태그의 스타일이 설정된다(css를지정해주는게아님)*/ 
console.log(pElem);
console.dir(pElem);
pElem.style.color = "red";




//queryselector() -> 1개만 선택가능 p태그가여러개여도 1개만
// queryselectorAll() -> 여러개가능("배열"저장(파이썬에서"리스트"와비슷))

// getElement~~ -> s가붙으면 여러개지정