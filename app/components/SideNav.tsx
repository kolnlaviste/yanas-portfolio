'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SideNav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-24 bg-white border-r border-champagne-300 flex flex-col items-center py-8 z-50"
    >
      {/* Logo */}
      <Link href="/" className="mb-16">
        <div className="w-12 h-12 bg-sage-500 flex items-center justify-center text-white font-bold text-xl">
          Y
        </div>
      </Link>

      {/* Navigation Links - Vertical */}
      <div className="flex flex-col gap-12 items-center flex-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative group"
          >
            <span
              className={`writing-mode-vertical text-sm font-semibold tracking-wider uppercase transition-colors ${
                pathname === link.href
                  ? 'text-sage-600'
                  : 'text-espresso-400 hover:text-sage-600'
              }`}
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {link.label}
            </span>
            {pathname === link.href && (
              <motion.div
                layoutId="activeLinkSide"
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-1 h-8 bg-sage-500"
              />
            )}
          </Link>
        ))}
      </div>

      {/* Pet decoration at bottom */}
      <div className="mt-auto opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="15" fill="currentColor" className="text-sage-400" />
          <circle cx="16" cy="18" r="2" fill="currentColor" className="text-espresso-900" />
          <circle cx="24" cy="18" r="2" fill="currentColor" className="text-espresso-900" />
          <path d="M20 23 L18 25 L22 25 Z" fill="currentColor" className="text-peach-500" />
        </svg>
      </div>
    </motion.nav>
  );
}