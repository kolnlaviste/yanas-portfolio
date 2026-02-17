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
    <section className="min-h-screen flex items-center px-6 md:px-12 py-24">
      <div className="max-w-5xl w-full">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-6"
          >
            Portfolio — 2024
          </motion.p>

          {/* Heading - cat is inside the last line span so positioning is always relative to it */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="heading-xl">
              Social<br />
              Media<br />
              {/* Cat lives inside this span — right edge of "& Design" */}
              <span className="relative inline-block whitespace-nowrap">
                & Design
                <CatOnTop size={120} mobileSize={70} top={-66} mobileTop={-37} right={25} mobileRight={20}/>
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

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-champagne-300"
          >
            <div>
              <p className="text-3xl md:text-4xl font-black text-espresso-950 mb-1">50+</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400 font-semibold">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-espresso-950 mb-1">30+</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400 font-semibold">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-espresso-950 mb-1">3+</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400 font-semibold">Years Experience</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}