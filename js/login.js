const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector(".name").value;
  const password = document.querySelector(".password").value;

  const data = localStorage.getItem("users");
  const userList = JSON.parse(data); // array type

  if (username == "Maru") {
    console.log("the user is sensed. now what?");
  }
});

// const userNames = userList.forEach((user) => {
//   if (user.username == "input_value") console.log(user.username);
// });
