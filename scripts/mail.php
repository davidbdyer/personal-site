<?php
$from = "form@daviddyer.me";
$to = "form@daviddyer.me";

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// header
$headers = "From: form@daviddyer.me\r\n";
// $headers .= "Reply-To: form@daviddyer.me\r\n";
// $headers .= "X-Mailer: PHP/".phpversion();

// message
$formcontent="From: $name \n Email: $email \n Subject: $subject \n Message: $message";

mail($to, $subject, $formcontent, $headers);

header('Location: https://daviddyer.me')
?>

