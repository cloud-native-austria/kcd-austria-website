import { useState, useEffect } from 'react';

const loadWorkshopSessions = () => {
  const [workshopSessions, setWorkshopSessions] = useState([]);

  useEffect(() => {
    const fetchWorkshopSessions = async () => {
      try {
        const response = await fetch('https://sessionize.com/api/v2/fetamiym/view/Sessions');
        const data = await response.json();
        setWorkshopSessions(data[0].sessions);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchWorkshopSessions();
  }, []);

  return { workshopSessions };
};

export default loadWorkshopSessions;
