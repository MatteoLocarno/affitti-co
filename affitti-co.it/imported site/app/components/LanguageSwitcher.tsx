'use client';

import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-1.5 py-1 rounded-md shadow-md text-sm">
        <button
          onClick={() => changeLanguage('it')}
          className={`px-1.5 py-0.5 rounded transition-all duration-300 text-xs font-medium ${
            language === 'it' 
              ? 'bg-[#cebd6d] text-[#2b2361]' 
              : 'text-[#cebd6d] hover:bg-[#cebd6d] hover:text-[#2b2361]'
          }`}
        >
          IT
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-1.5 py-0.5 rounded transition-all duration-300 text-xs font-medium ${
            language === 'en' 
              ? 'bg-[#cebd6d] text-[#2b2361]' 
              : 'text-[#cebd6d] hover:bg-[#cebd6d] hover:text-[#2b2361]'
          }`}
        >
          ENG
        </button>
      </div>
    </div>
  );
} 