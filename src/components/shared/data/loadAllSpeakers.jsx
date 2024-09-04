import { useState, useEffect } from 'react';

export const loadAllSpeakers = () => {
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        const fetchSpeakers = async () => {
            try {
                const response = await fetch('https://sessionize.com/api/v2/dxat2zkl/view/Speakers');
                const data = await response.json();
                setSpeakers(data);
            } catch (error) {
                console.error('Error fetching speakers:', error);
            }
        };

        fetchSpeakers();
    }, []);

    return speakers;
};

export const loadKeynoteSpeakers = () => {
    return loadAllSpeakers().filter(s => s.isTopSpeaker);
}