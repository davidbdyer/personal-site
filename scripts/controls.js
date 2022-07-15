const body = document.body;
const main = document.querySelector('main');
// project grid
const cardArray = main.querySelectorAll('.card');
const projectGrid = main.querySelector('.project-grid');

// project details
const detailsSection = main.querySelector('#container--project-details');
const detailsArray = detailsSection.querySelectorAll('.project-details');

// controls
const detailsCloseCtrl = detailsSection.querySelectorAll('.close-ctrl');
const mobileBodyMute = main.querySelector('#mobile-body-mute');



// Detail Panel Controls
const hideContent = (parent, query) => {
	parent.querySelectorAll(query).forEach((item) => item.setAttribute('hidden', true));
};

const showContent = (parent, query) => {
	parent.querySelector(query).removeAttribute('hidden');
};

const enableBodyMute = () => {
	mobileBodyMute.style.display = 'unset';
	body.classList.add('scroll-fixed')
};

const closeCtrl = () => {
	detailsSection.setAttribute('hidden', true);
	mobileBodyMute.style.display = 'none';
	body.classList.remove('scroll-fixed')
};

const changeTabPane = (e) => {
	const targetTab = e.target;
	targetTab.focus();
	const targetPanel = targetTab.getAttribute('aria-controls');

	hideContent(main, '.project-details');
	enableBodyMute();
	showContent(main, `#${targetPanel}`);
	showContent(main, '#container--project-details');
};

// Interactive Hover Effects
const arrayHoverEffect = (array, target) => {
	for (let item of array) {
		if (item !== target) {
			item.classList.toggle('card-dim');
		}
	}
};

// Event Listeners
cardArray.forEach((elm) => {
	elm.addEventListener('click', changeTabPane);

	elm.addEventListener('focus', (e) => {
		changeTabPane(e);
	});
});

detailsCloseCtrl.forEach((elm) => {
	elm.addEventListener('click', closeCtrl);
});
