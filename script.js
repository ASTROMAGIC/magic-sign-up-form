const createAccountBtn = document.getElementById('create-account');
const loginLink = document.getElementById('login');
const password = document.getElementById('password');
const confirmPassowrd = document.getElementById('confirm-password');

createAccountBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (password.value !== confirmPassowrd.value) {
        alert("Passwords do not match!");
        return;
    }
});

loginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents default link behavior 
    alert("This is not a real service!");
});