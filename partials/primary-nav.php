<?php $currentPage =	basename($_SERVER['PHP_SELF'], ".php"); ?>

<nav class="primary-nav" aria-label="primary">
	<h1>David Dyer</h1>

	<div class="icon-group">
		<!-- home icon -->
		<?php if ($currentPage != 'index') { ?>
		<a aria-label="home" href="./">
			<svg class="icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<clipPath id="a">
					<path clip-rule="evenodd" d="m0 0h800v600h-800z" />
				</clipPath>
				<g transform="scale(.02 .0266667)">
					<path d="m0 0h800v600h-800z" fill="none" />
					<g clip-path="url(#a)">
						<path d="m811.673 147.224c53.88 0 97.624 43.744 97.624 97.624s-43.744 97.624-97.624 97.624-97.624-43.744-97.624-97.624 43.744-97.624 97.624-97.624zm0 15.62c45.26 0 82.004 36.745 82.004 82.004s-36.744 82.004-82.004 82.004c-45.259 0-82.004-36.745-82.004-82.004s36.745-82.004 82.004-82.004z" transform="matrix(4.09735 0 0 3.07301 -2925.71 -452.421)" />
						<path d="m140.014 223.591h-29.465c-6.792 0-12.844-4.288-15.095-10.696-2.252-6.408-.212-13.539 5.087-17.787 43.193-34.626 113.525-91.008 139.451-111.792 5.848-4.688 14.168-4.688 20.016 0l63.256 50.71v-10.193c0-8.831 7.17-16 16-16h4.722c8.831 0 16 7.169 16 16v39.631l39.473 31.644c5.299 4.248 7.339 11.379 5.087 17.787-2.251 6.408-8.303 10.696-15.095 10.696h-29.465v157.99c0 8.831-7.169 16-16 16h-187.972c-8.831 0-16-7.169-16-16z" transform="scale(1.6 1.2)" />
					</g>
				</g>
			</svg>
		</a>
		<?php } ?>

		<!-- contact icon -->
		<?php if ($currentPage != 'contact') { ?>
		<a aria-label="contact" href="#contact-form">
			<svg class="icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
				<g transform="matrix(.0199601 0 0 .0266134 .026571 0)">
					<path d="m0 0h800v600h-800z" fill="none" />
					<g>
						<path d="m811.673 147.224c53.88 0 97.624 43.744 97.624 97.624s-43.744 97.624-97.624 97.624-97.624-43.744-97.624-97.624 43.744-97.624 97.624-97.624zm0 15.62c45.26 0 82.004 36.745 82.004 82.004s-36.744 82.004-82.004 82.004c-45.259 0-82.004-36.745-82.004-82.004s36.745-82.004 82.004-82.004z" transform="matrix(4.09735 0 0 3.07301 -2925.71 -452.421)" />
						<path d="m773.479 51.241-373.479 204.046c-89.301-48.788-373.479-204.046-373.479-204.046-20.8-11.364-49.571-7.48-64.208 8.669-14.638 16.148-9.635 38.485 11.166 49.849l400 218.536c15.908 8.692 37.134 8.692 53.042 0l400-218.536c20.801-11.364 25.804-33.701 11.166-49.849-14.637-16.149-43.408-20.033-64.208-8.669z" transform="matrix(.694386 0 0 .670808 122.246 119.86)" />
					</g>
				</g>
			</svg>
		</a>
		<?php } ?>

		<!-- github icon -->
		<a aria-label="my github" href="https://github.com/davidbdyer" target="_blank" rel="noreferrer noopener">
			<svg class="icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
						<path d="m0-118.275c-33.347 0-60.388 27.035-60.388 60.388 0 26.68 17.303 49.316 41.297 57.301 3.018.559 4.126-1.31 4.126-2.905 0-1.439-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.979-6.705-8.836-6.705-8.836-5.479-3.748.413-3.671.413-3.671 6.064.426 9.257 6.224 9.257 6.224 5.386 9.231 14.127 6.562 17.573 5.019.543-3.902 2.107-6.567 3.834-8.075-13.413-1.526-27.513-6.705-27.513-29.844 0-6.592 2.359-11.979 6.222-16.208-.627-1.522-2.694-7.664.586-15.982 0 0 5.071-1.622 16.61 6.191 4.817-1.338 9.983-2.009 15.115-2.033 5.132.024 10.302.695 15.128 2.033 11.526-7.813 16.59-6.191 16.59-6.191 3.287 8.318 1.22 14.46.593 15.982 3.872 4.229 6.214 9.616 6.214 16.208 0 23.195-14.127 28.301-27.574 29.796 2.166 1.874 4.096 5.549 4.096 11.183 0 8.08-.069 14.583-.069 16.572 0 1.608 1.086 3.491 4.147 2.898 23.982-7.994 41.263-30.622 41.263-57.294 0-33.353-27.037-60.388-60.388-60.388" transform="matrix(.132477 0 0 .132477 8 15.8662)" />
			</svg>
		</a>
	</div>
</nav>