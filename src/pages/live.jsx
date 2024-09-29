import Layout from '../components/shared/layout';
import SEO from '../components/shared/seo';

import React from 'react';
import SEO_DATA from '../constants/seo-data';
import Button from '../components/shared/button';
import { scheduleUrl } from '../constants/sessionize-app';

const LivePage = () => (
    <Layout>
      <header className="text-center safe-paddings pb-4">

        <h1>KCD 2024 - Live</h1>
        <p>Everything you need to know at the event.</p>
      </header>
      <section className="safe-paddings container-md text-center grid grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="col-span-2 sm:col-span-1 bg-gray-12 rounded-md p-2 flex-col inline-block justify-center">
          <h2>Schedule</h2>
          <p className="text-balance">
            See the full schedule and mark talks you're interested in so you won't miss a session.
          </p>
          <Button to={scheduleUrl} className="my-6 mt-2">Full schedule</Button>
        </div>

        <div className="bg-gray-12 rounded-md p-2 flex-col inline-block justify-center">
          <h2>Wi-Fi access</h2>
          <table className="mx-auto border-separate border-spacing-2">
            <tbody>
            <tr>
              <td className="text-right">SSID</td>
              <td>to be announced</td>
            </tr>
            <tr>
              <td className="text-right">Password</td>
              <td>to be announced</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-12 rounded-md p-2 flex-col inline-block justify-center">
          <h2>Emergency numbers</h2>
          <table className="mx-auto border-separate border-spacing-2">
            <tbody>
            <tr>
              <td className="text-right">Fire service</td>
              <td><a href="tel:122">122</a></td>
            </tr>
            <tr>
              <td className="text-right">Police</td>
              <td><a href="tel:133">133</a></td>
            </tr>
            <tr>
              <td className="text-right">Ambulance</td>
              <td><a href="tel:144">144</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  )
;

export default LivePage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => <SEO {...SEO_DATA.live} pathname={pathname} />;
