<!DOCTYPE html>
<html lang="en">
<?php include 'partials/head.php'; ?>

	<!-- scripts -->
	<script src="./scripts/scripts-dist.js" defer></script>
	<!-- <script src="scripts/content.js" defer></script>
	<script src="scripts/content-builder.js" defer></script>
	<script src="scripts/controls.js" defer></script> -->
</head>
<body>
			<header class="primary-header--container container" aria-label="primary-header">
			<?php include 'partials/primary-nav.php'; ?>

			<section class="introduction" aria-label="introduction">
				<h2 class="sr-only">Introduction</h2>
				<p>Hi, I am a Full Stack Developer well-versed in CSS/SASS, Javascript, HTML, PHP, and SQL, alongside version control systems like git, build systems, and development patterns. I am a highly analytical, creative problem solver passionate about crafting intuitive, enjoyable user experiences for everyone, including those with disabilities. I possess a solid understanding of UX/UI and visual design principles and have over 20yrs of experience working with technology and creating solutions for user needs.<p>

				<p>Furthermore, I have worked with computer systems and technology my entire adult life, and due to my highly analytical and creative nature, I excel at problem solving. Sixteen years of my career were spent working with and helping teach artists and designers in the Division of Art + Design at Indiana Wesleyan University. I studied Computer Science and Media Design while working at Indiana Wesleyan University. I have a solid understanding of UX and Visual Design principles alongside my technical abilities.</p>

				<ul class="lang-list">
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
			<div class="container">
				<h2>Projects and Examples</h2>
				<div class="project-grid--container" id="project-list--container" role="tablist" aria-label="project-list"></div>
			</div>
			<section class="project-details--container container" id="project-details--container" aria-label="project-detail-list" hidden></section>

			<?php include 'partials/contact-form.php'; ?>
		</main>

		<footer>
			<div class="copyright"> David Dyer &copy; <script>
					document.write(new Date().getFullYear());
				</script>
			</div>
		</footer>
</body>

</html>