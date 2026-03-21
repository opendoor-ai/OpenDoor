import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';

export default function SupportPage() {
  const faqSections = [
    {
      title: "자주 묻는 질문 (FAQ)",
      items: [
        {
          question: "Q1. 오픈도어기계광고는 어떤 서비스인가요?",
          answer: "오픈도어기계광고는 중고기계를 빠르게 판매하기 위해 전화 문의를 발생시키는 광고 서비스입니다. 단순 노출이 아닌 실제 기계 판매로 이어지는 문의를 만드는 광고입니다."
        },
        {
          question: "Q2. 어떤 업체가 입점할 수 있나요?",
          answer: "신품 또는 중고 산업기계를 취급하는 업체라면 입점 상담이 가능합니다. 취급 기계·장비 종류와 운영 방식에 따라 입점 가능 여부가 안내됩니다."
        },
        {
          question: "Q3. 상담 페이지 구축 기간은 얼마나 걸리나요?",
          answer: "상담 진행 후 기본 정보가 접수되면 약 5일~7일 내에 상담 페이지 구축이 진행됩니다."
        },
        {
          question: "Q4. 비용은 어떻게 되나요?",
          answer: "서비스 운영 방식과 등록 기계·장비 범위에 따라 비용 안내는 상담을 통해 진행됩니다."
        },
        {
          question: "Q5. 어떤 기계·장비를 등록할 수 있나요?",
          answer: "CNC, 선반, 사출기, 프레스, 레이저 기계·장비 등 다양한 산업용 기계 등록이 가능합니다."
        },
        {
          question: "Q6. 기계·장비는 몇 개까지 등록할 수 있나요?",
          answer: "기계·장비 등록 수와 운영 방식은 상담 시 플랫폼 이용 기준에 따라 안내됩니다."
        },
        {
          question: "Q7. 상담 요청은 어떻게 받게 되나요?",
          answer: "구매자가 상담 요청을 남기면 등록된 연락처를 통해 직접 상담을 진행할 수 있습니다."
        },
        {
          question: "Q8. 상담 신청은 어떻게 하나요?",
          answer: "랜딩페이지의 입점 상담 신청 또는 전화 상담을 통해 간단하게 상담 요청을 하실 수 있습니다."
        },
        {
          question: "Q9. 왜 오픈도어기계광고에 입점해야 하나요?",
          answer: "오픈도어기계광고는 기계를 팔리게 만드는 광고 서비스입니다. 중고기계 시장에서 빠른 판매를 위해 설계된 광고 방식입니다."
        },
        {
          question: "Q10. 기존 홈페이지나 블로그가 있어도 필요한가요?",
          answer: "기존 홈페이지나 블로그와 함께 운영할 수 있습니다. 오픈도어기계광고는 상담 연결 중심의 구조로 운영되기 때문에 추가적인 상담 유입 채널로 활용할 수 있습니다."
        },
        {
          question: "Q11. 기계·장비가 많지 않아도 입점할 수 있나요?",
          answer: "가능합니다. 소량의 기계·장비라도 취급하는 기계·장비 종류에 따라 입점 상담이 가능합니다."
        },
        {
          question: "Q12. 기계·장비 등록은 어떻게 진행되나요?",
          answer: "기본 업체 정보 등록 후 신품 또는 중고 기계·장비 정보를 시스템에 등록하여 운영할 수 있습니다."
        },
        {
          question: "Q13. 상담은 어떤 방식으로 진행되나요?",
          answer: "랜딩페이지 상담 신청 또는 전화 상담을 통해 입점 구조와 운영 방식에 대한 안내가 진행됩니다."
        }
      ]
    },
    {
      title: "Q&A",
      items: [
        {
          question: "Q. 랜딩페이지 제작 서비스인가요?",
          answer: "아닙니다. 오픈도어기계광고는 기계가 안 팔리는 문제를 해결하기 위한 판매 중심 광고입니다. 단순 광고와 달리 실제 기계 판매까지 연결되는 광고 서비스입니다."
        },
        {
          question: "Q. 중고 기계·장비도 등록할 수 있나요?",
          answer: "네, 신품뿐만 아니라 중고 기계·장비도 등록이 가능합니다."
        },
        {
          question: "Q. 기계·장비 사진이 없어도 등록이 가능한가요?",
          answer: "가능합니다. 기본 정보 등록 후 기계·장비 정보는 추가 등록할 수 있습니다."
        },
        {
          question: "Q. 상담은 무료인가요?",
          answer: "입점 상담은 무료로 진행됩니다."
        },
        {
          question: "Q. 상담 후 바로 진행해야 하나요?",
          answer: "아닙니다. 상담을 통해 구조를 확인한 후 진행 여부를 결정하시면 됩니다."
        }
      ]
    }
  ];

  const [openSection, setOpenSection] = useState<string | null>("자주 묻는 질문 (FAQ)-0");

  return (
    <div className="min-h-screen pt-20">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">무엇을 도와드릴까요?</h1>
              <p className="text-gray-600">자주 묻는 질문을 확인하거나 상담을 신청해주세요.</p>
            </div>

          <div className="space-y-16 mb-24">
            {faqSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((faq, i) => {
                    const id = `${section.title}-${i}`;
                    const isOpen = openSection === id;
                    return (
                      <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                        <button 
                          className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenSection(isOpen ? null : id)}
                        >
                          <span className="font-bold text-lg">{faq.question}</span>
                          {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                        </button>
                        {isOpen && (
                          <div className="p-6 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-100 whitespace-pre-line">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-primary text-gray-900 text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">상담 접수하기</h3>
              <p className="text-gray-900/80 mb-8">궁금하신 점을 남겨주시면 <br />빠르게 연락 드립니다.</p>
              <a href="/#consultation-form-section" className="bg-secondary text-white px-8 py-3 rounded-xl font-bold w-full inline-block">상담 신청</a>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center">
              <Phone className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4">전화 상담</h3>
              <p className="text-gray-600 mb-8">전문 상담원과 직접 통화하여 <br />빠르게 해결하세요.</p>
              <button className="bg-secondary text-white px-8 py-3 rounded-xl font-bold w-full">010-6355-8055</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
