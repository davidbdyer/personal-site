<!DOCTYPE html>
<html lang="en">
	<?php include 'partials/head.php'; ?>

<body>
	<header class="primary-header" aria-label="primary-header">
		<?php include 'partials/primary-nav.php'; ?>

		<section class="introduction" aria-label="introduction">
			<h2 class="sr-only">Introduction</h2>
			<p> I'm a Full Stack Developer with an exceptional aptitude for technology. I've been building websites for bands, churches, students, and faculty for over a decade. My experience working with artists has gifted me with a solid understanding of visual and user experience design principles. </p>
			<ul class="lang-lib" role="list">
				<li class="html">html</li>
				<li class="css">css</li>
				<li class="sass">sass</li>
				<li class="bootstrap">bootstrap</li>
				<li class="javascript">javascript</li>
				<li class="node">node</li>
				<li class="express">express</li>
				<li class="ejs">ejs</li>
				<li class="mongo">mongo</li>
				<li class="mysql">MySQL</li>
				<li class="postgre">PostgreSQL</li>
			</ul>
		</section>
	</header>

	<!-- <?php include 'partials/main.php'; ?> -->

	<main class="flex">
		<div class="container--project-grid" id="container--project-list" role="tablist" aria-label="project-list"></div>
		<div class="body-mute" id="mobile-body-mute" hidden></div>
		<section class="container--project-details" id="container--project-details" aria-label="detail-list" hidden></section>
	</main>



	<footer id="copyright"> David Dyer &copy; <script>
			document.write(new Date().getFullYear());
		</script>
	</footer>
</body>

</html>