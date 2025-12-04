import React from 'react';
import FadeIn from '../components/FadeIn';

const Projects: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
       <FadeIn>
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-serif text-stone-800 mb-4">Project & Education</h2>
          <p className="text-stone-500">예술과 기술의 만남을 나누는 공공 프로젝트와 교육 활동입니다.</p>
        </header>
      </FadeIn>

      <div className="space-y-12">
        <FadeIn delay={0.1}>
          <div className="group border-t border-stone-200 py-12 hover:bg-stone-100 transition-colors px-4 -mx-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-stone-200 text-stone-600 text-[10px] tracking-widest rounded-full mb-3">WORKSHOP</span>
                <h3 className="text-2xl font-serif text-stone-800 mb-2 group-hover:pl-2 transition-all">My First AI Drawing</h3>
                <p className="text-stone-500 text-sm">청소년 대상 생성형 AI 활용 미술 교육 프로그램</p>
              </div>
              <span className="text-stone-400 font-mono text-sm">2024. Summer</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="group border-t border-stone-200 py-12 hover:bg-stone-100 transition-colors px-4 -mx-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-stone-200 text-stone-600 text-[10px] tracking-widest rounded-full mb-3">PUBLIC ART</span>
                <h3 className="text-2xl font-serif text-stone-800 mb-2 group-hover:pl-2 transition-all">City of Dreams</h3>
                <p className="text-stone-500 text-sm">서울시 공공 미디어 파사드 프로젝트 참여작</p>
              </div>
              <span className="text-stone-400 font-mono text-sm">2023. Winter</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="group border-t border-b border-stone-200 py-12 hover:bg-stone-100 transition-colors px-4 -mx-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-stone-200 text-stone-600 text-[10px] tracking-widest rounded-full mb-3">MENTORING</span>
                <h3 className="text-2xl font-serif text-stone-800 mb-2 group-hover:pl-2 transition-all">Creative Tech Mentor</h3>
                <p className="text-stone-500 text-sm">예술대학생 대상 AI 툴 활용 멘토링</p>
              </div>
              <span className="text-stone-400 font-mono text-sm">2023 - Present</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Projects;