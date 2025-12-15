'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  tolerance?: number;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  strength = 0.3,
  tolerance = 2,
  onClick,
}) => {
  const magneticRef = useMagnetic({ strength, tolerance });

  return (
    <motion.div
      ref={magneticRef as any}
      className={cn('inline-block cursor-pointer', className)}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{ transition: 'transform 0.3s ease-out' }}
    >
      {children}
    </motion.div>
  );
};
