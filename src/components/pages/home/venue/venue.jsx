import React from 'react';
import venue from './images/venue.jpg';

const hotels = [
  {
    name: 'Holiday Inn Vienna South',
    link: 'https://maps.app.goo.gl/YDNq1o6Pnkxvnnso7',
    discount: '10%/fixed rate',
    description: 'Send <a href="/files/HolidayInn-Abrufkontingent-KCD.pdf" target="_blank">this form</a> filled with your data and signed to <a href="mailto:reservation@hi-wien.at">reservation@hi-wien.at</a>. This promo <strong>KCD Austria</strong> is bookable until 9th September.',
  },
  {
    name: 'PhilsPlace',
    link: 'https://maps.app.goo.gl/cUm3q1aNao7tLugH6',
    discount: '10%',
    description: 'Send an e-mail to <a href="mailto:hello@phils.place">hello@phils.place</a> and include the travel dates and the number of people, together with the promo code <strong>KCDXPHILS</strong> to get 10% off from the October rate.',
  },
  {
    name: 'Austria Trend Hotel Bosei',
    link: 'https://maps.app.goo.gl/i6P8KLejR5ivLhcC9',
    discount: '15%',
    description: 'Use the discount code <strong>KCD-Austria2024</strong> on the <a href="https://www.austria-trend.at/de/hotels/bosei" target="_blank">hotel reservation page</a> to get 15% off the regular price.',
  },
];

const Venue = () => (
  <section className="safe-paddings container-md">
    <h1 id="venue-and-accommodation">Venue & Accommodation</h1>
    <div className="flex flex-row items-center justify-center sm:flex-col text-center">
      <div className="w-1/2 text-center flex flex-col items-center justify-center sm:w-full">
        <img src={venue} alt="KCD Austria Venue" className="w-[350px] h-[350px] object-cover rounded-md" />
        <a
          href="https://maps.app.goo.gl/Q22METdvy3f1GFfx8"
          target="_blank"
          className="block mt-4 mb-2 text-xl"
        >Cineplexx Wienerberg</a>
        <a
          href="https://maps.app.goo.gl/Q22METdvy3f1GFfx8"
          target="_blank"
          className="text-gray-7 font-normal"
        >Wienerbergstraße 11<br />1100 Wien</a>
      </div>
      <p className="w-1/2 sm:w-full sm:mt-4">
        KCD Austria will be held at <a href="https://maps.app.goo.gl/Q22METdvy3f1GFfx8" target="_blank">Cineplexx
          Wienerberg</a>. You'll enjoy two cinema-style stages with comfy seats, great sound, and clear visuals.
        <br /><br />
        Grab a coffee or a bite to eat throughout the day and check out our sponsors for cool swag. There's plenty of
        space to meet new people and catch up with friends.
        <br /><br />
        Stick around for our evening event – it's right nearby!
        <br /><br />
        <strong>We can't wait to see you there!</strong>
      </p>
    </div>

    <h3>Accommodation</h3>

    <p className="text-center">
      Need a place to stay? We've got you covered. There are many hotels near the venue, and we've arranged special
      rates at selected hotels for KCD Austria attendees:
    </p>

    <div className="flex flex-row flex-wrap justify-center md:flex-col gap-4 mt-12">
      {hotels.map((hotel) => (
        <div
          className="w-[250px] md:w-full bg-gray-12 rounded-md p-4 flex-col inline-block justify-center">
          <strong className="text-sm text-start bg-pink text-white py-1 px-2 rounded-full inline-block self-start">{hotel.discount}</strong>
          <div><a href={hotel.link} target="_blank" className="p-0 m-0 my-2 block text-xl text-center">{hotel.name}</a>
          </div>
          <p className="text-center" dangerouslySetInnerHTML={{ __html: hotel.description }}></p>
        </div>
      ))}
    </div>
  </section>
);
export default Venue;
