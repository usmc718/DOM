document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const greeting = document.getElementById('greeting');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if username and password are correct (dummy check)
        if (username === 'user' && password === 'password') {
            greeting.innerText = 'Hello ' + username;
            greeting.style.display = 'block';
        } else {
            alert('Incorrect username or password. Please try again.');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });
});
