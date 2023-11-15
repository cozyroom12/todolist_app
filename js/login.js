const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameInput = document.querySelector(".name").value.toLowerCase();
  const passwordInput = document.querySelector(".password").value;

  const data = localStorage.getItem("users");
  const userList = JSON.parse(data); // array type

  // if (usernameInput == "Maru") {
  //   // how do i do upcap here??
  //   console.log("the user is sensed. now what?");
  // }

  const user = userList.find(function (u) {
    return u.username === usernameInput;
  });

  if (user) {
    if (user.password === passwordInput) {
      console.log("Login successful !");
      window.location.href = "index.html";
    } else {
      console.log("Incorrect password");
    }
  } else {
    console.log("Username not found");
  }
});
