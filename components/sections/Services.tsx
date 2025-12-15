'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Cpu, Shield, Rocket, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { staggerContainer, staggerItem } from '@/lib/animations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Building2,
    title: 'GCC Setup & Strategy',
    description: 'End-to-end capability center establishment from site selection to operational launch, tailored to your enterprise needs.',
  },
  {
    icon: Users,
    title: 'Talent Acquisition & Management',
    description: 'Access India\'s best tech talent with our proven recruitment processes and retention strategies.',
  },
  {
    icon: TrendingUp,
    title: 'Operations Excellence',
    description: 'Optimize your center\'s performance with world-class operational frameworks and continuous improvement.',
  },
  {
    icon: Cpu,
    title: 'Technology Integration',
    description: 'Seamlessly integrate cutting-edge technologies and platforms to enhance productivity and innovation.',
  },
  {
    icon: Shield,
    title: 'Compliance & Governance',
    description: 'Navigate complex regulatory landscapes with comprehensive compliance and risk management solutions.',
  },
  {
    icon: Rocket,
    title: 'Scaling & Optimization',
    description: 'Scale your operations efficiently while maintaining quality and driving continuous performance improvements.',
  },
];

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = gsap.utils.toArray('.sticky-service-card');
    const header = document.querySelector('.sticky-solutions-header');

    // Animate header to fade out and move up after last card
    if (header) {
      gsap.to(header, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom bottom+=500px',
          end: 'bottom bottom',
          scrub: true,
        }
      });
    }

    cards.forEach((card) => {
      const cardElement = card as HTMLElement;

      // Fade out each card as the next one comes in
      gsap.to(cardElement, {
        opacity: 0.6,
        scrollTrigger: {
          trigger: cardElement,
          start: 'top 100px',
          end: 'top 50px',
          scrub: 0.5,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="py-20 lg:py-32" style={{ backgroundColor: '#464545' }}>
      <div className="container-custom">
        {/* Section Header - Sticky on Desktop */}
        <div className="sticky-solutions-header hidden lg:block sticky top-20 z-50 py-8 mb-8" style={{ backgroundColor: '#464545' }}>
          <div className="text-center">
            <motion.p
              className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Solutions
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-white mb-6">
              Comprehensive Capability Center Services
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              From strategic planning to operational excellence, we deliver integrated solutions
              that transform your India capability center into a competitive advantage.
            </p>
          </div>
        </div>

        {/* Section Header - Mobile/Tablet (Not Sticky) */}
        <ScrollReveal>
          <div className="lg:hidden text-center mb-16">
            <motion.p
              className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Solutions
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-white mb-6">
              Comprehensive Capability Center Services
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              From strategic planning to operational excellence, we deliver integrated solutions
              that transform your India capability center into a competitive advantage.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Stacking Cards */}
        <div className="hidden lg:block">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="sticky-service-card sticky mb-8"
              style={{ top: `${280 + index * 30}px`, zIndex: index + 1 }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Card Index Number */}
                  <div className="absolute -left-24 top-1/2 -translate-y-1/2">
                    <span className="text-9xl font-heading font-bold text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Card Image */}
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src="/service-card-image.png"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Text Content */}
                    <div className="p-12">
                      {/* Content */}
                      <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <button className="flex items-center text-primary font-semibold text-lg group">
                        <span className="mr-2">Learn More</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Stacking Cards */}
        <div className="lg:hidden">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="sticky-service-card sticky mb-8"
              style={{ top: `${80 + index * 20}px`, zIndex: index + 1 }}
            >
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  {/* Card Index Number */}
                  <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2">
                    <span className="text-6xl md:text-8xl font-heading font-bold text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Card Image */}
                    <div className="w-full h-40 md:h-48 overflow-hidden">
                      <img
                        src="/service-card-image.png"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Text Content */}
                    <div className="p-6 md:p-8">
                      {/* Content */}
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <button className="flex items-center text-primary font-semibold text-base md:text-lg group">
                        <span className="mr-2">Learn More</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
