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
      description: "Supabase Realtime DB ingests data for live dashboard visualization."
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
    <section className="py-6 sm:py-12 md:py-16 px-3 sm:px-4">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#004AAD] text-center mb-2 sm:mb-3 md:mb-4 leading-tight">The GreenLink Solution</h2>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-1 sm:px-2">
        Our project introduces a transparent, automated, and immutable system built on IoT and public blockchain to enforce accountability and protect produce quality from farm to shelf.
      </p>

      <div className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4">
        {layers.map((layer, index) => (
          <React.Fragment key={index}>
            <div className="flow-card hover:shadow-lg hover:scale-105 transition-all duration-300">
              <strong className="text-sm xs:text-base sm:text-lg text-[#004AAD] block mb-1.5 sm:mb-2">{layer.title}</strong>
              <p className="text-xs xs:text-sm sm:text-base text-slate-600 leading-relaxed">{layer.description}</p>
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