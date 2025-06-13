

import React from 'react';

export default function CookiePreferenceButton() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cookie-consent');
      window.dispatchEvent(new Event('storage'));
      window.location.reload();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#2b2361] text-white px-6 py-3 rounded-lg hover:bg-[#cebd6d] hover:text-[#2b2361] transition-colors"
    >
      Modifica preferenze cookie
    </button>
  );
} 