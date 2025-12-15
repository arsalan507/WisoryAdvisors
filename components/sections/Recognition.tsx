'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Star, TrendingUp } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Quality Management Systems',
  },
  {
    icon: Shield,
    title: 'ISO 27001',
    description: 'Information Security Management',
  },
  {
    icon: Star,
    title: 'Great Place to Work',
    description: 'Certified Workplace 2024',
  },
  {
    icon: TrendingUp,
    title: 'Industry Leader',
    description: 'Top GCC Consulting Firm - India 2024',
  },
];

const awards = [
  'Best GCC Setup Partner - NASSCOM 2024',
  'Excellence in Talent Acquisition - HR Tech Awards',
  'Top 10 Consulting Firms - Business Today',
  'Innovation in Capability Centers - CII Excellence',
];

export const Recognition: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-vapor">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Recognition & Trust
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-6">
            Industry Recognition & Certifications
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications
            and prestigious awards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <cert.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-lg font-heading font-bold text-black mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-grey">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Awards List */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-black mb-8 text-center">
            Recent Awards & Accolades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-white rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                <p className="text-grey font-medium">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
