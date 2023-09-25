// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Perform basic client-side validation
        if (username === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            // Send the data to the server for registration
            // You would typically use AJAX or fetch to send a request to your server here.
            // This is just a placeholder.
            alert("Registration successful! Redirecting...");
            window.location.href = "login.html"; // Redirect to login page
        }
    });
});