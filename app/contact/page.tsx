'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

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

      <section className="min-h-screen px-8 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
              Get In Touch
            </p>
            <h1 className="heading-xl mb-8">
              Let&apos;s Work<br />
              Together
            </h1>
            <div className="w-24 h-1 bg-sage-500"></div>
          </div>

          {/* Split Screen Content */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-8">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-bold text-espresso-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-champagne-300 focus:outline-none focus:border-sage-500 bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-bold text-espresso-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-champagne-300 focus:outline-none focus:border-sage-500 bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-bold text-espresso-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-champagne-300 focus:outline-none focus:border-sage-500 bg-white resize-none transition-colors"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="heading-md mb-6">Contact Info</h2>
                <div className="w-16 h-1 bg-sage-500 mb-8"></div>
                <p className="body-text mb-8">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate. Let&apos;s create something amazing together.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:hello@yana.com"
                  className="card p-6 flex items-center gap-4 border-l-4 border-l-sage-500 hover:border-l-sage-700 transition-all"
                >
                  <div className="w-12 h-12 border-2 border-espresso-900 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-espresso-500 mb-1">
                      Email
                    </p>
                    <p className="text-lg font-semibold text-espresso-900">hello@yana.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/yana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 flex items-center gap-4 border-l-4 border-l-peach-500 hover:border-l-peach-700 transition-all"
                >
                  <div className="w-12 h-12 border-2 border-espresso-900 flex items-center justify-center">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-espresso-500 mb-1">
                      Instagram
                    </p>
                    <p className="text-lg font-semibold text-espresso-900">@yana</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/yana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 flex items-center gap-4 border-l-4 border-l-lavender-500 hover:border-l-lavender-700 transition-all"
                >
                  <div className="w-12 h-12 border-2 border-espresso-900 flex items-center justify-center">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-espresso-500 mb-1">
                      LinkedIn
                    </p>
                    <p className="text-lg font-semibold text-espresso-900">Yana</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}