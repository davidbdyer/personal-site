<?php
require_once 'partials/config_session.inc.php';
//  Security token generation.
$token = "";
try {
	$token = bin2hex(random_bytes(16));
	$_SESSION["signup_token"] = $token;
} catch (Exception $e) {
	echo "Sorry, something went wrong.";
}
?>


<div class="contact-form--container container">
	<h2>Hire Me!</h2>
	<form aria-labelledby="h2" method="POST" action="scripts/mail.php" class="contact-form" name="contact-form" id="contact-form">
		<!-- <label class="sr-only" for="name">Name</label> -->
		<input aria-label="name" type="text" name="name" id="name" placeholder="name" pattern="^[\w\-\.'\p{L} ]{2,30}$" required />

		<!-- <label class="sr-only" for="email">Email</label> -->
		<input aria-label="email" type="email" name="email" id="email" placeholder="email" pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$" required />

		<!-- <label class="sr-only" for="subject">Subject</label> -->
		<input aria-label="subject" type="text" name="subject" id="subject" minlength="4" maxlength="50" placeholder="subject" required />

		<!-- <label class="sr-only" for="message">Message</label> -->
		<textarea aria-label="message" name="message" id="message" minlength="200" rows="5" placeholder="message" required></textarea>
		
		<input type="hidden" id="token" name="token" value="<?php echo $token; ?>" />
		<button type="submit" class="btn">Send</button>
	</form>