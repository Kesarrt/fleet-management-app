const loginForm = document.getElementById('loginform');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email= emailInput.value;
    const password = passwordInput.value;

    if(email === 'admin@gmail.com' && password === "admin1234"){
        window.location.href="admin.html";
    }else{
        alert("Invalid Credentials");
    }
});