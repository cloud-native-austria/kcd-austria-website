import React from 'react';

const SpeakerModal = ({ isOpen, onClose, speaker }) => {
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
                <div className='flex'>
                    <div className='w-1/4 flex justify-center items-center'>
                        <img src={speaker.profilePicture} alt={speaker.fullName} className="max-h-40 rounded-full" />
                    </div>
                    <div className='w-3/4 pl-4'>
                        <h2 className="text-2xl mb-4">{speaker.fullName}</h2>
                        <p>{speaker.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeakerModal;