import React from 'react';
import Section from '../components/ui/Section';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen } from 'lucide-react';

const Knowledge: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <div className="bg-olive-50 py-20 border-b border-olive-100">
         <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-olive-900 mb-4 flex items-center gap-4">
              <BookOpen className="text-olive-600" size={40} />
              {t.knowledge.title}
            </h1>
         </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {t.knowledge.articles.map((article, index) => (
            <article key={index} className="border-b border-stone-100 pb-12 last:border-0">
               <h2 className="font-serif text-3xl font-bold text-olive-800 mb-4">{article.title}</h2>
               <p className="text-lg font-medium text-stone-600 mb-6 italic border-l-4 border-olive-300 pl-4 bg-stone-50 py-2 rounded-r-lg">
                 {article.summary}
               </p>
               <div className="prose prose-lg prose-stone text-stone-700">
                 <p>{article.content}</p>
               </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Knowledge;