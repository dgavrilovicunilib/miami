import React, { useEffect, useRef, useState } from 'react';

export const RetroSun: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full aspect-square max-w-[500px] flex items-center justify-center mx-auto">
      
      {/* Glow behind the sun */}
      <div className={`absolute inset-0 bg-gradient-to-t from-orange-500 to-purple-600 rounded-full blur-[80px] opacity-40 transition-opacity duration-[3000ms] ${isVisible ? 'opacity-60' : 'opacity-0'}`} />

      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] overflow-visible">
        <defs>
          <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            {/* Top Stop: Yellow-White to Amber */}
            <stop 
              offset="0%" 
              style={{ 
                stopColor: isVisible ? '#fbbf24' : '#ffffeb', // Amber-400 : White-Yellow
                transition: 'stop-color 4s ease-out' 
              }} 
            /> 
            {/* Middle Stop: Orange to Bright Yellow */}
            <stop 
              offset="50%" 
              style={{ 
                stopColor: isVisible ? '#f97316' : '#fef08a', // Orange-500 : Yellow-200
                transition: 'stop-color 4s ease-out' 
              }} 
            /> 
            {/* Bottom Stop: Pink to Orange */}
            <stop 
              offset="100%" 
              style={{ 
                stopColor: isVisible ? '#db2777' : '#fdba74', // Pink-600 : Orange-300
                transition: 'stop-color 4s ease-out' 
              }} 
            /> 
          </linearGradient>
        </defs>

        {/* The Sun Body - Enters from Top-Right (Noon) and sets to Center */}
        <circle 
          cx="200" 
          cy="200" 
          r="150" 
          fill="url(#sunGradient)" 
          style={{ transformOrigin: 'center' }}
          className={`transition-all duration-[4000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            isVisible 
              ? 'translate-y-0 translate-x-0 opacity-100 scale-100' 
              : '-translate-y-[300px] translate-x-[300px] opacity-0 scale-110'
          }`} 
        />

        {/* The Cuts (Scanlines) - Animated moving up */}
        <g className={isVisible ? "animate-scanlines" : "opacity-0"}>
           {[0, 1, 2, 3, 4, 5, 6].map((i) => (
             <rect
               key={i}
               x="40"
               y={200 + (i * 25)}
               width="320"
               height={4 + (i * 2)}
               fill="#1e1b4b" // Match background color
               className="opacity-90"
             >
                <animate 
                  attributeName="y" 
                  from={200 + (i * 25)} 
                  to={190 + (i * 25)} 
                  dur="3s" 
                  repeatCount="indefinite" 
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
             </rect>
           ))}
        </g>
        
        {/* Palm Tree Silhouette */}
        <path 
           d="M320 350 L350 350 L335 250 Z" 
           fill="#2e1065" 
           className={`transition-all duration-1000 delay-[2500ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        />
         <path 
           d="M300 350 L330 350 L315 280 Z" 
           fill="#4c1d95" 
           className={`transition-all duration-1000 delay-[2000ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        />
      </svg>
      
      <style>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};