
// SmartCampus - Login Form

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get user details
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Check empty fields
    if (email === "" || password === "" || role === "") {
        message.textContent = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    // Show selected role
    const roleName = role.charAt(0).toUpperCase() + role.slice(1);

    message.style.color = "#174ea6";
    message.textContent =
        "Welcome! " + roleName + " login form is working.";

    console.log("Selected Role:", roleName);

});

