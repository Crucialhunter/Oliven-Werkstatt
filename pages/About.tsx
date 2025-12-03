import React from 'react';
import Section from '../components/ui/Section';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Intro Header */}
      <div className="bg-olive-900 text-olive-50 py-20">
        <div className="container mx-auto px-4 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-serif text-4xl md:text-6xl font-bold mb-6"
           >
             {t.nav.about}
           </motion.h1>
           <p className="text-xl max-w-2xl mx-auto text-olive-200">{t.about.intro}</p>
        </div>
      </div>

      {/* Story Content */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-stone">
           <p className="lead text-2xl font-serif text-olive-800 italic">
            "{t.about.story}"
           </p>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-stone-50">
        <h2 className="font-serif text-3xl font-bold text-center mb-16 text-olive-900">Timeline</h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-olive-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {t.about.timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-5xl font-serif font-bold text-olive-200 block mb-2">{item.year}</span>
                </div>
                
                <div className="w-6 h-6 bg-olive-600 rounded-full border-4 border-white shadow-md z-10 hidden md:block"></div>
                
                <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                  <p className="text-lg text-stone-700">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Image Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="https://picsum.photos/seed/granada1/400/300" className="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500" alt="Granada Landscape" />
          <img src="https://picsum.photos/seed/olivebranch/400/300" className="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500" alt="Olive Branch" />
          <img src="https://picsum.photos/seed/mallorcamill/400/300" className="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-500 md:col-span-2 lg:col-span-1" alt="Mallorca Mill" />
        </div>
      </Section>
    </div>
  );
};

export default About;