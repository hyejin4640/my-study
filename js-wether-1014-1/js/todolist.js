const tagTodoForm = document.querySelector('#todoForm');
const tagTodoInput = document.querySelector('#todoForm input');
const tagTodoList = document.querySelector('.todoList');
const TODO_KEY ="todos";
let todos = [];

/**
 * 
 * @param {
 * todos 사용법
 * [
 * {id:id,
 * value:value},
 * {id:id,
 * value:value},
 * ]
 * } e 
 */

const handlerDelete =(e)=>{
 tagTodoList.removeChild( e.target.parentNode);
  
  
}

const addTodoList =(value)=>{

// 태그 총 3개 생성 li > button,span 
const tagLi = document.createElement('li');
const tagbutton = document.createElement('button');
const tagspan = document.createElement('span');
// 버튼 이벤트 추가
tagbutton.addEventListener('click', handlerDelete );
// html 문서안에 추가
tagTodoList.appendChild(tagLi);
tagLi.appendChild(tagspan);
tagLi.appendChild(tagbutton);
// 컨텐츠 추가
tagspan.textContent = value;
tagbutton.textContent ='❌';

}

const handlerTodoSubmit =(e)=>{
  // 버튼 기본속성 작동x.
  e.preventDefault();
  // 입력받은값 문서에 작성
  addTodoList( tagTodoInput.value );
  // input 입력창 reset
  tagTodoInput.value ='';
  
}

const todoList_init =()=>{
  tagTodoForm.addEventListener('submit', handlerTodoSubmit );
}
todoList_init();