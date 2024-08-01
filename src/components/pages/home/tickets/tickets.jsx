import React from 'react';
import Button from '../../../shared/button';
import miguel from '../speakers/speakers/Miguel Hernández.jpg';
import vicente from '../speakers/speakers/Vicente J. Jiménez Miras.png';
import nic from '../speakers/speakers/Nic Vermande.png';
import max from '../speakers/speakers/Max Körbächer.png';
import anton from '../speakers/speakers/Anton Weiss.png';

const Tickets = () => (<section className="safe-paddings container-md text-center">
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
    <h3>Workshop Pass</h3>
    <p>
      Arrive one day early, <strong>on October 8th</strong>, and attend <strong>two</strong> workshops in addition to the conference.
    </p>
    <div className="mt-3 grid grid-cols-2 md:grid-cols-1 gap-2">
      <div className="flex items-center m-4 ml-8 p-2 relative bg-white drop-shadow rounded">
        <img src={max}
             alt="Max Körbächer"
             className="absolute -left-8 max-h-16 rounded-full" />
        <div className="pl-10 flex flex-col gap-1 items-start text-start">
          <h4 className="text-purple font-bold text-balance">Build your own Internal Developer Platform with CNOE</h4>
          <hr></hr>
          <strong>Max Körbächer</strong>
          <span className="text-balance text-gray-5 text-sm">Technology &amp; Cloud Native Advisor</span>
        </div>
      </div>
      <div className="flex items-center m-4 ml-8 p-2 relative bg-white drop-shadow rounded">
        <div className="absolute -left-8">
          <img src={miguel}
               alt="Miguel Hernández"
               className="max-h-16 rounded-t-full" />
          <img src={vicente}
               alt="Vicente J. Jiménez Miras"
               className="max-h-16 rounded-b-full" />
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
        <img src={nic}
             alt="Nic Vermande"
             className="absolute -left-8 max-h-16 rounded-full" />
        <div className="pl-10 flex flex-col gap-1 items-start text-start">
          <h4 className="text-purple font-bold text-balance">Deep Dive Into Kubernetes IAM and Network Security: How To Automate at Scale With IBAC and GitOps</h4>
          <strong>Nic Vermande</strong>
          <span className="text-balance text-gray-5 text-sm">Head of DevRel @ Otterize</span>
        </div>
      </div>
      <div className="flex items-center m-4 ml-8 p-2 relative bg-white drop-shadow rounded">
        <img src={anton}
             alt="Anton Weiss"
             className="absolute -left-8 max-h-16 rounded-full" />
        <div className="pl-10 flex flex-col gap-1 items-start text-start">
          <h4 className="text-purple font-bold text-balance">Kubernetes Performance Tuning</h4>
          <strong>Ant(on) Weiss</strong>
          <span className="text-balance text-gray-5 text-sm">Software Delivery Futurist</span>
        </div>
      </div>
    </div>
    <Button className="my-6" to="https://tickets.kcdaustria.at" target="_blank">
      Get your workshop pass
    </Button>
  </section>
);
export default Tickets;
