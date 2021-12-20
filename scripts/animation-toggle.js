const canvas = document.querySelector('.orb-canvas');
const button = document.querySelector('#animation-toggle');

const elmToggle = (elm) => {
	if (elm.getAttribute('hidden') === 'true'){
		elm.removeAttribute('hidden');
	} else {
		elm.setAttribute('hidden', true);
	}
}

button.addEventListener('click', () => {
	elmToggle(canvas);
});