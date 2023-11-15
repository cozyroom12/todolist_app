const loginForm = document.getElementById("login-form");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const usernameInput = document.querySelector(".name").value.toLowerCase();
//   const passwordInput = document.querySelector(".password").value;

//   const data = localStorage.getItem("users");
//   const userList = JSON.parse(data); // array type

//   // if (usernameInput == "Maru") {
//   //   // how do i do upcap here??
//   //   console.log("the user is sensed. now what?");
// });

function login(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUsers = users.find(
    (user) => user.username === username && user.password === password
  );

  if (currentUsers) {
    localStorage.setItem("currentUser", JSON.stringify(currentUsers));

    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// user specific page ...
function displayTodoList() {
  const user = getLoggedInUser();
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  if (user && user.todo) {
    const userTodos = todos.filter((todo) => todo.username === user.username);
    userTodos.forEach((todo) => showTodo(todo));
  }
}

window.onload = function () {
  displayTodoList();
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameInput = document.querySelector(".name").value.toLowerCase();
  const passwordInput = document.querySelector(".password").value;

  login(usernameInput, passwordInput);
});
