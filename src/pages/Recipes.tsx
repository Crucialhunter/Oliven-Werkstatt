import React from 'react';
import Section from '../components/ui/Section';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Recipes: React.FC = () => {
  const { t } = useLanguage();

  // Placeholder images mapped to index
  const images = [
    "https://picsum.photos/seed/pancontomate/600/400",
    "https://picsum.photos/seed/salad/600/400",
    "https://picsum.photos/seed/cheese/600/400"
  ];

  return (
    <div className="min-h-screen">
       <div className="bg-terracotta-600 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
             <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t.recipes.title}</h1>
          </div>
       </div>

       <Section className="bg-stone-50">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.recipes.items.map((recipe, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img src={images[index % images.length]} alt={recipe.name} className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">{recipe.name}</h3>
                  <p className="text-stone-600 text-sm mb-4 min-h-[40px]">{recipe.desc}</p>
                  
                  <div className="bg-olive-50 p-4 rounded-lg border border-olive-100">
                    <p className="text-xs font-bold text-olive-600 uppercase mb-1">Chef's Tip</p>
                    <p className="text-sm text-olive-800 italic">{recipe.oilTip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
       </Section>
    </div>
  );
};

export default Recipes;