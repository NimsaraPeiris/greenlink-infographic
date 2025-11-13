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
    <div className="text-slate-800 min-h-screen overflow-x-hidden w-full">
      <main className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 overflow-x-hidden">
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