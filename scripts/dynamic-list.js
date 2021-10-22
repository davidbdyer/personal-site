const list = document.querySelector('#dynamic-list');

const portfolio = [
	{
		cardTitle: 'Pray Up',
		cardText: 'Designed and implemented website for Pray Up ministry.',
		year: '2021',
		siteUrl: 'https://prayuplife.com',
		imgUrl: 'images/prayup.jpg',
		imgAlt: 'pray up site thumbnail',
		gitUrl: 'https://github.com/davidbdeath/prayup_website',
		tags: [
			'ministry',
			'freelance'
		]
	},
	{
		cardTitle: 'Yelp Camp',
		cardText: 'Web App I did for a development course.',
		year: '2018',
		siteUrl: 'https://damp-sierra-93991.herokuapp.com/',
		imgUrl: 'images/yelpcamp.jpg',
		imgAlt: 'Yelp Camp',
		tags: [
			'web bootcamp',
			'nodejs',
			'express',
			'mongo'
		]
	},
	{
		cardTitle: 'Calculator',
		cardText: 'Calculator web app, I implemented from design files.',
		year: '2021',
		siteUrl: 'https://davidbdeath.github.io/calculator-app-main/',
		imgUrl: 'images/calculator.jpg',
		imgAlt: 'Calculator App',
		gitUrl: 'https://github.com/davidbdeath/calculator-app-main',
		tags: [
			'frontend mentor'
		]
	},
	{
		cardTitle: 'Museum of Candy',
		cardText: 'A responsive simple website.',
		year: '2021',
		siteUrl: 'portfolio_sites/museum_of_candy/index.html',
		imgUrl: 'images/museum-of-candy.jpg',
		imgAlt: 'museum of candy',
		tags: [
			'web bootcamp'
		]
	},
	{
		cardTitle: 'Score Keeper',
		cardText: 'App for score keeping.',
		year: '2021',
		siteUrl: 'portfolio_sites/score_keeper/index.html',
		imgUrl: 'images/score_keeper.jpg',
		imgAlt: 'score_keeper',
		tags: [
			'web bootcamp'
		]
	},
	{
		cardTitle: 'Derek Ancil Designs',
		cardText: 'I implemented this website designed by Derek Ancil',
		year: '2018',
		siteUrl: 'http://derekancildesign.com/index.html',
		imgUrl: 'images/derek_ancil_design.jpg',
		imgAlt: 'derek ancil design thumbnail',
		tags: [
			'freelance'
		]
	}
]

const create = () => {
	for (let site in portfolio){
		const col = document.createElement('div');
			col.classList.add('col');

		const card = document.createElement('div');
			card.classList.add('card', 'shadow-sm');

		const cardBody = document.createElement('div');
			cardBody.classList.add('card-body');

		const title = document.createElement('h5');
			title.classList.add('card-title');
			title.textContent = portfolio[site].cardTitle;

		const cardText = document.createElement('p');
			cardText.classList.add('card-text');
			cardText.textContent = portfolio[site].cardText;

		const cardFooter = document.createElement('div');
			cardFooter.classList.add('d-flex', 'justify-content-between', 'align-items-center')

		const btnGroup = document.createElement('div')
			btnGroup.classList.add('btn-group');

		const siteUrl = document.createElement('a');
			siteUrl.href = portfolio[site].siteUrl;
			siteUrl.classList.add('btn', 'btn-info');
			siteUrl.textContent = 'Link';
			siteUrl.target = '_blank';
			siteUrl.rel = 'noreferrer noopener';

		const gitBtn = document.createElement('a');
			gitBtn.href = portfolio[site].gitUrl;
			gitBtn.classList.add('btn', 'btn-outline-info');
			gitBtn.innerHTML = `<svg class="github-svg" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
			  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
			</svg>`
			gitBtn.target = '_blank';
			gitBtn.rel = 'noreferrer noopener';

		const year = document.createElement('div');
			year.classList.add('text-muted');
			year.textContent = portfolio[site].year;

		const image = document.createElement('img');
			image.classList.add('card-img-top');
			image.src = portfolio[site].imgUrl;

		list.appendChild(col);
		col.appendChild(card);
		card.appendChild(image);
		card.appendChild(cardBody);
		cardBody.appendChild(title);
		cardBody.appendChild(cardText);
		cardBody.appendChild(cardFooter);
		cardFooter.appendChild(btnGroup);
		btnGroup.appendChild(siteUrl);
		if (portfolio[site].gitUrl) {
			btnGroup.appendChild(gitBtn);
		}
		cardFooter.appendChild(year);
	}

}

create();