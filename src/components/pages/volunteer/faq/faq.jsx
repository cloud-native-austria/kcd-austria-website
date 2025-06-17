import React from 'react';

import FAQ from 'components/shared/faq';
import Link from 'components/shared/link';

const Faq = () => (
  <section className="safe-paddings container-md w-full">
    <h2>Frequently Asked Questions</h2>
    <div>
      <FAQ
        question="What are the requirements for volunteers?"
        answer="To be a volunteer at CNDA, you must be at least 18 years old.
      You should also have good English skills (at least B2 level) and be motivated. German skills are a plus.
      Depending on the area of application, you should also be able to remain calm in stressful situations and be good at interacting with people."
      />
      <FAQ
        question="What are the benefits of volunteering?"
        answer={
          <>
            Every volunteer who helps out will get
            <li>Free entrance to both conference days</li>
            <li>Volunteer shirt</li>
            <li>Free drinks and food</li>
            <li>Free parking ticket</li>
          </>
        }
      />
      <FAQ
        question="Can I see anything from the event as a volunteer?"
        answer="Of course! We will make the schedule flexible so that you can also attend conference talks.
        Depending on how many volunteers we have in the respective areas, the shifts will last around 6 hours.
        We will send you your exact schedule at least 2 weeks before the event."
      />
      <FAQ
        question="Which areas can I volunteer in?"
        answer={
          <>
            You can volunteer in the following areas:
            <li>Set up/Take down</li>
            <li>Registration</li>
            <li>Stage/Host assistant</li>
            <li>Miscellaneous</li>
          </>
        }
      />
      <FAQ
        question="Where can I register as a volunteer?"
        answer={
          <>
            Please fill out this{' '}
            <Link
              to="https://forms.gle/NbdBbutVWg1nh4y87"
              target="_blank"
              ariaLabel="form for volunteer registration"
            >
              form for volunteer registration
            </Link>
            . The registration deadline is September 1st.
          </>
        }
      />
      <FAQ
        question="Do you have another question?"
        answer={
          <>
            Feel free to contact us directly by sending an email to{' '}
            <Link
              to="mailto:organizers@cloudnativedays.at"
              ariaLabel="organizers@cloudnativedays.at"
            >
              organizers@cloudnativedays.at
            </Link>
            .
          </>
        }
      />
    </div>
  </section>
);

export default Faq;
