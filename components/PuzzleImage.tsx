import React, { useEffect, useRef, useState } from 'react';

interface PuzzleImageProps {
  src: string;
  alt: string;
}

export const PuzzleImage: React.FC<PuzzleImageProps> = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 4x4 Grid
  const rows = 4;
  const cols = 4;
  const tiles = Array.from({ length: rows * cols });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.3)] bg-indigo-950"
    >
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
        {tiles.map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          
          const delay = (row + col) * 100; 

          return (
            <div
              key={i}
              className={`relative overflow-hidden bg-indigo-900 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)
                ${isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0' : 'opacity-0 scale-50'}
              `}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`,
                transitionDelay: `${delay}ms`,
                transform: isVisible ? 'none' : `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 90 - 45}deg)`
              }}
            >
               {/* Overlay for inactive state visual */}
               <div className="absolute inset-0 bg-pink-500/20 mix-blend-overlay" />
            </div>
          );
        })}
      </div>
      
      {/* Overlay gradient for polish */}
      <div className={`absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-2xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};