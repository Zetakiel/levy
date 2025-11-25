import React, { useState } from 'react';
import { generateTangoLyrics } from '../services/geminiService';
import { Sparkles, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export const TangoGenerator: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!theme.trim()) return;
    setLoading(true);
    setLyrics('');
    const result = await generateTangoLyrics(theme);
    setLyrics(result);
    setLoading(false);
  };

  return (
    <section id="ai-tango" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-slate-700/50 px-4 py-1 rounded-full text-sm text-red-300 mb-6 border border-slate-600">
           <Sparkles size={16} />
           <span>Experiencia Interactiva AI</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          El Oráculo del <span className="text-red-500">Arrabal</span>
        </h2>
        <p className="text-slate-300 mb-10 text-lg">
          ¿Te falta inspiración? Pídele a la inteligencia artificial de Claudia una estrofa de tango 
          con su estilo característico: irónico y visceral.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto mb-12">
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Ej: El desamor en Tinder, La inflación, Los gatos..."
            className="flex-1 px-6 py-4 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-slate-500 transition-colors"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !theme}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 disabled:bg-slate-600 rounded-lg font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Componiendo...</span>
            ) : (
              <>
                <Music size={20} /> Generar
              </>
            )}
          </button>
        </div>

        {lyrics && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl max-w-2xl mx-auto shadow-2xl"
          >
            <p className="font-serif text-xl md:text-2xl italic leading-loose whitespace-pre-line text-slate-100">
              "{lyrics}"
            </p>
            <div className="mt-6 flex justify-center">
              <span className="text-xs text-slate-400 uppercase tracking-widest border-t border-slate-500 pt-2">
                Generado por Gemini AI • Estilo Claudia Levy
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};