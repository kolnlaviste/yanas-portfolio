'use client';

import { motion } from 'framer-motion';
import CornerPet from '../components/CornerPet';

export default function About() {
  return (
    <>
      <CornerPet type="guinea-pig" corner="top-right" />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center px-8 py-24">
        <div className="max-w-5xl">
          <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
            About Me
          </p>
          <h1 className="heading-xl mb-8">
            Creative<br />
            Professional
          </h1>
          <div className="w-24 h-1 bg-sage-500 mb-8"></div>
          <p className="body-text max-w-2xl text-xl">
            I bring brands to life through thoughtful design and strategic social media.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">Background</h2>
              <div className="w-16 h-1 bg-sage-500 mb-6"></div>
              <p className="body-text mb-4">
                With a passion for both design and storytelling, I specialize in creating cohesive brand identities and managing social media presence for businesses that want to stand out.
              </p>
              <p className="body-text">
                My approach combines strategic thinking with aesthetic sensibility to deliver results that resonate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">Philosophy</h2>
              <div className="w-16 h-1 bg-sage-500 mb-6"></div>
              <p className="body-text mb-4">
                Every brand has a unique story. My job is to help you tell it in a way that captures attention and builds lasting connections.
              </p>
              <p className="body-text">
                I believe great design should be both beautiful and functional, and social media should feel authentic, not forced.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
              What I Do
            </p>
            <h2 className="heading-lg mb-8">Services</h2>
            <div className="w-24 h-1 bg-sage-500 mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8 border-l-4 border-l-sage-500">
                <h3 className="text-xl font-bold uppercase mb-4 text-espresso-950">
                  Graphic Design
                </h3>
                <ul className="space-y-3 body-text">
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Brand Identity & Logos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Print & Digital Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Editorial Layouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Marketing Materials</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8 border-l-4 border-l-peach-500">
                <h3 className="text-xl font-bold uppercase mb-4 text-espresso-950">
                  Social Media VA
                </h3>
                <ul className="space-y-3 body-text">
                  <li className="flex items-start gap-3">
                    <span className="text-peach-600 font-bold">—</span>
                    <span>Content Strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-peach-600 font-bold">—</span>
                    <span>Community Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-peach-600 font-bold">—</span>
                    <span>Campaign Planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-peach-600 font-bold">—</span>
                    <span>Analytics & Reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Personal Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="heading-md mb-6">Beyond Work</h2>
            <div className="w-16 h-1 bg-sage-500 mb-6"></div>
            <p className="body-text">
              When I&apos;m not designing or managing social media, you&apos;ll find me with my cats and guinea pigs, exploring nature, or discovering new creative inspiration. Balance is key to creativity.
            </p>
          </motion.div>
        </div>
      </section>

    </>
  );
}