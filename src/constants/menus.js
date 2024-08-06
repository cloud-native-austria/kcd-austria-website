import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    { text: 'Tickets', ...LINKS.tickets },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Venue & Accommodation', ...LINKS.venue },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Impressum & Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    { text: 'Tickets', ...LINKS.tickets },
    { text: 'Schedule', ...LINKS.schedule },
    { text: 'Venue & Accommodation', ...LINKS.venue },
    { text: 'Sponsors', ...LINKS.sponsors },
  ],
};

export default MENUS;
