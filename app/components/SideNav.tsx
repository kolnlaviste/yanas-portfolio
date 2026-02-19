'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function SideNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ─── DESKTOP: Fixed Side Nav ─── */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex fixed left-0 top-0 h-screen w-24 bg-white border-r border-champagne-300 flex-col items-center py-8 z-50"
      >
        {/* Logo */}
        <Link href="/" className="mb-16">
          <div className="w-12 h-12 bg-sage-500 flex items-center justify-center text-white font-bold text-xl hover:bg-sage-600 transition-colors">
            Y
          </div>
        </Link>

        {/* Vertical Links */}
        <div className="flex flex-col gap-12 items-center flex-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative group">
                <span
                  className={`text-sm tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'font-black text-espresso-950'   // dark + heavy when active
                      : 'font-semibold text-espresso-300 group-hover:text-espresso-600' // faded when inactive
                  }`}
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Pet at bottom */}
        <div className="mt-auto opacity-20">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="15" fill="#607860" />
            <circle cx="16" cy="18" r="2" fill="#2d2622" />
            <circle cx="24" cy="18" r="2" fill="#2d2622" />
            <path d="M20 23 L18 25 L22 25 Z" fill="#ed8b5e" />
          </svg>
        </div>
      </motion.nav>

      {/* ─── TABLET: Top bar with hamburger ─── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-champagne-300 z-50"
      >
        <div className="w-full max-w-6xl mx-auto relative h-full px-4">
          {/* Centered links */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wider uppercase transition-all duration-200 px-2 py-2 text-center ${
                    isActive
                      ? 'font-black text-espresso-950'
                      : 'font-semibold text-espresso-300 hover:text-espresso-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Menu button: absolutely positioned right */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-espresso-800 hover:text-sage-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ─── MOBILE: Bottom Navigation ─── */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-champagne-300 items-center z-50 overflow-hidden"
      >
        {/* Centered container so nav appears balanced on small screens */}
        <div className="w-full max-w-3xl mx-auto flex items-center justify-center gap-6 px-4">
          <Link href="/">
            <div className="w-8 h-8 bg-sage-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              Y
            </div>
          </Link>

          <div className="flex items-center justify-center gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-wider uppercase transition-all duration-200 px-2 py-2 text-center ${
                    isActive
                      ? 'font-black text-espresso-950'
                      : 'font-semibold text-espresso-300 hover:text-espresso-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* ─── TABLET: Dropdown Menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block lg:hidden fixed top-16 left-0 right-0 bg-white border-b border-champagne-300 z-40 shadow-lg"
          >
            <div className="flex flex-col px-8 py-4">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-4 text-sm tracking-wider uppercase border-b border-champagne-200 last:border-0 transition-all duration-200 ${
                      isActive
                        ? 'font-black text-espresso-950'
                        : 'font-semibold text-espresso-400 hover:text-espresso-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}