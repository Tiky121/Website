<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));
    $recipient = "simontibensky2@gmail.com"; // Replace with your actual email address
    $subject = "New Contact Form Message from $name";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    if (mail($recipient, $subject, $email_content, $headers)) {
        header("Location: thank_you.html");
        exit;
    } else {
        echo "Oops! Something went wrong, please try again.";
    }
} else {
    echo "Invalid request";
}
?>
