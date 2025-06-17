import React from 'react';

import Link from 'components/shared/link';

import beerPic from './images/beer.jpg';
import organizersPic from './images/organizers.jpg';
import photoPic from './images/photo.jpg';
import smallGroupPic from './images/small-group.jpg';

const Info = () => (
  <section className="safe-paddings container-md">
    <h1>Become a Volunteer</h1>
    <img
      className="float-left w-1/2 rounded-lg mr-6 sm:w-full sm:mb-6"
      src={organizersPic}
      loading="eager"
      alt="All the organizers of KCD Austria 2023"
    />
    <p>
      Cloud Native Days Austria is constantly growing and is not possible without dedicated
      volunteers. We are therefore extremely grateful for anyone who wants to take a look behind the
      scenes and help out. As a thank you for your support, we also offer you some benefits.
      <br />
      <br />
      Every volunteer who helps out will gets
      <li>free entrance to both conference days</li>
      <li>Volunteer shirt</li>
      <li>free drinks and food</li>
      <li>free parking ticket</li>
      <br />
      If you are interested in volunteering, please fill out this{' '}
      <Link
        to="https://forms.gle/NbdBbutVWg1nh4y87"
        target="_blank"
        ariaLabel="form for volunteer registration"
      >
        form for volunteer registration
      </Link>
      . The registration deadline is September 1st. If you are unable to attend for any reason,
      please let us know as soon as possible so that we can find a replacement.
      <br />
      <br />
      Depending on how many volunteers we have in the respective areas, the shifts will last around
      6 hours. We will send you your exact schedule at least 2 weeks before the event.
    </p>
    <div className="w-full grid grid-cols-3 gap-2 mt-6 sm:grid-cols-1 sm:justify-items-center">
      <img
        className="rounded max-h-52"
        src={photoPic}
        loading="eager"
        alt="A speaker on stage at being photographed from an organizer"
      />
      <img
        className="rounded max-h-52"
        src={smallGroupPic}
        loading="eager"
        alt="Some of the organizers of KCD Austria 2023"
      />
      <img
        className="rounded max-h-52"
        src={beerPic}
        loading="eager"
        alt="Organizers and volunteers enjoying a beer after the event"
      />
    </div>
  </section>
);

export default Info;
