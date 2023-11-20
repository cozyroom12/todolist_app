function getUsers() {
  const usersData = localStorage.getItem("users");
  return usersData ? JSON.parse(usersData) : [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

const currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  // hide the login form and welcome 보여주기
  document.querySelector(".login-box").style.display = "none";
  alert(`Welcome back, ${currentUser}!`);
}

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector(".name").value;
  const password = document.querySelector(".password").value;

  const users = getUsers();

  const userExists = users.some(
    (user) => user.name === username && user.password === password
  );

  if (userExists) {
    localStorage.setItem("currentUser", username);

    loginForm.style.display = "none";
    alert(`Welcome, ${username}!`);
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newUsername = document.querySelector(".new-name");
  const newPassword = document.querySelector(".new-password");

  const users = getUsers();

  const userExists = users.some((user) => user.name === newUsername);

  if (userExists) {
    alert("Username already taken. Please choose a different one.");
  } else {
    users.push({ username: newUsername, password: newPassword });
    saveUsers(users);

    // localStorage에 currentuser로 바로 로그인
    localStorage.setItem("currentUser", newUsername);

    // Register form 없애기
    registerForm.style.display = "none";
    alert(`Welcome, ${newUsername.value}!`);
  }
});

// Show the register form when the user wants to register
// document.getElementById("show-register").addEventListener("click", () => {
//   document.getElementById("login-container").style.display = "none";
//   document.getElementById("register-container").style.display = "block";
// });
