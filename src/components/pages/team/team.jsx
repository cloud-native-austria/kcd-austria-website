import React from 'react';

import Person from '../../shared/person';

import Andi from './images/AndreasGrabner.jpeg';
import Andreas from './images/AndreasTaranetz.jpg';
import Daniel from './images/DanielDrack.jpeg';
import Erik from './images/ErikAuer.jpg';
import Johannes from './images/JohannesGrumboeck.jpeg';
import Octavian from './images/OctavianHelm.jpg';
import Philipp from './images/PhilippMaier.jpg';
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
    name: 'Johannes Grumböck',
    tagLine: 'Cloud Architect, Red Bull Media House',
    picture: Johannes,
  },
  {
    name: 'Octavian Helm',
    tagLine: 'Senior Platform Engineer, BearingPoint',
    picture: Octavian,
  },
  {
    name: 'Philipp Maier',
    tagLine: 'Senior Cloud Engineer, Dynatrace',
    picture: Philipp,
  },
  {
    name: 'Sandra Schadenbauer',
    picture: Sandra,
    tagLine: 'Lecturer, FH JOANNEUM',
  },
];

const Team = () => (
  <section className="safe-paddings container-md">
    <h1>Team</h1>
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {teamMembers.map(({ name, tagLine, picture }, index) => (
        <Person name={name} tagLine={tagLine} picture={picture} key={index} />
      ))}
    </div>
  </section>
);

export default Team;
