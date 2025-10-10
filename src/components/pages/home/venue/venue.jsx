import React from 'react';
import venue from './images/venue.webp';

const Venue = () => (
  <section className="safe-paddings container-md">
    <h2 id="venue">Venue</h2>
    <div className="flex flex-row gap-8 items-center justify-items-start sm:flex-col text-center">
      <div className="text-center flex-grow-1 flex flex-col gap-4 items-center justify-center w-1/2 md:w-full">
        <img
          src={venue}
          alt="CDN Austria Venue"
          className="object-contain rounded-md max-h-[300px] md:max-h-[350px]"
        />
        <a href="https://maps.app.goo.gl/Q22METdvy3f1GFfx8" target="_blank">
          <strong className="hover:text-pink">Cineplexx Wienerberg</strong>
          <p className="font-normal hover:text-pink">Wienerbergstraße 11, 1100 Wien</p>
        </a>
      </div>
      <p className="self-start w-1/2 md:w-full sm:text-start">
        Cloud Native Days Austria are held at{' '}
        <a href="https://maps.app.goo.gl/Q22METdvy3f1GFfx8" target="_blank">
          Cineplexx Wienerberg
        </a>
        . You'll enjoy two cinema-style stages with comfy seats, great sound, and clear visuals.
        <br />
        <br />
        Grab a coffee or a bite to eat throughout the day and check out our sponsors for cool swag.
        There's plenty of space to meet new people and catch up with friends.
        <br />
        <br />
        Stick around for our evening event – it's right nearby!
        <br />
        <br />
        <strong>We can't wait to see you there!</strong>
      </p>
    </div>
  </section>
);
export default Venue;
