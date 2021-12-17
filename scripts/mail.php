<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$formcontent="From: $name \n Email: $email \n Message: $message";
$recipient = "daviddyer@me.com";
$mailheader = "From: My Website \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
// echo "Thank You!";
header('Location: https://prayuplife.com/confirmation_page.html');

