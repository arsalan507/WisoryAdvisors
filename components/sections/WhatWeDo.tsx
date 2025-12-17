'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, LifeBuoy } from 'lucide-react';

const capabilities = [
  {
    number: '1',
    icon: Target,
    title: 'Strategic Planning',
    description: 'We help you define the vision, scope, and roadmap for your India capability center aligned with global business objectives. Market entry strategy, Location selection, Business case development, Governance framework design.',
  },
  {
    number: '2',
    icon: Lightbulb,
    title: 'Setup & Launch',
    description: 'End-to-end execution support from legal entity formation to operational launch within 90 days. Entity registration, office infrastructure, Technology setup, Initial team recruitment.',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Scale & Optimize',
    description: 'Accelerate growth while maintaining quality through proven methodologies and best practices. Talent pipeline development, Process optimization, Performance metrics, Culture building.',
  },
  {
    number: '4',
    icon: LifeBuoy,
    title: 'Ongoing Support',
    description: 'Continuous advisory and operational support to ensure sustained success and competitive advantage. Strategic advisory, Compliance management, Change management, Innovation programs.',
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
              className="group relative bg-vapor rounded-xl p-8 border border-grey/10 hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Hover Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <capability.icon className="w-12 h-12 text-primary" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-black mb-4">
                  {capability.title}
                </h3>

                <p className="text-grey leading-relaxed">
                  {capability.description}
                </p>
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
