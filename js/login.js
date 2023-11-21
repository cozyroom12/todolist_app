const loginForm = document.getElementById("login-form");

function login(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUsers = users.find(
    (user) => user.username === username && user.password === password
  );

  if (currentUsers) {
    localStorage.setItem("currentUser", JSON.stringify(currentUsers));
    alert(`Welcome back, ${currentUsers.username}!`);

    window.location.href = "todo.html";
  } else {
    alert("Invalid username or password");
  }
}

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// user specific page  -> todo.js 로 옮김
// function displayTodoList() {
//   const user = getLoggedInUser();
//   const todos = JSON.parse(localStorage.getItem("data")) || [];

//   if (user && user.todo) {
//     const userTodos = todos.filter((todo) => todo.username === user.username);
//     userTodos.forEach((todo) => showTodo(todo));
//   }
// }

// window.onload = function () {
//   displayTodoList();
// };

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameInput = document.querySelector(".name").value.toLowerCase();
  const passwordInput = document.querySelector(".password").value;

  login(usernameInput, passwordInput);
});
