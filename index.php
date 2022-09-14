<!DOCTYPE html>
<html lang="en">
<?php include 'partials/head.php'; ?>

	<!-- scripts -->
	<script src="scripts/content.js" defer></script>
	<script src="scripts/controls.js" defer></script>
</head>
<body>
			<header class="primary-header--container" aria-label="primary-header">
			<?php include 'partials/primary-nav.php'; ?>

			<section class="introduction" aria-label="introduction">
				<h2 class="sr-only">Introduction</h2>
				<p>Hi, I'm a Full Stack Developer. I like to code things and problem solve. I've been gifted with a higher-than-average IQ, meaning I learn quickly and understand things more deeply. I've built websites for bands, churches, college students, and faculty for over a decade. I enjoy it. It's like playing a video game that never gets old. I started as an IT professional and teaching assistant, administering multiple labs and servers for the art department of a university. That experience of being emersed in art has gifted me with a solid understanding of visual and user experience design principles.</p>
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