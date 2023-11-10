const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  const username = document.querySelector(".name").value;
  const password = document.querySelector(".password").value;

  const data = localStorage.getItem("users");
  const userList = JSON.parse(data); // array type
});

const data = localStorage.getItem("users");
const userList = JSON.parse(data);
console.log(userList);

const userNames = userList.forEach((user) => {
  if (user.username == "input_value") console.log(user.username);
});
