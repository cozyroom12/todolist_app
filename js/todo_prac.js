const todoForm = document.getElementById("todo-form");
// const todoForm = document.querySelector("todo-form");
// const a = document.querySelector("#todo-form a")

const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const todoBtn = document.querySelector(".todo-btn");

function showTodo(e) {
  e.preventDefault(); //
  const newTodo = todoInput.value;
  // console.log(newTodo);

  let li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  li.innerHTML += newTodo;
  todoList.appendChild(li);

  let span = document.createElement("span"); // button for deleting
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  todoInput.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}

function showTask() {
  todoList.innerHTML = localStorage.getItem("data");
}

todoForm.addEventListener("submit", showTodo);

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

todoBtn.addEventListener("click", showTodo);

showTask();
