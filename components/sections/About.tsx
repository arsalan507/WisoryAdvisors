'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Target, Users2, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';

const stats = [
  { icon: Building2, value: 50, suffix: '+', label: 'Capability Centers Built' },
  { icon: Users2, value: 200, suffix: '+', label: 'Enterprise Clients' },
  { icon: Target, value: 5000, suffix: '+', label: 'Professionals Placed' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Retention Rate' },
];

// Import Building2 from lucide-react
import { Building2 } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(startValue + (end - startValue) * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="grid-pattern w-full h-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal variant="slideInLeft">
            <div>
              <motion.p
                className="text-primary font-medium text-sm md:text-base tracking-wider uppercase mb-4"
                variants={fadeInUp}
              >
                Why Wisory Global
              </motion.p>
              <h2 className="text-4xl md:text-5xl lg:text-h2 font-heading font-bold text-black mb-6">
                Your Trusted Partner for India Capability Centers
              </h2>
              <div className="space-y-4 text-grey text-lg leading-relaxed mb-8">
                <p>
                  With deep expertise in the Indian market and global best practices, Wisory Global
                  stands at the intersection of strategic vision and operational excellence.
                </p>
                <p>
                  We don&apos;t just build capability centers—we create innovation engines that drive
                  sustained competitive advantage for global enterprises. Our proven methodology
                  combines local market knowledge with international standards to deliver centers
                  that exceed expectations.
                </p>
                <p>
                  From Fortune 500 companies to emerging tech leaders, our clients trust us to
                  transform their India strategy into measurable business outcomes.
                </p>
              </div>

              {/* Key Differentiators */}
              <div className="space-y-4">
                {[
                  'Deep India market expertise with global perspective',
                  'Proven track record across industries',
                  'End-to-end support from strategy to operations',
                  'Focus on measurable business outcomes',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-grey">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Image */}
          <ScrollReveal variant="slideInRight">
            <div className="relative">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/why-wisory-bg.png"
                  alt="Why Wisory Global"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-vapor rounded-lg p-6 text-center border border-grey/10 hover:border-primary/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="text-4xl font-heading font-bold text-black mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-grey font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
