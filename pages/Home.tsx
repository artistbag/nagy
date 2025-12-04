import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_IMAGES, HERO_MESSAGE } from '../constants';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Slow transition every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-stone-900">
      {/* Background Slideshow */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={HERO_IMAGES[index]}
            alt="NAGY Atmospheric Art"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-white text-lg md:text-2xl font-serif tracking-[0.2em] text-center leading-loose max-w-2xl font-light drop-shadow-md"
        >
          {HERO_MESSAGE}
        </motion.h1>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 cursor-pointer z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => navigate(RoutePath.ABOUT)}
      >
        <span className="text-[10px] tracking-widest uppercase mb-2">Discover</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Home;