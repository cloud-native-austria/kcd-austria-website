import React from 'react';
import venue from './images/venue.jpg';

const Venue = () => (
  <section className="safe-paddings container-md">
    <h1 id="venue">Venue</h1>
    <div className="flex flex-row items-center justify-center sm:flex-col text-center">
      <div className="w-1/2 text-center flex flex-col items-center justify-center sm:w-full">
        <img
          src={venue}
          alt="CDN Austria Venue"
          className="w-[350px] h-[350px] object-cover rounded-md"
        />
        <a
          href="https://maps.app.goo.gl/Q22METdvy3f1GFfx8"
          target="_blank"
          className="block mt-4 mb-2 text-xl"
        >
          Cineplexx Wienerberg
        </a>
        <a
          href="https://maps.app.goo.gl/Q22METdvy3f1GFfx8"
          target="_blank"
          className="text-gray-7 font-normal"
        >
          Wienerbergstraße 11
          <br />
          1100 Wien
        </a>
      </div>
      <p className="w-1/2 sm:w-full sm:mt-4">
        Cloud Native Days Austria will be held at{' '}
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
