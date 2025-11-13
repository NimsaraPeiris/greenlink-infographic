import React from 'react';

function Header() {
  return (
    <section className="text-center py-6 sm:py-12 md:py-16 px-3 sm:px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4 leading-tight">
          <span className="gradient-text">GreenLink</span>
        </h1>
        <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-[#00A97F] mb-4 sm:mb-6 md:mb-10 leading-snug px-1 sm:px-2">
          IoT & Blockchain-Driven Logistics Solution for the Tomato Supply Chain
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-[#004AAD]">
            🌱 Sustainable
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-[#00A97F]">
            🔒 Secure
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-700">
            ⚡ Real-time
          </span>
        </div>
      </div>
    </section>
  );
}

export default Header;