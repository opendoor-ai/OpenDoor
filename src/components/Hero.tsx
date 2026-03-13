import React from 'react';
import { ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1600"
          alt="산업용 중고기계 매매 전문 플랫폼 전자동 오픈도어"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-industrial-blue/85 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 backdrop-blur-[2px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              중고기계매매 전문 플랫폼<br />
              <span className="text-primary">전자동 | 오픈도어</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed">
              제조사·유통사·장비 보유 기업을 위한 산업장비 플랫폼<br />
              보유한 기계·장비를 효과적으로 홍보하고<br />
              구매 관심 고객과 전화·문의로 직접 연결됩니다.
            </p>
            
            <div className="flex flex-wrap gap-6 sm:gap-10 mb-12">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-base sm:text-lg">실시간 상담 알림</span>
              </div>
            </div>

            <button 
              onClick={scrollToConsultation}
              className="lg:hidden w-full bg-primary text-secondary py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 shadow-xl hover:bg-primary/90 transition-all duration-100 active:scale-95"
            >
              상담 신청하기
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* CTA Block for Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex order-2 w-full max-w-lg mx-auto lg:ml-auto flex-col items-center justify-center"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[3.5rem] text-center w-full shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">성공적인 거래의 시작</h3>
                <p className="text-white/70 mb-10 leading-relaxed text-lg">
                  오픈도어와 함께라면 기계·장비 홍보부터<br />
                  실제 상담 연결까지 막힘없이 진행됩니다.
                </p>
                <a 
                  href="/#consultation-form-section"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      scrollToConsultation();
                    }
                  }}
                  className="w-full bg-primary text-secondary py-6 rounded-2xl font-bold text-2xl flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:shadow-[0_25px_60px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-100 group"
                >
                  상담 신청하기
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-100" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
}
