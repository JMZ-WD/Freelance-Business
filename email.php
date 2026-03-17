<?php
// Start the PHP script at the top of the file, without any output above this.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstName = $_POST['fname'];
    $lastName = $_POST['lname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Define recipient email address
    $to = "jmz-webdesigns@hotmail.com";

    // Create the email subject and message body
    $subject = "New Message from Contact Form";
    $body = "You have received a new message from the contact form:\n\n";
    $body .= "Name: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // Set the headers for the email
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Ensure no output has been sent yet before redirection
        header("Location: index.php"); // Redirect to index.html
        exit(); // Always call exit() after a header redirect
    } else {
        echo "Error sending message."; // Output error message if email fails
    }
}
?>
