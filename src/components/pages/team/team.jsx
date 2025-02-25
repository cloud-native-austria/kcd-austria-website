import React from 'react';

import Person from '../../shared/person';

import Andi from './images/AndreasGrabner.jpeg';
import Andreas from './images/AndreasTaranetz.jpg';
import Daniel from './images/DanielDrack.jpeg';
import Erik from './images/ErikAuer.jpg';
import Henrik from './images/HenrikRexed.png';
import Johannes from './images/JohannesGrumboeck.jpeg';
import Kathi from './images/KatharinaSick.jpg';
import Sandra from './images/SandraSchadenbauer.jpeg';

const teamMembers = [
  {
    name: 'Andreas Grabner',
    tagLine: 'CNCF Ambassador, CNCF Keptn & Dynatrace DevRel',
    picture: Andi,
  },
  {
    name: 'Andreas Taranetz',
    tagLine: 'Senior Software Engineer, Dynatrace',
    picture: Andreas,
  },
  {
    name: 'Daniel Drack',
    tagLine: 'I host the community chapter in Graz, Austria',
    picture: Daniel,
  },
  {
    name: 'Erik Auer',
    picture: Erik,
    tagLine: 'CEO, WhizUs',
  },
  {
    name: 'Henrik Rexed',
    picture: Henrik,
  },
  {
    name: 'Johannes Grumböck',
    tagLine: 'Cloud Architect, Red Bull Media House',
    picture: Johannes,
  },
  {
    name: 'Katharina Sick',
    tagLine: 'Senior Software Engineer, Dynatrace',
    picture: Kathi,
  },
  {
    name: 'Sandra Schadenbauer',
    picture: Sandra,
    tagLine: 'Lecturer, FH JOANNEUM'
  },
];

const Team = () => (
  <section className="safe-paddings container-md">
    <h1>Team</h1>
    <div className="flex flex-row flex-wrap gap-10 justify-center my-16">
      {teamMembers.map(({ name, tagLine, picture }, index) => (
        <Person name={name} tagLine={tagLine} picture={picture} key={index} />
      ))}
    </div>
  </section>
);

export default Team;
