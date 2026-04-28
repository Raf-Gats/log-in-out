function toggle() {
    document.getElementById("container").classList.toggle("active");
}
function login() {
    const email = document.querySelector(".sign-in input[type='email']");
    const password = document.getElementById("loginPassword");

    let valid = true;

    // reset errors safely
    if (email) email.classList.remove("error");
    if (password) password.classList.remove("error");

    if (!email || email.value.trim() === "") {
        email.classList.add("error");
        valid = false;
    }

    if (!password || password.value.trim() === "") {
        password.classList.add("error");
        valid = false;
    }

    if (!valid) {
        alert("Please fill up the Sign In form");
        return;
    }

    alert("Login successful!");
}

function register() {
    const name = document.querySelector(".sign-up input[type='text']");
    const email = document.querySelector(".sign-up input[type='email']");
    const password = document.getElementById("signupPassword");

    let valid = true;

    // reset safely
    [name, email, password].forEach(input => {
        if (input) input.classList.remove("error");
    });

    if (!name || name.value.trim() === "") {
        name.classList.add("error");
        valid = false;
    }

    if (!email || email.value.trim() === "") {
        email.classList.add("error");
        valid = false;
    }

    if (!password || password.value.trim() === "") {
        password.classList.add("error");
        valid = false;
    }

    if (!valid) {
        alert("Please fill up the Sign Up form");
        return;
    }

    alert("Account created successfully!");
}

function togglePassword(inputId, iconWrapper) {
    const input = document.getElementById(inputId);
    const icon = iconWrapper.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}