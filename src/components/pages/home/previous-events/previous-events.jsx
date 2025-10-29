import React from 'react';

import Button from '../../../shared/button';

export const PreviousEvents = () => (
  <section className="safe-paddings container-md flex flex-col items-center gap-4">
    <h2>Previous Events</h2>
    <p>Thank you all for making the Cloud Native Days Austria 2025 a fantastic event!</p>
    <p>In case you want to review previous events, check out the following links:</p>
    <section>
      <h3>Cloud Native Days Austria 2025</h3>
      <span className="flex flex-wrap gap-2 justify-center">
        <Button to="https://www.picdrop.com/giselataschner-carl-hohenbalken/bzmm9YBJW2">
          Photos of the event
        </Button>
        <Button to="https://youtube.com/playlist?list=PLtLBTEzR4SqU9GwgWiaDt10-yOVIN0nzM&si=yQP0zXuHcyH01bHq">
          Recordings of the talks
        </Button>
      </span>
    </section>
    <section>
      <h3>Kubernetes Community Days Austria</h3>
      <span className="flex flex-wrap gap-2 justify-center">
        <Button to="https://www.youtube.com/playlist?list=PLtLBTEzR4SqXICiZEESHcElCqQYgjmfYR">
          Recordings of 2024
        </Button>
        <Button to="https://youtube.com/playlist?list=PLtLBTEzR4SqWKGuUBiRm_IuRZf2--CCDt&si=7ZkAV333DhWSpHp0">
          Recordings of 2023
        </Button>
      </span>
    </section>
  </section>
);

export default PreviousEvents;
