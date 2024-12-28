<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="login-form">
            <label for="username">Username:</label>
            <input type="text" id="username" placeholder="Enter username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password" required>

            <button type="submit">Login</button>
        </form>
    </div>
<script src="app.js"></script>
    <script src="login.js"></script>
    <script src="data.json"></script>
</body>
</html>
