import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Tickets', ...LINKS.tickets },
    { text: 'Venue & Accommodation', ...LINKS.venue },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Impressum & Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Speakers', ...LINKS.speakers },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Tickets', ...LINKS.tickets },
    { text: 'Venue & Accommodation', ...LINKS.venue },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
};

export default MENUS;
