<?php
	$errors = '';
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		$from = "form@daviddyer.me";
		$to = "form@daviddyer.me";

		if(
			empty($_POST['name']) ||
			empty($_POST['email']) ||
			empty($_POST['subject']) ||
			empty($_POST['message'])
		){
			$errors .= "\n Error: all fields are required";
		} else {
			$name = $_POST['name'];
			$email = $_POST['email'];
			$subject = $_POST['subject'];
			$message = $_POST['message'];

			// header
			$headers = "From: form@daviddyer.me\r\n";
			$headers .= "Reply-To: form@daviddyer.me\r\n";
			$headers .= "X-Mailer: PHP/".phpversion();

			// message
			$formcontent="From: $name \n Email: $email \n Subject: $subject \n Message: $message";

			mail($to, $subject, $formcontent, $headers);

			header('Location: https://daviddyer.me')
		}
	}
?>