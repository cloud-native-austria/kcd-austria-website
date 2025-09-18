import React from 'react';

import { scheduleUrl } from '../../../constants/sessionize-app';
import Button from '../../shared/button';

import CurrentSessions from './current-sessions/current-sessions';

const Live = () => (
  <section className="safe-paddings container-md text-center grid grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
    <div className="col-span-2 sm:col-span-1 bg-gray-12 rounded-md p-2 flex-col inline-block justify-center">
      <h1 className="text-xl">Current and upcoming sessions</h1>
      <CurrentSessions />
      <Button to={scheduleUrl} className="my-4">
        See the full schedule
      </Button>
    </div>

    <div className="bg-gray-12 rounded-md p-2 flex-col inline-block justify-center">
      <h2>Wi-Fi access</h2>
      <table className="mx-auto border-separate border-spacing-2">
        <tbody>
          <tr>
            <td className="text-right">SSID</td>
            <td>CNDA-conference</td>
          </tr>
          <tr>
            <td className="text-right">Password</td>
            <td>stay-cloud-native!</td>
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
            <td>
              <a href="tel:122">122</a>
            </td>
          </tr>
          <tr>
            <td className="text-right">Police</td>
            <td>
              <a href="tel:133">133</a>
            </td>
          </tr>
          <tr>
            <td className="text-right">Ambulance</td>
            <td>
              <a href="tel:144">144</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);
export default Live;
