import React from 'react';

const ServiceButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <button className="bg-[#cebd6d]/20 text-[#2b2361] px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#cebd6d]/30 transition-all duration-300 flex items-center gap-1.5" onClick={onClick}>
    {children}
  </button>
);

export default ServiceButton; 