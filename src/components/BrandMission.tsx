import React from 'react';
import { motion } from 'motion/react';

export default function BrandMission() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-bold rounded-full mb-8 tracking-wider">
              OUR MISSION
            </span>
            
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.6] mb-10 tracking-tight">
              오픈도어는 <span className="text-secondary border-b-4 border-primary pb-1 whitespace-nowrap">“광고 플랫폼”</span>이 아닌 <br className="hidden md:block" />
              실제 거래가 시작되는 <span className="bg-primary text-secondary px-4 py-1.5 rounded-2xl inline-block shadow-sm whitespace-nowrap">입구(Open Door)</span>가 되는 것을 목표로 합니다.
            </h2>
            
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
