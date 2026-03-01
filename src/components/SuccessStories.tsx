import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function SuccessStories() {
  const stories = [
    {
      title: "CNC 선반 5대 일괄 매도 성공",
      company: "S정밀 (경기도 안산)",
      content: "공장 이전으로 급하게 처분해야 했는데, 오픈도어를 통해 48시간 만에 적정 가격으로 바이어를 만났습니다.",
      image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "사출기 신규 상담 리드 200% 증가",
      company: "H테크 (경남 창원)",
      content: "전용 랜딩페이지를 제작한 후 온라인 문의가 눈에 띄게 늘었습니다. 상담 관리 대시보드가 정말 편리하네요.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">성공적인 매매 사례</h2>
            <p className="text-gray-600 text-lg">이미 수많은 기업들이 오픈도어와 함께 성장하고 있습니다.</p>
          </div>
          <button className="text-primary font-bold hover:text-primary/80 transition-colors flex items-center gap-2 text-lg">
            전체 사례 보기 <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {stories.map((story, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 group"
            >
              <div className="w-full sm:w-56 h-56 sm:h-auto overflow-hidden shrink-0">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-safety-orange text-safety-orange" />)}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 leading-tight">{story.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">"{story.content}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400">CO</span>
                  </div>
                  <p className="text-sm font-bold text-gray-500">{story.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
