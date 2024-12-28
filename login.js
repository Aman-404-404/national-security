document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded credentials
    const validUsername = "admin";  // Replace with the desired username
    const validPassword = "password123";  // Replace with the desired password

    // Debug: Log entered values for troubleshooting
    console.log("Entered Username:", username);
    console.log("Entered Password:", password);

    // Check if the entered username and password match the hardcoded credentials
    if (username === validUsername && password === validPassword) {
        // Successful login, redirect to the index.html page
        console.log("Login successful, redirecting...");
        window.location.href = './index.html'; // Ensure the path is correct
    } else {
        // Show an error message if credentials are incorrect
        console.error("Invalid credentials");
        alert('Invalid username or password');
    }
});
