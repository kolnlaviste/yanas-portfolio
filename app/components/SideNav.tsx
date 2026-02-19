'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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

  // Subtle staggered animation
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: -10 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <>
      {/* ─── DESKTOP: Fixed Side Nav ─── */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex fixed left-0 top-0 h-screen w-24 bg-white border-r border-champagne-300 flex-col items-center py-8 z-50"
      >
        {/* Vertical Links */}
        <div className="flex flex-col gap-12 items-center flex-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative group">
                <span
                  className={`text-sm tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'font-black text-espresso-950'
                      : 'font-semibold text-espresso-300 group-hover:text-espresso-600'
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

      {/* ─── TABLET & MOBILE: Top bar with hamburger ─── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-champagne-300 z-50"
      >
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-end">
          {/* Hamburger button */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-espresso-800 hover:text-sage-600 transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* ─── MOBILE & TABLET: Minimal Dropdown Menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Subtle backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-espresso-950/10 z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden fixed top-16 left-0 right-0 bg-white border-b border-champagne-300 shadow-lg z-40"
            >
              <div className="max-w-6xl mx-auto px-6 py-8">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="group block py-4 border-b border-champagne-200 last:border-0"
                      >
                        <div className="flex items-center justify-between">
                          {/* Label */}
                          <span className={`
                            text-lg tracking-wider uppercase transition-all duration-200
                            ${isActive 
                              ? 'font-black text-espresso-950' 
                              : 'font-semibold text-espresso-400 group-hover:text-espresso-800'
                            }
                          `}>
                            {link.label}
                          </span>

                          {/* Indicator */}
                          <div className="flex items-center gap-3">
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full bg-sage-500"
                              />
                            )}
                            
                            {/* Line accent */}
                            <motion.div 
                              className={`h-px transition-all duration-300 ${
                                isActive 
                                  ? 'w-12 bg-sage-500' 
                                  : 'w-8 bg-champagne-300 group-hover:w-12 group-hover:bg-sage-400'
                              }`}
                            />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}