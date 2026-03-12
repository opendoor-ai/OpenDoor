import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, FileText, UserCheck, CreditCard, ArrowRight } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "1. 회사(공급사) 정보 등록",
      content: "입점 상담을 위해 업체명, 취급 기계·장비, 연락처 등 회사(공급사) 기본 정보를 등록합니다."
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "2. 전용 홍보 랜딩페이지 구축",
      content: "등록된 정보를 바탕으로 기계·장비의 신뢰도를 높일 수 있는 고퀄리티 기업 전용 랜딩페이지를 맞춤형으로 구축합니다."
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "3. 타겟 노출 및 고객 유입",
      content: "오픈도어의 타겟 마케팅 시스템을 통해 실제 기계·장비 구매 의사가 있는 잠재 고객들에게 자사 기계·장비를 효과적으로 노출합니다."
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
              오픈도어는 기업의 기계·장비가 가장 돋보일 수 있는 환경을 제공하고, 
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

          {/* Closing Banner */}
          <div className="mt-24 text-center py-20 bg-primary rounded-[3rem] text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">오픈도어(OpenDoor)</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              산업용 기계 거래의 시작을 여는<br />
              실무 중심 B2B 플랫폼입니다.
            </p>
            <Link 
              to="/#consultation"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-colors shadow-xl"
            >
              상담 접수하기 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
