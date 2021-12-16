const main = document.querySelector('main');
const detailsSection = main.querySelector('#container--project-details');
const cardArray = main.querySelectorAll('.card');
const detailsArray = detailsSection.querySelectorAll('.project-details');
const detailsCloseCtrl = detailsSection.querySelectorAll('.detail-close-ctrl');
const cardTitle = main.querySelectorAll('.card-title');
const mobileBodyMute = main.querySelector('#mobile-body-mute');


// utility functions
const hideContent = (parent, query) => {
	parent
		.querySelectorAll(query)
		.forEach((item) => item.setAttribute("hidden", true));
}

const showContent = (parent, query) => {
	parent.querySelector(query).removeAttribute('hidden');
}

const enableBodyMute = () => {
	mobileBodyMute.style.display = "unset";
}

const closeCtrl = (e) => {
	const nodeToClose = e.target.parentNode.parentNode;
	nodeToClose.setAttribute('hidden', true);
	mobileBodyMute.style.display = "none";
}

const changeTabPane = (e) => {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute('aria-controls')

	hideContent(main, '.project-details');
	enableBodyMute();
	showContent(main, `#${targetPanel}`);
	showContent(main, '#container--project-details');
}

// event listeners
cardTitle.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);
});

detailsCloseCtrl.forEach((elm) => {
	elm.addEventListener('click', closeCtrl);
});






// notes

// main.querySelector('#container--project-details').setAttribute('hidden', true);