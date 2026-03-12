import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Layout, Bell, Info, ShieldAlert, Settings, CreditCard, Globe2, Link as LinkIcon, ArrowRight } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "전용 랜딩페이지 구축",
      description: "기계 사진과 기본 정보만 입력하면, 바이어를 유혹하는 전문 랜딩페이지를 맞춤형으로 구축해 드립니다."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "실시간 상담 알림",
      description: "바이어의 문의가 접수되는 즉시 전화나 문자로 바로 골든 타임을 놓치지 않게 합니다. 사용자의 다음 선택을 의도적으로 설계하는 CTA(Call to Action) 장치를 통해 즉각적인 행동을 유도합니다."
    }
  ];

  const policies = [
    {
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
      title: "소유권 및 운영 방식",
      content: "본 서비스는 랜딩페이지를 구매하거나 소유하는 방식이 아닙니다. 오픈도어는 개별 랜딩페이지의 판매, 제작대행, 소유권 이전을 제공하지 않습니다."
    },
    {
      icon: <Globe2 className="w-5 h-5 text-blue-500" />,
      title: "플랫폼 입점 구조",
      content: "공급사는 오픈도어 플랫폼에 입점함으로써 시스템 내에서 전용 상담 연결 페이지가 운영됩니다. 해당 페이지는 구매·양도 가능한 자산이 아니며, 플랫폼 정책에 따라 관리됩니다."
    },
    {
      icon: <Settings className="w-5 h-5 text-gray-500" />,
      title: "초기 세팅비 안내",
      content: "입점 시 안내되는 세팅비는 제작비가 아닌, 상담 연결 구조, 기본 페이지 구성, 시스템 설정을 진행하는 초기 입점 세팅 비용입니다."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-emerald-500" />,
      title: "월 이용료 안내",
      content: "월 이용료는 광고비나 유지보수비가 아닌, 전용 페이지의 지속적인 운영과 상담 연결 및 노출 관리 구조를 이용하는 플랫폼 이용료입니다."
    },
    {
      icon: <LinkIcon className="w-5 h-5 text-indigo-500" />,
      title: "운영 환경 및 응대",
      content: "모든 랜딩페이지는 오픈도어 내에서만 운영되며 외부 도메인 연결은 제공하지 않습니다. 상담 응대 및 계약 체결은 공급사가 직접 수행합니다."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              오픈도어는 <br className="hidden md:block" />
              산업용 기계 신품·중고를 취급하는 기업을 위한 <br />
              <span className="text-primary">홍보 · 노출 · 상담 연결</span>에 특화된 플랫폼입니다.
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {features.map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Service Policy Section */}
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-[2.5rem] p-8 md:p-16 border border-gray-100">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">서비스 운영 정책 안내</h2>
            </div>

            <div className="space-y-8">
              {policies.map((policy, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="mt-1 shrink-0">
                    {policy.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{policy.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {policy.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm leading-relaxed text-center italic">
                오픈도어는 산업용 기계 공급사를 위한 상담 연결 플랫폼으로, <br className="hidden md:block" />
                기계 중심의 구조를 통해 구매자와 공급사를 직접 연결합니다.
              </p>
            </div>
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
