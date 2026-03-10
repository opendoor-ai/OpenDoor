import React from 'react';
import { ClipboardList, Users, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "회사(공급사) 정보 등록",
      description: "입점 상담을 위해 업체명, 취급 기계·장비, 연락처 등 회사(공급사) 기본 정보를 등록합니다.",
      color: "blue",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "전용 랜딩페이지 생성",
      description: "자사 기계·장비를 신뢰 있게 홍보할 수 있는 기업 전용 페이지를 맞춤형으로 구축해 드립니다.",
      color: "orange",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "고객 상담 및 연결",
      description: "전화와 문의를 통해 실시간으로 잠재 고객과 직접 연결되어 상담을 진행합니다.",
      color: "emerald",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ];

  const colorMap = {
    blue: "text-blue-600 bg-blue-50 group-hover:bg-blue-600",
    orange: "text-orange-600 bg-orange-50 group-hover:bg-orange-600",
    emerald: "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600"
  };

  const borderMap = {
    blue: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    orange: "hover:border-orange-500/50 hover:shadow-orange-500/10",
    emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/10"
  };

  const accentMap = {
    blue: "text-blue-600 bg-blue-100 group-hover:bg-blue-600",
    orange: "text-orange-600 bg-orange-100 group-hover:bg-orange-600",
    emerald: "text-emerald-600 bg-emerald-100 group-hover:bg-emerald-600"
  };

  const textMap = {
    blue: "group-hover:text-blue-600",
    orange: "group-hover:text-orange-600",
    emerald: "group-hover:text-emerald-600"
  };

  const bgMap = {
    blue: "bg-blue-50",
    orange: "bg-orange-50",
    emerald: "bg-emerald-50"
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">간편한 3단계 진행 절차</h2>
          <p className="text-gray-600 text-lg">복잡한 과정은 오픈도어가 대신합니다. 대표님은 결정만 하세요.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className={`relative z-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden group transition-all duration-500 ${borderMap[step.color as keyof typeof borderMap]}`}
            >
              {/* Image Header */}
              <div className={`h-48 overflow-hidden relative ${bgMap[step.color as keyof typeof bgMap]}`}>
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                
                <div className={`absolute top-6 left-6 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${accentMap[step.color as keyof typeof accentMap]} group-hover:text-white`}>
                  0{i + 1}
                </div>
              </div>

              <div className="p-10 pt-2 text-center">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300 shadow-lg shadow-gray-100 group-hover:text-white group-hover:shadow-xl ${colorMap[step.color as keyof typeof colorMap]}`}>
                  {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8 group-hover:scale-110 transition-transform" })}
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-gray-900 transition-colors duration-300 ${textMap[step.color as keyof typeof textMap]}`}>{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
