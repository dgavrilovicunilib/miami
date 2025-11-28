import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /* Delay in milliseconds */
  delay?: number;
  /* Animation style */
  mode?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'blur' | 'pop';
  /* Custom class names */
  className?: string;
  /* Threshold 0-1 */
  threshold?: number;
  /* If true, animation repeats when scrolling up/down */
  repeat?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  mode = 'fade-up',
  className = '',
  threshold = 0.15,
  repeat = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!repeat && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (repeat) {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, repeat]);

  const getTransformClass = () => {
    switch (mode) {
      case 'fade-up': return 'translate-y-20 opacity-0';
      case 'fade-down': return '-translate-y-20 opacity-0';
      case 'fade-left': return 'translate-x-20 opacity-0';
      case 'fade-right': return '-translate-x-20 opacity-0';
      case 'zoom': return 'scale-90 opacity-0';
      case 'pop': return 'scale-50 opacity-0';
      case 'blur': return 'blur-sm opacity-0 translate-y-4';
      default: return 'translate-y-20 opacity-0';
    }
  };

  const getVisibleClass = () => {
     switch (mode) {
      case 'blur': return 'blur-0 opacity-100 translate-y-0';
      default: return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    }
  };

  const getDuration = () => {
    if (mode === 'blur') return 'duration-1000';
    if (mode === 'pop') return 'duration-500';
    return 'duration-1000';
  };

  return (
    <div
      ref={ref}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${getDuration()} ${className} ${
        isVisible ? getVisibleClass() : getTransformClass()
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' // Custom easing for "wow" feel
      }}
    >
      {children}
    </div>
  );
};