import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#004AAD] text-slate-200 py-6 sm:py-8 md:py-10 lg:py-12 w-full">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <p className="font-semibold text-sm xs:text-base sm:text-lg leading-relaxed">InnoQuest | Project GreenLink</p>
        <p className="text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 md:mt-3 leading-relaxed px-1 sm:px-2">
          Vishwa S Chandrasekara (22UG1-0394) | U GL Cheshani (22UG1-0880) | PDP Nimsara Peiris (22UG1-0627)
        </p>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-3 md:mt-4 leading-relaxed">
          Supervisors: Dr. Mohamed Azmeer & Ms. Rusini Siyara
        </p>
      </div>
    </footer>
  );
}

export default Footer;