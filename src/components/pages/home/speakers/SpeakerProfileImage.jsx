import React from 'react';

const SpeakerProfileImage = ({ speakers, speakerId, className }) => {
    const speaker = speakers.find(speaker => speaker.id === speakerId);

    if (!speaker) return ""

    return <img src={speaker.profilePicture} alt={`Profile of speaker ${speaker.fullName}`} className={`${className}`} />;
};

export default SpeakerProfileImage;
