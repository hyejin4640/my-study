// 객체가져오기--------------------------------------------------------------------------
const LOGIN_KEY = "username";
const tagLoginName = document.querySelector(".login-name");
const tagLoginForm = document.querySelector("#loginForm");
const tagInput = document.querySelector("input");
const tagLogout = document.querySelector('.logout');
// 함수정의------------------------------------------------------------------------------
const viewUserName =(username)=>{
  // tagLoginName에 보여주기
  tagLoginName.classList.remove('hidden');
  tagLoginName.textContent = `Hello ${username}🙋‍♀️`;
  //form은 보이지않게함.
  tagLoginForm.classList.add('hidden');
}

const handlerSubmit = (e) => {
  e.preventDefault();/* 기본 초기화값을 삭제시킴 */
  const username = tagInput.value;
  viewUserName(username)
  
  // localstoryge에 저장.
  window.localStorage.setItem(LOGIN_KEY , username );

};

const removeUser =()=>{
  todos.splice(0);
  localStorage.clear();
  for( let i=0; i< tagTodoList.length; i++){
    tagTodoList.children[i].remove();
  }
}

const init = () => {
  // 1. key check in localstoryges!
  const username = window.localStorage.getItem(LOGIN_KEY);
  if (username) {
    // username ⭕
    viewUserName(username);
  
   
  } else {
    // username ❌
    tagLoginForm.addEventListener(
      "submit",
      handlerSubmit
    ); 
  }
  tagLogout.addEventListener('click',removeUser );
};
// logout을 클릭하면 로컬스토리지 삭제
window.addEventListener("load", init);

