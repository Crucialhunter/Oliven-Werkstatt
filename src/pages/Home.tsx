import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Droplet, ChefHat } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Section from '../components/ui/Section';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const yBanner1 = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "20%"]);
  const yBanner2 = useTransform(scrollYProgress, [0.4, 0.8], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
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

          {/* Visual Hero Image with Parallax */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <motion.div 
               style={{ y: yHero }}
               initial={{ scale: 1.1 }}
               animate={{ scale: 1 }}
               transition={{ duration: 1.5 }}
               className="absolute inset-0 w-full h-[120%]"
            >
             <img 
               src="https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?q=80&w=1600&auto=format&fit=crop" 
               alt="Majestic Ancient Olive Tree" 
               className="object-cover w-full h-full"
             />
            </motion.div>
             
             {/* Decorative floating element */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-10 left-10 bg-white/90 backdrop-blur p-6 rounded-lg shadow-xl z-20 max-w-xs hidden md:block border border-olive-50"
             >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-olive-500"></div>
                  <span className="text-sm font-bold text-olive-800">100+ Years Old</span>
                </div>
                <p className="font-serif italic text-olive-900">"Roots that run deep into history."</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* PARALLAX BANNER 1: OLIVE GROVES */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center my-12">
        <motion.div 
          style={{ y: yBanner1 }}
          className="absolute inset-0 -z-10 h-[140%] -top-[20%]"
        >
          <img 
            src="https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?q=80&w=2000&auto=format&fit=crop" 
            alt="Endless Olive Groves in Andalusia" 
            className="w-full h-full object-cover brightness-[0.85]" 
          />
        </motion.div>
        <div className="z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl border border-olive-100"
          >
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive-900 mb-4">
               From the Grove to the Bottle
             </h2>
             <p className="text-lg text-stone-700 italic font-serif">
               "The landscape of Andalusia is painted in strokes of silver and green."
             </p>
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
          <div className="p-8 rounded-2xl bg-olive-50 hover:bg-olive-100 transition-colors group cursor-default shadow-sm hover:shadow-md">
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
          <div className="p-8 rounded-2xl bg-olive-50 hover:bg-olive-100 transition-colors group cursor-default shadow-sm hover:shadow-md">
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
          <div className="p-8 rounded-2xl bg-olive-50 hover:bg-olive-100 transition-colors group cursor-default shadow-sm hover:shadow-md">
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

      {/* PARALLAX BANNER 2: ANTIQUE ALMAZARA */}
      <section className="relative h-[500px] overflow-hidden flex items-center justify-end my-12">
        <motion.div 
          style={{ y: yBanner2 }}
          className="absolute inset-0 -z-10 h-[140%] -top-[20%]"
        >
          {/* Using a stone mill / press image */}
          <img 
            src="https://images.unsplash.com/photo-1649692120092-2d44208a8a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Antique Olive Mill Mechanism" 
            className="w-full h-full object-cover sepia-[0.3]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 z-10 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border-l-4 border-gold-500 max-w-lg text-right"
          >
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
               Tradition Meets Craft
             </h2>
             <p className="text-lg text-stone-200 mb-6">
               Discover the ancient mechanisms (Almazaras) that have pressed liquid gold for centuries. We honor the old ways while embracing modern quality.
             </p>
             <Link to="/about" className="text-gold-400 font-bold hover:text-gold-300 uppercase tracking-widest text-sm">
               Read our story &rarr;
             </Link>
          </motion.div>
        </div>
      </section>

      {/* TEASER ABOUT */}
      <Section className="bg-stone-50 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl max-w-sm mx-auto transform hover:rotate-2 transition-transform duration-700">
                 <img src="https://picsum.photos/seed/olivegrower/600/600" alt="Founder" className="w-full h-full object-cover" />
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-olive-200 rounded-full -z-10 blur-xl"></div>
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