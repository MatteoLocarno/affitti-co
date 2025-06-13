import { useEffect, useState } from 'react';
import React from 'react';

export default function Footer() {
  // Funzione per riaprire il banner cookie
  function openCookieBanner() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cookie-consent');
      window.dispatchEvent(new Event('storage'));
      window.location.reload();
    }
  }

  return (
    <footer className="bg-[#142047] text-[#cebd6d] pt-0 pb-0 px-0 font-medium border-t-0 relative w-full">
      {/* Riga sopra */}
      <div className="w-full h-2 bg-gradient-to-r from-[#cebd6d] via-[#2b2361] to-[#cebd6d]" />
      <div className="max-w-5xl mx-auto px-2 sm:px-4 pt-8 pb-2 flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6 text-xs sm:text-sm md:text-base leading-relaxed">
        {/* Colonna sinistra */}
        <div className="flex-1 flex flex-col md:items-start items-center text-center md:text-left gap-1 md:gap-2 min-w-0">
          <span className="font-bold break-words">RENTWORK di Casati Luca</span>
          <span className="break-words">Via E. Fuser 8 - Somma L.do</span>
          <span className="mt-2 break-words text-wrap">Tel. <a href="tel:+390331250049" className="underline hover:text-white">+39 0331 250049</a> <span className="mx-2">|</span> Email: <a href="mailto:info@affitti-co.it" className="underline hover:text-white">info@affitti-co.it</a></span>
        </div>
        {/* Colonna destra */}
        <div className="flex-1 flex flex-col md:items-end items-center text-center md:text-right gap-1 md:gap-2 min-w-0">
          <span className="break-words">Affitti & Co. P.IVA 02298650025 · Iscr. Ruolo Ag. d'Affari in mediazione n° 2272 C.C.I.A.A. di Varese</span>
        </div>
      </div>
      {/* Sezione link e copyright */}
      <div className="w-full flex flex-col items-center mt-2 mb-2 gap-1 px-2 text-xs sm:text-sm">
        <div className="text-center flex flex-wrap justify-center gap-x-2 gap-y-1">
          <a href="/cookie-policy" className="underline hover:text-white">Cookie Policy</a>
          <span className="hidden xs:inline-block">·</span>
          <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a>
          <span className="hidden xs:inline-block">·</span>
          <a href="https://www.matteolocarno.com" className="underline hover:text-white" target="_blank" rel="noopener noreferrer nofollow">Credits</a>
        </div>
        <div className="text-xs text-[#cebd6d] mt-1 text-center break-words">affitti-co.it - tutti i diritti riservati 2025</div>
      </div>
      {/* Riga sotto */}
      <div className="w-full h-2 bg-gradient-to-r from-[#cebd6d] via-[#2b2361] to-[#cebd6d]" />
    </footer>
  );
}

export function LanguageToggle() {
  const [isEnglish, setIsEnglish] = useState(false);

  React.useEffect(() => {
    // Rimuovo eventuali script duplicati e il div nascosto
    const oldScript = document.getElementById("google-translate-script");
    if (oldScript) oldScript.remove();
    const oldDiv = document.getElementById("hidden_google_translate_element_footer");
    if (oldDiv) oldDiv.innerHTML = '';
    // Carico lo script Google Translate
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement({
        pageLanguage: "it",
        includedLanguages: "en",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, "hidden_google_translate_element_footer");
    };
  }, []);

  React.useEffect(() => {
    if (isEnglish) {
      // Redirect a Google Translate versione inglese
      const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
      let baseUrl = currentUrl;
      // Se siamo già su Google Translate, non fare nulla
      if (currentUrl.includes('translate.google.com')) return;
      // In dev usa localhost, in prod il dominio
      if (currentUrl.includes('localhost')) {
        baseUrl = 'http://localhost:3000/';
      } else {
        baseUrl = 'https://www.affitti-co.it/';
      }
      window.location.href = `https://translate.google.com/translate?sl=it&tl=en&u=${encodeURIComponent(baseUrl)}`;
    } else {
      // Torna all'URL originale italiano
      if (typeof window !== 'undefined') {
        // Se siamo su Google Translate, estrai l'URL originale
        const params = new URLSearchParams(window.location.search);
        const originalUrl = params.get('u');
        if (window.location.hostname === 'translate.google.com' && originalUrl) {
          window.location.href = originalUrl;
        }
      }
    }
  }, [isEnglish]);

  return (
    <>
      <div id="hidden_google_translate_element_footer" style={{ display: "none" }} />
      <label className="flex items-center cursor-pointer gap-2">
        <span className={isEnglish ? 'text-[#2b2361] opacity-80' : 'font-bold text-[#cebd6d]'}>IT</span>
        <span className="relative inline-block w-12 h-6 align-middle select-none">
          <input
            type="checkbox"
            checked={isEnglish}
            onChange={() => setIsEnglish(!isEnglish)}
            className="absolute block w-6 h-6 rounded-full bg-[#cebd6d] border-4 appearance-none cursor-pointer transition-all duration-200 left-0 top-0 checked:translate-x-6"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
          />
          <span className="block w-12 h-6 rounded-full bg-white border border-[#cebd6d]" />
        </span>
        <span className={isEnglish ? 'font-bold text-[#cebd6d]' : 'text-[#2b2361] opacity-80'}>EN</span>
      </label>
    </>
  );
} 