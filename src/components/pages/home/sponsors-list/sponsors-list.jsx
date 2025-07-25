import React from 'react';

import Button from 'components/shared/button';

import Whizus from './logos/Whizus.png';
import AwsCommunityDays from './logos/AwsCommunityDays.png';
import Cncf from './logos/Cncf.png';
import KcdMunich from './logos/KcdMunich.svg';
import KcdZurich from './logos/KcdZurich.png';
import MeetingDestinationVienna from './logos/MeetingDestinationVienna.svg';
import KubeCareers from './logos/KubeCareers.svg';
import KubeEvents from './logos/KubeEvents.svg';
import RaiffeisenBankInternational from './logos/RaiffeisenBankInternational.png';
import FullStacks from './logos/FullStacks.png';
import Cloudpilots from './logos/Cloudpilots.png';
import CloudWerkstatt from './logos/CloudWerkstatt.png';
import NextLayer from './logos/NextLayer.webp';
import NTS from './logos/NTS.png';
import Exoscale from './logos/Exoscale.png';
import Dynatrace from './logos/Dynatrace.png';
import Splunk from './logos/Splunk.png';
import Tigera from './logos/Tigera.png';
import PorscheInformatik from './logos/PorscheInformatik.png';
import Veeam from './logos/Veeam.png';
import Suse from './logos/Suse.png';
import Nordcloud from './logos/Nordcloud.png';
import Posedio from './logos/Posedio.svg';
import Cloudbees from './logos/Cloudbees.png';
import Post from './logos/Post.png';
import Frequentis from './logos/Frequentis.png';

const sponsors = [
  {
    title: 'Gold',
    sponsors: [
      { url: 'https://www.whizus.com', logo: Whizus },
      //       { url: 'https://www.cloudpilots.com', logo: Cloudpilots },
      { url: 'https://www.exoscale.com/', logo: Exoscale },
      { url: 'https://www.dynatrace.com/', logo: Dynatrace },
      //       { url: 'https://www.splunk.com/', logo: Splunk },
    ],
  },
  {
    title: 'Silver',
    sponsors: [
      { url: 'https://rbinternational.com', logo: RaiffeisenBankInternational },
      { url: 'https://www.fullstacks.eu', logo: FullStacks },
      { url: 'https://www.cloudwerkstatt.com', logo: CloudWerkstatt },
      { url: 'https://www.nextlayer.at', logo: NextLayer },
      // { url: 'https://www.nts.eu', logo: NTS },
      // { url: 'https://www.tigera.io', logo: Tigera },
      { url: 'https://www.veeam.com', logo: Veeam },
      // { url: 'https://www.suse.com', logo: Suse },
      // { url: 'https://nordcloud.com', logo: Nordcloud },
      //       { url: 'https://www.cloudbees.com', logo: Cloudbees },
      //       { url: 'https://www.post.at/', logo: Post },
    ],
  },
  {
    title: 'Community',
    sponsors: [
      //      { url: 'https://www.porscheinformatik.com', logo: PorscheInformatik },
      { url: 'https://www.posedio.com', logo: Posedio },
      { url: 'https://www.frequentis.com', logo: Frequentis },
    ],
  },
  {
    title: 'Media Partners',
    sponsors: [
      //   { url: 'https://www.cncf.io', logo: Cncf },
      //   { url: 'https://www.kcdmunich.de', logo: KcdMunich },
      //   { url: 'https://kcdzurich.ch', logo: KcdZurich },
      //   { url: 'https://aws-community-day.de', logo: AwsCommunityDays, background: '#2A3644' },
      //   { url: 'https://meeting.vienna.info/en', logo: MeetingDestinationVienna },
      { url: 'https://kube.careers', logo: KubeCareers },
      { url: 'https://kube.events', logo: KubeEvents },
    ],
  },
];

const SponsorsList = () => (
  <section className="safe-paddings container-md text-center">
    <h2>Our Sponsors</h2>
    <p>Without them this event wouldn&apos;t be possible</p>
    {sponsors.map(({ title, sponsors }, index) => {
      // Randomly sort the sponsors array
      const sortedSponsors = [...sponsors].sort(() => Math.random() - 0.5);

      return (
        <div key={index}>
          <h3>{title}</h3>
          <div className="flex flex-row flex-wrap w-full justify-center mb-12 gap-4">
            {sortedSponsors.map(({ logo, url, background }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                className="hover:scale-105 md:w-1/2 sm:w-5/6 px-6"
                rel="noreferrer"
              >
                <img
                  src={logo}
                  className="w-full h-[100px] object-contain rounded-md p-2"
                  style={{ background }}
                  loading="lazy"
                  alt="sponsor-logo"
                />
              </a>
            ))}
          </div>
        </div>
      );
    })}
  </section>
);
export default SponsorsList;
