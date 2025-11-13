import React from 'react';

function ProblemSection() {
  return (
    <section className="text-center py-12 sm:py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8 border-t-4 border-[#00A97F]">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">The Problem: A Leaking Supply Chain</h2>
        <p className="text-lg text-slate-600 mb-6">
          In Sri Lanka, the tomato supply chain faces a critical challenge: a staggering loss of produce due to improper handling and a complete lack of real-time, trustworthy data during transport.
        </p>
        <div className="text-7xl md:text-8xl font-extrabold text-red-600 mb-4">
          30% to 40%
        </div>
        <p className="text-xl font-semibold text-slate-700">
          Of the total tomato harvest is wasted post-harvest, a multi-million dollar loss impacting farmers, retailers, and consumers.
        </p>
      </div>
    </section>
  );
}

export default ProblemSection;