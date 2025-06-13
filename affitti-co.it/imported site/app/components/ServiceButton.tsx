'use client';

import React from 'react';

interface ServiceButtonProps {
  label: string;
  ariaLabel: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const ServiceButton = ({ label, ariaLabel, onClick, href, target, rel }: ServiceButtonProps) => {
  const className = "bg-[#cebd6d]/20 text-[#2b2361] px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#cebd6d]/30 transition-all duration-300 flex items-center gap-1.5";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={className}
      >
        {label}
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      {label}
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  );
};

export default ServiceButton; 