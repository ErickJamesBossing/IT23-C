document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (username && password) {
            alert(`Username: ${username}\nPassword: ${password}`); 
        } else {
            alert('Please fill in both fields.');
        }
    });
});
