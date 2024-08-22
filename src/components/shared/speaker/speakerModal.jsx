import React from 'react';
import PropTypes from 'prop-types';
import { getSessionUrl, getSpeakerUrl } from 'constants/sessionize-app';

const SocialMediaLink = ({ link }) => {
  const renderIcon = (type) => {
    if (link.linkType == 'Blog')
      return (
        <svg
          className="h-8 w-8 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1" />
        </svg>
      );
    if (link.linkType == 'Company_Website')
      return (
        <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    if (link.linkType == 'Facebook')
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="fill-[#1877f2]">
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      );
    if (link.linkType == 'Instagram')
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-[#c13584]">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      );
    if (link.linkType == 'LinkedIn')
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-[#0077b5]">
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      );
    if (link.linkType == 'Sessionize')
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          clip-rule="evenodd"
          viewBox="0 0 48 48"
        >
          <g id="logo" fill="#1AB394">
            <path d="M24 0c13.255 0 24 10.745 24 24v20a4 4 0 01-4 4H29l-.003-.338c-.097-5.789-2.694-9.804-7.417-11.919L48 24l-.639-.218C41.644 21.784 36.857 18.857 33 15c-3.857-3.857-6.784-8.644-8.782-14.361L24 0 8 36c0 1.333.333 2.333 1 3 .667.667 1.667 1 3 1l.374.002C19.915 40.082 23 42.592 23 48H4a4 4 0 01-4-4V4a4 4 0 014-4h20zm14.414 9.586c-1.562-1.562-3.461-2.195-4.242-1.414-.781.781-.148 2.68 1.414 4.242 1.562 1.562 3.461 2.195 4.242 1.414.781-.781.148-2.68-1.414-4.242z" />
          </g>
        </svg>
      );
    if (link.linkType == 'Twitter')
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
          className="fill-black"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      );
    if (link.url?.includes('//github.com'))
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fill-[#333]">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      );

    return (
      <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    );
  };

  return (
    <a href={link.url} title={link.title}>
      <span className="[&>svg]:h-5 [&>svg]:w-5">{renderIcon(link)}</span>
    </a>
  );
};

SocialMediaLink.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  linkType: PropTypes.oneOf([
    'Twitter',
    'LinkedIn',
    'Facebook',
    'Instagram',
    'Blog',
    'Company_Website',
    'Sessionize',
    'Other',
  ]),
};

const SpeakerModal = ({ isOpen, onClose, speaker }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-5 rounded-md w-full max-w-lg max-h-full overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
        style={{ margin: '10px' }}
      >
        <button onClick={onClose} className="absolute top-3 right-3">
          Ｘ
        </button>
        <div className="flex gap-4 items-center pb-3">
          <span className="drop-shadow">
            <img
              src={speaker.profilePicture}
              alt={speaker.fullName}
              className="max-h-20 bg-white heptagon"
            />
          </span>
          <h2 className="flex flex-col gap-2 items-start">
            <a className="text-2xl" href={getSpeakerUrl(speaker.id)}>
              {speaker.fullName}
            </a>
            <span className="flex gap-2">
              {speaker.links?.map((link) => (
                <SocialMediaLink key={link.url} link={link} />
              ))}
            </span>
          </h2>
        </div>
        <p style={{ whiteSpace: 'pre-wrap' }} className="text-start text-balance">
          {speaker.bio}
        </p>
        {speaker.sessions && (
          <>
            <h3 className="text-left">{speaker.sessions.size > 1 ? 'Sessions' : 'Session'}</h3>
            <ul>
              {speaker.sessions.map((session) => (
                <li className="text-left text-purple">
                  <a href={getSessionUrl(session.id)}>{session.name}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default SpeakerModal;
