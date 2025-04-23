import React from 'react';

import Hero from 'components/pages/home/hero';
import Info from 'components/pages/home/info';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Cfp from '../components/pages/home/cfp';
import Sponsors from '../components/pages/home/sponsors';
import SponsorsList from '../components/pages/home/sponsors-list';
import Tickets from '../components/pages/home/tickets';
import Venue from '../components/pages/home/venue';
import WrapUp from '../components/pages/home/wrap-up';
import Speakers from '../components/pages/speakers/speakers';

const HomePage = () => (
  <Layout homepage>
    <Hero />
    <Tickets />
    <Cfp />
    <Sponsors />
    <WrapUp />
    {/* <Info /> */}
    {/* <Speakers keynote /> */}
    <Venue />
    <SponsorsList />
  </Layout>
);

export default HomePage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
