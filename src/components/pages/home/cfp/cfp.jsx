import React from 'react';

import Button from 'components/shared/button';

const Cfp = () => (
  <section className="safe-paddings container flex flex-col gap-4 items-center">
    <h2>Our CFP Is Open</h2>
    <p className="text-center">
      Now is your chance to become a speaker at the Cloud Native Days Austria.
    </p>
    <p className="text-center">
      Send us your presentations until the <strong className="text-pink">30th of April</strong>!
    </p>
    <section className="bg-primary-1/10 p-4 rounded-lg">
      <h3 className="text-center my-1">Talks will be selected in batches</h3>
      <p>
        In addition to your free speaker ticket, you'll receive a bonus depending on <em>when</em>{' '}
        your talk gets selected.
      </p>
      <ol className="flex flex-col gap-2 mt-2">
        <li>
          <strong>At the end of February (~5 talks)</strong>
          <p>We will reimburse travel costs of up to 400€.</p>
        </li>
        <li>
          <strong>At the end of March (~10 talks)</strong>
          <p>You'll receive a complimentary attendee ticket.</p>
        </li>
        <li>
          <strong>At the end of April (~15 talks)</strong>
          <p>You'll get a 50% discount for a single attendee ticket.</p>
        </li>
      </ol>
    </section>
    <Button to="https://sessionize.com/cloud-native-days-austria-2026" target="_blank">
      Submit a session
    </Button>
  </section>
);

export default Cfp;
