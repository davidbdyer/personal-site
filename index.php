<!DOCTYPE html>
<html lang="en">
<?php include 'partials/head.php'; ?>

	<!-- scripts -->
	<script src="scripts/content.js" defer></script>
	<script src="scripts/content-builder.js" defer></script>
	<script src="scripts/controls.js" defer></script>
</head>
<body>
			<header class="primary-header--container" aria-label="primary-header">
			<?php include 'partials/primary-nav.php'; ?>

			<section class="introduction" aria-label="introduction">
				<h2 class="sr-only">Introduction</h2>
				<p>Hi,<br> I am a Full Stack Developer. My favorite language and primary focus currently is Javascript, both Front-End in the browser and Back-End using Node. I am well-versed in CSS/SASS, Javascript, and HTML and I regularly use PHP, MySQL, and Java. Along with version control systems like git, various build systems, and development patterns commonly used with those languages.<p>

				<p>I have worked with computer systems and technology my entire adult life, and due to my highly analytical and creative nature, I excel at problem solving. Sixteen years of my career were spent working with and helping teach artists and designers in the Division of Art + Design at a university. I studied Computer Science and Media Design while working at the university. I have a solid understanding of UX and Visual Design principles alongside my technical abilities. </p>
				<ul class="lang-list" role="list">
					<li class="html">html</li>
					<li class="css">css</li>
					<li class="sass">sass</li>
					<li class="bootstrap">bootstrap</li>
					<li class="javascript">javascript</li>
					<li class="node">node</li>
					<li class="express">express</li>
					<li class="ejs">ejs</li>
					<li class="mongo">mongo</li>
					<li class="mysql">mysql</li>
					<li class="postgre">postgresql</li>
					<li class="mocha">mocha</li>
				</ul>
			</section>
		</header>

		<main>
				<div class="project-grid--container" id="project-list--container" role="tablist" aria-label="project-list">
					<h2>Projects and Examples</h2>
				</div>
			<section class="project-details--container" id="project-details--container" aria-label="project-detail-list" hidden></section>
		</main>

		<?php include 'partials/contact-form.php'; ?>

		<footer>
			<div class="copyright"> David Dyer &copy; <script>
					document.write(new Date().getFullYear());
				</script>
			</div>
		</footer>
</body>

</html>