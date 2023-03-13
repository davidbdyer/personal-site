<div class="contact-form--container container">
	<h2>Hire Me!</h2>
	<form method="POST" action="scripts/mail.php" class="contact-form" name="contact-form" id="contact-form">
		<label class="sr-only" for="name">name</label>
		<input type="text" name="name" id="name" minlength="2" maxlength="20" placeholder="name" required />

		<label class="sr-only" for="email">email</label>
		<input type="email" name="email" id="email" minlength="5" maxlength="50" placeholder="email" required />

		<label class="sr-only" for="subject">subject</label>
		<input type="text" name="subject" id="subject" minlength="4" maxlength="50" placeholder="subject" required />

		<label class="sr-only" for="message">message</label>
		<textarea name="message" id="message" minlength="200" rows="5" placeholder="message" required></textarea>

		<input type="text" id="website" name="website" hidden/>

		<button class="btn">Send</button>
	</form>
</div>