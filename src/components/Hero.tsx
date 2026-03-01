import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import ConsultationForm from './ConsultationForm';

export default function Hero() {
  return (
    <section id="consultation" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
          alt="Industrial Machinery"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-industrial-blue/85 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Block - First on Mobile, First on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              산업용 기계 홍보부터<br />
              <span className="text-safety-orange">상담 연결</span>까지 한 번에.
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              제조사·유통사·중고 장비 보유 기업을 위한 전용 플랫폼.
              자사 장비를 신뢰 있게 홍보하고, 전화와 문의로 고객과 직접 연결되세요.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-full bg-safety-orange/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-safety-orange" />
                </div>
                <span className="font-medium sm:text-lg">검증된 바이어 매칭</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-full bg-safety-orange/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-safety-orange" />
                </div>
                <span className="font-medium sm:text-lg">실시간 상담 알림</span>
              </div>
            </div>
          </motion.div>

          {/* Form Block - Second on Mobile, Second on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2 w-full max-w-lg mx-auto px-4 sm:px-0"
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
