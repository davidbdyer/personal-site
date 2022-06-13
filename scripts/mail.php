<?php
	$errors = '';
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		include 'address.php';

		if(
			empty($_POST['name']) ||
			empty($_POST['email']) ||
			empty($_POST['subject']) ||
			empty($_POST['message'])
		){
			$errors .= "\n Error: all fields are required";
		} else {
			// $name = $_POST['name'];
			$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			// $email = $_POST['email'];
			$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
			// $subject = $_POST['subject'];
			$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			// $message = $_POST['message'];
			$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

			// header
			$headers = "From: $from\r\n";
			$headers .= "Reply-To: $email\r\n";
			$headers .= "X-Mailer: PHP/".phpversion();

			// message
			$formcontent="From: $name \n Email: $email \n Subject: $subject \n Message: $message";

			mail($to, $subject, $formcontent, $headers);

			header('Location: https://daviddyer.me');
		}
	}
