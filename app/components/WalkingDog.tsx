'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

export default function WalkingDog() {
  const [show, setShow] = useState(false);
  const [walking, setWalking] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (triggered || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setTriggered(true);
        setShow(true);

        setTimeout(() => setWalking(true), 50);

        setTimeout(() => {
          setShow(false);
          setWalking(false);
          setTimeout(() => setTriggered(false), 300);
        }, 7500);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggered]);

  // Desktop: clip at left so dog walks into sidebar
  // Mobile: just clip at left edge (no sidebar, he just disappears off screen)
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  return (
    // Placed BEFORE footer content — negative margin pulls it up to sit on the border
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: 0,
        width: '100%',
        overflow: 'visible',
      }}
    >
      {show && (
        <div
          style={{
            position: 'absolute',
            // Pull up by dog height + a little so paws sit on the footer top border
            top: '-85px',
            left: 0,
            right: 0,
            height: '100px',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 50,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              width: '120px',
              height: '120px',
              transform: walking
                ? `translateX(${isDesktop ? '-120px' : '-130px'})`
                : 'translateX(100vw)',
              transition: walking ? 'transform 7s linear' : 'none',
            }}
          >
            <Player
              autoplay
              loop
              src="/dog.json"
              style={{
                width: '120px',
                height: '120px',
                background: 'transparent',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}