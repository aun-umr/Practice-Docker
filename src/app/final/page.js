'use client';

export default function Final() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <img
          src="/images/final-heart.jpg"
          alt="Love"
          className="w-64 h-64 object-cover rounded-full mx-auto mb-6"
        />
        <p className="text-3xl text-center font-serif text-gray-800">
          I love you mish ❤️
        </p>
      </div>
    </div>
  );
}