import React, { useEffect, useRef } from 'react';
import { Twitter, Github, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Fluid/Smoke Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    const footer = footerRef.current;
    if (!canvas || !footer) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = footer.offsetWidth;
    let height = footer.offsetHeight;
    
    const resize = () => {
      width = footer.offsetWidth;
      height = footer.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Particles array
    const particles: Particle[] = [];
    
    // Mouse state
    const mouse = { x: -1000, y: -1000, lastX: -1000, lastY: -1000, speed: 0 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      hue: number;

      constructor(x: number, y: number, vx: number, vy: number) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = Math.random() * 20 + 10;
        this.life = 0;
        this.maxLife = Math.random() * 50 + 50;
        // Orange/Pink/Yellow hues
        this.hue = Math.random() > 0.5 ? 330 : 30; // 330=Pink, 30=Orange
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Fluid drag/friction
        this.vx *= 0.95;
        this.vy *= 0.95;
        
        // Natural heat rise
        this.vy -= 0.02;
        
        this.life++;
        this.size *= 0.96; // Shrink over time
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = 1 - (this.life / this.maxLife);
        ctx.beginPath();
        
        // Soft glow gradient
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 60%, ${opacity * 0.4})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 50%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw existing particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life >= p.maxLife || p.size < 0.5) {
          particles.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate speed for "splash" effect
      const dx = x - mouse.lastX;
      const dy = y - mouse.lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      mouse.lastX = x;
      mouse.lastY = y;
      
      // Only spawn if moving fast enough or periodically
      if (dist > 2) {
         // Add fluid burst
         for(let i = 0; i < 2; i++) {
           const vx = dx * 0.1 + (Math.random() - 0.5) * 2;
           const vy = dy * 0.1 + (Math.random() - 0.5) * 2;
           particles.push(new Particle(x, y, vx, vy));
         }
      }
    };
    
    const handleMouseLeave = () => {
       mouse.lastX = -1000;
       mouse.lastY = -1000;
    }

    footer.addEventListener('mousemove', handleMouseMove);
    footer.addEventListener('mouseleave', handleMouseLeave);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      footer.removeEventListener('mousemove', handleMouseMove);
      footer.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0f0a1e] py-24 relative overflow-hidden mt-20 group">
      
      {/* Interactive Fluid Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-80 z-0"
      />

      {/* --- Sun Hitting Concrete Effect --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* 1. The Horizon Line (Top of footer) */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80 shadow-[0_0_30px_rgba(249,115,22,1)]" />

        {/* 2. The Setting Sun (Half visible at top) */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-orange-400 to-pink-600 rounded-full blur-[80px] opacity-40 mix-blend-screen" />
        
        {/* 3. The "Concrete" Glow Reflection */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-orange-600/20 to-transparent blur-3xl" />

        {/* 4. Heat Haze Animation (Rising waves) */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-200 animate-pulse" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-orange-500/10 to-transparent blur-xl animate-heat-rise"
              style={{
                left: `${i * 30}%`,
                width: '40%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pointer-events-none">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 pointer-events-auto">
          <div className="text-center md:text-left">
            <h3 className="text-6xl font-black italic tracking-tighter text-white mb-2 drop-shadow-[0_2px_10px_rgba(249,115,22,0.8)]">
              VICE<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">MOCK</span>
            </h3>
            <p className="text-orange-200/60 text-lg font-light tracking-wider uppercase">
              Sunset Blvd, Miami 1984
            </p>
          </div>

          <div className="flex gap-6">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="p-4 rounded-xl bg-gradient-to-br from-orange-900/40 to-pink-900/40 border border-orange-500/20 hover:border-orange-400 text-orange-200/70 hover:text-white transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] group/icon relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/icon:translate-y-0 transition-transform duration-300" />
                <Icon size={28} className="relative z-10 group-hover/icon:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-orange-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 pointer-events-auto">
          <p className="text-orange-100/30 text-sm font-mono">
             © 2024 ViceMock Inc.
          </p>
          <p className="text-orange-100/30 text-sm flex items-center gap-2 font-mono">
            Made in the heat <Heart className="w-4 h-4 text-orange-500 fill-current animate-pulse" />
          </p>
        </div>
      </div>

      <style>{`
        @keyframes heat-rise {
          0% { transform: translateY(100%) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-20%) scale(1.5); opacity: 0; }
        }
        .animate-heat-rise {
          animation: heat-rise 4s infinite linear;
        }
      `}</style>
    </footer>
  );
};