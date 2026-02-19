'use client';

import React from 'react';
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

interface Props {
  size?: number; // desktop px
  mobileSize?: number;
  left?: number;
  right?: number;
  mobileLeft?: number;
  mobileRight?: number;
  // percent transforms (positive X moves right, positive Y moves down)
  offsetX?: number; // desktop percent (default 50)
  offsetY?: number; // desktop percent (default 8)
  mobileOffsetX?: number;
  mobileOffsetY?: number;
}

export default function CatOnTop({
  size = 120,
  mobileSize = 70,
  left,
  right,
  mobileLeft,
  mobileRight,
  offsetX = 50,
  offsetY = 8,
  mobileOffsetX,
  mobileOffsetY,
}: Props) {
  const mOffsetX = mobileOffsetX ?? Math.round(offsetX * 0.75);
  const mOffsetY = mobileOffsetY ?? Math.round(offsetY * 0.9);

  const desktopPos = right !== undefined ? { right: `${right}px` } : left !== undefined ? { left: `${left}px` } : { right: "0" };
  const mobilePos = mobileRight !== undefined ? { right: `${mobileRight}px` } : mobileLeft !== undefined ? { left: `${mobileLeft}px` } : desktopPos;

  const desktopTransform = `translate(${offsetX}%, ${offsetY}%)`;
  const mobileTransform = `translate(${mOffsetX}%, ${mOffsetY}%)`;
  // refs to the rendered wrappers so we can update positions dynamically
  const desktopRef = React.useRef<HTMLDivElement | null>(null);
  const mobileRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const update = () => {
      // Find the nearest anchor element (the span with class 'cat-anchor')
      const desktopEl = desktopRef.current;
      const mobileEl = mobileRef.current;
      const anchor = desktopEl?.parentElement?.closest('.cat-anchor') || mobileEl?.parentElement?.closest('.cat-anchor');
      if (!anchor) return;

      // Anchor bounding box relative to its own (positioned) parent
      const anchorRect = anchor.getBoundingClientRect();
      const parentRect = anchor.parentElement?.getBoundingClientRect();
      // If parent rect is missing, bail
      if (!parentRect) return;

      // Compute left in px relative to the positioned parent (the anchor's parentElement)
      const leftPx = (anchorRect.left - parentRect.left) + anchorRect.width * (offsetX / 100);
      const mLeftPx = (anchorRect.left - parentRect.left) + anchorRect.width * (mOffsetX / 100);

      if (desktopEl) {
        // If explicit left/right props provided, prefer them
        if (left !== undefined) {
          desktopEl.style.left = `${left}px`;
          desktopEl.style.right = '';
        } else if (right !== undefined) {
          desktopEl.style.right = `${right}px`;
          desktopEl.style.left = '';
        } else {
          desktopEl.style.left = `${leftPx}px`;
          desktopEl.style.right = '';
        }
        desktopEl.style.transform = `translate(-50%, ${offsetY}%)`;
      }

      if (mobileEl) {
        if (mobileLeft !== undefined) {
          mobileEl.style.left = `${mobileLeft}px`;
          mobileEl.style.right = '';
        } else if (mobileRight !== undefined) {
          mobileEl.style.right = `${mobileRight}px`;
          mobileEl.style.left = '';
        } else {
          mobileEl.style.left = `${mLeftPx}px`;
          mobileEl.style.right = '';
        }
        mobileEl.style.transform = `translate(-50%, ${mOffsetY}%)`;
      }
    };

    // Initial update
    update();

    // Update on resize and scroll
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, { passive: true });

    // ResizeObserver for the anchor element (if available)
    let ro: ResizeObserver | null = null;
    const desktopEl = desktopRef.current;
    const anchorEl = desktopEl?.parentElement?.closest('.cat-anchor');
    if (anchorEl && 'ResizeObserver' in window) {
      ro = new ResizeObserver(update);
      ro.observe(anchorEl);
    }

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update);
      if (ro && anchorEl) ro.unobserve(anchorEl);
    };
  }, [left, right, mobileLeft, mobileRight, offsetX, offsetY, mOffsetX, mOffsetY]);

  return (
    <>
      <div ref={mobileRef} className="absolute z-10 pointer-events-none block md:hidden" style={{ bottom: '-2px' }}>
        <Player autoplay loop src="/cat.json" style={{ width: `${mobileSize}px`, height: `${mobileSize}px`, background: 'transparent' }} />
      </div>

      <div ref={desktopRef} className="absolute z-10 pointer-events-none hidden md:block" style={{ bottom: '-2px' }}>
        <Player autoplay loop src="/cat.json" style={{ width: `${size}px`, height: `${size}px`, background: 'transparent' }} />
      </div>
    </>
  );
}