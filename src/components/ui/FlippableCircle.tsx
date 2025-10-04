import { useState } from 'react';

interface FlippableCircleProps {
  language: string;
  proficiency: string;
  flag: string;
}

const FlippableCircle = ({ language, proficiency, flag }: FlippableCircleProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000">
      <div
        className={`relative w-32 h-32 rounded-full transform-style-preserve-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={handleFlip}
      >
        <div className="absolute w-full h-full rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center text-center p-4 backface-hidden">
          <img src={flag} alt={language} className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold">{language}</h3>
        </div>
        <div className="absolute w-full h-full rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-center p-4 transform rotate-y-180 backface-hidden">
          <p className="text-sm">{proficiency}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippableCircle;
