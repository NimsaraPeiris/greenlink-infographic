import React from 'react';

function DeliverablesSection() {
  const deliverables = [
    {
      icon: "🖥️",
      title: "High Usability",
      description: "Minimalist UI/UX tailored for logistics staff, minimizing training time."
    },
    {
      icon: "🔒",
      title: "High Reliability",
      description: "Dual logging (Supabase UI + Polygon immutable) ensures data security and uptime."
    },
    {
      icon: "🔧",
      title: "High Maintainability",
      description: "Modular architecture allows for easy sensor swaps or Smart Contract upgrades."
    }
  ];

  const challenges = [
    {
      challenge: "Data Collection Trust",
      solution: "Ran a successful pilot test with a local transport union.",
      lesson: "A tangible proof-of-concept builds trust faster than specs.",
      icon: "🤝",
      color: "from-blue-500 to-blue-600"
    },
    {
      challenge: "IoT Power Management",
      solution: "Implemented deep-sleep cycle; optimized logging to 1/5min.",
      lesson: "Software optimization was more effective than hardware (solar) for the MVP.",
      icon: "🔋",
      color: "from-yellow-500 to-orange-500"
    },
    {
      challenge: "Stable Connectivity",
      solution: "Integrated GSM fallback with aggressive auto-reconnect logic.",
      lesson: "Redundancy is mandatory for any real-world mobile IoT solution.",
      icon: "📡",
      color: "from-green-500 to-green-600"
    }
  ];

  const futureWork = [
    {
      title: "Pilot Program Expansion:",
      description: "Integrate GreenLink with 5 more transport partners to gather large-scale efficacy data."
    },
    {
      title: "AI Prediction Module:",
      description: "Implement Machine Learning to predict temperature breaches based on transport route and external weather data."
    },
    {
      title: "Multi-Commodity Support:",
      description: "Extend the platform to support other high-value, perishable produce (e.g., chillies, potatoes) with varying condition requirements."
    }
  ];

  return (
    <section className="py-6 sm:py-12 md:py-16 px-3 sm:px-4 overflow-x-hidden">
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#004AAD] text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-tight px-1 sm:px-2">Final Deliverables & Future Roadmap</h2>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-1 sm:px-2">
        The project successfully delivered a platform built on three pillars: Usability, Reliability, and Maintainability. We now have a clear roadmap for commercial expansion.
      </p>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        {deliverables.map((item, index) => (
          <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 md:p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl xs:text-4xl sm:text-5xl mb-2 sm:mb-3 md:mb-4">{item.icon}</div>
            <h4 className="text-base xs:text-lg sm:text-xl font-bold text-[#004AAD] mb-1.5 sm:mb-2 leading-tight">{item.title}</h4>
            <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <div>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#00A97F] mb-3 sm:mb-4 md:mb-6 text-center leading-tight">Challenges & Lessons Learned</h3>
          <div className="space-y-3 sm:space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-5 hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className={`text-2xl sm:text-3xl flex-shrink-0 bg-gradient-to-br ${item.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md`}>
                    <span className="filter drop-shadow-sm">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-red-600 mb-2">⚠️ {item.challenge}</h4>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-2 rounded mb-2">
                      <p className="text-xs xs:text-sm text-slate-700 leading-relaxed">
                        <span className="font-semibold text-blue-700">Solution:</span> {item.solution}
                      </p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-[#00A97F] p-2 rounded">
                      <p className="text-xs xs:text-sm text-slate-700 leading-relaxed">
                        <span className="font-semibold text-[#00A97F]">💡 Lesson:</span> {item.lesson}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#00A97F] mb-3 sm:mb-4 md:mb-6 text-center leading-tight">Future Work & Sustainability</h3>
          <div className="space-y-3 sm:space-y-4">
            {futureWork.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-5 hover:shadow-xl transition-all duration-300 border-l-4 border-[#004AAD]">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#004AAD] to-[#0066cc] text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-md">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-[#004AAD] mb-1.5 sm:mb-2">{item.title}</h4>
                    <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverablesSection;