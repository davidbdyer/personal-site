<!DOCTYPE html>
<html lang="en">
	<?php include 'partials/head.php'; ?>
	<body>
		<header class="container">
			<?php include 'partials/primary-nav.php'; ?>
		</header>

		<div class="container">
			<form method="POST" action="scripts/mail.php" class="contact-form" name="contact-form" id="contact-form">
				<label class="sr-only" for="name">name</label>
				<input type="text" name="name" id="name" minlength="2" maxlength="20" placeholder="name" required autofocus />

				<label class="sr-only" for="email">email</label>
				<input type="email" name="email" id="email" minlength="5" maxlength="50" placeholder="email" required />

				<label class="sr-only" for="subject">subject</label>
				<input type="text" name="subject" id="subject" minlength="4" maxlength="50" placeholder="subject" required />

				<label class="sr-only" for="message">message</label>
				<textarea name="message" id="message" minlength="200" rows="10" placeholder="message" required></textarea>

				<input type="text" id="website" name="website"/>

				<input class="btn" type="submit" value="Send" />
			</form>
		</div>
	</body>
</html>
