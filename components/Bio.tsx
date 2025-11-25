import React from 'react';
import { BIO_TEXT } from '../constants';
import { motion } from 'framer-motion';

export const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side - Mimicking the flyer overlap style */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-gray-300 z-0 hidden lg:block"></div>
            <div className="relative z-10">
              <img 
                src="https://picsum.photos/seed/claudia_portrait/600/800" 
                alt="Claudia Levy Portrait" 
                className="w-full h-auto shadow-xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Decorative Box */}
              <div className="absolute bottom-8 right-[-10px] bg-[#2d3748] p-6 shadow-lg max-w-xs hidden sm:block">
                 <p className="text-white font-serif italic text-lg">"Una voz que cuenta la historia de la ciudad."</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10"
          >
            <h2 className="text-4xl font-serif text-[#1a202c] mb-6 font-bold">
              Sobre <span className="text-red-800">Claudia</span>
            </h2>
            <div className="h-1 w-20 bg-red-800 mb-8"></div>
            
            {BIO_TEXT.split('\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 mb-4 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 flex gap-4">
               <div className="text-center">
                  <span className="block text-3xl font-bold text-[#2d3748]">20+</span>
                  <span className="text-xs uppercase tracking-wider text-gray-500">Años de Carrera</span>
               </div>
               <div className="w-px bg-gray-300"></div>
               <div className="text-center">
                  <span className="block text-3xl font-bold text-[#2d3748]">3</span>
                  <span className="text-xs uppercase tracking-wider text-gray-500">Discos de Estudio</span>
               </div>
               <div className="w-px bg-gray-300"></div>
               <div className="text-center">
                  <span className="block text-3xl font-bold text-[#2d3748]">1</span>
                  <span className="text-xs uppercase tracking-wider text-gray-500">Premio Gardel</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};