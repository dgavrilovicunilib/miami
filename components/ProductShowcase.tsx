import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { FancyImage } from './FancyImage';
import { PuzzleImage } from './PuzzleImage';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-24 w-full relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Row 1: Text Left, Puzzle Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          <div className="lg:w-1/2">
            <ScrollReveal mode="blur">
              <div className="inline-block px-3 py-1 mb-4 border border-cyan-500 text-cyan-400 font-bold rounded-md tracking-widest uppercase text-xs shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                Next-Gen Rendering
              </div>
            </ScrollReveal>
            <ScrollReveal mode="fade-right" delay={100}>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] italic">
                PIXEL PERFECT <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text text-glow">COMPOSITIONS</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal mode="fade-up" delay={300}>
              <p className="text-indigo-200/80 text-lg mb-8 leading-relaxed max-w-lg">
                Our advanced grid engine reconstructs your data in real-time. 
                Experience transitions that feel organic and mechanical simultaneously.
              </p>
            </ScrollReveal>
            <ScrollReveal mode="fade-up" delay={500}>
              <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded hover:bg-cyan-500 hover:text-black transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] uppercase tracking-wider">
                See it in action
              </button>
            </ScrollReveal>
          </div>
          
          <div className="lg:w-1/2 w-full perspective-1000">
             {/* THE PUZZLE EFFECT */}
            <div className="relative transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out preserve-3d">
              {/* Decorative border */}
              <div className="absolute inset-[-4px] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-sm -z-10" />
              <PuzzleImage 
                src="https://picsum.photos/800/600?random=10" 
                alt="Puzzle Dashboard"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
           <div className="lg:w-1/2 w-full perspective-1000">
             <div className="relative transform -rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out">
               {/* Decorative elements */}
               <div className="absolute -top-10 -left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl" />
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl" />
               
              <FancyImage 
                src="https://picsum.photos/800/600?random=2" 
                alt="Mobile Integration" 
                className="shadow-2xl shadow-pink-900/50 ring-1 ring-white/10"
                direction="right"
              />
               
               {/* Floating Badge */}
               <ScrollReveal mode="pop" delay={800} className="absolute -top-6 -right-6 z-20">
                <div className="bg-[#2e1065] p-4 rounded-xl border border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]"/>
                    <div className="w-3 h-3 rounded-full bg-purple-500"/>
                    <div className="w-3 h-3 rounded-full bg-orange-500"/>
                  </div>
                  <div className="w-32 h-2 bg-indigo-800 rounded-full mb-2 overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-pink-500 to-orange-500" />
                  </div>
                  <div className="w-20 h-2 bg-indigo-800 rounded-full"/>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:w-1/2">
             <ScrollReveal mode="blur">
               <div className="inline-block px-3 py-1 mb-4 border border-pink-500 text-pink-400 font-bold rounded-md tracking-widest uppercase text-xs shadow-[0_0_10px_rgba(236,72,153,0.4)]">
                Versatility
              </div>
            </ScrollReveal>
             <ScrollReveal mode="fade-left" delay={100}>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] italic">
                SEAMLESS ON <br />
                <span className="bg-gradient-to-r from-pink-400 to-orange-400 text-transparent bg-clip-text text-glow">EVERY DEVICE</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal mode="fade-left" delay={300}>
              <p className="text-indigo-200/80 text-lg mb-8 leading-relaxed max-w-lg">
                Whether you're cruising at your desk or on the go, your data stays synchronized.
                We've optimized every interaction for touch and mouse alike.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};