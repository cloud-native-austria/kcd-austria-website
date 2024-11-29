import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.keynoteSpeakers },
    { text: 'Venue', ...LINKS.venue },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Impressum & Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.keynoteSpeakers },
    { text: 'Venue', ...LINKS.venue },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
};

export default MENUS;
