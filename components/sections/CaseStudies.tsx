'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, DollarSign } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

const caseStudies = [
  {
    title: 'Global Tech Company',
    industry: 'Technology',
    description: 'Built a 500-person engineering center in Bangalore from ground up in 8 months.',
    results: [
      { icon: Users, label: '500+ Engineers', value: 'Hired' },
      { icon: Clock, label: '8 Months', value: 'Time to Launch' },
      { icon: DollarSign, label: '40% Cost Savings', value: 'Achieved' },
    ],
    tag: 'Featured',
    gradient: 'from-primary to-primary-dark',
  },
  {
    title: 'Fortune 500 BFSI',
    industry: 'Financial Services',
    description: 'Accelerated setup timeline by 60% while maintaining compliance excellence.',
    results: [
      { icon: Clock, label: '60% Faster', value: 'Setup Time' },
      { icon: Users, label: '300+ Professionals', value: 'Placed' },
      { icon: DollarSign, label: '100% Compliance', value: 'Maintained' },
    ],
    gradient: 'from-gold to-primary',
  },
  {
    title: 'Healthcare Leader',
    industry: 'Healthcare',
    description: 'Optimized operations achieving $2M in annual cost savings while scaling.',
    results: [
      { icon: DollarSign, label: '$2M Annual', value: 'Savings' },
      { icon: Users, label: '200+ Team', value: 'Members' },
      { icon: Clock, label: '30% Efficiency', value: 'Gain' },
    ],
    gradient: 'from-charcoal to-black',
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="section-padding bg-vapor">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p
              className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Success Stories
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-6">
              Delivering Measurable Impact
            </h2>
            <p className="text-lg text-grey max-w-3xl mx-auto">
              See how we&apos;ve helped leading enterprises build and optimize their India capability centers.
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.title} delay={index * 0.1}>
              <motion.div
                className="group relative h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Tag */}
                {study.tag && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      {study.tag}
                    </span>
                  </div>
                )}

                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${study.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-white/80 text-sm font-medium">{study.industry}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-black mb-3 group-hover:text-primary transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-grey mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <result.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-black">{result.label}</p>
                          <p className="text-sm text-grey">{result.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="flex items-center text-primary font-medium group/link">
                    <span className="mr-2">Read Full Case Study</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </button>
                </div>

                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
