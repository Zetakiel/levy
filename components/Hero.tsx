import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a202c]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
         {/* Using a specific seed to get a dark/moody image similar to a stage */}
        <img 
          src="https://picsum.photos/seed/tango_stage/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1a202c]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-red-500 tracking-[0.3em] text-sm md:text-lg font-bold uppercase mb-4"
        >
          Tango • Teatro • Composición
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-white font-bold mb-6 leading-tight"
        >
          CLAUDIA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">LEVY</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10"
        >
          "Conectar con el placer de cantar"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
             onClick={() => document.getElementById('discography')?.scrollIntoView({behavior: 'smooth'})}
             className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Escuchar Música
          </button>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
             className="px-8 py-3 bg-red-900 text-white hover:bg-red-800 transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-red-900/30"
          >
            Clases de Canto
          </button>
        </motion.div>
      </div>
    </section>
  );
};