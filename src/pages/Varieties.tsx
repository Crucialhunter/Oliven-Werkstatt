import React from 'react';
import Section from '../components/ui/Section';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Varieties: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <div className="bg-stone-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-olive-900 mb-6">{t.varieties.title}</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t.varieties.intro}</p>
        </div>
      </div>

      {/* Varieties Grid */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.varieties.items.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-olive-50 rounded-2xl p-8 border border-olive-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-olive-200 rounded-full mb-6 flex items-center justify-center font-serif text-xl font-bold text-olive-800">
                {item.name.charAt(0)}
              </div>
              <h3 className="font-serif text-2xl font-bold text-olive-900 mb-4">{item.name}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Aroma</h4>
                  <p className="text-stone-700">{item.aroma}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Taste</h4>
                  <p className="text-stone-700">{item.taste}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Best For</h4>
                  <p className="text-stone-700 italic">{item.usage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Regions Map/List */}
      <Section className="bg-olive-900 text-white">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">{t.varieties.regionsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {t.varieties.regions.map((region, idx) => (
             <div key={idx} className="bg-olive-800 p-6 rounded-lg">
               <h3 className="font-serif text-xl font-bold text-gold-400 mb-2">{region.name}</h3>
               <p className="text-olive-200 text-sm leading-relaxed">{region.desc}</p>
             </div>
           ))}
        </div>
      </Section>
    </div>
  );
};

export default Varieties;