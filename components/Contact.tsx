import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Styled like the top header of the flyer image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl mb-16 overflow-hidden rounded-sm">
          
          {/* Left Side: Title & Tagline */}
          <div className="bg-white p-10 md:p-16 flex flex-col justify-center border-r border-gray-100">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 font-serif">
              Clases de Canto <span className="block text-gray-600">Popular</span>
            </h2>
            <p className="text-xl text-gray-500 font-light border-b-2 border-gray-300 pb-4 inline-block max-w-md">
              Conectar con el placer de cantar
            </p>
          </div>

          {/* Right Side: Contact Info Block (Dark Grey from image) */}
          <div className="bg-[#4a4a55] p-10 md:p-16 flex flex-col justify-center text-white text-right relative">
             {/* Decorative elements from flyer */}
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">Claudia Levy</h3>
            
            <div className="space-y-2 text-lg font-light">
              <p className="flex items-center justify-end gap-3">
                 11 6546 3717 <Phone size={20} className="text-gray-300" />
              </p>
              <p className="flex items-center justify-end gap-3">
                Palermo / Villa Crespo <MapPin size={20} className="text-gray-300" />
              </p>
            </div>
          </div>
        </div>

        {/* Image & Overlay Section (mimicking the flyer photo area) */}
        <div className="relative w-full h-[500px] bg-gray-200 mb-16 overflow-hidden group">
           <img 
             src="https://picsum.photos/seed/claudia_singing/1200/600" 
             alt="Claudia singing" 
             className="w-full h-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
           />
           
           {/* The Blue Box Tag from the image */}
           <motion.div 
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="absolute bottom-12 right-0 bg-[#3b5998] text-white px-8 py-4 shadow-lg"
           >
             <span className="text-xl font-semibold">Individuales y Grupales</span>
           </motion.div>
        </div>

        {/* General Contact Form */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-serif mb-8">Contrataciones & Consultas</h3>
          <form className="space-y-6 text-left">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                 <input type="text" className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-red-800 bg-transparent transition-colors" placeholder="Tu nombre" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                 <input type="email" className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-red-800 bg-transparent transition-colors" placeholder="tu@email.com" />
               </div>
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
               <textarea rows={4} className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-red-800 bg-transparent transition-colors resize-none" placeholder="Hola Claudia..."></textarea>
             </div>
             <div className="text-center mt-8">
               <button type="button" className="bg-[#1a202c] text-white px-10 py-3 uppercase tracking-widest hover:bg-red-800 transition-colors duration-300">
                 Enviar Mensaje
               </button>
             </div>
          </form>
        </div>

      </div>
    </section>
  );
};