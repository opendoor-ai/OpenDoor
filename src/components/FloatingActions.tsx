import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MessageCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-[100] flex flex-col gap-2 lg:gap-3">
      <a
        href="tel:010-6355-8055"
        className="w-11 h-11 lg:w-12 lg:h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:brightness-105 transition-all animate-bounce-subtle lg:hidden"
        title="전화 상담"
      >
        <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>

      <a
        href="sms:010-6355-8055"
        className="w-11 h-11 lg:w-12 lg:h-12 bg-secondary rounded-full shadow-lg flex items-center justify-center text-white hover:bg-secondary/90 transition-all lg:hidden"
        title="문자 문의"
      >
        <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6" />
      </a>

      <a
        href="http://pf.kakao.com/_rtxmxhX/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 lg:w-12 lg:h-12 bg-[#FEE500] rounded-full shadow-lg flex items-center justify-center text-[#3c1e1e] hover:brightness-95 transition-all"
        title="카카오톡 상담"
      >
        <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
      </a>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-11 h-11 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
            title="맨 위로"
          >
            <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <button
        onClick={scrollToBottom}
        className="w-11 h-11 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
        title="맨 아래로"
      >
        <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
    </div>
  );
}
