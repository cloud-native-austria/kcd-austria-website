const appBaseUrl = 'https://cloud-native-days-austria.sessionize.com';
export const getSpeakerUrl = (speakerId) => `${appBaseUrl}/speaker/${speakerId}`;

export const getSessionUrl = (sessionId) => `${appBaseUrl}/session/${sessionId}`;

export const scheduleUrl = `${appBaseUrl}/schedule`;
