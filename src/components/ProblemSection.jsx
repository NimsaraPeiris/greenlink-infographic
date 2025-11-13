import React from 'react';

function ProblemSection() {
  return (
    <section className="text-center py-6 sm:py-12 md:py-16 px-3 sm:px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg sm:rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 border-t-4 border-[#00A97F] hover:shadow-3xl transition-shadow duration-300">
        <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 leading-tight">The Problem: A Leaking Supply Chain</h2>
        <p className="text-sm xs:text-base sm:text-lg text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
          In Sri Lanka, the tomato supply chain faces a critical challenge: a staggering loss of produce due to improper handling and a complete lack of real-time, trustworthy data during transport.
        </p>
        <div className="relative inline-block mb-2 sm:mb-3 md:mb-4">
          <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600 leading-none animate-pulse">
            30% to 40%
          </div>
          <div className="absolute -inset-1 bg-red-100 rounded-lg blur-xl opacity-30 -z-10"></div>
        </div>
        <p className="text-base xs:text-lg sm:text-xl font-semibold text-slate-700 leading-snug">
          Of the total tomato harvest is wasted post-harvest, a multi-million dollar loss impacting farmers, retailers, and consumers.
        </p>
      </div>
    </section>
  );
}

export default ProblemSection;