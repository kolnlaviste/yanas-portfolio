'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
  {
    src: '/photos/beyond-1.jpg',
    caption: 'exploring 🌿',
    rotate: '-3deg',
    delay: 0,
  },
  {
    src: '/photos/beyond-2.jpg',
    caption: 'my babies 🐱',
    rotate: '2deg',
    delay: 0.1,
  },
  {
    src: '/photos/beyond-3.jpg',
    caption: 'golden hour ✨',
    rotate: '-1.5deg',
    delay: 0.2,
  },
  {
    src: '/photos/beyond-4.jpg',
    caption: 'good days 🌸',
    rotate: '2.5deg',
    delay: 0.3,
  },
];

export default function PolaroidGrid() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {photos.map((photo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: photo.delay }}
          whileHover={{
            rotate: '0deg',
            scale: 1.05,
            zIndex: 10,
            transition: { duration: 0.2 },
          }}
          style={{ rotate: photo.rotate }}
          className="bg-white p-3 pb-10 shadow-md cursor-pointer relative"
        >
          {/* Photo area */}
          <div className="w-48 h-48 bg-champagne-200 relative overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover"
              // Remove the line below once real photos are added
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            {/* Placeholder shown when no image */}
            <div className="absolute inset-0 flex items-center justify-center text-espresso-300 text-xs uppercase tracking-wider font-semibold">
              Photo {i + 1}
            </div>
          </div>

          {/* Caption */}
          <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-espresso-500 font-medium tracking-wide">
            {photo.caption}
          </p>
        </motion.div>
      ))}
    </div>
  );
}