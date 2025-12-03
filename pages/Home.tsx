import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Droplet, ChefHat } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Section from '../components/ui/Section';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Blob Animation */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 33% 67% / 55% 27% 73% 45%", "30% 70% 70% 30% / 30% 30% 70% 70%"] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-olive-500 blur-3xl rounded-full"
          />
           <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gold-400 blur-3xl rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 lg:max-w-xl"
          >
            <div className="inline-block px-4 py-1.5 bg-olive-100 text-olive-800 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
              Granada &bull; Mallorca
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-olive-900">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-md">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/workshops" 
                className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-olive-200 flex items-center justify-center gap-2"
              >
                {t.hero.ctaWorkshop}
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/varieties" 
                className="bg-white border-2 border-olive-100 hover:border-olive-600 text-olive-800 px-8 py-4 rounded-full font-bold transition-all hover:bg-olive-50 flex items-center justify-center"
              >
                {t.hero.ctaDiscover}
              </Link>
            </div>
          </motion.div>

          {/* Visual Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
             <img 
               src="https://picsum.photos/seed/oliveoilbottle/800/1000" 
               alt="Golden Olive Oil Pouring" 
               className="object-cover w-full h-full rounded-2xl shadow-2xl z-10 relative"
             />
             {/* Decorative floating element */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl z-20 max-w-xs hidden md:block"
             >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-bold text-gray-400">Native Extra</span>
                </div>
                <p className="font-serif italic text-olive-900">"Picual is the powerhouse of flavor."</p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-olive-900 mb-4">{t.pillars.title}</h2>
          <div className="w-24 h-1 bg-olive-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-olive-50 hover:bg-olive-100 transition-colors group cursor-default">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-olive-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <MapPin size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-olive-800 mb-3">{t.pillars.p1_title}</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              {t.pillars.p1_desc}
            </p>
            <Link to="/workshops" className="text-olive-700 font-bold hover:underline flex items-center gap-1 text-sm uppercase tracking-wide">
              {t.pillars.learnMore} <ArrowRight size={14} />
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-olive-50 hover:bg-olive-100 transition-colors group cursor-default">
             <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-olive-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <Droplet size={28} fill="currentColor" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-olive-800 mb-3">{t.pillars.p2_title}</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              {t.pillars.p2_desc}
            </p>
            <Link to="/varieties" className="text-olive-700 font-bold hover:underline flex items-center gap-1 text-sm uppercase tracking-wide">
              {t.pillars.learnMore} <ArrowRight size={14} />
            </Link>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-olive-50 hover:bg-olive-100 transition-colors group cursor-default">
             <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-olive-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <ChefHat size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-olive-800 mb-3">{t.pillars.p3_title}</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              {t.pillars.p3_desc}
            </p>
            <Link to="/recipes" className="text-olive-700 font-bold hover:underline flex items-center gap-1 text-sm uppercase tracking-wide">
              {t.pillars.learnMore} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* TEASER ABOUT */}
      <Section className="bg-stone-100 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl max-w-sm mx-auto">
                 <img src="https://picsum.photos/seed/olivegrower/600/600" alt="Founder" className="w-full h-full object-cover" />
              </div>
           </div>
           <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive-900 mb-6">{t.about.title}</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                {t.about.intro}
              </p>
              <Link 
                to="/about" 
                className="inline-block border-b-2 border-olive-600 text-olive-800 font-bold pb-1 hover:text-olive-600 transition-colors"
              >
                {t.pillars.learnMore}
              </Link>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;