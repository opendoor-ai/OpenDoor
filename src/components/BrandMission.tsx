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
            
            <h2 className="text-clamp-h2 font-bold text-gray-900 leading-[1.4] sm:leading-[1.6] mb-10 tracking-tight">
              오픈도어기계광고는 광고가 아니라 <br />
              기계 판매 결과를 만드는 구조형 광고 서비스입니다.
            </h2>
            
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
