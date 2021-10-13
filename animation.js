const animationButton = document.getElementById('animation-toggle');
const animationState = localStorage.getItem('animation-state');

animationButton.addEventListener('click', () => {
	if (document.body.style.animationPlayState === 'running') {
		document.body.classList.remove('rainbow');
		document.body.style.animationPlayState = 'paused'
		animationButton.textContent = 'enable animation';
		localStorage.setItem('animation-state', 'disabled');
	} else {
		document.body.classList.add('rainbow');
		document.body.style.animationPlayState = 'running'
		animationButton.textContent = 'disable animation';
		localStorage.setItem('animation-state', 'enabled');
	}
});

if (animationState === 'disabled') {
	document.body.classList.remove('rainbow');
	document.body.style.animationPlayState = 'paused'
	animationButton.textContent = 'enable animation';
}




document.addEventListener("dblclick", event => {
	event.preventDefault()
	event.stopPropagation()
})