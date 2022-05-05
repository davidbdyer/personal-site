const main = document.querySelector('main');
const detailsSection = main.querySelector('#container--project-details');
const cardArray = main.querySelectorAll('.card');
const detailsArray = detailsSection.querySelectorAll('.project-details');
const detailsCloseCtrl = detailsSection.querySelectorAll('.detail-close-ctrl');
const cardTitleArray = main.querySelectorAll('.card-title');
const mobileBodyMute = main.querySelector('#mobile-body-mute');
const projectGrid = main.querySelector('.project-grid');

// utility functions
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

//Change Opacity of Elm
const changeOpacity = (elm, amount) => {
	elm.style.opacity = amount;
};


// Select Project Details Content

// Add Event Listners to Cards
cardArray.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);

	elm.addEventListener('keypress', (e) => {
		e.preventDefault;
		changeTabPane(e);
	});

	elm.addEventListener('mouseenter', () => {
		changeOpacity(elm, 1);
	});

	elm.addEventListener('mouseleave', () => {
		changeOpacity(elm, 0.4);
	});
});

detailsCloseCtrl.forEach((elm) => {
	elm.addEventListener('click', closeCtrl);
});

// Add Event Listener to Projects Grid
projectGrid.addEventListener('mouseenter', () => {
	cardArray.forEach((elm) => {
		changeOpacity(elm, 0.8);
	});

	cardArray.forEach((elm) => {
		changeOpacity(elm, 1);
	});
});
