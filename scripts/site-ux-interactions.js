const main = document.querySelector('main');
const detailsSection = main.querySelector('#container--project-details');
const cardArray = main.querySelectorAll('.card');
const detailsArray = detailsSection.querySelectorAll('.project-details');
const detailsCloseCtrl = detailsSection.querySelectorAll('.detail-close-ctrl');
const cardTitleArray = main.querySelectorAll('.card-title');
const mobileBodyMute = main.querySelector('#mobile-body-mute');
const projectGrid = main.querySelector('.project-grid');

// Detail Panel Controls
const hideContent = (parent, query) => {
	parent.querySelectorAll(query).forEach((item) => item.setAttribute('hidden', true));
};

const showContent = (parent, query) => {
	parent.querySelector(query).removeAttribute('hidden');
};

const enableBodyMute = () => {
	mobileBodyMute.style.display = 'unset';
};

const closeCtrl = () => {
	detailsSection.setAttribute('hidden', true);
	mobileBodyMute.style.display = 'none';
};

const changeTabPane = (e) => {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute('aria-controls');

	hideContent(main, '.project-details');
	enableBodyMute();
	showContent(main, `#${targetPanel}`);
	showContent(main, '#container--project-details');
};

// Interactive Hover Effects
const reducedOpacAmt = 0.5;

const arrayOpacity = (array, target, amount = 1) => {
	for (let item of array) {
		if (item !== target) {
			item.style.opacity = amount;
		}
	}
};

// Event Listeners
cardArray.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);

	elm.addEventListener('keypress', (e) => {
		changeTabPane(e);
	});

	elm.addEventListener('mouseenter', (e) => {
		arrayOpacity(cardArray, e.target, reducedOpacAmt);
		console.log(e.target);
	});

	elm.addEventListener('mouseleave', (e) => {
		arrayOpacity(cardArray, e.target, 1);
	});
});

detailsCloseCtrl.forEach((elm) => {
	elm.addEventListener('click', closeCtrl);
});
