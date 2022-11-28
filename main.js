// mobile menu
/* eslint-disable linebreak-style */
document.querySelector('.navbars').addEventListener('click', (e) => {
  // alert('Click on hamburger')
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:visible');
  e.preventDefault();
});

document.querySelector('.mobile-menu-close').addEventListener('click', (e) => {
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility: hidden');
  e.preventDefault();
});

document.querySelector('.burger-icon-single').addEventListener('click', () => {
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
});

document.querySelector('.burger-icon-single').addEventListener('click', () => {
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
});

document.querySelector('.burger-icon-single').addEventListener('click', () => {
  document.querySelector('.mobile-menu-container').setAttribute('style', 'visibility:hidden');
});

// Feautre Speaker
const data = [
  {
    title: 'Yochai Benkler',
    description: 'Berkman Professor of Entrepreneural Legal Studies at Harvard Law School',
    linkImg: 'images/speaker_01.png',
    more: 'Benkler Studies commoms-based peer production, and puublished his seminar book The Wealth of Networks in 2006.',
  },
  {
    title: 'Kilnam Chon',
    description: 'Director of Art Center Nabi and a board member Webtekhy',
    linkImg: 'images/speaker_02.png',
    more: `As the main venue for new media art production in Nigeria. Webtekhy promotes 
      cross-disciplinary collaboration and understanding among science technologies, humanities, and arts.`,
  },
  {
    title: 'SohYeong Noh',
    description: 'Director of Art Center Nabi and a board member Webtekhy',
    linkImg: 'images/speaker_03.png',
    more: `As the main venue for new media art production in Nigeria. Webtekhy promotes cross-disciplinary
       collaboration and understanding among science technologies, humanities, and arts.`,
  },
  {
    title: 'Julia Leda',
    description: 'Berkman Professor of Entrepreneural Legal Studies at Harvard Law School',
    linkImg: 'images/speaker_04.png',
    more: 'Benkler Studies commoms-based peer production, and published his seminar book The Wealth of Networks in 2006.',
  },
  {
    title: 'Lilia Tretikov',
    description: 'Lilia Tretikov Professor of Entrepreneural Legal Studies at Harvard Law School',
    linkImg: 'images/speaker_05.png',
    more: `As the main venue for new media art production in Nigeria. Webtekhy promotes cross-disciplinary
         collaboration and understanding among science technologies, humanities, and arts.`,
  },
  {
    title: 'Ryan Merkley',
    description: 'Ryan Merkley Professor of Entrepreneural Legal Studies at Harvard Law School',
    linkImg: 'images/speaker_06.png',
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
      <div class="image${counter + 1}"></div>
        
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
  document.querySelector(`.image${counter + 1}`).style.backgroundImage = `url("${linkImg}")`;
  // Set background image dynamically
  counter += 1;
});