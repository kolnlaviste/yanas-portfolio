'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import CatOnTop from '../components/CatOnTop';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero - Left-aligned to match About page */}
      <section className="min-h-[60vh] flex items-center px-4 md:px-8 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
              Get In Touch — 2026
            </p>
            <h1 className="heading-xl mb-8">
              <span className="block">Let&apos;s</span>
              <span className="block relative inline-block">
                Build
                <CatOnTop size={120} mobileSize={70} top={-66} mobileTop={-37} left={110} mobileLeft={80} />
              </span>
              <span className="block">Dreams</span>
            </h1>
            <div className="w-24 h-1 bg-sage-500 mb-8"></div>
            <p className="body-text max-w-2xl text-xl">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 md:px-8 py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-16">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-12"
            >
              <div>
                <h2 className="heading-md mb-8">Connect With Me</h2>
                <div className="w-16 h-1 bg-sage-500 mb-8"></div>
                <p className="body-text">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <a
                  href="mailto:yana.llaguno815@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-espresso-300 flex items-center justify-center group-hover:border-sage-500 group-hover:text-sage-600 transition-all">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-1">Email</p>
                    <p className="text-lg text-espresso-900">yana.llaguno815@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/yanallaguno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-espresso-300 flex items-center justify-center group-hover:border-sage-500 group-hover:text-sage-600 transition-all">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-1">Instagram</p>
                    <p className="text-lg text-espresso-900">@yanallaguno</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/aeannah-llaguno/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-espresso-300 flex items-center justify-center group-hover:border-sage-500 group-hover:text-sage-600 transition-all">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-1">LinkedIn</p>
                    <p className="text-lg text-espresso-900">Yana</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
            >
              <h2 className="heading-md mb-8">Send a Message</h2>
              <div className="w-16 h-1 bg-sage-500 mb-8"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-espresso-600 font-bold block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-espresso-200 px-4 py-3 text-sm focus:border-sage-500 focus:outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-espresso-600 font-bold block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-espresso-200 px-4 py-3 text-sm focus:border-sage-500 focus:outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-espresso-600 font-bold block mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-2 border-espresso-200 px-4 py-3 text-sm focus:border-sage-500 focus:outline-none transition-colors bg-white resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}