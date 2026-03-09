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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              산업용 기계 홍보부터<br />
              <span className="text-primary">상담 연결</span>까지 한 번<br />
              에.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed">
              제조사·유통사·중고 장비 보유 기업을 위한 전용 플랫폼. 자사 장비를 신뢰 있게 홍보하고, 전화와 문의로 고객과 직접 연결되세요.
            </p>
            
            <div className="flex flex-wrap gap-6 sm:gap-10">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-base sm:text-lg">검증된 바이어 매칭</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-base sm:text-lg">실시간 상담 알림</span>
              </div>
            </div>
          </motion.div>

          {/* Form Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 w-full max-w-lg mx-auto lg:ml-auto"
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
