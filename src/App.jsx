import React from 'react';
import Header from './components/Header';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ObjectivesSection from './components/ObjectivesSection';
import PerformanceSection from './components/PerformanceSection';
import TechnologySection from './components/TechnologySection';
import DeliverablesSection from './components/DeliverablesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-slate-800">
      <main className="max-w-6xl mx-auto p-4 sm:p-8">
        <Header />
        <ProblemSection />
        <SolutionSection />
        <ObjectivesSection />
        <PerformanceSection />
        <TechnologySection />
        <DeliverablesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;