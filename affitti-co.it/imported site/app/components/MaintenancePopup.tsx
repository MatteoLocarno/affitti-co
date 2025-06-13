'use client';

import { useState, useEffect } from 'react';

export default function MaintenancePopup() {
  const [isVisible, setIsVisible] = useState(true);

  // Chiudi il popup quando si clicca fuori
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
    }
  };

  // Salva lo stato nel localStorage
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenMaintenancePopup');
    if (hasSeenPopup) {
      setIsVisible(false);
    } else {
      localStorage.setItem('hasSeenMaintenancePopup', 'true');
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClickOutside}
    >
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-4 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-[#2b2361] hover:text-[#cebd6d] transition-colors"
          aria-label="Chiudi"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#2b2361] mb-4">
            Sito in Restyling
          </h2>
          <p className="text-[#2b2361] mb-6">
            Stiamo effettuando alcuni aggiornamenti al sito. Ci scusiamo per eventuali disagi.
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-[#2b2361] text-white px-6 py-2 rounded-lg hover:bg-[#cebd6d] hover:text-[#2b2361] transition-colors"
          >
            Ho capito
          </button>
        </div>
      </div>
    </div>
  );
} 