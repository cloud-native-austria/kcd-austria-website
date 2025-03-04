import { scheduleUrl } from 'constants/sessionize-app';
import Button from '../../../shared/button';
import React from 'react';

const Schedule = () => (
  <section className="safe-paddings container-md text-center">
    <h2 id="schedule">Schedule</h2>
    <p className="text-balance">
      See the full schedule and mark talks you're interested in so you won't miss a session.
    </p>
    <Button to={scheduleUrl} className="my-6">
      Full schedule
    </Button>
    <div className="flex flex-row flex-wrap justify-around md:flex-col mt-4 gap-y-2">
      <div className="w-[32%] md:w-full bg-gray-12 rounded-md p-4 flex-col inline-block justify-center content-start">
        <strong className="text-sm bg-orange py-1 px-2 rounded-full">Tuesday, October 8</strong>
        <h2 className="p-0 m-0 mt-4 mb-2 text-2xl">Workshops</h2>
        <p className="text-center">
          Dive into whole day of hands-on workshops from the community. <br /> Learn, connect, and
          have fun!
        </p>
      </div>
      <div className="w-[32%] md:w-full bg-gray-12 rounded-md p-4 flex-col inline-block justify-center content-start">
        <strong className="text-sm bg-pink text-white py-1 px-2 rounded-full">
          Wednesday, October 9
        </strong>
        <h3 className="p-0 m-0 mt-4 mb-2">Conference</h3>
        <p className="text-center">
          Let's kick-off the main event with inspiring talks and networking opportunities. Get ready
          to be wowed!
        </p>
      </div>
      <div className="w-[32%] md:w-full bg-gray-12 rounded-md p-4 flex-col inline-block justify-center content-start">
        <strong className="text-sm bg-purple text-white py-1 px-2 rounded-full">
          Thursday, October 10
        </strong>
        <h3 className="p-0 m-0 mt-4 mb-2">Conference</h3>
        <p className="text-center">
          Wrap up with even more insights, deeper conversations, and lasting connections.
        </p>
      </div>
    </div>
  </section>
);

export default Schedule;
