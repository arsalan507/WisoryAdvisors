'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Shield } from 'lucide-react';

const capabilities = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'We help you define the vision, scope, and roadmap for your India capability center aligned with global business objectives.',
    features: [
      'Market entry strategy',
      'Location selection',
      'Business case development',
      'Governance framework design',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Setup & Launch',
    description: 'End-to-end execution support from legal entity formation to operational launch within 90 days.',
    features: [
      'Entity registration',
      'Office infrastructure',
      'Technology setup',
      'Initial team recruitment',
    ],
  },
  {
    icon: Rocket,
    title: 'Scale & Optimize',
    description: 'Accelerate growth while maintaining quality through proven methodologies and best practices.',
    features: [
      'Talent pipeline development',
      'Process optimization',
      'Performance metrics',
      'Culture building',
    ],
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: 'Continuous advisory and operational support to ensure sustained success and competitive advantage.',
    features: [
      'Strategic advisory',
      'Compliance management',
      'Change management',
      'Innovation programs',
    ],
  },
];

export const WhatWeDo: React.FC = () => {
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
            What We Do
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-6">
            Comprehensive GCC Solutions
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            From initial strategy to operational excellence, we provide end-to-end solutions
            to establish and scale your India capability center.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="bg-vapor rounded-xl p-8 border border-grey/10 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <capability.icon className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-2xl font-heading font-bold text-black mb-4">
                {capability.title}
              </h3>

              <p className="text-grey leading-relaxed mb-6">
                {capability.description}
              </p>

              <div className="space-y-2">
                {capability.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <p className="text-grey text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-grey mb-6">
            Ready to transform your India strategy into measurable outcomes?
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};
