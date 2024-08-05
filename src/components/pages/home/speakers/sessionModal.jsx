import React from 'react';

const SessionModal = ({ isOpen, onClose, session }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleOverlayClick}>
            <div className="bg-white p-5 rounded-md w-1/2" onClick={(e) => e.stopPropagation()}>
                <div className='text-right'>
                    <button onClick={onClose} className="top-2 right-2">Close</button>
                </div>
                <div className='text-center'>
                    <h2 className="text-2xl mb-4">{session.title}</h2>
                    <p>{session.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SessionModal;