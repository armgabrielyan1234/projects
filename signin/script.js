const login = document.querySelector("#login");
const password = document.querySelector("#password");
const show = document.querySelector("#show");

const form = document.querySelector("form");

const SECRETGMAIL = loginSignIn;
const SECRETPASSWORD = passwordSignIn;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (login.value == SECRETGMAIL && password.value == SECRETPASSWORD) {
    location.href = "signup/index.html";
    localStorage.setItem("Login", "Succes");
  }
});
show.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
