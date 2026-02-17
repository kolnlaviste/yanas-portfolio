'use client';

import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-champagne-300 py-8 ml-24">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-xs uppercase tracking-wider text-espresso-500 font-semibold">
            © 2024 Yana. All Rights Reserved.
          </p>

          {/* Social Links - Horizontal, minimal */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/yana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 border-2 border-espresso-900 flex items-center justify-center hover:bg-sage-500 hover:border-sage-500 hover:text-white transition-all duration-200"
            >
              <Instagram size={18} />
            </a>
            
            <a
              href="https://linkedin.com/in/yana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 border-2 border-espresso-900 flex items-center justify-center hover:bg-sage-500 hover:border-sage-500 hover:text-white transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            
            <a
              href="https://facebook.com/yana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 border-2 border-espresso-900 flex items-center justify-center hover:bg-sage-500 hover:border-sage-500 hover:text-white transition-all duration-200"
            >
              <Facebook size={18} />
            </a>
            
            <a
              href="mailto:hello@yana.com"
              aria-label="Email"
              className="w-10 h-10 border-2 border-espresso-900 flex items-center justify-center hover:bg-sage-500 hover:border-sage-500 hover:text-white transition-all duration-200"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}