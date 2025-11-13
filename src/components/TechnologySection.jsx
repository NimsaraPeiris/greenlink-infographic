import React from 'react';

function TechnologySection() {
  const techStack = [
    {
      category: "Microcontroller",
      technology: "ESP32",
      rationale: "Low cost, high integration (Wi-Fi/BT), and proven reliability.",
      icon: "🔧"
    },
    {
      category: "Blockchain",
      technology: "Polygon (Amoy)",
      rationale: "Minimal gas fees and public accessibility for maximum transparency.",
      icon: "⛓️"
    },
    {
      category: "Database",
      technology: "Supabase Realtime DB",
      rationale: "Fast, real-time data fetching for the dashboard UI.",
      icon: "💾"
    },
    {
      category: "Frontend",
      technology: "ReactJS / Tailwind",
      rationale: "Rapid, responsive UI development for field staff devices.",
      icon: "⚛️"
    }
  ];

  const testingStages = [
    {
      stage: "Unit Testing",
      purpose: "Sensor accuracy & data formatting.",
      result: "Achieved >99% data accuracy vs. reference sensor.",
      icon: "🔬",
      color: "from-blue-500 to-blue-600"
    },
    {
      stage: "Integration Testing",
      purpose: "Data flow from IoT -> Polygon.",
      result: "Achieved < 5-second latency from sensor to immutable log.",
      icon: "🔗",
      color: "from-green-500 to-green-600"
    },
    {
      stage: "UAT",
      purpose: "Dashboard usability & functionality.",
      result: "9/10 simulated users found the dashboard intuitive and actionable.",
      icon: "👥",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-6 sm:py-12 md:py-16 px-3 sm:px-4 overflow-x-hidden">
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#004AAD] text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-tight px-1 sm:px-2">How We Built It: Technology & Testing</h2>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-1 sm:px-2">
        A robust system requires a modern stack and rigorous validation. This section details the "what" and "how" behind GreenLink's reliability.
      </p>
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <div>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#00A97F] mb-3 sm:mb-4 md:mb-6 text-center leading-tight">Final Technology Stack</h3>
          <div className="space-y-3 sm:space-y-4">
            {techStack.map((item, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-5 border-l-4 border-[#00A97F] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 xs:gap-2 mb-2">
                      <h4 className="text-sm xs:text-base sm:text-lg font-bold text-[#004AAD]">{item.category}</h4>
                      <span className="text-xs xs:text-sm sm:text-base font-semibold text-[#00A97F] bg-green-50 px-2 py-0.5 rounded-full w-fit">{item.technology}</span>
                    </div>
                    <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed">{item.rationale}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#00A97F] mb-3 sm:mb-4 md:mb-6 text-center leading-tight">Testing & Validation Strategy</h3>
          <div className="space-y-3 sm:space-y-4">
            {testingStages.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-5 hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className={`text-2xl sm:text-3xl flex-shrink-0 bg-gradient-to-br ${item.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md`}>
                    <span className="filter drop-shadow-sm">{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-[#004AAD] mb-1.5 sm:mb-2">{item.stage}</h4>
                    <p className="text-xs xs:text-sm text-slate-600 mb-2 leading-relaxed">
                      <span className="font-semibold text-slate-700">Purpose:</span> {item.purpose}
                    </p>
                    <div className="bg-green-50 border-l-4 border-[#00A97F] p-2 rounded">
                      <p className="text-xs xs:text-sm text-slate-700 leading-relaxed">
                        <span className="font-semibold text-[#00A97F]">✓ Result:</span> {item.result}
                      </p>
                    </div>
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

export default TechnologySection;