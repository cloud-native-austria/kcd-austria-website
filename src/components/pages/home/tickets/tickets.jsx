import React from 'react';

import Button from '../../../shared/button';

const Tickets = () => (
  <section className="safe-paddings container flex flex-col gap-4 items-center">
    <h2 id="tickets">
      Tickets
    </h2>
    <p className="text-center">
      The conference pass gives you access to all talks on both days and the evening event.
    </p>
    <p className="text-center">Get your tickets now and join us for Cloud Native Days Austria 2025!</p>
    <Button to="https://tickets.cloudnativedays.at" target="_blank">
      Get your conference pass
    </Button>
  </section>
);

export default Tickets;
