'use client';

import { motion } from 'framer-motion';
import CatOnTop from '../components/CatOnTop';

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Coffee Branding',
    category: 'Brand Identity',
    image: '/portfolio/coffee-brand.jpg', // Placeholder
    description: 'Complete visual identity for a local coffee roaster including logo, color palette, and brand guidelines.',
    challenge: 'Create a modern yet warm aesthetic that appeals to coffee enthusiasts',
    solution: 'Developed a minimalist approach with warm earth tones and custom typography',
    tools: 'Figma, Adobe Illustrator',
  },
  {
    id: 2,
    title: 'Social Media Campaign',
    category: 'Social Strategy',
    image: '/portfolio/social-campaign.jpg',
    description: 'Strategic social media campaign with cohesive visual branding and content calendar.',
    challenge: 'Maintain visual consistency across multiple platforms while increasing engagement',
    solution: 'Created a comprehensive design system for posts, stories, and reels',
    tools: 'Figma, Canva',
  },
  {
    id: 3,
    title: 'Wellness Brand Design',
    category: 'Graphic Design',
    image: '/portfolio/wellness-brand.jpg',
    description: 'holistic brand identity for a wellness coaching service.',
    challenge: 'Convey professionalism, trust, and approachability simultaneously',
    solution: 'Balanced modern design elements with warm, welcoming colors',
    tools: 'Adobe XD, Illustrator',
  },
];

export default function Portfolio() {
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
              Portfolio — 2026
            </p>
            <h1 className="heading-xl mb-8">
              <span className="block relative inline-block">
                Featured
                <CatOnTop size={120} mobileSize={70} top={-66} mobileTop={-37} left={185} mobileLeft={130} />
              </span>
              <span className="block">Work</span>
            </h1>
            <div className="w-24 h-1 bg-sage-500 mb-8"></div>
            <p className="body-text max-w-2xl text-lg">
              Explore selected projects showcasing brand identity design, social media strategy, and creative direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 md:px-8 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:auto-cols-reverse' : ''
                }`}
              >
                {/* Image Placeholder */}
                <div className="h-96 bg-gradient-to-br from-sage-200 to-lavender-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-espresso-400">Project Image</p>
                    <p className="text-sm text-espresso-300 mt-2">{item.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-4">
                    {item.category}
                  </p>
                  <h2 className="heading-md mb-6">{item.title}</h2>
                  <div className="w-16 h-1 bg-sage-500 mb-6"></div>

                  <p className="body-text mb-8">{item.description}</p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-espresso-600 font-bold mb-2">
                        Challenge
                      </p>
                      <p className="text-sm text-espresso-700">{item.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-espresso-600 font-bold mb-2">
                        Solution
                      </p>
                      <p className="text-sm text-espresso-700">{item.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-espresso-600 font-bold mb-2">
                        Tools Used
                      </p>
                      <p className="text-sm text-espresso-700">{item.tools}</p>
                    </div>
                  </div>

                  <a href="/contact" className="btn-primary">
                    Start Similar Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 py-24 bg-gradient-to-br from-sage-50 to-lavender-50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">Ready for Your Project?</h2>
            <p className="body-text mb-8 max-w-2xl mx-auto">
              Whether you need a brand identity, social media strategy, or custom design work, I'm here to bring your vision to life.
            </p>
            <a href="/contact" className="btn-primary">
              Let's Talk
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
