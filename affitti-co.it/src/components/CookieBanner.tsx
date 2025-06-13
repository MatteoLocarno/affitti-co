

import { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const COOKIE_KEY = "cookie-consent";

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

function getStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(defaultPreferences));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(preferences));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2b2361] text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 text-[#cebd6d]">Cookie Policy</h3>
            <p className="text-sm">
              Utilizziamo i cookie per migliorare la tua esperienza di navigazione. 
              Puoi accettare tutti i cookie o personalizzare le tue preferenze.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleAcceptNecessary}
              className="px-4 py-2 text-sm bg-transparent border border-[#cebd6d] text-[#cebd6d] rounded hover:bg-[#cebd6d] hover:text-[#2b2361] transition-colors"
            >
              Solo necessari
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm bg-[#cebd6d] text-[#2b2361] rounded hover:bg-[#2b2361] hover:text-[#cebd6d] hover:border hover:border-[#cebd6d] transition-colors"
            >
              Accetta tutti
            </button>
          </div>
        </div>
        <div className="mt-4 border-t border-[#cebd6d]/20 pt-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="necessary"
                checked={preferences.necessary}
                disabled
                className="rounded border-[#cebd6d] text-[#cebd6d] focus:ring-[#cebd6d]"
              />
              <label htmlFor="necessary" className="text-sm">
                Cookie necessari (sempre attivi)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="analytics"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="rounded border-[#cebd6d] text-[#cebd6d] focus:ring-[#cebd6d]"
              />
              <label htmlFor="analytics" className="text-sm">
                Cookie analitici
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="marketing"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="rounded border-[#cebd6d] text-[#cebd6d] focus:ring-[#cebd6d]"
              />
              <label htmlFor="marketing" className="text-sm">
                Cookie di marketing
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="preferences"
                checked={preferences.preferences}
                onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                className="rounded border-[#cebd6d] text-[#cebd6d] focus:ring-[#cebd6d]"
              />
              <label htmlFor="preferences" className="text-sm">
                Cookie di preferenze
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a
              href="/cookie-policy"
              className="text-sm text-[#cebd6d] hover:text-white transition-colors"
            >
              Leggi la nostra Cookie Policy
            </a>
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 text-sm bg-[#cebd6d] text-[#2b2361] rounded hover:bg-[#2b2361] hover:text-[#cebd6d] hover:border hover:border-[#cebd6d] transition-colors"
            >
              Salva preferenze
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 