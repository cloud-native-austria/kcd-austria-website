import React from "react";

import Button from "components/shared/button";

const Sponsors = () => (
  <section className="safe-paddings container-md text-center">
    <h2 id="call-for-sponsors">Call for Sponsors</h2>

    <p>
      Join us in making Cloud Native Days Austria a memorable and impactful
      event for all attendees. To explore sponsorship opportunities, please
      don't hesitate to get in touch with us today. Your support will help us
      create an unforgettable experience for the community while enhancing your
      brand's visibility and recognition. Contact us at{" "}
      <a
        href="mailto:organizers@cloudnativedays.at"
        className="text-purple"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        organizers@cloudnativedays.at{" "}
      </a>
    </p>
    <div className="mt-6 mb-12 flex flex-row justify-center gap-4 sm:flex-col">
      <a
        href="/files/CND-Austria-2026-sponsor-prospectus.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Information Slides</Button>
      </a>
      <a
        href="/files/CND-Austria-2026-sponsor-agreement-form.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Agreement Form</Button>
      </a>
      <a
        href="mailto:organizers@cloudnativedays.at"
        target="_blank"
        rel="noreferrer"
        aria-label="Get in touch"
      >
        <Button>Get in touch</Button>
      </a>
    </div>
  </section>
);
export default Sponsors;
