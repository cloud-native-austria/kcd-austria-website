import { useState, useEffect } from 'react';

const loadWorkshopSpeakers = () => {
    const [workshopSpeakers, setWorkshopSpeakers] = useState([]);

    useEffect(() => {
        const fetchWorkshopSpeakers = async () => {
            try {
                const response = await fetch('https://sessionize.com/api/v2/vdgkc6xy/view/Speakers');
                const data = await response.json();
                setWorkshopSpeakers(data);
            } catch (error) {
                console.error('Error fetching speakers:', error);
            }
        };

        fetchWorkshopSpeakers();
    }, []);

    return { workshopSpeakers };
};

export default loadWorkshopSpeakers;
