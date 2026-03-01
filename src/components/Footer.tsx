import React from 'react';
import { Link } from 'react-router-dom';
import { DoorOpen, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-industrial-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <DoorOpen className="text-industrial-blue w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter">오픈도어</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              산업용 기계 신품·중고 기업 홍보 및 상담 연결 플랫폼.<br />
              전용 랜딩페이지를 통해 고객과 기업을 직접 연결합니다.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">서비스</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/process" className="hover:text-white">매매 프로세스</Link></li>
              <li><Link to="/features" className="hover:text-white">기능/서비스</Link></li>
              <li><Link to="/support" className="hover:text-white">자주 묻는 질문</Link></li>
              <li><Link to="/support" className="hover:text-white">1:1 문의하기</Link></li>
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
                <span>서울특별시 강서구 화곡로66길 192. 1층(등촌동)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">뉴스레터 구독</h4>
            <p className="text-white/60 text-xs mb-4">매주 업데이트되는 산업 기계 시세 리포트를 받아보세요.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm w-full outline-none focus:border-safety-orange"
              />
              <button className="bg-safety-orange px-4 py-2 rounded text-sm font-bold">구독</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2024 OpenDoor Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white">이용약관</Link>
            <Link to="#" className="hover:text-white font-bold">개인정보처리방침</Link>
            <Link to="#" className="hover:text-white">사업자정보확인</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
