// mobile menu
/* eslint-disable linebreak-style */
const menu = document.querySelector('.mobile-menu-container');
const menuOpenButton = document.querySelector('.burger-icon');
const menuCloseButton = document.querySelector('.menu-close-button')

menuOpenButton.addEventListener('click', () => {
menu.style.display = 'flex';
menuCloseButton.style.display = 'flex';
});

menuCloseButton.addEventListener('click', () => {
menu.style.display = 'none';
menuCloseButton.style.display = 'flex';
})

//document.querySelector('.mobile-menu-close').addEventListener('click', (e) => {
//document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility: hidden');
//e.preventDefault();
//});

//document.querySelector('.burger-icon-single').addEventListener('click', () => {
//document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
//});

//document.querySelector('.burger-icon-single').addEventListener('click', () => {
//document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
//});

//document.querySelector('.burger-icon-single').addEventListener('click', () => {
//document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
//});

// Feautre Speaker
const data = [
{
title: 'Yochai Benkler',
description: 'Berkman Professor of Entrepreneural Legal Studies at Harvard Law School',
linkImg: './img/speaker_01.png',
more: 'Benkler Studies commoms-based peer production, and puublished his seminar book The Wealth of Networks in 2006.',
},
{
title: 'Kilnam Chon',
description: 'Director of Art Center Nabi and a board member Webtekhy',
linkImg: 'img/speaker_02.png',
more: `As the main venue for new media art production in Nigeria. Webtekhy promotes 
cross-disciplinary collaboration and understanding among science technologies, humanities, and arts.`,
},
{
title: 'SohYeong Noh',
description: 'Director of Art Center Nabi and a board member Webtekhy',
linkImg: './img/speaker_03.png',
more: `As the main venue for new media art production in Nigeria. Webtekhy promotes cross-disciplinary
collaboration and understanding among science technologies, humanities, and arts.`,
},
{
title: 'Julia Leda',
description: 'Berkman Professor of Entrepreneural Legal Studies at Harvard Law School',
linkImg: './img/speaker_04.png',
more: 'Benkler Studies commoms-based peer production, and published his seminar book The Wealth of Networks in 2006.',
},
{
title: 'Lilia Tretikov',
description: 'Lilia Tretikov Professor of Entrepreneural Legal Studies at Harvard Law School',
linkImg: './img/speaker_05.png',
more: `As the main venue for new media art production in Nigeria. Webtekhy promotes cross-disciplinary
collaboration and understanding among science technologies, humanities, and arts.`,
},
{
title: 'Ryan Merkley',
description: 'Ryan Merkley Professor of Entrepreneural Legal Studies at Harvard Law School',
linkImg: './img/speaker_06.png',
more: 'Benkler Studies commoms-based peer production, and puublished his seminar book The Wealth of Networks in 2006.',
},
];

// Creating the feature speaker section dynamically
const featureSpeakerSection = document.querySelector('.speakers-details');
let counter = 0;

data.forEach((featureSpeakers) => {
const {
title, description, linkImg, more,
} = featureSpeakers;

const speakersHTML = `
<div class="speaker speaker-1">
<div class="img${counter + 1}"></div>
<div class="sp-${counter + 1}-details">
<h3 class="sp-name">${title}</h3>
<p class="sp-details">
${description}
</p>
<div class="divider"></div>
<p class="footnote">
${more}
</p>
</div>
</div>
`;

featureSpeakerSection.insertAdjacentHTML('beforeend', speakersHTML);
document.querySelector(`.img${counter + 1}`).style.backgroundImage = `url("${linkImg}")`;
// Set background image dynamically
counter += 1;
});