import React from 'react';
import personPlaceholder from './images/person-placeholder.png';

const SpeakerProfileImage = ({ speakers, speakerId, className, onClick }) => {
    const speaker = speakers.find(speaker => speaker.id === speakerId);

    if (!speaker) return <img src={personPlaceholder} alt="Person placeholder" className={`${className}`} />;

    return <img src={speaker.profilePicture} alt={`Profile of speaker ${speaker.fullName}`} className={`${className}`} onClick={onClick} />;
};

export default SpeakerProfileImage;
