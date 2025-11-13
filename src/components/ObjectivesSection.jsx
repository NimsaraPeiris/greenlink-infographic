import React from 'react';

function ObjectivesSection() {
  const objectives = [
    {
      title: "1. Literature Review & Gap Analysis",
      description: "Completed, informing the selection of Polygon for its low fees and public auditability over private ledgers."
    },
    {
      title: "2. Data Collection & Analysis",
      description: "Field data confirmed optimal thresholds (12°C - 15°C) which now define the Smart Contract's business logic."
    },
    {
      title: "3. Multi-Role Web Applications",
      description: "Final ReactJS dashboard developed with distinct, secure views for Transporter, Wholesaler, and Admin roles."
    },
    {
      title: "4. IoT-Enabled Smart Containers",
      description: "Final custom-designed ESP32 + DHT22 unit built, validated for accuracy, and optimized for low power consumption."
    },
    {
      title: "5. Blockchain Traceability System",
      description: "Smart Contract successfully deployed on Polygon Amoy Testnet, handling automated data logging and penalty execution."
    },
    {
      title: "6. User Testing & Evaluation",
      description: "Completed UAT, integration, and unit testing, validating all performance metrics and usability requirements."
    }
  ];

  return (
    <section className="py-6 sm:py-12 md:py-16 px-3 sm:px-4">
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#004AAD] text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-tight px-1 sm:px-2">Project Report Card: Objectives Fulfilled</h2>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-1 sm:px-2">
        This section outlines the six primary objectives set for the GreenLink project. We successfully achieved all targets, moving from theoretical research to a fully functional and validated system.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {objectives.map((objective, index) => (
          <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-5 md:p-6 border-l-4 border-[#00A97F] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <strong className="text-sm xs:text-base sm:text-lg text-[#004AAD] block mb-1.5 sm:mb-2 leading-snug">{objective.title}</strong>
            <p className="text-xs xs:text-sm sm:text-base text-slate-600 mt-1.5 sm:mt-2 leading-relaxed">{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ObjectivesSection;