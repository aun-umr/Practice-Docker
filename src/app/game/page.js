// File: app/game/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Game() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 50, y: 50 });
  
  useEffect(() => {
    // Initialize NO button to a random position
    moveNoButton();
  }, []);

  const moveNoButton = () => {
    const newX = Math.random() * (window.innerWidth - 150);
    const newY = Math.random() * (window.innerHeight - 100);
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleNoButtonHover = () => {
    moveNoButton();
  };

  const handleYesClick = () => {
    if (step === 1) {
      setStep(2);
    } else {
      router.push('/final');
    }
  };

  return (
    <main className="fixed inset-0 overflow-hidden bg-gradient-to-r from-red-300 via-pink-300 to-purple-400 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-serif text-white mb-16">
        {step === 1 ? "Do you love me?" : "Do you want to spend whole life with me?"}
      </h1>
      
      <div className="relative">
        <button
          onClick={handleYesClick}
          className="px-8 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-colors text-xl"
        >
          YES
        </button>
        
        <button
          onMouseEnter={handleNoButtonHover}
          className="px-8 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors text-xl"
          style={{
            position: 'fixed',
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y}px`,
            transition: 'all 0.3s ease'
          }}
        >
          NO
        </button>
      </div>
    </main>
  );
}