<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		include 'address.php';

		if(
			empty($_POST['name']) ||
			empty($_POST['email']) ||
			empty($_POST['subject']) ||
			empty($_POST['message']) ||
			!empty($_POST['website'])
		){
			header('Location: https://daviddyer.me');
		} else {
			$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
			$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

			// header
			$headers = "From: $email\r\n";
			$headers .= "Reply-To: $email\r\n";
			$headers .= "X-Mailer: PHP/".phpversion();

			// message
			$formcontent="From: $name \n Email: $email \n Subject: $subject \n Message: $message";

			mail($to, $subject, $formcontent, $headers);

			header('Location: https://daviddyer.me');
		}
	}
