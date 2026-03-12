import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ValueProp() {
  const traditional = [
    "불투명한 온라인 홍보 채널",
    "단순 게시판 형태의 낮은 신뢰도",
    "광고비 지출 대비 낮은 상담 연결",
    "고객 문의 관리의 번거로움"
  ];

  const opendoor = [
    "기업 전용 고퀄리티 랜딩페이지",
    "기계·장비별 맞춤형 신뢰 홍보 시스템",
    "전화·문의 중심의 즉시 연결",
    "실시간 상담 알림 및 즉각적인 연결"
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">왜 오픈도어인가요?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          기존의 번거로운 기계 매매 방식을 혁신했습니다.<br className="hidden sm:block" />
          “장비는 등록하고, 고객은 연결됩니다.”
        </p>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-400">기존 매매 방식</h3>
          </div>
          <ul className="space-y-6">
            {traditional.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-industrial-blue p-8 sm:p-12 rounded-3xl shadow-2xl shadow-blue-900/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-safety-orange" />
            </div>
            <h3 className="text-2xl font-bold text-white">오픈도어 솔루션</h3>
          </div>
          <ul className="space-y-6 relative z-10">
            {opendoor.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-white/90">
                <div className="w-1.5 h-1.5 rounded-full bg-safety-orange mt-2.5 shrink-0" />
                <span className="text-lg font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
