const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // SIMPLE LOGIN CHECK
    if (email === "admin@gmail.com" && password === "admin1234") {
        alert("Login successful!");
        window.location.href = "admin.html";  // Redirect to admin dashboard
    } else {
        alert("Incorrect email or password.");
    }
});
