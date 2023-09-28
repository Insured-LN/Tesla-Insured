document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input fields and the send button
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var sendButton = document.getElementById("sendButton");

    // Add a click event listener to the send button
    sendButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Perform validation here if needed
        var name = nameInput.value;
        var email = emailInput.value;
        var message = messageInput.value;

        // Clear the input fields
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        // Show a success message
        alert("Message sent successfully!");

        // Open the Gmail link
        window.location.href = "mailto:nextgenerationinsured@gmail.com";
    });
});