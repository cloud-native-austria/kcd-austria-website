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
            <div
                className="bg-white p-5 rounded-md w-full max-w-lg max-h-full overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
                style={{ margin: '10px' }}
            >
                <button onClick={onClose} className="absolute top-3 right-3">Ｘ</button>
                <div className='flex gap-3 items-center pb-3'>
                    <img src={speaker.profilePicture} alt={speaker.fullName} className="max-h-20 rounded-full" />
                    <h2 className="text-2xl">{speaker.fullName}</h2>
                </div>
                <p style={{ whiteSpace: 'pre-wrap' }} className="text-start text-balance">{speaker.bio}</p>
            </div>
        </div>
    );
};

export default SpeakerModal;