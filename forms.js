
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message = document.getElementById("message");

    if (password !== confirmPassword) {

        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return;
    }

    if (password.length < 8) {

        message.style.color = "red";
        message.innerText =
            "Password must contain at least 8 characters!";
        return;
    }

    message.style.color = "green";

    message.innerText =
        "Registration successful! Welcome " + name;

    console.log("Name:", name);
    console.log("Email:", email);

    form.reset();

});
