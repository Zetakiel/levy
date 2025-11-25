import React from 'react';
import { ALBUMS } from '../constants';
import { motion } from 'framer-motion';
import { Disc } from 'lucide-react';

export const Discography: React.FC = () => {
  return (
    <section id="discography" className="py-24 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-serif text-gray-900 mb-4">Discografía</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">Un recorrido por la obra musical y poética.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ALBUMS.map((album, index) => (
            <motion.div 
              key={album.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={album.coverUrl} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={album.spotifyUrl} className="p-4 rounded-full bg-white text-black hover:bg-green-500 hover:text-white transition-colors">
                      <Disc size={32} />
                    </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-gray-800 font-serif">{album.title}</h3>
                  <span className="text-sm text-red-700 font-semibold">{album.year}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{album.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};