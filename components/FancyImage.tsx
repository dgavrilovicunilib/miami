import React, { useEffect, useRef, useState } from 'react';

interface FancyImageProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'left' | 'right';
}

export const FancyImage: React.FC<FancyImageProps> = ({ 
  src, 
  alt, 
  className = '',
  direction = 'left' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* The Image itself - scales down from 1.3 to 1.0 */}
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out grayscale-[20%] hover:grayscale-0 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      />

      {/* The "Curtain" - slides away to reveal image. Updated to Gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 z-10 transition-transform duration-[1.2s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isVisible 
            ? (direction === 'left' ? '-translate-x-full' : 'translate-x-full') 
            : 'translate-x-0'
        }`}
      />
      
      {/* Optional: A subtle sheen effect that passes through after reveal */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-20 transition-transform duration-[1.5s] delay-700 ${
          isVisible ? 'translate-x-full' : '-translate-x-full'
        }`} 
      />
    </div>
  );
};