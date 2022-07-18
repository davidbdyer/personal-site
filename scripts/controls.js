const body = document.body;
const main = document.querySelector('main');
// project grid
const cardArray = main.querySelectorAll('.card');
const projectGrid = main.querySelector('.project-grid');

// project details
const detailsSection = main.querySelector('#project-details--container');
const detailsArray = detailsSection.querySelectorAll('.project-details');

// controls
const detailsCloseCtrl = detailsSection.querySelectorAll('.close-ctrl');

// position variable, part of preventing background scrolling
let scrollPosition;

// Detail Panel Controls
const hideContent = (parent, query) => {
	parent.querySelectorAll(query).forEach((item) => item.setAttribute('hidden', true));
};

const showContent = (parent, query) => {
	parent.querySelector(query).removeAttribute('hidden');
	parent.querySelector(query).style.animation = 'fade-in 500ms';
};

const closeCtrl = () => {
	//removes animation end event listener and hides detail section by setting hidden attribute.
	const hide = () => {
		detailsSection.setAttribute('hidden', true);
		detailsSection.removeEventListener('animationend', hide);
	};
	//adds animation and event listner for animation end.
	detailsSection.style.animation = 'fade-out 500ms';
	detailsSection.addEventListener('animationend', hide);

	// removes position fixed and top, sets scroll to position variable, part of preventing background scrolling
	body.style.position = '';
	body.style.top = '';
	window.scrollTo(0, scrollPosition);
};

const changeTabPane = (e) => {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute('aria-controls');

	// sets position fixed and top, sets position variable, part of preventing background scrolling
	scrollPosition = window.scrollY
	body.style.top = `-${scrollPosition}px`;
	body.style.position = 'fixed';

	hideContent(main, '.project-details');
	showContent(main, `#${targetPanel}`);
	showContent(main, '#project-details--container');
};

// Event Listeners
cardArray.forEach((elm) => {
	elm.addEventListener('focus', (e) => {
		changeTabPane(e);
	});
});

detailsCloseCtrl.forEach((elm) => {
	elm.addEventListener('click', closeCtrl);
});
