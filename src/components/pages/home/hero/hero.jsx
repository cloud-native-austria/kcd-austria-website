import React from 'react';

import illustration from './images/hero-illustration.webp';
import Button from '../../../shared/button';

const Hero = () => (
  <section className="safe-paddings overflow-hidden">
    <div className="container w-full flex flex-row md:flex-col gap-8 md:gap-0 justify-between items-center">
      <div className="flex flex-col gap-8 max-w-[580px] md:max-w-full">
        <h1 className="text-start mb-0">Cloud Native Days Austria</h1>
        <p>
          On <strong className="text-pink">October 7th and 8th, 2025</strong> the Cloud Native
          community will gather again in Vienna, Austria.
        </p>
        <p>
          Join us for two days filled with exciting talks and networking opportunities. Cloud Native
          Days Austria is aimed at developers, platform people, and other IT professionals
          interested in cloud native technologies. This community event is supported by the CNCF.
        </p>
      </div>
      <img
        className="max-w-[450px] object-contain"
        src={illustration}
        loading="eager"
        alt="Illustration"
      />
    </div>
  </section>
);

export default Hero;
