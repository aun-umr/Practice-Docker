'use client';
import { ArrowLeft } from 'lucide-react';

export default function Video() {
  return (
    <div className="relative min-h-screen">
      {/* Background video */}
      <video 
        className="absolute inset-0 z-0 w-full h-full object-cover" 
        src="/videos/flower.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />

      {/* Back button */}
      <a 
        href="/" 
        className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
