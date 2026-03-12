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
    email: '',
    inquiry: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmittingRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
    if (formData.email.includes(" ") || !emailRegex.test(formData.email)) {
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
        email: '',
        inquiry: '',
        agreed: false
      });
    }
  };

  return (
    <div className={cn("bg-white px-4 py-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100", className)}>
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">상담 접수</h3>
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
        <input type="hidden" name="entry.1842282740" value={formData.email} />
        <input type="hidden" name="entry.1018759601" value={formData.inquiry} />
        <input type="hidden" name="entry.1745878659" value="동의합니다" />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">회사명</label>
            <input
              type="text"
              placeholder="회사명"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-gray-50/50"
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-gray-50/50"
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-gray-50/50"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">이메일</label>
            <input
              type="email"
              placeholder="email@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-gray-50/50"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">문의내용</label>
            <textarea
              placeholder="문의내용을 적어주세요"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-gray-50/50"
              value={formData.inquiry}
              onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer pt-1">
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
