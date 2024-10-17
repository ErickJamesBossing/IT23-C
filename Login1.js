document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (username && password) {
            // Perform the login logic here (e.g., send data to the server)
            alert(`Username: ${username}\nPassword: ${password}`); // For demonstration purposes
        } else {
            alert('Please fill in both fields.');
        }
    });
});
