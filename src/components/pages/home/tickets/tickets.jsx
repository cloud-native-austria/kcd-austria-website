import React from 'react';
import Button from '../../../shared/button';
import SpeakerProfileImage from './SpeakerProfileImage';
import loadWorkshopSpeakers from './loadWorkshopSpeakers';


const Tickets = () => {
  const { workshopSpeakers } = loadWorkshopSpeakers();

  return (
    <section className="safe-paddings container-md text-center">
      <h2 className="text-6xl" id="tickets">Tickets</h2>
      <p>
        Join us for KCD Austria! We offer two ticket options:
      </p>
      <h3>Conference Pass</h3>
      <p>
        Gain full access to the main conference on October 9th and 10th.
      </p>
      <Button className="my-6" to="https://tickets.kcdaustria.at" target="_blank">
        Get your conference pass
      </Button>
      <h3>Workshop Pass Addon</h3>
      <p>
        Arrive one day early, <strong>on October 8th</strong>, and attend <strong>two</strong> workshops in addition to the conference.
      </p>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-1 gap-2">
        <div className="flex items-center m-4 ml-8 p-2 relative bg-white drop-shadow rounded">
          <SpeakerProfileImage speakers={workshopSpeakers} firstName={"Max"} className="absolute -left-8 max-h-16 rounded-full" />
          <div className="pl-10 flex flex-col gap-1 items-start text-start">
            <h4 className="text-purple font-bold text-balance">Build your own Internal Developer Platform with CNOE</h4>
            <hr></hr>
            <strong>Max Körbächer</strong>
            <span className="text-balance text-gray-5 text-sm">Technology &amp; Cloud Native Advisor</span>
          </div>
        </div>
        <div className="flex items-center m-4 ml-8 p-2 relative bg-white drop-shadow rounded">
          <div className="absolute -left-8">
            <SpeakerProfileImage speakers={workshopSpeakers} firstName={"Miguel"} className="max-h-16 rounded-t-full" />
            <SpeakerProfileImage speakers={workshopSpeakers} firstName={"Vicente J."} className="max-h-16 rounded-b-full" />
          </div>
          <div className="pl-10 flex flex-col gap-1 items-start text-start">
            <h4 className="text-purple font-bold text-balance">Detecting unexpected behavior and intrusions with Falco + Atomic Red Team</h4>
            <strong>Miguel Hernández</strong>
            <span className="text-balance text-gray-5 text-sm">Staff Threat Researcher Engineer @ Sysdig</span>
            <strong>Vicente J. Jiménez Miras</strong>
            <span className="text-balance text-gray-5 text-sm">Developer Advocate &amp; Technical Trainer</span>
          </div>
        </div>
        <div className="flex items-center m-4 ml-8 p-2 relative bg-white drop-shadow rounded">
          <SpeakerProfileImage speakers={workshopSpeakers} firstName={"Nic"} className="absolute -left-8 max-h-16 rounded-full" />
          <div className="pl-10 flex flex-col gap-1 items-start text-start">
            <h4 className="text-purple font-bold text-balance">Deep Dive Into Kubernetes IAM and Network Security: How To Automate at Scale With IBAC and GitOps</h4>
            <strong>Nic Vermande</strong>
            <span className="text-balance text-gray-5 text-sm">Head of DevRel @ Otterize</span>
          </div>
        </div>
        <div className="flex items-center m-4 ml-8 p-2 relative bg-white drop-shadow rounded">
          <SpeakerProfileImage speakers={workshopSpeakers} firstName={"Ant(on)"} className="absolute -left-8 max-h-16 rounded-full" />
          <div className="pl-10 flex flex-col gap-1 items-start text-start">
            <h4 className="text-purple font-bold text-balance">Kubernetes Performance Tuning</h4>
            <strong>Ant(on) Weiss</strong>
            <span className="text-balance text-gray-5 text-sm">Software Delivery Futurist</span>
          </div>
        </div>
      </div>
      <Button className="my-6" to="https://tickets.kcdaustria.at" target="_blank">
        Get your workshop pass addon
      </Button>
    </section>
  );
};

export default Tickets;
