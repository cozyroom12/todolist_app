const todoForm = document.getElementById("todo-form");
// const todoForm = document.querySelector("todo-form");
// const a = document.querySelector("#todo-form a")

const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const todoBtn = document.querySelector(".todo-btn");

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];

let todoArray = [];

function handleSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    username: currentUser.username,
    text: newTodo,
    id: Date.now(),
  };
  todoArray.push(newTodoObj);
  showTodo(newTodoObj);
  saveData();
  console.log(newTodoObj);
}

function showTodo(newTodo) {
  let li = document.createElement("li");
  li.id = newTodo.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  const text = document.createElement("span");
  text.innerText = newTodo.text;
  // add style to each span element
  text.classList.add("text-style");
  li.appendChild(text);

  let deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "\u00d7";
  deleteBtn.classList.add("delete-btn-style");
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  saveData();
}

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function saveData() {
  localStorage.setItem("data", JSON.stringify(todoArray));
}

todoForm.addEventListener("submit", handleSubmit);

todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
      const li = e.target.parentElement;
      li.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

todoBtn.addEventListener("click", handleSubmit); // empty input should be managed

function showTask() {
  const savedTodos = localStorage.getItem("data");

  if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todoArray = parsedTodos;
    console.log(parsedTodos);

    parsedTodos.forEach((item) => {
      if (item.username === currentUser.username) {
        showTodo(item);
      }
    });
  }
}
showTask();
