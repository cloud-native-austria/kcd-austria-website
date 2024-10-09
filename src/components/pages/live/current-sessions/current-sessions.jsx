import React, { useCallback, useEffect, useState } from 'react';

import { getSessionUrl } from '../../../../constants/sessionize-app';
import { loadAllSessions } from '../../../shared/data/loadAllSessions';
import { set } from 'lodash';

const getSessionTime = (session) => {
  const start = new Date(session.startsAt);
  const end = new Date(session.endsAt);

  return `${start.getHours()}:${('0' + start.getMinutes()).slice(-2)} - ${end.getHours()}:${('0' + end.getMinutes()).slice(-2)}`;
};

const Session = ({ session }) => {
  if (!session?.id) return;

  return (
    <div className="py-3">
    <span className="text-sm font-bold bg-pink text-white py-1 px-2 rounded-full">
       {getSessionTime(session)}
      </span>
      <p className="pt-1">
        <a className="line-clamp-3" href={getSessionUrl(session.id)}>{session?.title}</a>
      </p>
    </div>
  );
};

const SessionsForRoom = ({ roomName, allSessions }) => {
  const currentTime = new Date();
  const sessionsOfRoom = allSessions.find(s => s.groupName == roomName)?.sessions
    .filter(s => new Date(s.startsAt).getDate() == currentTime.getDate())?? [];
  const currentSession = sessionsOfRoom.filter(s => new Date(s.startsAt) <= currentTime)
    .filter(s => new Date(s.endsAt) > currentTime)[0];
  const nextSession = sessionsOfRoom.find(s => new Date(s.startsAt) > currentTime);

  if(sessionsOfRoom.length == 0) return;

  return (
    <div className="col-span-1">
      <h3>{roomName}</h3>
      <Session session={currentSession} />
      <Session session={nextSession} />
      {(!currentSession && !nextSession) && (<p>all done for today</p>)}
    </div>
  );
};

const CurrentSessions = () => {
  const allSessions = loadAllSessions(30000);

  if (!allSessions) {
    return <p>Loading...</p>
  }
  const currentDate = new Date().getDate();
  const isAnythingScheduledToday = allSessions.flatMap(group => group.sessions)
    .some(session =>  new Date(session.startsAt).getDate() === currentDate);

  if(!isAnythingScheduledToday) return <p>Nothing scheduled today</p>

  return (
    <div className="grid grid-cols-2 xs:grid-cols-1 gap-4">
      <SessionsForRoom roomName={'Room 1'} allSessions={allSessions} />
      <SessionsForRoom roomName={'Room 8'} allSessions={allSessions} />
      <SessionsForRoom roomName={'Room 4'} allSessions={allSessions} />
      <SessionsForRoom roomName={'Room 6'} allSessions={allSessions} />
    </div>
  );
};

export default CurrentSessions;