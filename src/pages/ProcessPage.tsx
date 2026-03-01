import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Search, FileText, UserCheck, CreditCard } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "1. 기업 및 장비 정보 등록",
      content: "제조사, 유통사 등 기업 정보와 함께 홍보하고자 하는 신품·중고 장비의 상세 정보를 등록합니다."
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "2. 전용 홍보 랜딩페이지 구축",
      content: "등록된 정보를 바탕으로 장비의 신뢰도를 높일 수 있는 고퀄리티 기업 전용 랜딩페이지를 자동으로 구축합니다."
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "3. 타겟 노출 및 고객 유입",
      content: "오픈도어의 타겟 마케팅 시스템을 통해 실제 장비 구매 의사가 있는 잠재 고객들에게 자사 장비를 효과적으로 노출합니다."
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "4. 실시간 상담 및 직접 연결",
      content: "전화와 문의를 통해 유입된 고객과 직접 상담을 진행하며, 실시간 알림 시스템으로 빠른 응대를 지원합니다."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl font-bold mb-6">홍보 및 상담 연결 프로세스</h1>
            <p className="text-gray-600 text-lg">
              오픈도어는 기업의 장비가 가장 돋보일 수 있는 환경을 제공하고, 
              잠재 고객과의 직접적인 연결을 최우선으로 합니다.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-center bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="w-24 h-24 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
