import React from 'react';

const Schedule = () => (
  <section className="safe-paddings container-md">
    <h1 id="schedule">Schedule</h1>
    <p>
      Our call for proposals has <strong>now closed</strong>. Thank you to everybody who submitted a
      session for your enthusiasm and willingness to share your knowledge. We are now evaluating all
      submissions and will <strong>reach out to all applicants until end of July</strong>.
      <br />
      <br />
      We're excited to craft a conference program packed with insightful talks and workshops.
    </p>
    <div className="flex flex-row flex-wrap justify-around md:flex-col mt-4 gap-y-2">
      <div className="w-[32%] md:w-full bg-gray-12 rounded-md p-4 flex-col inline-block justify-center content-center">
        <strong className="text-sm bg-orange py-1 px-2 rounded-full">Tuesday, October 8</strong>
        <h1 className="p-0 m-0 mt-4 mb-2 text-2xl">Workshops</h1>
        <p className="text-center">
          Dive into whole day of hands-on workshops from the community. <br /> Learn, connect, and
          have fun!
        </p>
      </div>
      <div className="w-[32%] md:w-full bg-gray-12 rounded-md p-4 flex-col inline-block justify-center content-center">
        <strong className="text-sm bg-pink text-white py-1 px-2 rounded-full">
          Wednesday, October 9
        </strong>
        <h1 className="p-0 m-0 mt-4 mb-2 text-2xl">Conference</h1>
        <p className="text-center">
          Let's kick-off the main event with inspiring talks and networking opportunities. Get ready
          to be wowed!
        </p>
      </div>
      <div className="w-[32%] md:w-full bg-gray-12 rounded-md p-4 flex-col inline-block justify-center content-center">
        <strong className="text-sm bg-purple text-white py-1 px-2 rounded-full">
          Thursday, October 10
        </strong>
        <h1 className="p-0 m-0 mt-4 mb-2 text-2xl">Conference</h1>
        <p className="text-center">
          Wrap up with even more insights, deeper conversations, and lasting connections.
        </p>
      </div>
    </div>
  </section>
);

export default Schedule;
