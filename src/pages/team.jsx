/* eslint-disable react/prop-types */
import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

import Team from '../components/pages/team/team';

const TeamPage = () => (
  <Layout>
    <Team />
  </Layout>
);

export default TeamPage;

export const Head = ({ location: { pathname } }) => <SEO {...SEO_DATA.team} pathname={pathname} />;
