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
      description: "Dual logging (Firebase UI + Polygon immutable) ensures data security and uptime."
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
      lesson: "A tangible proof-of-concept builds trust faster than specs."
    },
    {
      challenge: "IoT Power Management",
      solution: "Implemented deep-sleep cycle; optimized logging to 1/5min.",
      lesson: "Software optimization was more effective than hardware (solar) for the MVP."
    },
    {
      challenge: "Stable Connectivity",
      solution: "Integrated GSM fallback with aggressive auto-reconnect logic.",
      lesson: "Redundancy is mandatory for any real-world mobile IoT solution."
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
    <section className="py-12 sm:py-16">
      <h2 className="text-4xl font-extrabold text-[#004AAD] text-center mb-12">Final Deliverables & Future Roadmap</h2>
      <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
        The project successfully delivered a platform built on three pillars: Usability, Reliability, and Maintainability. We now have a clear roadmap for commercial expansion.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {deliverables.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-4">{item.icon}</div>
            <h4 className="text-xl font-bold text-[#004AAD] mb-2">{item.title}</h4>
            <p className="text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-[#00A97F] mb-6">Challenges & Lessons Learned</h3>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Challenge</th>
                  <th>Solution Implemented</th>
                  <th>Lesson Learned</th>
                </tr>
              </thead>
              <tbody>
                {challenges.map((item, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{item.challenge}</td>
                    <td>{item.solution}</td>
                    <td>{item.lesson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-[#00A97F] mb-6">Future Work & Sustainability</h3>
          <ol className="list-decimal list-inside space-y-4 text-slate-600">
            {futureWork.map((item, index) => (
              <li key={index}>
                <strong className="text-slate-700">{item.title}</strong> {item.description}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default DeliverablesSection;