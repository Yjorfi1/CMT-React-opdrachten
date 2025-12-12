import { useState } from 'react';

const Flashcard = ({ card }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => setFlipped((prev) => !prev);

    return (
        <div
            className={`flashcard bg-white rounded-lg  flex items-center justify-center text-center  ${flipped ? 'border-2 border-indigo-300' : ''}`}
            onClick={handleFlip}
        >
            {!flipped ? (
                <h2 className="text-lg font-semibold">{card.question}</h2>
            ) : (
                <h2 className="text-lg font-medium">{card.answer || '—'}</h2>
            )}
        </div>
    );
};

export default Flashcard;