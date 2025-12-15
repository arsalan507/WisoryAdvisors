'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const mentions = [
  {
    publication: 'The Economic Times',
    quote: 'Wisory Global is revolutionizing how global enterprises establish capability centers in India.',
    date: 'March 2024',
    logo: '/logos/et.png', // Placeholder
  },
  {
    publication: 'Forbes India',
    quote: 'A game-changer in the GCC consulting space with proven expertise in scaling operations.',
    date: 'February 2024',
    logo: '/logos/forbes.png', // Placeholder
  },
  {
    publication: 'Business Standard',
    quote: 'Setting new standards for operational excellence in India capability centers.',
    date: 'January 2024',
    logo: '/logos/bs.png', // Placeholder
  },
  {
    publication: 'YourStory',
    quote: 'Bridging the gap between global vision and local execution with unmatched expertise.',
    date: 'December 2023',
    logo: '/logos/yourstory.png', // Placeholder
  },
];

export const MediaMentions: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            In The News
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-6">
            Media Mentions & Press
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            Leading publications recognize our impact in transforming India&apos;s
            capability center landscape.
          </p>
        </div>

        {/* Media Mentions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mentions.map((mention, index) => (
            <motion.div
              key={mention.publication}
              className="bg-vapor rounded-xl p-8 border border-grey/10 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-grey italic text-lg leading-relaxed mb-4">
                &ldquo;{mention.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-black">
                    {mention.publication}
                  </p>
                  <p className="text-sm text-grey">{mention.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Kit CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="inline-flex items-center text-primary font-semibold text-lg hover:underline">
            Download Press Kit
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
