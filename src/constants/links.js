import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  home: {
    to: '/',
  },
  tickets: {
    to: `/#${getAnchor('Tickets')}`,
    id: `/#${getAnchor('Tickets')}`,
    homeTo: '/',
  },
  schedule: {
    to: `/#${getAnchor('schedule')}`,
    id: `/#${getAnchor('schedule')}`,
    homeTo: '/',
  },
  venue: {
    to: `/#${getAnchor('Venue & Accommodation')}`,
    id: `/#${getAnchor('Venue & Accommodation')}`,
    homeTo: '/',
  },
  sponsors: {
    to: `/#${getAnchor('Sponsors')}`,
    id: `/#${getAnchor('Sponsors')}`,
    homeTo: '/',
  },
  
  keynoteSpeakers: {
    to: `/#${getAnchor('speakers')}`,
    id: `/#${getAnchor('speakers')}`, 
  },

  speakers: {
    to: '/speakers',
  },

  // Footer
  team: {
    to: '/team',
  },
  privacy: {
    to: '/imprint-and-data-privacy',
    target: '_blank',
  },
  conduct: {
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
  },

  // Social-links
  linkedin: {
    to: 'https://www.linkedin.com/company/kcdaustria/',
    target: '_blank',
  },
  googlemaps: {
    to: 'https://maps.app.goo.gl/ow5DQBEXz6MJCyB97',
    target: '_blank',
  },
  youtube: {
    to: 'https://www.youtube.com/channel/UCs8vJuX9OkkXObKb5VCkYfA',
    target: '_blank',
  },
};
