'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Briefcase } from 'lucide-react';

const expertise = [
  {
    icon: Briefcase,
    title: 'Strategic Consulting',
    description: 'Expert advisors with 20+ years in global capability center strategy',
  },
  {
    icon: Users,
    title: 'Talent Acquisition',
    description: 'Specialized recruiters with deep networks across India tech hubs',
  },
  {
    icon: Target,
    title: 'Operations Management',
    description: 'Seasoned operators who have scaled centers from 10 to 1000+ employees',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Cross-functional team with experience across fintech, healthcare, and SaaS',
  },
];

export const Team: React.FC = () => {
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
            Our Expertise
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-6">
            World-Class Team & Expertise
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            Our leadership team brings together decades of experience in building and scaling
            capability centers across India for global enterprises.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="text-xl font-heading font-bold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-grey leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
