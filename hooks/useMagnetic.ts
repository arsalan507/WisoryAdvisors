'use client';

import { useRef, useEffect } from 'react';

interface MagneticOptions {
  strength?: number;
  tolerance?: number;
}

export const useMagnetic = (options: MagneticOptions = {}) => {
  const { strength = 0.3, tolerance = 0.8 } = options;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = (rect.width / 2) * tolerance;

      if (distance < maxDistance) {
        const translateX = deltaX * strength;
        const translateY = deltaY * strength;
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, tolerance]);

  return ref;
};
