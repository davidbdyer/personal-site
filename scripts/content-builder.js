// dynamically generate project grid
const projectList = document.getElementById('project-list--container');
const detailList = document.getElementById('project-details--container');

const createProjectList = () => {
	for (const project in portfolioData) {
		// Create Card
		const card = document.createElement('div');
		card.classList.add('card');
		card.classList.add('card-grow');
		// test relocation of aria
		card.setAttribute('aria-controls', portfolioData[project].aria);
		card.setAttribute('role', 'tab');
		card.setAttribute('tabindex', '0');

		// Create Card Image
		const image = document.createElement('img');
		image.classList.add('card-img');
		image.src = portfolioData[project].imgUrl;
		image.alt = portfolioData[project].title;
		image.loading = 'lazy';
		image.setAttribute('aria-controls', portfolioData[project].aria);

		// Add Items to DOM
		projectList.appendChild(card);
		card.appendChild(image);
	}
};

// dynamically generate details section
const createDetailList = () => {
	for (const project in portfolioData) {
		// Create Project Details
		const projectDetail = document.createElement('article');
		projectDetail.classList.add('project-details');
		projectDetail.id = portfolioData[project].aria;
		projectDetail.setAttribute('role', 'tabpanel');
		projectDetail.setAttribute('hidden', true);
		projectDetail.innerHTML = `<svg class="close-ctrl" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path d="m2.575.454 16.97 16.97-2.12 2.122-16.97-16.97 2.12-2.122z" />
				<path d="m.454 17.425 16.97-16.97 2.122 2.12-16.97 16.97-2.122-2.12z" />
			</g>
		</svg>`;

		// Create Title Container
		const titleGrp = document.createElement('div');
		titleGrp.classList.add('title-group');

		// Create Title
		const detailTitle = document.createElement('h2');
		detailTitle.textContent = portfolioData[project].title;

		// Create Project Date
		const detailDate = document.createElement('date');
		detailDate.textContent = portfolioData[project].date;

		// Create Project Body Container
		const detailBody = document.createElement('div');
		detailBody.classList.add('detail-body');

		// Create Project Description Paragraph
		const detailDescription = document.createElement('p');
		detailDescription.innerHTML = portfolioData[project].description;

		// Create Card Info Button Group
		const btnGroup = document.createElement('div');
		btnGroup.classList.add('btn-group');

		// Create site button
		const siteUrl = document.createElement('a');
		siteUrl.href = portfolioData[project].siteUrl;
		siteUrl.target = '_blank';
		siteUrl.rel = 'noreferrer noopener';
		siteUrl.textContent = 'Site';

		// Create Git button
		const gitLink = document.createElement('a');
		gitLink.href = portfolioData[project].gitUrl;
		gitLink.innerHTML = `<svg class="github-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
				<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
			</svg>`;
		gitLink.target = '_blank';
		gitLink.rel = 'noreferrer noopener';

		// Create Language List
		const detailLangList = document.createElement('ul');
		detailLangList.classList.add('lang-list');
		detailLangList.setAttribute('role', 'list');

		// ---------------------------
		// ADD SECTION
		// ---------------------------

		// Add Elements to Project Details
		detailList.appendChild(projectDetail);
		projectDetail.appendChild(titleGrp);

		// Add Title Group
		titleGrp.appendChild(detailTitle);
		titleGrp.appendChild(detailDate);

		// Add Project detail Section
		projectDetail.appendChild(detailBody);
		detailBody.appendChild(detailDescription);

		// Add Links
		detailBody.appendChild(btnGroup);
		if (portfolioData[project].gitUrl) {
			btnGroup.appendChild(gitLink);
		}
		if (portfolioData[project].siteUrl) {
			btnGroup.appendChild(siteUrl);
		}

		// Add Lang List
		detailBody.appendChild(detailLangList);

		for (const langLib in portfolioData[project].lang_lib) {
			const listItem = document.createElement('li');

			listItem.textContent = portfolioData[project].lang_lib[langLib];
			listItem.classList.add(portfolioData[project].lang_lib[langLib]);
			detailLangList.appendChild(listItem);
		}
	}
};

createProjectList();
createDetailList();