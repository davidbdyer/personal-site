<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = "daviddyer@me.com";
$from = "daviddyer@me.com";
$formcontent="From: $name \n Email: $email \n Subject: $subject \n Message: $message";
mail($to, $formcontent, $email) or die("Error!");
?>


