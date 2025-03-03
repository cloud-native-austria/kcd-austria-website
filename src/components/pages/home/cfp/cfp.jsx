import Button from 'components/shared/button';
import React from 'react';

const Cfp = () => (
  <section className="safe-paddings container flex flex-col gap-8 items-center justify-center">
    <h2>Our CFP Is Open</h2>
    <p className="text-center">
      Now is your chance to become a speaker at the Cloud Native Days Austria.
    </p>
    <p className="text-center">
      Send us your presentations until the <strong className="text-pink">31st of May</strong>.
    </p>
    <Button to="https://sessionize.com/cloud-native-days-austria/">Submit a session</Button>
  </section>
);

export default Cfp;
