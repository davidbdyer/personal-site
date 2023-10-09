<!DOCTYPE html>
<html lang="en">
<?php include 'partials/head.php'; ?>

	<!-- page specific scripts -->
	<script src="./scripts/script-min.js" defer></script>
</head>
<body>
			<header class="primary-header--container container" aria-label="primary-header">
			<?php include 'partials/primary-nav.php'; ?>

			<section class="introduction" aria-label="introduction">
				<h2 class="sr-only">Introduction</h2>
				
				<p>I am a Full Stack Developer knowledgeable in CSS/SASS, Javascript, HTML, PHP,
				SQL, Nodejs, and Java. I am brilliant when it comes to technology, but I'm
				humble. I am passionate about crafting intuitive, enjoyable user experiences for
				everyone, including those with disabilities. I have a solid understanding of
				UX/UI and visual design principles and over 20yrs of experience working with
				technology and creating solutions for user needs. Sixteen years of my career
				were spent working with and helping teach artists and designers in the Division
				of Art + Design at a University. Where I studied Computer Science and Media
				Design, giving me a unique balance of technical and design skills</p>
				
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