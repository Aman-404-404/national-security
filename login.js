document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded credentials
    const validUsername = "admin";  // Replace with the desired username
    const validPassword = "password123";  // Replace with the desired password

    // Check if the entered username and password match the hardcoded credentials
    if (username === validUsername && password === validPassword) {
        // Successful login, redirect to the index.html page
        window.location.href = 'index.html';
    } else {
        // Show an error message if credentials are incorrect
        alert('Invalid username or password');
    }
});
