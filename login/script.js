const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const inputEmail = document.querySelector("#login_email");
    const inputPassword = document.querySelector("#login_password");

    const input1 = inputEmail.value;
    const input2 = inputPassword.value;

    if (!input1 || !input2) {
        alert("Please fill in both fields.");
        return;
    }
    if (input1 == "1234@gmail.com" && input2 == "1234" ) {
        location.href = "../index.html"
    }
    
});
