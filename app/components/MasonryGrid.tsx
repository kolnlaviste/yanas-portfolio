'use client';

import { motion } from 'framer-motion';

const workItems = [
  { id: 1, title: 'Brand Identity', category: 'Design', height: 'h-80' },
  { id: 2, title: 'Social Campaign', category: 'Social Media', height: 'h-96' },
  { id: 3, title: 'Editorial Layout', category: 'Design', height: 'h-72' },
  { id: 4, title: 'Content Strategy', category: 'Social Media', height: 'h-80' },
  { id: 5, title: 'Logo Suite', category: 'Design', height: 'h-64' },
  { id: 6, title: 'Instagram Reels', category: 'Social Media', height: 'h-96' },
  { id: 7, title: 'Brand Guidelines', category: 'Design', height: 'h-72' },
  { id: 8, title: 'TikTok Series', category: 'Social Media', height: 'h-80' },
];

export default function MasonryGrid() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {workItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="break-inside-avoid mb-6"
        >
          <div className="card group cursor-pointer overflow-hidden">
            {/* Image placeholder with gradient */}
            <div className={`${item.height} bg-gradient-to-br from-sage-200 via-lavender-200 to-peach-200 relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-espresso-300 text-sm uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-espresso-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 border-t border-champagne-200">
              <p className="text-xs uppercase tracking-widest text-sage-600 font-semibold mb-2">
                {item.category}
              </p>
              <h3 className="text-lg font-bold text-espresso-950 uppercase tracking-tight">
                {item.title}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}