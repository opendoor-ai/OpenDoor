import React from 'react';
import { ClipboardList, Users, Handshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "장비 정보 등록",
      description: "보유하신 신품 및 중고 장비의 정보를 시스템에 등록합니다."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "전용 랜딩페이지 생성",
      description: "자사 장비를 신뢰 있게 홍보할 수 있는 기업 전용 페이지가 자동으로 생성됩니다."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "고객 상담 및 연결",
      description: "전화와 문의를 통해 실시간으로 잠재 고객과 직접 연결되어 상담을 진행합니다."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">간편한 3단계 진행 절차</h2>
          <p className="text-gray-600 text-lg">복잡한 과정은 오픈도어가 대신합니다. 대표님은 결정만 하세요.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center group hover:border-primary/30 transition-all duration-300">
              <div className="w-20 h-20 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              <div className="absolute top-6 left-6 w-8 h-8 bg-safety-orange/10 text-safety-orange rounded-lg flex items-center justify-center font-bold text-sm">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
