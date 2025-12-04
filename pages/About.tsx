import React from 'react';
import FadeIn from '../components/FadeIn';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Profile Image */}
        <FadeIn className="w-full md:w-1/3 shrink-0">
          <div className="aspect-[3/4] overflow-hidden bg-stone-200">
            <img 
              src="https://picsum.photos/800/1066?random=99" 
              alt="Artist NAGY" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </FadeIn>

        {/* Text Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-10">
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-2">NAGY</h2>
            <p className="text-stone-500 font-serif italic text-lg">Visual Artist, Dream Weaver</p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-6 text-stone-600 leading-loose font-light tracking-wide text-justify">
              <p>
                안녕하세요, 시각예술가 나기(NAGY)입니다.
              </p>
              <p>
                저는 손끝에서 피어나는 드로잉의 온기와 인공지능이 그려내는 무한한 상상력을 결합하여 
                새로운 차원의 이미지를 짓습니다. 저에게 캔버스는 단순한 평면이 아니라, 
                현실과 환상이 교차하는 몽환적인 숲과 같습니다.
              </p>
              <p>
                디지털과 아날로그의 경계에서 서성이는 감정들을 포착하고, 
                그 안에 숨겨진 다정하고 신비로운 이야기를 시각 언어로 번역합니다. 
                저의 작업이 당신의 일상에 작은 쉼표가 되고, 
                잊고 있던 꿈의 조각을 발견하는 여정이 되기를 바랍니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
             <div className="pt-8 border-t border-stone-200">
                <h3 className="text-xl font-serif text-stone-800 mb-6">Artist Statement</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-prose">
                  "기술은 차갑지만, 그 기술을 다루는 시선은 따뜻해야 한다. 
                  나의 AI 아트워크는 알고리즘이 아닌, 사람의 기억과 감각을 재료로 한다."
                </p>
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default About;