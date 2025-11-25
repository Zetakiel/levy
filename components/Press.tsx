import React from 'react';
import { PRESS_ITEMS } from '../constants';
import { Quote } from 'lucide-react';

export const Press: React.FC = () => {
  return (
    <section id="press" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-serif mb-16 text-gray-800">Lo que dice la prensa</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRESS_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center p-6 bg-gray-50 hover:shadow-lg transition-shadow duration-300 rounded-sm border border-gray-100">
              <Quote className="text-red-200 mb-4" size={40} />
              <p className="text-gray-700 italic mb-6 leading-relaxed font-serif">"{item.quote}"</p>
              <div className="mt-auto">
                <span className="block text-sm font-bold uppercase tracking-wide text-gray-900">{item.media}</span>
                <a href={item.url} className="text-xs text-red-600 hover:underline mt-1 block">Leer nota completa</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};