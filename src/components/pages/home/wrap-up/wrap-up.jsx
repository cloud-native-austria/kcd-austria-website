import React from 'react';

import Button from '../../../shared/button';

export const WrapUp = () => (
  <section className="safe-paddings container-md flex flex-col items-center gap-4">
    <h2>Last Year's Event</h2>
    <p>Thank you all for making the Kubernetes Community Days Austria 2024 a fantastic event!</p>
    <p>
      In case you missed any of the talks or just want to review the event, check out the following
      links:
    </p>
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <Button to="https://www.youtube.com/playlist?list=PLtLBTEzR4SqXICiZEESHcElCqQYgjmfYR">
        Watch all the talks
      </Button>
      {/* <Button to="https://hansberndlevents.myportfolio.com/kcd-austria">
        See all the pictures
      </Button> */}
    </div>
  </section>
);

export default WrapUp;
