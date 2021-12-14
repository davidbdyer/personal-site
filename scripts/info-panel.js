const main = document.querySelector('main');
const cardArray = main.querySelectorAll('.card');


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

	hideContent(main, '.project-details');
	showContent(main, `#${targetPanel}`);
	showContent(main, '#container--project-details');
}


// event listeners
const cardTitle = main.querySelectorAll('.card-title');

cardTitle.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);
});