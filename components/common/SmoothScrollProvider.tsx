'use client';

import React, { useEffect } from 'react';
import { smoothScroll } from '@/lib/smooth-scroll';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  useEffect(() => {
    smoothScroll.init();

    return () => {
      smoothScroll.destroy();
    };
  }, []);

  return <>{children}</>;
};
