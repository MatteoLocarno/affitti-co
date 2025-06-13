import { useState } from "react";
// Sostituisco Link e usePathname di Next.js con react-router-dom
import { Link, useLocation } from "react-router-dom";
import GoogleTranslateToEnglishButton from './GoogleTranslateToEnglishButton';
// TODO: Adattare LanguageToggle se serve
// import { LanguageToggle } from './Footer';
import { FaHome } from 'react-icons/fa';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <header className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-[#cebd6d]/40 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img
              src="/Logo-homepage.png"
              alt="Affitti & Co Logo"
              width={110}
              height={36}
              className="object-contain w-24 sm:w-28 md:w-32 lg:w-36 h-auto transition-all duration-200"
              style={{maxWidth: 144, height: 'auto'}} />
          </Link>
        </div>
        {/* Menu centrale desktop */}
        <nav className="hidden md:flex flex-1 justify-center gap-4 lg:gap-10 text-base font-light text-[#142047]">
          <Link to="/" className={`flex items-center gap-2 transition-colors ${pathname === '/' ? 'font-bold' : ''} hover:font-bold hover:text-[#cebd6d]`} aria-label="Home">
            <FaHome className="text-lg" />
          </Link>
          <Link to="/chi-e-dove-siamo" className={`transition-colors ${pathname === '/chi-e-dove-siamo' ? 'font-bold' : ''} hover:font-bold hover:text-[#cebd6d]`}>Chi Siamo</Link>
          <Link to="/services" className={`transition-colors ${pathname === '/services' ? 'font-bold' : ''} hover:font-bold hover:text-[#cebd6d]`}>Servizi</Link>
          <Link to="/contatti" className={`transition-colors ${pathname === '/contatti' ? 'font-bold' : ''} hover:font-bold hover:text-[#cebd6d]`}>Contatti</Link>
        </nav>
        {/* Wrapper azioni header: visibile solo da md in su */}
        <div className="hidden md:flex items-center gap-3 md:gap-4 flex-wrap justify-end min-w-[180px] max-w-xs md:max-w-none header-actions">
          {/* Bottone call-to-action desktop/tablet: visibile solo da md in su */}
          <Link to="/tutti-gli-immobili" className="hidden md:block bg-[#142047] text-white px-4 sm:px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#cebd6d] hover:text-[#142047] transition-colors whitespace-nowrap w-full block text-center text-base md:text-base lg:text-lg immobili-btn">Tutti gli Immobili</Link>
          {/* Selettore lingua tablet/laptop: inline, affiancato al bottone */}
          {/* <div className="hidden md:flex lg:hidden items-center ml-0 md:ml-6">
            <LanguageToggle />
          </div> */}
        </div>
        {/* Selettore lingua desktop: fisso in alto a destra, solo su lg+ */}
        {/* <div className="hidden lg:block" style={{ position: 'fixed', top: 18, right: 24, zIndex: 1000 }}>
          <LanguageToggle />
        </div> */}
        {/* Hamburger mobile */}
        <div className="md:hidden flex items-center">
          <button className="w-10 h-10 flex flex-col justify-center items-center" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`block w-7 h-1 bg-[#142047] mb-1 rounded transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 bg-[#142047] mb-1 rounded transition-all ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 bg-[#142047] rounded transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        {/* Overlay menu mobile */}
        {open && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Overlay scuro */}
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            {/* Menu mobile */}
            <nav className="relative bg-white w-full min-h-screen flex flex-col justify-center items-center gap-7 py-10 animate-slide-in overflow-y-auto">
              <button className="absolute top-4 right-4 text-3xl text-[#142047]" onClick={() => setOpen(false)} aria-label="Chiudi menu">
                &times;
              </button>
              <Link to="/" className={`text-lg flex items-center gap-2 font-semibold text-[#142047] hover:text-[#cebd6d] transition-colors w-full text-center ${pathname === '/' ? 'font-bold' : ''}`} onClick={() => setOpen(false)} aria-label="Home">
                <FaHome className="text-lg" />
              </Link>
              <Link to="/chi-e-dove-siamo" className={`text-lg font-semibold text-[#142047] hover:text-[#cebd6d] transition-colors w-full text-center ${pathname === '/chi-e-dove-siamo' ? 'font-bold' : ''}`} onClick={() => setOpen(false)}>Chi Siamo</Link>
              <Link to="/services" className={`text-lg font-semibold text-[#142047] hover:text-[#cebd6d] transition-colors w-full text-center ${pathname === '/services' ? 'font-bold' : ''}`} onClick={() => setOpen(false)}>Servizi</Link>
              <Link to="/contatti" className={`text-lg font-semibold text-[#142047] hover:text-[#cebd6d] transition-colors w-full text-center ${pathname === '/contatti' ? 'font-bold' : ''}`} onClick={() => setOpen(false)}>Contatti</Link>
              <Link to="/tutti-gli-immobili" className="mt-8 bg-[#142047] text-white px-8 py-3 rounded-xl font-bold shadow hover:bg-[#cebd6d] hover:text-[#142047] transition-colors text-lg w-full max-w-xs text-center" onClick={() => setOpen(false)}>Tutti gli Immobili</Link>
              {/* <div className="mt-8 flex justify-center w-full">
                <LanguageToggle />
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 