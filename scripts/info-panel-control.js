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

// event listeners
// cardTitleArray.forEach((elm) => {
// 	elm.addEventListener('click', changeTabPane);
// });

// Select Project Details Content
cardArray.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);
});

cardArray.forEach((elm) => {
	elm.addEventListener('keypress', (e) => {
		changeTabPane(e)
	});
});

detailsCloseCtrl.forEach((elm) => {
	elm.addEventListener('click', closeCtrl);
});

//hover opacity animation
const changeOpacity = (elm, amount) => {
	elm.style.opacity = amount;
};

projectGrid.addEventListener('mouseenter', () => {
	cardArray.forEach((elm) => {
		changeOpacity(elm, 0.6);
	});
});
projectGrid.addEventListener('mouseleave', () => {
	cardArray.forEach((elm) => {
		changeOpacity(elm, 1);
	});
});

cardArray.forEach((elm) => {
	elm.addEventListener('mouseenter', () => {
		changeOpacity(elm, 1);
	});
});

cardArray.forEach((elm) => {
	elm.addEventListener('mouseleave', () => {
		changeOpacity(elm, 0.4);
	});
});
