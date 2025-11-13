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
    <section className="py-12 sm:py-16">
      <h2 className="text-4xl font-extrabold text-[#004AAD] text-center mb-12">Project Report Card: Objectives Fulfilled</h2>
      <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
        This section outlines the six primary objectives set for the GreenLink project. We successfully achieved all targets, moving from theoretical research to a fully functional and validated system.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((objective, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#00A97F]">
            <strong className="text-lg text-[#004AAD]">{objective.title}</strong>
            <p className="text-slate-600 mt-2">{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ObjectivesSection;