const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // SIMPLE LOGIN VALIDATION
    if (email === "admin@gmail.com" && password === "admin1234") {
        alert("Login successful!");
        window.location.href = "admin.html"; // redirect
    } else {
        alert("Incorrect email or password.");
    }
});
