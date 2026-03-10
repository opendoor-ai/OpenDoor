import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DoorOpen, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: '홍보 및 상담 연결 프로세스', path: '/process' },
    { name: '기능/서비스', path: '/features' },
    { name: '제작 사례', path: '/#portfolio' },
    { name: '회사 소개', path: '/about' },
    { name: '고객 센터', path: '/support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors">
              <DoorOpen className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tighter text-industrial-blue">
              오픈도어<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isHash = item.path.startsWith('/#');
              const Component = isHash ? 'a' : Link;
              const props = isHash ? { href: item.path } : { to: item.path };
              
              return (
                <Component
                  key={item.path}
                  {...props}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-primary whitespace-nowrap",
                    location.pathname === item.path ? "text-primary" : "text-gray-600"
                  )}
                >
                  {item.name}
                </Component>
              );
            })}
            <a href="/#consultation-form-section" className="bg-primary text-gray-900 px-5 py-2.5 rounded-lg text-sm font-bold hover:brightness-105 transition-all shadow-md shadow-primary/20">
              상담 신청하기
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="py-6 px-6 space-y-4">
              {navItems.map((item) => {
                const isHash = item.path.startsWith('/#');
                const Component = isHash ? 'a' : Link;
                const props = isHash ? { href: item.path } : { to: item.path };

                return (
                  <Component
                    key={item.path}
                    {...props}
                    className={cn(
                      "block text-lg font-semibold transition-colors",
                      location.pathname === item.path ? "text-primary" : "text-gray-600"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Component>
                );
              })}
              <div className="pt-4">
                <a 
                  href="/#consultation-form-section" 
                  className="block w-full bg-primary text-gray-900 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  상담 신청하기
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
