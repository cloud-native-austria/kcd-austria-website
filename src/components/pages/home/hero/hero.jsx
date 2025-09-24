import React from 'react';

import hands from './images/hands.webp';
import pia from './images/pia.webp';
import vendors from './images/vendors.webp';

const Hero = () => (
  <section className="safe-paddings">
    <div className="container w-full flex flex-row md:flex-col gap-8 justify-between items-center">
      <div className="flex flex-col gap-8 max-w-[580px] md:max-w-full">
        <h1 className="text-start mb-0">Cloud Native Days Austria</h1>
        <p>
          On <strong className="text-pink">October 7th and 8th, 2025</strong> the Cloud Native
          community will gather again in Vienna, Austria.
        </p>
        <p>
          Join us for two days filled with exciting talks and networking opportunities. Cloud Native
          Days Austria is aimed at developers, platform people, and other IT professionals
          interested in cloud native technologies.
        </p>
      </div>
      <div className="max-w-[500px] w-full h-[450px] relative overflow-hidden rounded">
        <img
          className="w-full h-full object-cover absolute animate-slide1"
          src={pia}
          loading="eager"
          alt="A speaker giving a talk to an audience in a cinema"
        />
        <img
          className="w-full h-full object-cover absolute animate-slide2"
          src={hands}
          loading="eager"
          alt="The audience of a talk answering the speaker's question by a show of hands"
        />
        <img
          className="w-full h-full object-cover absolute animate-slide3"
          src={vendors}
          loading="eager"
          alt="Vendors showcasing their products at individual booths"
        />
      </div>
    </div>
  </section>
);

export default Hero;
