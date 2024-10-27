<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "barcspeeder34@yahoo.com"; // Your email address
    $subject = "New Contact Form Submission from " . $name;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you, your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
