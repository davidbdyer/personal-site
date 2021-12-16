const main = document.querySelector('main');
const cardArray = main.querySelectorAll('.card');
let currentTab = '';


// utility functions
const hideContent = (parent, query) => {
	parent
		.querySelectorAll(query)
		.forEach((item) => item.setAttribute("hidden", true));
}

const showContent = (parent, query) => {
	parent.querySelector(query).removeAttribute('hidden');
}


// selects tab and changes visibility
const changeTabPane = (e) => {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute('aria-controls')

	if (currentTab === `#${targetPanel}`) {
		main.querySelector('#container--project-details').setAttribute('hidden', true);
		currentTab = ''
	} else {
		hideContent(main, '.project-details');
		showContent(main, `#${targetPanel}`);
		currentTab = `#${targetPanel}`;
		showContent(main, '#container--project-details');
	}
}


// event listeners
const cardTitle = main.querySelectorAll('.card-title');


cardTitle.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);
});

// cardTitle.forEach((elm) => {
// 	elm.addEventListener('blur', changeTabPane);
// });