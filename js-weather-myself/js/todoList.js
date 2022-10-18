


const saveLocalStorage = () => {
  // console.log( todoListArr );
  const strTodoList = JSON.stringify(todoListArr);
  localStorageSet(TODO_KEY, strTodoList );
};

const saveTodosArr = (id, value) => {
  const newobj = {
    id : String(id),
    value,
  };
  todoListArr.push( newobj);
  saveLocalStorage();
};

const handlerDelete =(e)=>{
  const tagLi = e.currentTarget.parentNode;
  const tagLiId = tagLi.id;
  todoListArr = todoListArr.filter((item)=>{
    return item.id !== tagLiId;
  });  
  tagLi.remove();
  saveLocalStorage();
  
}

const createTodoListElem = (id, userTodo) => {  
  const Li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  tagTodoUl.appendChild(Li);
  Li.appendChild(span);
  Li.appendChild(button);

  Li.id = id;
  button.addEventListener('click', handlerDelete );
  span.textContent = userTodo ;
  button.textContent = `❌`;
  saveTodosArr(id, userTodo);
};

const handlerTodoSubmit = (e) => {
  e.preventDefault();
  const userTodo = tagTodoInput.value;
  createTodoListElem(Date.now(), userTodo);
};

const todoList_init = () => {
const ReadTodos = localStorageGet( TODO_KEY );
if( ReadTodos  ){
  const obj = JSON.parse( ReadTodos );
  obj.forEach(elem => {
    createTodoListElem( elem.id , elem.value );
  });
}
  tagTodoForm.addEventListener("submit", handlerTodoSubmit);
};
