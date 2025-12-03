import React from 'react';
import Section from '../components/ui/Section';
import { useLanguage } from '../context/LanguageContext';
import { Clock, MapPin, CheckCircle } from 'lucide-react';

const Workshops: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
       {/* Hero for Workshops */}
       <div className="relative h-[50vh] flex items-center justify-center bg-black">
         <img src="https://picsum.photos/seed/tastingclass/1600/900" alt="Tasting Workshop" className="absolute inset-0 w-full h-full object-cover opacity-50" />
         <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">{t.nav.workshops}</h1>
            <p className="text-xl text-stone-200 max-w-2xl mx-auto">{t.workshops.title}</p>
         </div>
       </div>

       <Section className="bg-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-olive-900 mb-6">Masterclass: Olive Oil</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                {t.workshops.description}
              </p>

              <div className="bg-olive-50 p-8 rounded-2xl mb-8">
                 <div className="flex items-center gap-4 mb-4">
                   <MapPin className="text-olive-600" />
                   <div>
                     <span className="block text-xs uppercase font-bold text-stone-500">{t.workshops.locationLabel}</span>
                     <span className="font-semibold text-olive-900">{t.workshops.locationValue}</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <Clock className="text-olive-600" />
                   <div>
                     <span className="block text-xs uppercase font-bold text-stone-500">{t.workshops.durationLabel}</span>
                     <span className="font-semibold text-olive-900">{t.workshops.durationValue}</span>
                   </div>
                 </div>
              </div>

              <div className="space-y-3 mb-8">
                {t.workshops.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-1 shrink-0" />
                    <p className="text-stone-700">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:booking@olivenwerkstatt.com" className="bg-olive-600 hover:bg-olive-700 text-white text-center px-8 py-3 rounded-full font-bold transition-colors shadow-lg">
                  {t.workshops.cta}
                </a>
                <a href="mailto:private@olivenwerkstatt.com" className="bg-white border-2 border-olive-600 text-olive-700 text-center px-8 py-3 rounded-full font-bold transition-colors hover:bg-olive-50">
                  {t.workshops.privateCta}
                </a>
              </div>
            </div>

            <div className="space-y-6">
               <img src="https://picsum.photos/seed/oilglass/600/400" className="rounded-2xl shadow-lg w-full" alt="Tasting Glass" />
               <div className="bg-terracotta-50 p-6 rounded-2xl border border-terracotta-100">
                 <h3 className="font-serif text-xl font-bold text-terracotta-600 mb-2">Next Dates</h3>
                 <ul className="space-y-2">
                   <li className="flex justify-between items-center text-stone-700 border-b border-terracotta-200 pb-2">
                     <span>Saturday, 12. Oct</span>
                     <span className="text-sm font-bold bg-white px-2 py-1 rounded">DE / EN</span>
                   </li>
                   <li className="flex justify-between items-center text-stone-700 border-b border-terracotta-200 pb-2">
                     <span>Saturday, 26. Oct</span>
                     <span className="text-sm font-bold bg-white px-2 py-1 rounded">ES</span>
                   </li>
                 </ul>
               </div>
            </div>
         </div>
       </Section>
    </div>
  );
};

export default Workshops;