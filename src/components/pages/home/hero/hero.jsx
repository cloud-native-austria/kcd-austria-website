import React from 'react';

import Button from '../../../shared/button';

import adrianajosh from './images/adriana-josh.webp';
import crowd from './images/crowd.webp';
import hands from './images/hands.webp';
import orgs from './images/orgs.webp';

const Hero = () => (
  <section className="safe-paddings">
    <div className="container w-full flex flex-row md:flex-col gap-8 justify-between items-center">
      <div className="flex flex-col gap-4 max-w-[580px] md:max-w-full">
        <h1 className="text-start mb-0">Cloud Native Days Austria</h1>
        <p>
          <strong className="text-purple">Mark your calendars!</strong>
          <br />
          On September <strong className="text-pink">29th and 30th</strong>, 2026 the Cloud Native
          community will gather in Vienna, Austria. We will spend two days filled with exciting
          talks, networking and partying.
        </p>
        <p>
          Cloud Native Days Austria is a conference aimed at developers, platform people, and other
          IT professionals interested in cloud native technologies.
        </p>
      </div>
      <a
        href="https://www.picdrop.com/giselataschner-carl-hohenbalken/bzmm9YBJW2"
        target="_blank"
        className="max-w-[500px] w-full h-[450px] relative overflow-hidden rounded"
        rel="noreferrer"
      >
        <img
          className="w-full h-full object-cover absolute animate-slide1"
          src={adrianajosh}
          loading="eager"
          alt="Two speakers giving a talk"
        />
        <img
          className="w-full h-full object-cover absolute animate-slide2"
          src={hands}
          loading="eager"
          alt="The audience of a talk answering the speaker's question by a show of hands"
        />
        <img
          className="w-full h-full object-cover absolute animate-slide3"
          src={orgs}
          loading="eager"
          alt="The organizers of the event"
        />
        <img
          className="w-full h-full object-cover absolute animate-slide4"
          src={crowd}
          loading="eager"
          alt="Attendees of the event networking and talking to each other"
        />
      </a>
    </div>
  </section>
);

export default Hero;
