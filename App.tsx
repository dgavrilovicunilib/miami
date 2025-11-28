import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#1e1b4b] overflow-hidden selection:bg-pink-500 selection:text-white">
      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Decorative background gradient for the middle section */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1e1b4b] via-[#2e1065] to-[#1e1b4b] -z-10" />
          <Features />
          <ProductShowcase />
        </div>

        <section className="w-full relative py-32 flex flex-col justify-between overflow-hidden">
           {/* Background noise/grain could go here */}
           <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-purple-900/0 pointer-events-none" />
           
           <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 drop-shadow-2xl transform -rotate-2">
              READY TO RIDE?
            </h2>
            <p className="text-xl md:text-2xl text-pink-200/80 mb-12 max-w-2xl mx-auto font-light">
              Join the new wave of digital experiences. Fast cars, faster websites.
            </p>
            <button className="px-12 py-6 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full font-bold text-xl hover:brightness-110 transition-all shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-105 duration-300 uppercase tracking-widest">
              Get Access
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;