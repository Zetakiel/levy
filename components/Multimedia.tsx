import React from 'react';
import { VIDEOS } from '../constants';
import { Play } from 'lucide-react';

export const Multimedia: React.FC = () => {
  return (
    <section id="multimedia" className="py-20 bg-[#1a202c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-700 pb-6">
          <div>
            <h2 className="text-4xl font-serif">Multimedia</h2>
            <p className="text-gray-400 mt-2">Presentaciones en vivo y videoclips.</p>
          </div>
          <a href="#" className="text-red-400 hover:text-white transition-colors text-sm mt-4 md:mt-0 uppercase tracking-widest">Ver canal de YouTube &rarr;</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {VIDEOS.map((video) => (
            <div key={video.id} className="group relative cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-sm bg-gray-800">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play fill="white" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-serif group-hover:text-red-400 transition-colors">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};