import React from 'react';
import { ExternalLink, Layout } from 'lucide-react';
import { motion } from 'motion/react';
import ConsultationForm from './ConsultationForm';

export default function Portfolio() {
  const portfolios = [
    {
      title: "원공사 (Wongongsa 2)",
      description: "레이저 기계·장비 제조 전문 기업의 고성능 랜딩페이지입니다. 더욱 세련된 디자인과 최적화된 상담 시스템을 제공합니다.",
      url: "https://wongongsa2.vercel.app/",
      image: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=800",
      tags: ["레이저 기계·장비", "제조 전문", "고성능"]
    },
    {
      title: "원공사 (Wongongsa)",
      description: "정밀한 기술의 완성. 레이저 절단기, 커팅기, 용접기 전문 제조 기업의 고성능 랜딩페이지입니다.",
      url: "https://wongongsa.vercel.app/",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
      tags: ["레이저 기계·장비", "정밀제조", "공식대리점"]
    },
    {
      title: "대화상사 (Daehwa SS)",
      description: "30년 전통의 중고 기계 매매 전문. 새 기계 같은 성능과 합리적인 가격을 보증하는 신뢰의 플랫폼입니다.",
      url: "https://daehwass.vercel.app/",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      tags: ["중고기계", "유통매매", "30년전통"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold mb-4">
            <Layout className="w-4 h-4" />
            <span>제작 포트폴리오</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">랜딩페이지 제작 사례</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            오픈도어가 제작한 기업 전용 랜딩페이지 샘플입니다.<br className="hidden sm:block" />
            각 기업의 특성에 맞춘 최적화된 디자인과 상담 연결 시스템을 확인해보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-24">
          {portfolios.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-industrial-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-industrial-blue px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    사이트 방문하기
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white border border-gray-200 rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  자세히 보기 <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultation Form Section */}
        <div id="consultation-form-section" className="max-w-4xl mx-auto pt-12">
          <div className="bg-industrial-blue rounded-[2rem] sm:rounded-[3rem] px-4 py-10 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 text-white">
                <h3 className="text-3xl font-bold mb-6">지금 바로<br />상담을 시작하세요</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  전문 상담원이 귀사의 기계·장비 특성에 맞는 최적의 홍보 전략을 제안해 드립니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">01</span>
                    </div>
                    <span className="text-sm">전문가 1:1 매칭</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">02</span>
                    </div>
                    <span className="text-sm">맞춤형 랜딩페이지 기획</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">03</span>
                    </div>
                    <span className="text-sm">실시간 바이어 연결</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
