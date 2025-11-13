import React from 'react';

function SolutionSection() {
  const layers = [
    {
      title: "Layer 1: Perception (IoT Unit)",
      description: "ESP32 with DHT22 (Temp/Humidity) sensors in smart containers capture real-time environmental data."
    },
    {
      title: "Layer 2: Network & Gateway",
      description: "A GSM/Wi-Fi module securely transmits sensor data to the cloud in real-time."
    },
    {
      title: "Layer 3: Processing & Database",
      description: "Firebase Realtime DB ingests data for live dashboard visualization."
    },
    {
      title: "Layer 4: Consensus (Blockchain)",
      description: "Critical data is immutably logged on the Polygon Amoy Testnet via a Smart Contract."
    },
    {
      title: "Layer 5: Application",
      description: "A multi-role (Transporter, Wholesaler) ReactJS dashboard provides alerts and a verifiable audit trail."
    }
  ];

  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-4xl font-extrabold text-[#004AAD] text-center mb-4">The GreenLink Solution</h2>
      <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
        Our project introduces a transparent, automated, and immutable system built on IoT and public blockchain to enforce accountability and protect produce quality from farm to shelf.
      </p>

      <div className="flex flex-col items-center space-y-4">
        {layers.map((layer, index) => (
          <React.Fragment key={index}>
            <div className="flow-card">
              <strong className="text-lg text-[#004AAD]">{layer.title}</strong>
              <p className="text-sm text-slate-600">{layer.description}</p>
            </div>
            {index < layers.length - 1 && (
              <div className="flow-arrow">&darr;</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default SolutionSection;