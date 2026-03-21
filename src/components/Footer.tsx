import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DoorOpen, Mail, Phone, MapPin, Monitor, Smartphone, MessageCircle } from 'lucide-react';
import { useViewMode } from '../context/ViewModeContext';

export default function Footer() {
  const { viewMode, setViewMode } = useViewMode();
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-industrial-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <DoorOpen className="text-primary w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter">오픈도어기계광고</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              오픈도어기계광고는 중고기계를 빠르게 판매하기 위해<br />
              전화 문의를 발생시키는 기계 판매 중심 광고 서비스입니다.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">서비스</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/process" className="hover:text-white">홍보 및 상담 연결 프로세스</Link></li>
              <li><Link to="/features" className="hover:text-white">기능/서비스</Link></li>
              <li><Link to="/support" className="hover:text-white">자주 묻는 질문</Link></li>
              <li><a href="/#consultation-form-section" className="hover:text-white">상담 접수하기</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">고객지원</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>010-6355-8055 (평일 09:00 - 18:00)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>opendoor@jeonjadong.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>서울특별시 강서구 화곡로66길 192, 1층(등촌동)</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#FEE500]" />
                <a href="http://pf.kakao.com/_rtxmxhX" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  카카오톡 채널: 오픈도어기계광고 (ID: 오픈도어기계광고365)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-white/40 text-[11px] leading-relaxed">
          <div className="space-y-2">
            <p className="text-sm font-medium">© 전자동. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>상호(회사명) : 전자동</span>
              <span>운영사 : 전자동</span>
              <span>대표자 : 한상덕</span>
              <span>사업자등록번호 : 156-59-00878</span>
            </div>
            <p>주소 : 서울특별시 강서구 화곡로66길 192, 1층(등촌동)</p>
            <p>
              오픈도어기계광고(OpenDoor)는 전자동이 운영하는 산업기계 정보 및 광고 플랫폼입니다.<br />
              본 플랫폼은 상품을 직접 판매하지 않으며 상품 정보 및 거래에 대한 책임은 각 공급사에게 있습니다.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-6 shrink-0">
              <Link to="#" className="hover:text-white transition-colors">이용약관</Link>
              <button 
                onClick={() => setShowPrivacy(true)}
                className="hover:text-white font-bold transition-colors"
              >
                개인정보처리방침
              </button>
              <Link to="#" className="hover:text-white transition-colors">사업자정보확인</Link>
            </div>
            
            {/* View Mode Toggle */}
            <div className={`flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10 ${viewMode === 'pc' ? 'p-8 gap-12 rounded-[4rem] border-4' : ''}`}>
              <button 
                onClick={() => setViewMode('pc')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'pc' 
                    ? 'bg-primary text-secondary font-bold px-20 py-10 text-5xl rounded-[3rem] gap-8' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Monitor className={viewMode === 'pc' ? 'w-20 h-20' : 'w-3.5 h-3.5'} />
                <span>PC화면</span>
              </button>
              <button 
                onClick={() => setViewMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'mobile' 
                    ? 'bg-primary text-secondary font-bold' 
                    : viewMode === 'pc'
                      ? 'px-20 py-10 text-5xl rounded-[3rem] gap-8 hover:bg-white/10 text-white/40'
                      : 'hover:bg-white/10'
                }`}
              >
                <Smartphone className={viewMode === 'pc' ? 'w-20 h-20' : 'w-3.5 h-3.5'} />
                <span>모바일화면</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h4 className="font-bold text-gray-900">개인정보처리방침</h4>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >&times;</button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto text-sm text-gray-600 leading-relaxed space-y-4">
              <p>전자동(이하 '운영사')은 오픈도어기계광고 서비스를 이용하는 고객의 개인정보를 소중하게 생각하며, 관련 법령을 준수합니다.</p>
              
              <div className="space-y-2">
                <p className="font-bold text-gray-800">1. 개인정보의 수집 및 이용 목적</p>
                <p>상담 신청에 따른 본인 확인, 서비스 안내, 기계·장비 홍보 및 매칭 관련 상담 연결을 목적으로 합니다.</p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-gray-800">2. 수집하는 개인정보 항목</p>
                <p>회사명, 이름, 연락처, 이메일, 문의내용</p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-gray-800">3. 개인정보의 보유 및 이용 기간</p>
                <p>상담 및 서비스 제공 목적 달성 후 1년 보관 후 파기합니다. 단, 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>
              </div>

              <p className="text-[11px] text-gray-400 pt-4 border-t border-gray-50">
                상호(회사명): 전자동 | 운영사: 전자동
              </p>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <button 
                onClick={() => setShowPrivacy(false)}
                className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
