function setStyleSheet(url) {
	let stylesheet = document.getElementById("fancy-theme");
	stylesheet.setAttribute('href', url);
}

const animationButton = document.getElementById('animation-toggle');
animationButton.addEventListener('click', () => {
	if (document.body.style.animationPlayState === 'running') {
		setStyleSheet(null);
		document.body.style.animationPlayState = 'paused'
		animationButton.textContent = 'enable animation';
	} else {
		setStyleSheet('rainbow.css')
		document.body.style.animationPlayState = 'running'
		animationButton.textContent = 'disable animation';
	}
});


function setStyleSheet(url) {
	let stylesheet = document.getElementById("fancy-theme");
	stylesheet.setAttribute('href', url);
}

// const checkPrefersLightMode = function () {
// 	const { matches } = window.matchMedia('(prefers-color-scheme: light)')
// 	if (matches === true) {
// 		setStyleSheet('theme2.css')
// 		document.getElementById('theme-2').checked = true;
// 	}
// }

// onload = checkPrefersLightMode();

document.addEventListener("dblclick", event => {
	event.preventDefault()
	event.stopPropagation()
  })