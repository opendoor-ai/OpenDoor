import React, { useState, useRef, useId } from 'react';
import { ShieldCheck, ArrowRight, Building2, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ConsultationForm({ className }: { className?: string }) {
  const uniqueId = useId();
  const iframeName = `hidden_iframe_${uniqueId.replace(/:/g, '')}`;
  
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    emailId: '',
    emailDomain: '@naver.com',
    customDomain: '',
    inquiry: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const isSubmittingRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const fullEmail = formData.emailDomain === 'manual' 
    ? `${formData.emailId}${formData.customDomain ? (formData.customDomain.startsWith('@') ? formData.customDomain : '@' + formData.customDomain) : ''}`
    : `${formData.emailId}${formData.emailDomain}`;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length < 4) {
      setFormData({ ...formData, phone: val });
    } else if (val.length < 8) {
      setFormData({ ...formData, phone: val.slice(0, 3) + "-" + val.slice(3) });
    } else {
      setFormData({ ...formData, phone: val.slice(0, 3) + "-" + val.slice(3, 7) + "-" + val.slice(7, 11) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.emailId || formData.emailId.includes(" ") || !emailRegex.test(fullEmail)) {
      e.preventDefault();
      alert("이메일 형식을 다시 확인해주세요!");
      return;
    }
    
    setIsSubmitting(true);
    isSubmittingRef.current = true;

    // Fallback: If iframe onLoad doesn't fire for some reason, reset 후 알림
    setTimeout(() => {
      if (isSubmittingRef.current) {
        handleIframeLoad();
      }
    }, 5000);
  };

  const handleIframeLoad = () => {
    if (isSubmittingRef.current) {
      alert("상담 접수가 성공적으로 완료되었습니다!");
      setIsSubmitting(false);
      isSubmittingRef.current = false;
      setFormData({
        company: '',
        name: '',
        phone: '',
        emailId: '',
        emailDomain: '@naver.com',
        customDomain: '',
        inquiry: '',
        agreed: false
      });
    }
  };

  return (
    <div className={cn("bg-white px-3 py-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100", className)}>
      <div className="mb-6 text-center">
        <h3 className="text-clamp-h3 font-bold text-gray-900 mb-2">상담 접수</h3>
        <p className="text-gray-500 text-sm">내용을 남겨주시면 빠르게 연락드립니다.</p>
      </div>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSfzLvTe7lXKsZo39zx9N1Xer482rzw97x1L9eIqxZE6TJW9JA/formResponse"
        method="POST"
        target={iframeName}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Google Form Hidden Fields */}
        <input type="hidden" name="entry.1197734588" value={formData.company} />
        <input type="hidden" name="entry.410116931" value={formData.name} />
        <input type="hidden" name="entry.220342773" value={formData.phone.replace(/-/g, "")} />
        <input type="hidden" name="entry.1842282740" value={fullEmail} />
        <input type="hidden" name="entry.1018759601" value={formData.inquiry} />
        <input type="hidden" name="entry.1745878659" value="동의합니다" />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">회사명</label>
            <input
              type="text"
              placeholder="회사명"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange transition-all bg-gray-50/50"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">이름</label>
              <input
                type="text"
                placeholder="이름"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange transition-all bg-gray-50/50"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">전화번호</label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                maxLength={13}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange transition-all bg-gray-50/50"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">
              이메일 주소 <span className="text-red-500">*</span>
            </label>
            <div className={cn(
              "flex items-center gap-1 sm:gap-2 w-full",
              formData.emailDomain === 'manual' && "flex-wrap gap-y-2"
            )}>
              <div className={cn(
                "flex items-center gap-1 sm:gap-1.5",
                formData.emailDomain === 'manual' ? "w-full sm:w-auto sm:flex-[1.2]" : "flex-[1.2] min-w-0"
              )}>
                <input
                  type="text"
                  placeholder="아이디 (영문)"
                  required
                  className="flex-1 min-w-0 px-2 sm:px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange transition-all bg-gray-50/50 text-xs sm:text-base"
                  value={formData.emailId}
                  onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
                />
                <span className="text-gray-400 font-bold flex-shrink-0 text-[10px] sm:text-sm">@</span>
              </div>
              
              <div className={cn(
                "flex gap-1 sm:gap-2 min-w-0",
                formData.emailDomain === 'manual' ? "w-full sm:w-auto sm:flex-[1.8]" : "flex-[1.8]"
              )}>
                {formData.emailDomain === 'manual' && (
                  <input
                    type="text"
                    placeholder="직접 입력"
                    required
                    className="flex-1 min-w-0 px-2 sm:px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange transition-all bg-gray-50/50 text-[10px] sm:text-sm"
                    value={formData.customDomain}
                    onChange={(e) => setFormData({ ...formData, customDomain: e.target.value })}
                  />
                )}
                <select
                  className={cn(
                    "min-w-0 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange transition-all bg-gray-50/50 text-[10px] sm:text-sm cursor-pointer",
                    formData.emailDomain === 'manual' ? "w-7 sm:w-10 px-0 flex-shrink-0 text-center" : "flex-1 px-1 sm:px-3"
                  )}
                  value={formData.emailDomain}
                  onChange={(e) => setFormData({ ...formData, emailDomain: e.target.value, customDomain: '' })}
                >
                  <option value="@naver.com">naver.com</option>
                  <option value="@gmail.com">gmail.com</option>
                  <option value="@daum.net">daum.net</option>
                  <option value="@hanmail.net">hanmail.net</option>
                  <option value="@kakao.com">kakao.com</option>
                  <option value="@nate.com">nate.com</option>
                  <option value="manual">직접 입력</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">문의내용</label>
            <textarea
              placeholder="문의내용을 적어주세요"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange transition-all bg-gray-50/50"
              value={formData.inquiry}
              onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                className="w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary"
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
              />
              <span className="text-xs text-gray-600">개인정보 수집 및 이용 동의 (필수)</span>
            </label>
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="text-[10px] text-gray-400 underline hover:text-gray-600"
            >
              내용보기
            </button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full bg-primary hover:brightness-105 text-gray-900 font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-100 shadow-lg shadow-primary/20 group",
              isSubmitting && "opacity-70 cursor-not-allowed"
            )}
          >
            <span className="text-lg">{isSubmitting ? "전송 중..." : "상담 접수하기"}</span>
            {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-100" />}
          </button>

          <div className="flex items-center justify-center gap-2 mt-4">
            <ShieldCheck className="w-4 h-4 text-gray-400" />
            <p className="text-[10px] text-gray-500">
              입력하신 정보는 보안 정책에 따라 안전하게 보호됩니다.
            </p>
          </div>
        </div>
      </form>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h4 className="font-bold text-gray-900">개인정보 수집 및 이용 동의</h4>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >&times;</button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto text-sm text-gray-600 leading-relaxed space-y-4">
              <p>오픈도어는 원활한 상담 및 서비스 제공을 위해 아래와 같이 개인정보를 수집하고 있습니다.</p>
              
              <div className="space-y-2">
                <p className="font-bold text-gray-800">1. 수집하는 개인정보 항목</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>필수항목: 회사명, 이름, 연락처, 이메일, 문의내용</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-gray-800">2. 개인정보의 수집 및 이용 목적</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>상담 신청에 따른 본인 확인 및 서비스 안내</li>
                  <li>기계·장비 홍보 및 매칭 관련 상담 연결</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-gray-800">3. 개인정보의 보유 및 이용 기간</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>상담 및 서비스 제공 목적 달성 후 1년</li>
                  <li>단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-gray-800">4. 동의 거부 권리 및 불이익</p>
                <p>귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 상담 신청 및 서비스 이용이 제한될 수 있습니다.</p>
              </div>

              <p className="text-[11px] text-gray-400 pt-4 border-t border-gray-50">
                운영사: 전자동 (상호: 전자동)
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

      <iframe
        name={iframeName}
        id={iframeName}
        style={{ display: 'none' }}
        ref={iframeRef}
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
