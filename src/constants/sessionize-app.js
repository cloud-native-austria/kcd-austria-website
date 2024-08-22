const appBaseUrl = "https://4da31c6b14db4c12a5c11ae38b92b6d8.sessionize.com";

export const getSpeakerUrl = (speakerId) => `${appBaseUrl}/speaker/${speakerId}`;

export const getSessionUrl = (sessionId) => `${appBaseUrl}/session/${sessionId}`;