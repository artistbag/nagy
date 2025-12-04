import React from 'react';
import FadeIn from '../components/FadeIn';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center items-center">
      <FadeIn className="text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-stone-800 mb-8">Get in Touch</h2>
        <p className="text-stone-500 mb-12 max-w-lg mx-auto leading-relaxed">
          작업 의뢰, 전시 제안, 혹은 그저 다정한 안부 인사도 환영합니다.
          <br />
          당신의 이야기가 제 세계와 만나 새로운 영감이 되기를 기다립니다.
        </p>
        
        <div className="space-y-4">
          <a href="mailto:hello@nagy-art.com" className="block text-xl md:text-2xl font-serif text-stone-800 hover:text-stone-500 transition-colors border-b border-transparent hover:border-stone-400 pb-1 w-max mx-auto">
            hello@nagy-art.com
          </a>
          <div className="flex justify-center gap-6 mt-8">
             <span className="text-stone-400 uppercase tracking-widest text-xs">Instagram @nagy.art</span>
             <span className="text-stone-400 uppercase tracking-widest text-xs">Behance /nagy</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4} className="mt-24 w-full max-w-4xl opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
         <img src="https://picsum.photos/1200/400?grayscale" alt="Studio Atmosphere" className="w-full h-64 object-cover" />
      </FadeIn>
    </div>
  );
};

export default Contact;