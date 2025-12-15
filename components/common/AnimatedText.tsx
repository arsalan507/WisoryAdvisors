'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { splitText } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'character' | 'word';
  delay?: number;
  duration?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  type = 'character',
  delay = 0,
  duration = 0.5,
}) => {
  const items = type === 'character' ? splitText(text) : text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'character' ? 0.03 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      className={cn('inline-block', className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((char, index) => (
        <motion.span
          key={index}
          variants={item}
          className="inline-block"
          style={{ whiteSpace: type === 'word' && char !== '' ? 'normal' : 'pre' }}
        >
          {char === ' ' && type === 'character' ? '\u00A0' : char}
          {type === 'word' && index < items.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
};
