'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Game() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 50, y: 50 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateSize();
    moveNoButton();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const moveNoButton = () => {
    const maxWidth = Math.max(viewportSize.width - 150, 0);
    const maxHeight = Math.max(viewportSize.height - 100, 0);
    const newX = Math.random() * maxWidth;
    const newY = Math.random() * maxHeight;
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    if (step === 1) {
      setStep(2);
    } else {
      router.push('/final');
    }
  };

  return (
    <main className="fixed inset-0 overflow-hidden bg-gradient-to-r from-red-300 via-pink-300 to-purple-400 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-4xl font-serif text-white mb-8 md:mb-16 text-center">
        {step === 1 ? "Do you love me?" : "Do you want to spend whole life with me?"}
      </h1>
      
      <div className="relative">
        <button
          onClick={handleYesClick}
          className="px-6 md:px-8 py-2 md:py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-colors text-lg md:text-xl"
        >
          YES
        </button>
        
        <button
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          className="px-6 md:px-8 py-2 md:py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors text-lg md:text-xl"
          style={{
            position: 'fixed',
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease',
            touchAction: 'none'
          }}
        >
          NO
        </button>
      </div>
    </main>
  );
}