const projectList = document.querySelector('#dynamic-list');
const detailList = document.querySelector('#container--project-details')

const portfolioData = [
	{
		title: 'Pray Up',
		discription: 'Site designed and implemented for Pray Up ministies.',
		date: 'Jan 2021',
		siteUrl: 'https://prayuplife.com',
		imgUrl: 'images/prayup.jpg',
		imgAlt: 'pray up site thumbnail',
		gitUrl: 'https://github.com/davidbdeath/prayup_website',
		aria: 'pray-up--tab',
		lang_lib: [
			'html',
			'css',
			'javascript'
		]
	},
	{
		title: 'Yelp Camp',
		discription: 'Campground rating app.',
		date: 'Sept 2021',
		siteUrl: 'https://damp-sierra-93991.herokuapp.com/',
		imgUrl: 'images/yelpcamp.jpg',
		imgAlt: 'Yelp Camp',
		aria: 'yelp-camp--tab',
		lang_lib: [
			'html',
			'css',
			'javascript',
			'node',
			'express',
			'ejs',
			'mongo'
		]
	},
	{
		title: 'Tip Calculator App',
		discription: 'Implemented from design files.',
		date: 'Oct 2021',
		siteUrl: 'https://davidbdeath.github.io/tip-calculator-app/',
		imgUrl: 'images/tip_calculator.jpg',
		imgAlt: 'Tip Calculator App',
		gitUrl: 'https://github.com/davidbdeath/tip-calculator-app',
		aria: 'tip-calculator--tab',
		lang_lib: [
			'html',
			'css',
			'javascript'
		]
	},
	{
		title: 'Calculator App',
		discription: 'Implemented from design files.',
		date: 'May 2021',
		siteUrl: 'https://davidbdeath.github.io/calculator-app-main/',
		imgUrl: 'images/calculator.jpg',
		imgAlt: 'Calculator App',
		gitUrl: 'https://github.com/davidbdeath/calculator-app-main',
		aria: 'calculator--tab',
		lang_lib: [
			'html',
			'css',
			'javascript'
		]
	},
	{
		title: 'Museum of Candy',
		discription: 'A responsive simple website.',
		date: 'May 2021',
		siteUrl: 'portfolio_sites/museum_of_candy/index.html',
		imgUrl: 'images/museum-of-candy.jpg',
		imgAlt: 'museum of candy',
		aria: 'museum-of-candy--tab',
		lang_lib: [
			'html',
			'css'
		]
	},
	{
		title: 'Score Keeper App',
		discription: 'Ping Pong score keeper.',
		date: 'Jun 2021',
		siteUrl: 'portfolio_sites/score_keeper/index.html',
		imgUrl: 'images/score_keeper.jpg',
		imgAlt: 'score_keeper',
		aria: 'score-keeper--tab',
		lang_lib: [
			'html',
			'css',
			'javascript'
		]
	},
	{
		title: 'Derek Ancil Designs',
		discription: 'Implemented from design files.',
		date: '2018',
		siteUrl: 'http://derekancildesign.com/index.html',
		imgUrl: 'images/derek_ancil_design.jpg',
		imgAlt: 'derek ancil design thumbnail',
		aria: 'derek-ancil-designs--tab',
		lang_lib: [
			'html',
			'css',
			'javascript',
			'php'
		]
	},
	{
		title: 'Game Pad',
		discription: 'A website for an app I designed in class.',
		date: 'Nov 2017',
		siteUrl: 'portfolio_sites/GamePad/index.html',
		imgUrl: 'images/gamepad.jpg',
		imgAlt: 'gamepad thumbnail',
		gitUrl: 'https://github.com/davidbdeath/GamePad',
		aria: 'game-pad--tab',
		lang_lib: [
			'html',
			'css'
		]
	}
]

const createProjectList = () => {
	for (let site in portfolioData) {

		const card = document.createElement('div');
		card.classList.add('card');

		const image = document.createElement('img');
		image.classList.add('card-img');
		image.src = portfolioData[site].imgUrl;

		const cardInfo = document.createElement('div')
		cardInfo.classList.add('card-info');

		const title = document.createElement('h3');
		title.classList.add('card-title');
		title.setAttribute('aria-controls', portfolioData[site].aria);
		title.setAttribute('role', 'tab');
		title.textContent = portfolioData[site].title;

		const btnGroup = document.createElement('div')
		btnGroup.classList.add('btn-group');

		const btnLink = document.createElement('button');

		const siteUrl = document.createElement('a');
		siteUrl.href = portfolioData[site].siteUrl;
		siteUrl.textContent = 'Link';
		siteUrl.target = '_blank';
		siteUrl.rel = 'noreferrer noopener';

		const btnGit = document.createElement('button');

		const gitLink = document.createElement('a');
		gitLink.href = portfolioData[site].gitUrl;
		gitLink.classList.add('btn-git');
		gitLink.innerHTML = `<svg class="github-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
			  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
			</svg>`
		gitLink.target = '_blank';
		gitLink.rel = 'noreferrer noopener';

		// const date = document.createElement('div');
		// date.classList.add('text-muted');
		// date.textContent = portfolioData[site].date;

		projectList.appendChild(card);
		card.appendChild(image);
		card.appendChild(cardInfo);
		cardInfo.appendChild(title);
		cardInfo.appendChild(btnGroup);
		btnGroup.appendChild(btnLink);
		btnLink.appendChild(siteUrl);
		if (portfolioData[site].gitUrl) {
			btnGroup.appendChild(btnGit);
			btnGit.appendChild(gitLink);
		}
	}
}

const createDetailList = () => {
	for (let site in portfolioData) {

		const projectDetail = document.createElement('article');
		projectDetail.classList.add('project-details');
		projectDetail.id = portfolioData[site].aria;
		projectDetail.setAttribute('role', 'tabpanel');
		projectDetail.setAttribute("hidden", true);

		const titleGrp = document.createElement('div');
		titleGrp.classList.add('title-group');

		const detailTitle = document.createElement('h2');
		detailTitle.textContent = portfolioData[site].title;

		const detailDate = document.createElement('date');
		detailDate.textContent = portfolioData[site].date;

		const detailBody = document.createElement('div');
		detailBody.classList.add('detail-body');

		const detailDiscription = document.createElement('p');
		detailDiscription.textContent = portfolioData[site].discription;

		const detailLangList = document.createElement('ul');

		detailList.appendChild(projectDetail);
		projectDetail.appendChild(titleGrp);
		titleGrp.appendChild(detailTitle);
		titleGrp.appendChild(detailDate);

		projectDetail.appendChild(detailBody);

		detailBody.appendChild(detailDiscription);
		detailBody.appendChild(detailLangList);

		for (let langLib in portfolioData[site].lang_lib) {
			const listItem = document.createElement('li');

			listItem.innerHTML = portfolioData[site].lang_lib[langLib]
			listItem.classList.add(portfolioData[site].lang_lib[langLib]);
			detailLangList.appendChild(listItem);
		}
	}
}

createProjectList();
createDetailList();