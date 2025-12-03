import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { useLanguage } from '../context/LanguageContext';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-olive-50">
      <Section>
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <h1 className="font-serif text-4xl font-bold text-olive-900 mb-8 text-center">{t.contact.title}</h1>
          
          {submitted ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center">
              <p className="text-xl font-bold">{t.contact.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-stone-600 mb-2">{t.contact.nameLabel}</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-200 outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-stone-600 mb-2">{t.contact.emailLabel}</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-200 outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-stone-600 mb-2">{t.contact.messageLabel}</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-olive-500 focus:ring-2 focus:ring-olive-200 outline-none transition-all"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-olive-600 text-white font-bold py-4 rounded-xl hover:bg-olive-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {t.contact.sendButton} <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Contact;