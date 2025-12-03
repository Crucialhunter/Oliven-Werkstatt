import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Workshops from './pages/Workshops';
import Knowledge from './pages/Knowledge';
import Varieties from './pages/Varieties';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-stone-700 bg-olive-50">
        <Header />
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/knowledge" element={<Knowledge />} />
                <Route path="/varieties" element={<Varieties />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/contact" element={<Contact />} />
             </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;