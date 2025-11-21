
import { useEffect, useRef } from 'react';
import StarryBackground from './StarryBackground';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio (uncomment to enable background music)
    // if (audioRef.current) {
    //   audioRef.current.volume = 0.1;
    //   const playPromise = audioRef.current.play();
    //   if (playPromise !== undefined) {
    //     playPromise.catch(() => {
    //       // Auto-play was prevented, show UI to enable it
    //     });
    //   }
    // }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background ambient music (muted by default) */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
        src="https://assets.mixkit.co/sfx/preview/mixkit-ethereal-fairy-sparkle-sound-2374.mp3"
      />
      
      {/* Starry background with WebGL */}
      <StarryBackground />
      
      {/* Main navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
