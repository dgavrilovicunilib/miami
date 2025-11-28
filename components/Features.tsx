import React from 'react';
import { Zap, Shield, Globe, Smartphone, Music, Camera } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Turbo Charged",
    desc: "Optimized for speed. Zero drag, maximum performance."
  },
  {
    icon: <Shield className="w-8 h-8 text-pink-400" />,
    title: "Bulletproof",
    desc: "Enterprise-grade security that never sleeps."
  },
  {
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: "City Wide",
    desc: "Deploy instantly to servers across the globe."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    title: "Mobile Retro",
    desc: "Responsive layouts that shine on every device."
  },
  {
    icon: <Music className="w-8 h-8 text-orange-400" />,
    title: "Synth Sync",
    desc: "Component-based architecture that grooves together."
  },
  {
    icon: <Camera className="w-8 h-8 text-red-400" />,
    title: "Flash Ready",
    desc: "Intuitive APIs that make your content pop."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <ScrollReveal mode="fade-down">
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-200">
              WHY CHOOSE THE VIBE?
            </h2>
          </ScrollReveal>
          <ScrollReveal mode="blur" delay={200}>
            <p className="text-pink-100/60 max-w-xl mx-auto text-xl font-light">
              We focus on the style that matters. Smooth animations and neon lights 
              create a superior user experience.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} mode="zoom" className="h-full">
              <div className="h-full p-8 rounded-2xl bg-indigo-900/30 border border-white/5 hover:bg-indigo-900/60 transition-all duration-500 hover:border-pink-500/50 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(236,72,153,0.3)] backdrop-blur-sm">
                
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-800 to-purple-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 border border-white/10 group-hover:border-pink-500 shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-indigo-200/70 leading-relaxed group-hover:text-indigo-100 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};