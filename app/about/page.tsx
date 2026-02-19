'use client';

import { motion } from 'framer-motion';
import CatOnTop from '../components/CatOnTop';
import PolaroidGrid from '../components/PolaroidGrid';

export default function About() {
  return (
    <>

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center px-4 md:px-8 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
              About Me — 2026
            </p>

            {/* Name with cat on top */}
            <div className="relative inline-block mb-8">
              <h1 className="heading-xl">
                Aeannah<br />
                <span className="relative inline-block cat-anchor">
                  Llaguno
                  <CatOnTop size={120} mobileSize={70} left={320} mobileLeft={234} offsetY={-107} mobileOffsetY={-128} />
                </span>
              </h1>
            </div>

            <div className="w-24 h-1 bg-sage-500 mb-8"></div>
            <p className="body-text max-w-2xl text-xl">
              I bring brands to life through thoughtful design and strategic social media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-4 md:px-8 py-24 overflow-hidden">
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
                With a background in recruitment and talent management, I've developed strong organizational, communication, and project management skills. I've channeled that expertise into social media management and graphic design, allowing me to deliver both strategic creative solutions and reliable operational support.
              </p>
              <p className="body-text">
                I understand what it takes to manage multiple priorities, communicate effectively with stakeholders, and deliver results under pressure. Whether you need design work, social media strategy, or comprehensive VA support—I bring professionalism, attention to detail, and a solutions-oriented mindset to every project.
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
                I believe in being proactive, detail-oriented, and easy to work with. I show up prepared, meet deadlines, and communicate clearly throughout every project.
              </p>
              <p className="body-text">
                Every brand deserves design that's both beautiful and functional, and content that feels authentic. I'm committed to understanding client goals and delivering work that creates real impact.
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

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
              Toolkit
            </p>
            <h2 className="heading-lg mb-8">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-sage-500 mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Design Tools */}
              <div className="card p-8 border-l-4 border-l-peach-500">
                <h3 className="text-xl font-bold uppercase mb-6 text-espresso-950">
                  Design Tools
                </h3>
                <ul className="space-y-3 body-text">
                  <li className="flex items-start gap-3">
                    <span className="text-peach-600 font-bold">—</span>
                    <span>Figma (Advanced)</span>
                  </li>
                </ul>
                <p className="text-sm text-espresso-600 mt-6 italic">
                  Specialized in component design, prototyping, and design systems using Figma.
                </p>
              </div>

              {/* Social & Content */}
              <div className="card p-8 border-l-4 border-l-lavender-500">
                <h3 className="text-xl font-bold uppercase mb-6 text-espresso-950">
                  Social Media
                </h3>
                <ul className="space-y-3 body-text">
                  <li className="flex items-start gap-3">
                    <span className="text-lavender-600 font-bold">—</span>
                    <span>Instagram Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lavender-600 font-bold">—</span>
                    <span>TikTok Strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lavender-600 font-bold">—</span>
                    <span>LinkedIn Content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lavender-600 font-bold">—</span>
                    <span>Content Scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lavender-600 font-bold">—</span>
                    <span>Community Engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lavender-600 font-bold">—</span>
                    <span>Copywriting</span>
                  </li>
                </ul>
              </div>

              {/* Professional Skills */}
              <div className="card p-8 border-l-4 border-l-sage-500">
                <h3 className="text-xl font-bold uppercase mb-6 text-espresso-950">
                  Professional
                </h3>
                <ul className="space-y-3 body-text">
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Project Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Client Communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Organization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Attention to Detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Time Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">—</span>
                    <span>Team Collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Beyond Work with Polaroids */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mb-20"
          >
            <h2 className="heading-md mb-6">Beyond Work</h2>
            <div className="w-16 h-1 bg-sage-500 mb-6"></div>
            <p className="body-text mb-12">
              When I&apos;m not designing or managing social media, you&apos;ll find me with my cats and guinea pigs, exploring nature, or discovering new creative inspiration. Balance is key to creativity.
            </p>

            <PolaroidGrid />
          </motion.div>

          {/* Resume Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-champagne-300 pt-16 max-w-5xl"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
              Want to work together?
            </p>
            <h2 className="heading-lg mb-6">Let&apos;s make it official.</h2>
            <div className="w-24 h-1 bg-sage-500 mb-8"></div>
            <p className="body-text mb-8 max-w-2xl">
              Download my resume to see my full work experience, skills, and accomplishments.
            </p>
            <a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </motion.div>

        </div>
      </section>

    </>
  );
}