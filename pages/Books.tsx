import React from 'react';
import FadeIn from '../components/FadeIn';
import { BOOKS_DATA } from '../constants';

const Books: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <header className="mb-20 pl-4 md:pl-0 border-l-2 border-stone-800 md:border-none">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Picture Books</h2>
          <p className="text-stone-500 font-light max-w-xl">
            종이 위에서 펼쳐지는 가장 따뜻한 환상. <br/>
            AI 기술을 활용해 상상의 배경을 짓고, 그 안에 손그림의 온기를 담아 이야기를 만듭니다.
          </p>
        </header>
      </FadeIn>

      <div className="space-y-32">
        {BOOKS_DATA.map((book, index) => (
          <FadeIn key={book.id} delay={index * 0.2}>
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 aspect-[1/1.2] bg-stone-100 shadow-xl overflow-hidden relative group">
                <img 
                   src={book.imageUrl} 
                   alt={book.title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4">
                 <span className="text-xs font-bold text-stone-400 tracking-widest mb-4">PUBLISHED IN {book.year}</span>
                 <h3 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">{book.title}</h3>
                 <p className="text-stone-600 leading-loose mb-8 text-lg font-light">
                   {book.description}
                 </p>
                 <button className="px-8 py-3 border border-stone-300 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all text-sm tracking-widest uppercase">
                   View Details
                 </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Books;