const main = document.querySelector('main');
const cardArray = main.querySelectorAll('.card');
const detailsArray = main.querySelectorAll('.project-details');
const detailsCloseCtrl = main.querySelector('#detail-close-ctrl');


// utility functions
const hideContent = (parent, query) => {
	parent
		.querySelectorAll(query)
		.forEach((item) => item.setAttribute("hidden", true));
}

const showContent = (parent, query) => {
	parent.querySelector(query).removeAttribute('hidden');
}


const changeTabPane = (e) => {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute('aria-controls')

	main.querySelector('#container--project-details').setAttribute('hidden', true);

	hideContent(main, '.project-details');
	showContent(main, `#${targetPanel}`);
	currentTab = `#${targetPanel}`;
	showContent(main, '#container--project-details');
}


// event listeners
const cardTitle = main.querySelectorAll('.card-title');


cardTitle.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);
});

cardTitle.forEach((elm) => {
	elm.addEventListener('blur', (e) => {
		if (currentTab.slice(1) === e.target.getAttribute('aria-controls')) {
			main.querySelector('#container--project-details').setAttribute('hidden', true);
		}
	});
});