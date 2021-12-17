<?php
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$message = $_POST['message']
$formcontent="From: $name \n Email: $email \n Mobile: $mobile \n Message: $message";
$recipient = "daviddyer@me.com";
$subject = "Web Dev Contact Form";
$mailheader = "From: My Website \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
// echo "Thank You!";
header('Location: index.html');
