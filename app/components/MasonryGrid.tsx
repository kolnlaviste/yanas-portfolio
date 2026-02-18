'use client';

import { motion } from 'framer-motion';

const workItems = [
  { id: 1, title: 'Brand Identity', category: 'Design', height: 'h-80', color: 'from-sage-200 to-lavender-200', description: 'Logo, color palette & brand guidelines' },
  { id: 2, title: 'Social Campaigns', category: 'Social Media', height: 'h-96', color: 'from-peach-200 to-champagne-300', description: 'Content strategy & visual planning' },
  { id: 3, title: 'Design Layouts', category: 'Design', height: 'h-72', color: 'from-lavender-200 to-peach-200', description: 'Print & digital design assets' },
  { id: 4, title: 'Content Strategy', category: 'Social Media', height: 'h-80', color: 'from-champagne-200 to-sage-200', description: 'Planning & scheduling for growth' },
  { id: 5, title: 'Visual System', category: 'Design', height: 'h-64', color: 'from-sage-100 to-lavender-300', description: 'Comprehensive design systems' },
  { id: 6, title: 'Community Growth', category: 'Social Media', height: 'h-96', color: 'from-peach-100 to-lavender-200', description: 'Engagement & follower strategy' },
];

export default function MasonryGrid() {
  return (
    <div className="w-full overflow-hidden">
      <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
        {workItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="break-inside-avoid mb-6"
          >
            <div className="card group cursor-pointer overflow-hidden">
              {/* Image placeholder */}
              <div className={`${item.height} bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-espresso-950 opacity-0 group-hover:opacity-40 transition-all duration-500" />

                {/* Hover text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-xs uppercase tracking-widest font-bold border border-white px-4 py-2">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between border-t border-champagne-200 group-hover:border-sage-400 transition-colors duration-300">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-bold text-espresso-950 uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-espresso-600">{item.description}</p>
                </div>
                <motion.div
                  className="w-8 h-8 border-2 border-espresso-300 flex items-center justify-center text-espresso-400 group-hover:border-sage-500 group-hover:text-sage-600 transition-colors duration-300"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}