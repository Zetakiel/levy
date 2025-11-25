import React from 'react';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-white font-serif text-xl mb-2">CLAUDIA LEVY</h4>
          <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-red-600 transition-colors"><Youtube size={20} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
        </div>

      </div>
    </footer>
  );
};