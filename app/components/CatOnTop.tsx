'use client';

import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

interface CatOnTopProps {
  size?: number;
  mobileSize?: number;
  top?: number;
  mobileTop?: number;
  left?: number;
  mobileLeft?: number;
  right?: number;
  mobileRight?: number;
  className?: string;
}

export default function CatOnTop({
  size = 100,
  mobileSize,
  top = -66,
  mobileTop,
  left,
  mobileLeft,
  right,
  mobileRight,
  className = ''
}: CatOnTopProps) {
  const mobile = mobileSize ?? Math.round(size * 0.6);
  const mTop = mobileTop ?? top;

  const desktopHPos = right !== undefined
    ? { right: `${right}px` }
    : { left: `${left ?? 0}px` };

  const mobileHPos = mobileRight !== undefined
    ? { right: `${mobileRight}px` }
    : mobileLeft !== undefined
    ? { left: `${mobileLeft}px` }
    : desktopHPos; // fall back to desktop value if neither mobile prop set

  return (
    <>
      {/* Mobile */}
      <div
        className="absolute z-10 pointer-events-none block md:hidden"
        style={{ top: `${mTop}px`, ...mobileHPos }}
      >
        <Player
          autoplay
          loop
          src="/cat.json"
          style={{ width: `${mobile}px`, height: `${mobile}px`, background: 'transparent' }}
        />
      </div>
      {/* Desktop */}
      <div
        className="absolute z-10 pointer-events-none hidden md:block"
        style={{ top: `${top}px`, ...desktopHPos }}
      >
        <Player
          autoplay
          loop
          src="/cat.json"
          style={{ width: `${size}px`, height: `${size}px`, background: 'transparent' }}
        />
      </div>
    </>
  );
}