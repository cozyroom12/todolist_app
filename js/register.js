const registerForm = document.getElementById("register-form");
USER_KEY = "users";
let userList = [];

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newUsername = document.querySelector(".new-name").value;
  const newPassword = document.querySelector(".new-password").value;
  console.log(newUsername, newPassword);

  const user = {
    username: newUsername,
    password: newPassword,
  };

  userList.push(user);
  saveData(userList);
});
console.log(userList);

function saveData(dataArray) {
  localStorage.setItem(USER_KEY, JSON.stringify(dataArray));
}

const savedUsers = localStorage.getItem(USER_KEY); // string type

// 새로고침시 userList 가 [] 로 다시 init 됨을 방지
if (savedUsers) {
  const parsedUsers = JSON.parse(savedUsers); // back to array
  userList = parsedUsers;
}
