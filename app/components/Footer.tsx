'use client';

import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';
import WalkingDog from './WalkingDog';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Dog walks along this line — it's the footer top border */}
      <div className="border-t border-champagne-300 relative">
        <WalkingDog />

        <div className="container mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Left: Logo + Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-8 h-8 bg-sage-500 flex items-center justify-center text-white font-bold text-sm">
                Y
              </div>
              <p className="text-xs uppercase tracking-wider text-espresso-500 font-semibold">
                © 2026 Yana. All Rights Reserved.
              </p>
            </div>

            {/* Right: Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/yanallaguno"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border-2 border-espresso-200 flex items-center justify-center text-espresso-400 hover:bg-sage-500 hover:border-sage-500 hover:text-white transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/aeannah-llaguno/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border-2 border-espresso-200 flex items-center justify-center text-espresso-400 hover:bg-sage-500 hover:border-sage-500 hover:text-white transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:yana.llaguno815@gmail.com"
                aria-label="Email"
                className="w-10 h-10 border-2 border-espresso-200 flex items-center justify-center text-espresso-400 hover:bg-sage-500 hover:border-sage-500 hover:text-white transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}