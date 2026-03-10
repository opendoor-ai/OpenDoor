import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Building2, Target, CheckCircle2, Users2, ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 border-b border-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
                오픈도어 <span className="text-primary">회사소개</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                오픈도어(OpenDoor)는 산업용 기계 신품 및 중고 설비를 취급하는 공급사와 구매 수요자를 연결하는 <span className="font-bold text-gray-900">산업기계 전문 홍보·상담 플랫폼</span>입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Introduction Detail */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">산업용 기계·장비의 디지털 연결</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  CNC, 선반, 사출기, 프레스, 가공기계 등 다양한 산업용 기계·장비를 중심으로 공급사가 보유하거나 직접 제작·생산하는 기계를 온라인에서 효과적으로 소개하고 상담까지 이어질 수 있도록 설계되었습니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['CNC', '선반', '사출기', '프레스', '가공기계'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Industrial Machinery" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Role Section */}
            <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 mb-32">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">오픈도어의 역할</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  오픈도어는 단순한 제품 나열형 사이트가 아니라 <span className="font-bold">공급사의 강점과 보유 기계·장비를 명확히 보여주는 구조</span>를 기반으로 구매자가 필요한 정보를 빠르게 확인하고 업체와 직접 상담을 진행할 수 있도록 돕습니다.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-lg mb-4 text-primary">공급사</h4>
                    <p className="text-gray-600">자사 중심의 소개 페이지를 통해 제품, 취급 분야, 상담 정보를 명확히 전달할 수 있습니다.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-lg mb-4 text-primary">구매자</h4>
                    <p className="text-gray-600">복잡한 검색 과정 없이 조건에 맞는 업체를 쉽게 찾을 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Direction & Values */}
            <div className="grid md:grid-cols-2 gap-12 mb-32">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">오픈도어의 핵심 방향</h2>
                <ul className="space-y-4">
                  {[
                    "산업용 기계 전문 분야에 특화된 구조",
                    "신품 제작·생산 기계 및 중고 설비 동시 홍보",
                    "공급사 중심의 정보 전달 방식",
                    "상담 연결을 고려한 실무형 구성",
                    "B2B 거래 환경에 맞춘 간결한 UX"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">오픈도어가 지향하는 가치</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  오픈도어는 공급사에는 신뢰 기반의 홍보 채널을, 구매자에게는 명확한 선택 기준을 제공하는 것을 목표로 합니다.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  과장된 광고보다 실제 취급 기계·장비와 업체 정보에 집중하여 산업 현장에서 바로 활용 가능한 <span className="font-bold text-gray-900">실질적인 연결 플랫폼</span>을 지향합니다.
                </p>
              </div>
            </div>

            {/* Target Audience */}
            <div className="border-t border-gray-100 pt-24 mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">주요 활용 대상</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { title: "제조·제작 업체", icon: <Building2 /> },
                  { title: "중고 기계 유통", icon: <Target /> },
                  { title: "자동화 관련 기업", icon: <Rocket /> },
                  { title: "법인·사업자", icon: <Users2 /> }
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:text-primary transition-colors">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                    </div>
                    <span className="font-bold text-gray-900">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Information */}
            <div className="border-t border-gray-100 pt-24 mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">사업자 정보</h2>
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500">운영사</span>
                      <span className="font-bold text-gray-900">전자동</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500">대표자</span>
                      <span className="font-bold text-gray-900">한상덕</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500">사업자등록번호</span>
                      <span className="font-bold text-gray-900">156-59-00878</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col border-b border-gray-200 pb-2">
                      <span className="text-gray-500 mb-1">주소</span>
                      <span className="font-bold text-gray-900">서울특별시 강서구 화곡로66길 192, 1층(등촌동)</span>
                    </div>
                    <div className="flex flex-col border-b border-gray-200 pb-2">
                      <span className="text-gray-500 mb-1">이메일</span>
                      <span className="font-bold text-gray-900">opendoor@jeonjadong.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center py-20 bg-primary rounded-[3rem] text-gray-900">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
