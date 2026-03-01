import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';

export default function SupportPage() {
  const faqs = [
    {
      question: "견적 조회는 정말 무료인가요?",
      answer: "네, 오픈도어의 기본적인 시세 분석 및 견적 조회 서비스는 100% 무료입니다. 매매가 성사될 경우에만 소정의 수수료가 발생합니다."
    },
    {
      question: "해외 기계도 매도가 가능한가요?",
      answer: "네, 오픈도어는 글로벌 네트워크를 통해 해외 바이어와의 연결도 지원합니다. 수출 통관 절차까지 전문가가 도와드립니다."
    },
    {
      question: "랜딩페이지 제작에 비용이 드나요?",
      answer: "프리미엄 파트너십 가입 시 전용 랜딩페이지 제작 및 상담 관리 대시보드가 무료로 제공됩니다."
    },
    {
      question: "상담 연결까지 보통 얼마나 걸리나요?",
      answer: "평균적으로 정보 입력 후 24시간 이내에 첫 번째 바이어 매칭이 이루어지며, 3일 이내에 상담이 연결됩니다."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">무엇을 도와드릴까요?</h1>
            <p className="text-gray-600">자주 묻는 질문을 확인하거나 1:1 문의를 남겨주세요.</p>
          </div>

          <div className="space-y-4 mb-24">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  {openIndex === i ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openIndex === i && (
                  <div className="p-6 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-primary text-white text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">1:1 문의하기</h3>
              <p className="text-white/80 mb-8">궁금하신 점을 남겨주시면 <br />24시간 이내에 답변 드립니다.</p>
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold w-full">문의 작성</button>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <Phone className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4">전화 상담</h3>
              <p className="text-gray-600 mb-8">전문 상담원과 직접 통화하여 <br />빠르게 해결하세요.</p>
              <button className="bg-industrial-blue text-white px-8 py-3 rounded-xl font-bold w-full">1588-XXXX</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
