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

const changeOpacity = (elm, amount) => {
	elm.style.opacity = amount;
};

const selectedElm = (elm, amount) => {
	const selected = document.activeElement;
	changeOpacity(elm, amount);
};

// Interactive Hover Effects

const reducedOpacAmt = 0.8;

cardArray.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);

	elm.addEventListener('keypress', (e) => {
		changeTabPane(e);
	});

	elm.addEventListener('mouseenter', () => {
		changeOpacity(elm, 1);
	});

	elm.addEventListener('mouseleave', () => {
		changeOpacity(elm, reducedOpacAmt);
	});
});

detailsCloseCtrl.forEach((elm) => {
	elm.addEventListener('click', closeCtrl);
});

projectGrid.addEventListener('mouseenter', () => {
	cardArray.forEach((elm) => {
		changeOpacity(elm, reducedOpacAmt);
	});

	cardArray.forEach((elm) => {
		changeOpacity(elm, 1);
	});
});

projectGrid.addEventListener('mouseenter', () => {
	cardArray.forEach((elm) => {
		changeOpacity(elm, reducedOpacAmt);
	});
});

projectGrid.addEventListener('mouseleave', () => {
	cardArray.forEach((elm) => {
		changeOpacity(elm, 1);
	});
});
