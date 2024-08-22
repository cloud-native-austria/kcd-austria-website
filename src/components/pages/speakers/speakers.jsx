import React from 'react';

import loadAllSpeakers from '../../shared/data/loadAllSpeakers';
import Person from '../../shared/person';

const Speakers = () => {
  const { speakers } = loadAllSpeakers();

  if (!speakers) {
    return <p>Loading...</p>;
  }

  return (
    <section className="safe-paddings container-md">
      <h1 id="speakers">Speakers</h1>
      <div className="flex flex-row flex-wrap gap-10 justify-center pt-4">
        {speakers.map(({ profilePicture, fullName, tagLine }, index) => (
          <Person name={fullName} tagLine={tagLine} picture={profilePicture} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Speakers;
