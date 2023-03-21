const portfolioData=[{title:"Yelp Camp",description:'Web App for finding, rating, and reviewing campgrounds. The site is dynamically generated using EJS, EJS Mate, and MongoDB. Flash is used for error and success messages. User input is validated using Joi, sanitize-html, and express-mongo-sanitize. Helmet is used for added security. User logins are implemented using passport and express-session for session data. Cloudinary is used for image storage and manipulations. Mapbox is used for custom interactive maps. Based on a project from <a href="https://www.udemy.com/share/101W923@0AHFLcM1tVaGQceAH4TxemyQ-r5T4YPxJg1AW3GjmKdmgXhCa0JxOIeAvNWLXTZ6/">Colt Steele Web Developer Bootcamp</a>.',date:"September 2021",siteUrl:"https://yelpcamp.daviddyer.me",gitUrl:"https://github.com/davidbdyer/YelpCamp",imgUrl:"images/site-thumbs/yelpcamp.jpg",imgAlt:"Yelp Camp",aria:"yelp-camp--tab",lang_lib:["html","css","bootstrap","javascript","node","express","ejs","ejs-mate","mongodb","flash","joi","sanitize-html","express-mongo-sanitize","passport","express-sessions","mapbox","cloudinary"]},{title:"Pray Up",description:"A website I designed and implemented for Pray Up ministries. The site is fully responsive and includes Facebook metadata.",date:"January 2021",siteUrl:"https://prayuplife.com",figmaUrl:"https://www.figma.com/file/hcTLtoG9YgN2dYTZcZ3gIh/PrayUp-Revision-2?node-id=0%3A1",gitUrl:"https://github.com/davidbdyer/prayup_website",imgUrl:"images/site-thumbs/prayup.jpg",imgAlt:"pray up site",aria:"pray-up--tab",lang_lib:["php","css","javascript"]},{title:"Space Tourism",description:"I approached implementing this site using Javascript to toggle content visibility instead of creating a new HTML document for sub-page content. The content change controls for each page are done using an ARIA tablist. As a result, the page is screen reader-friendly. Based on a design by Frontend Mentor.",date:"December 2021",siteUrl:"https://www.daviddyer.me/portfolio-sites/space-tourism/",gitUrl:"https://github.com/davidbdyer/space-tourism-website",imgUrl:"images/site-thumbs/space-tourism.jpg",imgAlt:"space tourism",aria:"space-tourism--tab",lang_lib:["php","css","javascript"]},{title:"Results Summary Component",description:"Web Component that displays results from a test. For this example the data is fetched from a JSON file using Fetch API.",date:"March 2023",siteUrl:"https://www.daviddyer.me/portfolio-sites/results-summary/",imgUrl:"images/site-thumbs/results-summary.png",imgAlt:"result summary",aria:"results-summary--tab",lang_lib:["html","css","javascript","fetch"]},{title:"Creative Section Shapes",description:"Creative section shapes using CSS. The Spike section is done using a mask-image and svg file. The wavy section uses a radial gradient as the mask.",date:"March 2023",siteUrl:"https://www.daviddyer.me/portfolio-sites/creative-section-shapes/",imgUrl:"images/site-thumbs/creative-section-shapes.png",imgAlt:"creative section shapes",aria:"creative-section-shapes--tab",lang_lib:["html","css"]},{title:"Testimonial Switcher",description:'Testimonial Switcher Widget. Based on a project from the "50 Projects In 50 Days" Udemy course.',date:"March 2023",siteUrl:"https://www.daviddyer.me/portfolio-sites/testimonial-box-switcher/",imgUrl:"images/site-thumbs/testimonial-box-switcher.png",imgAlt:"testimonial switcher",aria:"testimonial-switcher--tab",lang_lib:["html","css","javascript"]},{title:"Testing Framework",description:"A custom testing framework for Javascript and HTML.",date:"December 2022",gitUrl:"https://github.com/davidbdyer/testing-framework",imgUrl:"images/site-thumbs/testing-framework.png",imgAlt:"testing framework",aria:"testing-framework--tab",lang_lib:["javascript","node","chalk","jsdom"]},{title:"Simple Quiz",description:"A simple quiz",date:"September 2022",siteUrl:"https://www.daviddyer.me/portfolio-sites/simple-quiz/",imgUrl:"images/site-thumbs/simple-quiz.png",imgAlt:"simple quiz",aria:"simple-quiz--tab",lang_lib:["html","css","javascript"]},{title:"Netflix Mobile Navigation",description:'This is an example of mobile navigation. I didn\'t create a desktop version. This is based on a project from the "50 Projects In 50 Days" Udemy course. I fixed some accessibility issues, the original had.',date:"September 2022",siteUrl:"https://www.daviddyer.me/portfolio-sites/netflix-mobile-navigation/",imgUrl:"images/site-thumbs/netflix-mobile-navigation.png",imgAlt:"netflix mobile navigation",aria:"netflix-mobile-navigation--tab",lang_lib:["html","css","javascript"]},{title:"David's Little Drawing App",description:"Drawing Web App using canvas",date:"Aug 2022",siteUrl:"https://davidbdyer.github.io/drawing-app/",gitUrl:"https://github.com/davidbdyer/drawing-app",imgUrl:"images/site-thumbs/drawing-app.png",imgAlt:"drawing app",aria:"drawing-app--tab",lang_lib:["html","css","javascript"]},{title:"Pokedex",description:'Obligatory Pokedex using the pokeapi. The Pokedex is based on a project from the "50 Projects In 50 Days" Udemy course. I enhanced it by using container queries to make it responsive and replaced px units with sem and rem units.',date:"Aug 2022",siteUrl:"https://www.daviddyer.me/portfolio-sites/pokedex/",imgUrl:"images/site-thumbs/pokedex.png",imgAlt:"pokedex",aria:"pokedex--tab",lang_lib:["html","css","javascript"]},{title:"Pixel Fun!",description:"Web App for drawing pixlated images.",date:"Aug 2022",siteUrl:"https://davidbdyer.github.io/pixelfun/",gitUrl:"https://github.com/davidbdyer/pixelfun",imgUrl:"images/site-thumbs/pixelfun.png",imgAlt:"pixelfun",aria:"pixelfun--tab",lang_lib:["html","css","javascript"]},{title:"Notes",description:"Web App for taking notes. The note data is stored in your browser's local storage and will persist between refreshes if local storage is not cleared. Notes support Markdown for text formatting.",date:"Aug 2022",siteUrl:"https://davidbdyer.github.io/notes-app/",gitUrl:"https://github.com/davidbdyer/notes-app",imgUrl:"images/site-thumbs/notes.png",imgAlt:"notes",aria:"notes--tab",lang_lib:["html","css","javascript"]},{title:"The Checker",description:"Web App for checking for words in a body of text from a word bank.",date:"Aug 2022",siteUrl:"https://davidbdyer.github.io/does-it-contain/",gitUrl:"https://github.com/davidbdyer/does-it-contain",imgUrl:"images/site-thumbs/the-checker.png",imgAlt:"the checker",aria:"the-checker--tab",lang_lib:["html","css","javascript"]},{title:"Password Generator",description:"A web app to generate a complex password. Using HTML, SASS, and Javascript. The theme automatically changes based on the computer's dark or light mode. Settings are remembered between browser refreshes.",date:"July 2022",siteUrl:"https://davidbdyer.github.io/password-generator/",gitUrl:"https://github.com/davidbdyer/password-generator",imgUrl:"images/site-thumbs/password-generator.png",imgAlt:"Password Generator",aria:"password-generator--tab",lang_lib:["html","sass","javascript"]},{title:"Github Profile Search",description:'Search Github for a user and display their bio, stats, and 10 most recent repos. Based on a project from the "50 Projects In 50 Days" Udemy course.',date:"July 2022",siteUrl:"https://davidbdyer.github.io/github-profile-search/",gitUrl:"https://github.com/davidbdyer/github-profile-search",imgUrl:"images/site-thumbs/github-profile-search.png",imgAlt:"github profile search",aria:"github-profile-search--tab",lang_lib:["html","css","javascript","Axios"]},{title:"Double Verticle Slider",description:"Fully responsive dual verticle slider, slide show.",date:"July 2022",siteUrl:"https://davidbdyer.github.io/double-vertical-slider/",gitUrl:"https://github.com/davidbdyer/double-vertical-slider",imgUrl:"images/site-thumbs/double-verticle-slider.jpg",imgAlt:"double verticle slider",aria:"double-verticle-slider--tab",lang_lib:["html","css","javascript"]},{title:"Movie App",description:"A simple movie lookup web app. I'm using the Javascript fetch API to get popular movies from themoviedb and display them. Search is also implemented. The web app is fully responsive and has Facebook metadata, an iOS theme, and an iOS icon. Based on a project from the \"50 Projects In 50 Days\" Udemy course. Instead of using display flex, I'm using display grid. I prefer grid to flex because the last row stays consistent with the rest of the rows.",date:"March 2022",siteUrl:"https://www.daviddyer.me/portfolio-sites/movie-app/",imgUrl:"images/site-thumbs/movie-app.jpg",imgAlt:"Movie App",aria:"movie-app--tab",lang_lib:["html","sass","javascript"]},{title:"Drink Water",description:'A fun, web app for tracking daily water consumption goals. How many cups drank are stored in local storage, making it persistent between site reloads. The web app is fully responsive, has Facebook metadata, iOS theme, and iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course.',date:"March 2022",siteUrl:"https://www.daviddyer.me/portfolio-sites/drink-water/",imgUrl:"images/site-thumbs/drink-water.png",imgAlt:"drink water",aria:"drink-water--tab",lang_lib:["html","css","javascript"]},{title:"Random Choice",description:'Randomly picks a value from a comma-separated list entered into a textarea element. Based on a project from the "50 Projects In 50 Days" Udemy course.',date:"February 2022",siteUrl:"https://davidbdyer.github.io/random-choice/",gitUrl:"https://github.com/davidbdyer/random-choice",imgUrl:"images/site-thumbs/random-choice.png",imgAlt:"random choice",aria:"random-choice--tab",lang_lib:["html","css","javascript"]},{title:"Dad Jokes",description:'I\'m using the Javascript Fetch API to get dad jokes from icanhazdadjoke. The web app is fully responsive, has Facebook metadata, iOS theme, and iOS icon. If the returned text exceeds the available space, the text size automatically reduces. Based on a project from the "50 Projects In 50 Days" Udemy course.',date:"February 2022",siteUrl:"https://davidbdyer.github.io/dad-jokes/",gitUrl:"https://github.com/davidbdyer/dad-jokes",imgUrl:"images/site-thumbs/dad-jokes.png",imgAlt:"dad jokes",aria:"dad-jokes--tab",lang_lib:["html","css","javascript","fetch"]},{title:"KeyCode",description:'A simple web app for displaying useful data from a keypress event. The input field is necessary to bring up the keyboard on mobile devices. The web app is fully responsive, has Facebook metadata, iOS theme, and iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course.',date:"February 2022",siteUrl:"https://davidbdyer.github.io/event-keycode/",gitUrl:"https://github.com/davidbdyer/event-keycode",imgUrl:"images/site-thumbs/keycode.png",imgAlt:"keycode",aria:"keycode--tab",lang_lib:["html","css","javascript"]},{title:"Animated Nav",description:'The animation is done with CSS, and Javascript is used to toggle an active class on the nav element. The site is fully responsive, including an iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course.',date:"January 2022",siteUrl:"https://www.daviddyer.me/portfolio-sites/animated-navigation/",imgUrl:"images/site-thumbs/animated-nav.png",imgAlt:"animated nav",aria:"animated-nav--tab",lang_lib:["html","css","javascript"]},{title:"Expanding Cards",description:'A simple expanding card-based menu. The site is fully responsive, has Facebook and Twitter metadata, iOS theme, and iOS icon. Based on a project from the "50 Projects In 50 Days" Udemy course.',date:"January 2022",siteUrl:"https://www.daviddyer.me/portfolio-sites/expanding-cards/",imgUrl:"https://www.daviddyer.me/portfolio-sites/expanding-cards/assets/icon.jpg",imgAlt:"expanding cards",aria:"expanding-cards--tab",lang_lib:["html","sass","javascript"]},{title:"Form Wave Input",description:"Responsive animated login screen.",date:"January 2022",siteUrl:"https://davidbdyer.github.io/form-wave-input/",gitUrl:"https://github.com/davidbdyer/form-wave-input/settings/pages",imgUrl:"images/site-thumbs/form-wave-input.png",imgAlt:"form wave input",aria:"form-wave-input--tab",lang_lib:["html","css","javascript"]},{title:"Score Keeper",description:"Web App for keeping score of a ping pong game. The goal was to keep track of the score for the current game and a set of games. I also wanted the winner list to persist between site loads. The winner list is stored as a JSON array in the browser's local storage.",date:"December 2021",siteUrl:"https://davidbdyer.github.io/ping-pong-score-keeper/",gitUrl:"https://github.com/davidbdyer/ping-pong-score-keeper",imgUrl:"images/site-thumbs/ping-pong-score-keeper.jpg",imgAlt:"ping pong score keeper",aria:"score-keeper--tab",lang_lib:["html","sass","javascript"]},{title:"Museum of Candy",description:'A simple responsive single-page website I implemented. Design based on a project from <a href="https://www.udemy.com/share/101W923@0AHFLcM1tVaGQceAH4TxemyQ-r5T4YPxJg1AW3GjmKdmgXhCa0JxOIeAvNWLXTZ6/">Colt Steele Web Developer Bootcamp</a> project.',date:"May 2021",siteUrl:"portfolio-sites/museum-of-candy/index.html",imgUrl:"images/site-thumbs/museum-of-candy.jpg",imgAlt:"museum of candy",aria:"museum-of-candy--tab",lang_lib:["html","css"]},{title:"Calculator",description:"A Calculator web app. The site is fully responsive and includes an iOS icon. Based on a design by Frontend Mentor.",date:"May 2021",siteUrl:"https://davidbdyer.github.io/calculator-app-main/",gitUrl:"https://github.com/davidbdyer/calculator-app-main",imgUrl:"images/site-thumbs/calculator.jpg",imgAlt:"Calculator App",aria:"calculator--tab",lang_lib:["html","css","javascript"]},{title:"Tip Calculator",description:"Web app for calculating the tip and splitting the bill with your group. Tip Amount and Total never output NaN, null, or Infinity. The inputs only accept numbers. The tip selected is highlighted, including the custom tip. Based on a design by Frontend Mentor.",date:"October 2021",siteUrl:"https://davidbdyer.github.io/tip-calculator-app/",gitUrl:"https://github.com/davidbdyer/tip-calculator-app",imgUrl:"images/site-thumbs/tip-calculator.jpg",imgAlt:"Tip Calculator App",aria:"tip-calculator--tab",lang_lib:["html","css","javascript"]},{title:"Game Pad",description:"A website I implemented and designed to showcase an app I designed for a UX class.",date:"November 2017",siteUrl:"https://davidbdyer.github.io/GamePad/",gitUrl:"https://github.com/davidbdyer/GamePad",imgUrl:"images/site-thumbs/gamepad.jpg",imgAlt:"gamepad",aria:"game-pad--tab",lang_lib:["html","css"]}],projectList=document.getElementById("project-list--container"),detailList=document.getElementById("project-details--container"),createProjectList=()=>{for(const e in portfolioData){const t=document.createElement("div");t.classList.add("card"),t.classList.add("card-grow"),t.setAttribute("aria-controls",portfolioData[e].aria),t.setAttribute("role","tab"),t.setAttribute("tabindex","0");const i=document.createElement("img");i.classList.add("card-img"),i.src=portfolioData[e].imgUrl,i.alt=portfolioData[e].title,i.loading="lazy",i.setAttribute("aria-controls",portfolioData[e].aria),projectList.appendChild(t),t.appendChild(i)}},createDetailList=()=>{for(const e in portfolioData){const t=document.createElement("div");t.classList.add("project-details"),t.id=portfolioData[e].aria,t.setAttribute("hidden",!0),t.innerHTML='<svg class="close-ctrl" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<g>\n\t\t\t\t<path d="m2.575.454 16.97 16.97-2.12 2.122-16.97-16.97 2.12-2.122z" />\n\t\t\t\t<path d="m.454 17.425 16.97-16.97 2.122 2.12-16.97 16.97-2.122-2.12z" />\n\t\t\t</g>\n\t\t</svg>';const i=document.createElement("div");i.classList.add("title-group");const a=document.createElement("h2");a.textContent=portfolioData[e].title;const s=document.createElement("time");s.textContent=portfolioData[e].date;const r=document.createElement("div");r.classList.add("detail-body");const o=document.createElement("p");o.innerHTML=portfolioData[e].description;const n=document.createElement("div");n.classList.add("btn-group");const l=document.createElement("a");l.href=portfolioData[e].siteUrl,l.target="_blank",l.rel="noreferrer noopener",l.textContent="Site";const d=document.createElement("a");d.href=portfolioData[e].gitUrl,d.innerHTML='<svg class="github-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">\n\t\t\t\t<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>\n\t\t\t</svg>',d.target="_blank",d.rel="noreferrer noopener";const p=document.createElement("ul");p.classList.add("lang-list"),detailList.appendChild(t),t.appendChild(i),i.appendChild(a),i.appendChild(s),t.appendChild(r),r.appendChild(o),r.appendChild(n),portfolioData[e].gitUrl&&n.appendChild(d),portfolioData[e].siteUrl&&n.appendChild(l),r.appendChild(p);for(const t in portfolioData[e].lang_lib){const i=document.createElement("li");i.textContent=portfolioData[e].lang_lib[t],i.classList.add(portfolioData[e].lang_lib[t]),p.appendChild(i)}}};createProjectList(),createDetailList();const body=document.body,main=body.querySelector("main"),cardArray=main.querySelectorAll(".card"),projectGrid=main.querySelector(".project-grid"),detailsSection=main.querySelector("#project-details--container"),detailsArray=detailsSection.querySelectorAll(".project-details"),detailsCloseCtrl=detailsSection.querySelectorAll(".close-ctrl");let scrollPosition,detailsOpen=!1;const transitionTime="250ms",hideContent=(e,t)=>{e.querySelectorAll(t).forEach((e=>e.setAttribute("hidden",!0)))},showContent=(e,t)=>{e.querySelector(t).removeAttribute("hidden"),e.querySelector(t).style.animation="fade-in 250ms"},closeCtrl=()=>{const e=()=>{detailsSection.setAttribute("hidden",!0),detailsSection.style.animation="",detailsSection.removeEventListener("animationend",e)};detailsSection.style.animation="fade-out 250ms",detailsSection.addEventListener("animationend",e),body.style.position="",body.style.top="",window.scrollTo(0,scrollPosition),toggleClassInArrayItems(cardArray,"card-grow"),detailsOpen=!1},toggleClassInArrayItems=(e,t)=>{e.forEach((e=>{e.classList.toggle(t)}))},changeTabPane=e=>{const t=e.target.getAttribute("aria-controls");var i;scrollPosition=window.scrollY,body.style.top=`-${scrollPosition}px`,body.style.position="fixed",i=".project-details",main.querySelectorAll(i).forEach((e=>e.setAttribute("hidden",!0))),showContent(main,`#${t}`),showContent(main,"#project-details--container")};cardArray.forEach((e=>{e.addEventListener("click",(e=>{0==detailsOpen&&(changeTabPane(e),toggleClassInArrayItems(cardArray,"card-grow"),detailsOpen=!0)}))})),cardArray.forEach((e=>{e.addEventListener("keydown",(e=>{"Space"===e.code&&0==detailsOpen&&(changeTabPane(e),toggleClassInArrayItems(cardArray,"card-grow"),detailsOpen=!0)}))})),detailsCloseCtrl.forEach((e=>{e.addEventListener("click",closeCtrl)}));