'use client';

import { motion, Variants } from 'framer-motion';
import CatOnTop from './CatOnTop';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-6"
          >
            Portfolio — 2026
          </motion.p>

          {/* Heading - cat sits on top of "gn" in Design */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="heading-xl">
              Social<br />
              Media<br />
              {/* Cat lives inside this span — positioned on "gn" */}
              <span className="relative inline-block whitespace-nowrap">
                  & Design
                  <span className="cat-anchor">
                    <CatOnTop size={120} mobileSize={70} left={276} mobileLeft={197} offsetX={46} offsetY={-32} mobileOffsetX={40} mobileOffsetY={-42} />
                  </span>
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="w-24 h-1 bg-sage-500 mb-8" />

          {/* Description */}
          <motion.p variants={itemVariants} className="body-text max-w-xl mb-12">
            Strategic social media management and brand design for businesses that want to stand out.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a href="#work" className="btn-primary text-center">View Work</a>
            <a href="/contact" className="btn-secondary text-center">Get in Touch</a>
          </motion.div>

          {/* What I Offer */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-champagne-300"
          >
            <div>
              <p className="text-3xl md:text-4xl font-black text-sage-600 mb-1">Brand</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400 font-semibold">Identity Design</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-sage-600 mb-1">Social</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400 font-semibold">Content & Strategy</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-sage-600 mb-1">Custom</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400 font-semibold">Solutions</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}