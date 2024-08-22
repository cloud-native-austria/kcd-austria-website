import React, { useState } from 'react';

import loadAllSpeakers from '../../shared/data/loadAllSpeakers';
import Person from '../../shared/person';
import SpeakerModal from '../../shared/speaker/speakerModal';

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const { speakers } = loadAllSpeakers();

  const handleSpeakerClick = (speakerId) => {
    const speaker = speakers.find(s => s.id === speakerId);
    setSelectedSpeaker(speaker);
  };

  const closeSpeakerModal = () => {
    setSelectedSpeaker(null);
  };

  if (!speakers) {
    return <p>Loading...</p>;
  }

  return (
    <section className="safe-paddings container-md">
      <h1 id="speakers">Speakers</h1>
      <div className="flex flex-row flex-wrap gap-10 justify-center pt-4">
        {speakers.map(({ profilePicture, fullName, tagLine, id }) => (
          <a onClick={() => handleSpeakerClick(id)}>
            <Person name={fullName} tagLine={tagLine} picture={profilePicture} key={id} />
          </a>
        ))}
      </div>
      <SpeakerModal isOpen={!!selectedSpeaker} speaker={selectedSpeaker} onClose={closeSpeakerModal} />
    </section>
  );
};

export default Speakers;