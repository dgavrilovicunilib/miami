import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { RetroSun } from './RetroSun';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-6 lg:px-20 gap-10 pt-32 lg:pt-0">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[80px]" />
      </div>

      <div className="flex-1 text-center lg:text-left z-10 relative">
        <ScrollReveal mode="fade-right" delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-pink-500/30 rounded-full bg-pink-900/20 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.2)]">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"/>
            <span className="text-sm font-bold text-pink-300 tracking-widest uppercase">The Future is Retro</span>
          </div>
        </ScrollReveal>

        <ScrollReveal mode="blur" delay={200}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">
            <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">NEON</span>
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text text-glow italic pr-4">
              DREAMS
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal mode="fade-up" delay={500}>
          <p className="text-lg md:text-xl text-pink-100/70 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
            Experience the vibe of the 80s reimagined for the web. 
            Bold colors, fast animations, and zero compromise on style.
          </p>
        </ScrollReveal>

        <ScrollReveal mode="fade-up" delay={700}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-bold uppercase tracking-wider transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] flex items-center gap-3 group">
              Start Driving
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-indigo-900/40 hover:bg-indigo-800/60 text-white rounded-lg font-bold uppercase tracking-wider transition-all border border-indigo-500/30 hover:border-pink-500/50 backdrop-blur-sm flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors">
                 <Play className="w-3 h-3 fill-current" />
              </div>
              Watch Demo
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Right side illustration */}
      <div className="flex-1 w-full max-w-lg lg:max-w-none perspective-1000 mt-10 lg:mt-0">
        <ScrollReveal mode="blur" delay={0} className="w-full relative z-0">
           {/* Grid floor effect */}
           <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[200%] h-[400px] bg-[linear-gradient(transparent_0%,rgba(236,72,153,0.2)_100%),linear-gradient(90deg,rgba(236,72,153,0.3)_1px,transparent_1px),linear-gradient(0deg,rgba(236,72,153,0.3)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] -z-10 opacity-50" />
           <RetroSun />
        </ScrollReveal>
      </div>
    </div>
  );
};