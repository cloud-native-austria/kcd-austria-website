import React from 'react';

const SpeakerProfileImage = ({ speakers, speakerId, firstName, className }) => {
    const speaker = speakers.find(speaker => speaker.id === speakerId || speaker.firstName === firstName);

    if (!speaker) return ""

    return <img src={speaker.profilePicture} alt={`Profile of speaker ${speaker.fullName}`} className={`${className}`} />;
};

export default SpeakerProfileImage;
