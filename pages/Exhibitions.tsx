import React from 'react';
import FadeIn from '../components/FadeIn';
import { EXHIBITIONS_DATA } from '../constants';

const Exhibitions: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-6xl font-serif text-stone-200 mb-12 select-none">History</h2>
      </FadeIn>

      <div className="relative border-l border-stone-300 ml-4 md:ml-10 space-y-16 py-10">
        {EXHIBITIONS_DATA.map((exhibition, index) => (
          <FadeIn key={exhibition.id} delay={index * 0.15} className="relative pl-8 md:pl-16">
            {/* Dot on timeline */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-400 ring-4 ring-stone-50" />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="font-mono text-stone-400 text-sm w-32 shrink-0">{exhibition.date.split(' - ')[0]}</span>
              <div>
                <h3 className="text-2xl font-serif text-stone-800 font-medium mb-1">{exhibition.title}</h3>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-stone-500">
                  <span>{exhibition.gallery}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{exhibition.location}</span>
                  <span className="hidden md:inline">•</span>
                  <span className="italic">{exhibition.type}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;