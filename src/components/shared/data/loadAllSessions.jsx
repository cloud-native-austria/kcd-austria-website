import { useState, useEffect } from 'react';

export const loadAllSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('https://sessionize.com/api/v2/dxat2zkl/view/Sessions');
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchSpeakers();
  }, []);

  return sessions;
};