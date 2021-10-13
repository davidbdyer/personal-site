const list = document.querySelector('#dynamic-list');

const listItems = [
	{
		cardTitle: 'Pray Up',
		cardText: 'Designed and implemented website for Pray Up ministry.',
		year: '2021',
		siteUrl: 'https://prayuplife.com',
		imgUrl: 'images/prayup.jpg',
		imgAlt: 'pray up site thumbnail'
	},
	{
		cardTitle: 'Calculator',
		cardText: 'Calculator web app, I implemented from design files.',
		year: '2021',
		siteUrl: 'https://davidbdeath.github.io/calculator-app-main/',
		imgUrl: 'images/calculator.jpg',
		imgAlt: 'Calculator App',
		gitUrl: 'https://github.com/davidbdeath/calculator-app-main'
	},
	{
		cardTitle: 'Score Keeper',
		cardText: 'App for score keeping.',
		year: '2021',
		siteUrl: 'portfolio_sites/score_keeper/index.html',
		imgUrl: 'images/score_keeper.jpg',
		imgAlt: 'score_keeper'
	},
	{
		cardTitle: 'Derek Ancil Designs',
		cardText: 'I implemented this website designed by Derek Ancil',
		year: '2018',
		siteUrl: 'http://derekancildesign.com/index.html',
		imgUrl: 'images/derek_ancil_design.jpg',
		imgAlt: 'derek ancil design thumbnail'
	},
	{
		cardTitle: 'Yelp Camp',
		cardText: 'Web App I did for a development course.',
		year: '2018',
		siteUrl: 'https://damp-sierra-93991.herokuapp.com/',
		imgUrl: 'images/yelpcamp.jpg',
		imgAlt: 'Yelp Camp'
	},
	{
		cardTitle: 'Museum of Candy',
		cardText: 'A responsive simple website.',
		year: '2021',
		siteUrl: 'portfolio_sites/museum_of_candy/index.html',
		imgUrl: 'images/museum-of-candy.jpg',
		imgAlt: 'museum of candy'
	}
]

const create = () => {
	let col = document.createElement('div');
		col.classList = 'col';

	let card = document.createElement('div');
		card.classList = 'card shadow-sm';
		card.innerHTML = '<img src="images/prayup.jpg">';

	let cardImage = document.createElement('img');
		cardImage.classList = 'card-img-top';
		cardImage.src = 'images/prayup.jpg';

	let cardTitle = document.createElement('h5');
		cardTitle.classList = 'card-title';
		cardTitle.innerHTML = 'Pray UP';

	let cardBody = document.createElement('div');
		cardBody.classList = 'card-body';
		cardBody.innerHTML = '<h5 class="card-title">Pray Up</h5>';

	let cardFooter = document.createElement('div');
		cardFooter.classList = 'd-flex justify-content-between align-items-center';

	list.appendChild(col).appendChild(cardImage);
}