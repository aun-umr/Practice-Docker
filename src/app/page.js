// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const cards = [
  {
    id: 1,
    image: "/images/birthday1.png",
    message: "Every moment feels magical with you ✨",
    borderColor: "border-pink-400"
  },
  {
    id: 2,
    image: "/images/birthday2.png",
    message: "You make my heart smile with your presence 💫",
    borderColor: "border-purple-400"
  },
  {
    id: 3,
    image: "/images/birthday3.png",
    message: "Happy Birthday to my special one 🌟",
    borderColor: "border-red-400"
  },
  {
    id: 4,
    image: "/images/birthday4.png",
    message: "You light up my world everyday ✨",
    borderColor: "border-rose-400"
  },
  {
    id: 5,
    image: "/images/birthday5.png",
    message: "My heart beats only for you 💖",
    borderColor: "border-pink-400"
  }
];

export default function Home() {
  const router = useRouter();
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const starCount = 100;
    const newStars = Array.from({ length: starCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setStars(newStars);

    const audio = new Audio('/music/happy-birthday.mp3');
    audio.loop = true;
    audio.play().catch(e => console.log('Audio autoplay was prevented'));
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-300 via-pink-300 to-purple-400 relative overflow-hidden">
      {/* Stars */}
      <div className="stars absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="w-full text-center pt-4 md:pt-8 z-20 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-white heading-animation mb-2 md:mb-4 px-4">
          ❤️ Happy Birthday Mish ❤️
        </h1>
        <div className="flex justify-center gap-2 md:gap-3 text-2xl md:text-3xl hearts-animation">
          💝 💖 💗 💝 💖
        </div>
      </div>

      {/* Carousel */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="carousel">
          <div className="carousel-container">
            {cards.map((card) => (
              <div key={card.id} className="carousel-item">
                <div className={`card-content bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border-2 ${card.borderColor} shadow-xl transition-all duration-300`}>
                  <div className="w-full h-3/5 overflow-hidden">
                    <img
                      src={card.image}
                      alt="Birthday"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-2/5 p-3 flex flex-col items-center justify-center bg-gradient-to-b from-white/60 to-pink-50/60">
                    <p className="text-gray-800 text-center font-medium italic text-sm md:text-base">
                      {card.message}
                    </p>
                    <div className="mt-1 flex gap-1">
                      <span className="text-pink-400">♥</span>
                      <span className="text-purple-400">♥</span>
                      <span className="text-red-400">♥</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="fixed bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-4 md:gap-6 z-30 px-4">
        <button
          onClick={() => router.push('/video')}
          className="px-4 md:px-8 py-2 md:py-4 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-colors text-base md:text-lg font-semibold"
        >
          Watch Magic
        </button>
        <button
          onClick={() => router.push('/game')}
          className="px-4 md:px-8 py-2 md:py-4 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition-colors text-base md:text-lg font-semibold"
        >
          Play With Me
        </button>
      </div>
    </div>
  );
}