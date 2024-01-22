<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	require_once '../partials/config_session.inc.php';

	require 'address.php';

	if (
		isset($_POST['name']) ||
		isset($_POST['email']) ||
		isset($_POST['subject']) ||
		isset($_POST['message']) ||
		isset($_POST['token'])
	) {
		$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
		$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
		$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
		$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

		if (strlen($name) < 2 || strlen($name) > 30) {
			session_destroy();
			header('Location: https://daviddyer.me');
			exit;
		}
		if (strlen($subject) < 4 || strlen($subject) > 50) {
			session_destroy();
			header('Location: https://daviddyer.me');
			exit;
		}
		if (strlen($message) < 200) {
			session_destroy();
			header('Location: https://daviddyer.me');
			exit;
		}
		if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			session_destroy();
			header('Location: https://daviddyer.me');
			exit;
		}
		if ($_POST['token'] !== $_SESSION['signup_token']) {
			session_destroy();
			header('Location: https://daviddyer.me');
			exit;
		}

		// header
		$headers = "From: $email\r\n";
		$headers .= "Reply-To: $email\r\n";
		$headers = "Content-type: text/plain; charset=UTF-8\r\n";

		// message
		$formcontent = "From: $name \n Email: $email \n Subject: $subject \n Message: $message";

		mail($to, $subject, $formcontent, $headers);

		header('Location: https://daviddyer.me');
	} else {
		header('Location: https://daviddyer.me');
		exit;
	}
}
