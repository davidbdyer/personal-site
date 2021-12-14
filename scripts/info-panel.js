const main = document.querySelector('main');
const cards = main.querySelectorAll('.card');


cards.forEach((card) => {
	card.addEventListener('click', (e) => {
		e.target.style.display = 'none';
	})
})
