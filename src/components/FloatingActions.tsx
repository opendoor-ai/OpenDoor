import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MessageCircle, ChevronUp, ChevronDown, X, DoorOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);
  const [smsMessage, setSmsMessage] = useState(
    "오픈도어 홈페이지를 보고 전화문의 드립니다.\n\n빠른 상담 부탁드립니다.\n\nhttps://jeonjadong.com"
  );

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const sendSms = () => {
    const phoneNumber = "01063558055";
    const encodedBody = encodeURIComponent(smsMessage);
    window.location.href = `sms:${phoneNumber}?body=${encodedBody}`;
    setIsSmsModalOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-[100] flex flex-col gap-2 lg:gap-3">
        <a
          href="tel:010-6355-8055"
          className="w-14 h-14 lg:w-12 lg:h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:brightness-105 transition-all animate-bounce-subtle lg:hidden"
          title="전화 상담"
        >
          <Phone className="w-6 h-6 lg:w-6 lg:h-6" />
        </a>

        <button
          onClick={() => setIsSmsModalOpen(true)}
          className="w-14 h-14 lg:w-12 lg:h-12 bg-secondary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-secondary/90 transition-all lg:hidden"
          title="문자 문의"
        >
          <MessageSquare className="w-6 h-6 lg:w-6 lg:h-6" />
        </button>

      <a
        href="http://pf.kakao.com/_rtxmxhX/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 lg:w-12 lg:h-12 bg-[#FEE500] rounded-full shadow-lg flex items-center justify-center text-[#3c1e1e] hover:brightness-95 transition-all"
        title="카카오톡 상담"
      >
        <MessageCircle className="w-6 h-6 lg:w-6 lg:h-6 fill-current" />
      </a>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-14 h-14 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            title="맨 위로"
          >
            <ChevronUp className="w-6 h-6 lg:w-6 lg:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <button
        onClick={scrollToBottom}
        className="w-14 h-14 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
        title="맨 아래로"
      >
        <ChevronDown className="w-6 h-6 lg:w-6 lg:h-6" />
      </button>
    </div>

      {/* SMS Inquiry Modal - Mobile/Tablet Only */}
      <AnimatePresence>
        {isSmsModalOpen && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsSmsModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-[92%] max-w-[440px] h-auto rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsSmsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                {/* Logo */}
                <a 
                  href="https://jeonjadong.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mb-4 sm:mb-6 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <DoorOpen className="text-primary w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                </a>

                {/* Text */}
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 tracking-tight">오픈도어</h3>
                <p className="text-sm sm:text-base text-gray-500 font-medium mb-6">
                  "가장 빠른 사람이 가장 먼저 소유합니다."
                </p>

                {/* Link Preview Card */}
                <div className="w-full mb-6 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 text-left shadow-sm">
                  <div className="aspect-[2/1] w-full overflow-hidden">
                    <img 
                      src="https://res.cloudinary.com/dqhj5ucak/image/upload/v1773815039/nano-banana-result_4_f4jqwf.png" 
                      alt="오픈도어 프리미엄"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Official Website</div>
                    <div className="text-sm sm:text-base font-bold text-gray-900 truncate">오픈도어 | 프리미엄 비즈니스 플랫폼</div>
                    <div className="text-xs text-gray-400 truncate">https://jeonjadong.com</div>
                  </div>
                </div>

                {/* Textarea */}
                <div className="w-full mb-6 sm:mb-8">
                  <label className="block text-left text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                    문의 내용
                  </label>
                  <textarea
                    value={smsMessage}
                    onChange={(e) => setSmsMessage(e.target.value)}
                    className="w-full h-28 sm:h-32 p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none text-gray-700 leading-relaxed text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={sendSms}
                  className="w-full py-4 sm:py-5 bg-gray-900 text-white text-lg sm:text-xl font-black rounded-2xl shadow-xl hover:bg-gray-800 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>문자 보내기</span>
                </button>
                
                <p className="mt-4 text-xs text-gray-400">
                  수신번호: 010-6355-8055
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
