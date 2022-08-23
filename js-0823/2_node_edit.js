// const tagFruits = document.querySelector('#fruits');  // 1_node_create 파일에서 이미 객체로 불러있음
tagFruits.style.backgroundColor = "green";
tagFruits.style.border = "5px solid brown";
// tagFruits.innerHTML +='<li class="apple">Apple</li>';
// tagFruits.innerHTML +='<li class="banana">Banana</li>';
// tagFruits.innerHTML +='<li class="orange">Orange</li>'; 



/** 🧡html문서엔 없었는데, 자바스크립트로 요소 생성해주기 !! */
// const tagApple2 = document.createElement('li'); //html에만들어진게 아니라 만들어지지않은 상태에서 자바스크립트로 생성함
// console.log(typeof tagApple2 );       //object 로 생성
// tagFruits.appendChild( tagApple2 );  //tagFruits의 자식에 추가한다
// tagApple2.className = 'apple2';     // class네임도 만들어준다
// tagApple2.textContent = 'Apple2 Html엔 없었지롱';  //컨텐츠도 넣어야함
// tagApple2.style.color = '#d32322';

// const tagBanana2 = document.createElement('li');   // 어떤태그
// tagFruits.appendChild( tagBanana2 );    //어디에 위치
// tagBanana2.className = 'banana2';
// tagBanana2.textContent = 'Banana2 Html엔 없었지롱';
// tagBanana2.style.color = '#d32322';

// const tagOrange2 = document.createElement('li');
// tagFruits.appendChild( tagOrange2 );
// tagOrange2.className = 'orange2';
// tagOrange2.textContent = 'Orange2 Html엔 없었지롱';
// tagOrange2.style.color = '#d32322';



/** 🧡반복문 사용해서 생성해보기 !!!! */
const content = ['Apple' , 'Banana' , 'Orange'];
const clsName = ['apple','banana','orange'];
// class 이름 한글자만 rowcase로 바꿔서 해도됨

content.forEach((el,idx)=>{
  const tagLi = document.createElement('li');
  tagLi.textContent = el;
  tagLi.className = el[0].toLowerCase() + el.slice(1,el.length);
  // tagLi.className = clsName[idx];
  tagFruits.appendChild(tagLi);
})


// 반복되는걸 묶어서 반복문을 돌려주고
// 반복되지않는 값은 따로 배열을 만들어서 같은 반복문안에서 사용할수있게 반복문을 돌린다

// for(let i=0; i<content.length; i++){
//   const tagLi = document.createElement('li');
//   tagLi.textContent = content[i];
//   tagLi.className = clsName[i];
//   tagFruits.appendChild( tagLi );
// }
/**
 * 🧡
 * appendChild : (부모태그안에 가장 마지막에 추가할 요소) - return값이있음(error처리하기용이함))
                텍스트를 그냥 추가하려면 텍스트노드를 따로만들어추가해야함
 * append : return값 없음 , 텍스트도 바로 추가할수있음

 * insertBefore : (지정할요소 , 어떤요소앞에 추가할건지 그요소) 
 */

const tagMelon  = document.createElement('li');
// tagMelon.textContent = 'Melon';
tagMelon.appendChild(document.createTextNode('Melon')); 
tagMelon.className = 'melon';
tagMelon.style.color = "#00ff00";
// tagFruits.insertBefore(tagMelon,tagFruits.lastElementChild );  // 지정할요소 , 어떤요소앞에추가할 요소


const tagCherry = document.createElement('li');
// tagCherry.textContent = 'Cherry';
tagCherry.style.color = 'red';
// const value = tagFruits.appendChild(tagCherry);
// console.log( value );
tagCherry.append( 'Cherry' );
tagFruits.append( tagCherry,tagMelon );  // append는 연속적으로 추가 할수있음 (끝에서부터 추가됨)



/**🧡 요소를 복사 ( 원본요소와는 별개의 객체가 복사됨(주소값공유X)) */
const cloneObj = tagFruits.cloneNode(true); //false :지정한 요소만복제(자식요소는 복제가 안됨), true : 자식요소까지 깊게복제
cloneObj.setAttribute('id','aaa');
// cloneObj.id='bbb';
console.log( cloneObj );
tagFruits.appendChild( cloneObj );   //cloneNode 복제만됨 브라우저에 위치시키려면 위치지정은 해줘야함
// 위에 예제는 좋은 예제가아님 (id는 여러개면 안좋음)

const tagPlum = document.createElement('li');
tagPlum.textContent = 'plum';
// 🧡교체
tagFruits.replaceChild(tagPlum , tagFruits.firstElementChild);
// 🧡삭제
tagFruits.removeChild(tagFruits.lastElementChild);


const tagClass = document.querySelector('.banana');
// toggle : 있으면 제거 , 없으면 추가
tagClass.classList.toggle('google');
tagClass.classList.toggle('google');
tagClass.classList.toggle('add',true);  //강제적
tagClass.classList.toggle('add',false);  // 강제적 true : 추가 , false : 삭제 
// contains : 있으면 true반환 없으면 false반환
console.log( tagClass.classList[0]);
console.log( tagClass.classList.contains('add'));     //false
console.log( tagClass.classList.contains('banana'));  //true


/** 비동기 / 동기
 * 
 */
