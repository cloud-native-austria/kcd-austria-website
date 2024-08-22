import { getSessionUrl } from 'constants/sessionize-app';
import React from 'react';

const SessionModal = ({ isOpen, onClose, session }) => {
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
        <h2 className="text-left">
          <a className="text-2xl" href={getSessionUrl(session.id)}>
            {session.title}
          </a>
        </h2>
        <p style={{ whiteSpace: 'pre-wrap' }} className="text-start text-balance">
          {session.description}
        </p>
      </div>
    </div>
  );
};

export default SessionModal;
