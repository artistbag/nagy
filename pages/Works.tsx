import React from 'react';
import FadeIn from '../components/FadeIn';
import { WORKS_DATA } from '../constants';

const Works: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <header className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Selected Works</h2>
          <p className="text-stone-500 font-light">Hand-drawing × Artificial Intelligence</p>
        </header>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
        {WORKS_DATA.map((work, index) => (
          <FadeIn key={work.id} delay={index * 0.1} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 mb-6 cursor-pointer">
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 z-10" />
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col items-start">
              <span className="text-xs text-stone-400 tracking-widest uppercase mb-2">{work.category} — {work.year}</span>
              <h3 className="text-2xl font-serif text-stone-800 mb-3 group-hover:text-stone-600 transition-colors">{work.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-2">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-stone-100 text-stone-500 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Works;