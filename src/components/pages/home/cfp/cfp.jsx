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
    <Button to="https://sessionize.com/cloud-native-days-austria/" target="_blank">
      Submit a session
    </Button>
  </section>
);

export default Cfp;
