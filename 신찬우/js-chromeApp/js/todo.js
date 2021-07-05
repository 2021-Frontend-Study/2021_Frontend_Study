const toDoForm = document.getElementById("todo-form"); // form
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list"); // ul

const TODOS_KEY = "todos";
const toDos = [];

function saveToDos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos)); // 값을 string으로 만들 때
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  // event에는 큰 정보가 없음, 그래서 target을 뒤져봄, 그곳에서 부모 element를 보여주는 parentElement 사용(innerText로 입력한 정보까지 확인 가능)
  li.remove(); 
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // string -> array
  console.log(parsedToDos);
  parsedToDos.forEach((item) => console.log("this is the turn of ", item)); // function을 만들기 보다 arrow func 사용
}