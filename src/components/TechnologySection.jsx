import React from 'react';

function TechnologySection() {
  const techStack = [
    {
      category: "Microcontroller",
      technology: "ESP32",
      rationale: "Low cost, high integration (Wi-Fi/BT), and proven reliability."
    },
    {
      category: "Blockchain",
      technology: "Polygon (Amoy)",
      rationale: "Minimal gas fees and public accessibility for maximum transparency."
    },
    {
      category: "Database",
      technology: "Firebase Realtime DB",
      rationale: "Fast, real-time data fetching for the dashboard UI."
    },
    {
      category: "Frontend",
      technology: "ReactJS / Tailwind",
      rationale: "Rapid, responsive UI development for field staff devices."
    }
  ];

  const testingStages = [
    {
      stage: "Unit Testing",
      purpose: "Sensor accuracy & data formatting.",
      result: "Achieved >99% data accuracy vs. reference sensor."
    },
    {
      stage: "Integration Testing",
      purpose: "Data flow from IoT -> Polygon.",
      result: "Achieved < 5-second latency from sensor to immutable log."
    },
    {
      stage: "UAT",
      purpose: "Dashboard usability & functionality.",
      result: "9/10 simulated users found the dashboard intuitive and actionable."
    }
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-4xl font-extrabold text-[#004AAD] text-center mb-12">How We Built It: Technology & Testing</h2>
      <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
        A robust system requires a modern stack and rigorous validation. This section details the "what" and "how" behind GreenLink's reliability.
      </p>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-[#00A97F] mb-6 text-center">Final Technology Stack</h3>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Technology</th>
                  <th>Rationale for Selection</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((item, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{item.category}</td>
                    <td className="font-semibold">{item.technology}</td>
                    <td>{item.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-[#00A97F] mb-6 text-center">Testing & Validation Strategy</h3>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Purpose</th>
                  <th>Result Highlights</th>
                </tr>
              </thead>
              <tbody>
                {testingStages.map((item, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{item.stage}</td>
                    <td>{item.purpose}</td>
                    <td>{item.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;