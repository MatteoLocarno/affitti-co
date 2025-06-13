'use client';
import React, { useState, useEffect, MouseEvent } from "react";
import ModalForm from "./ModalForm";
import FeaturedPropertiesCarousel from "./FeaturedPropertiesCarousel";
import SearchBar from "./SearchBar";
import GoogleReviews from "./GoogleReviews";
import { FaGavel, FaChartLine, FaEuroSign, FaCertificate } from 'react-icons/fa';
import { useTranslation } from "../hooks/useTranslation";
import RequestForm from "./RequestForm";
import FormModal from "./FormModal";
import ServiceButton from "./ServiceButton";
// @ts-ignore
import Button from "./Button";
interface HomeClientProps {
  properties: any[];
}

export default function HomeClient({ properties }: HomeClientProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const { t } = useTranslation();

  // Stato per animazione rettangolo "IN EVIDENZA"
  const [showHighlight, setShowHighlight] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHighlight(false);
      setTimeout(() => setShowHighlight(true), 500); // tempo di fade out
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleModalOpen = (modalType: string) => {
    setOpenModal(modalType);
  };

  const buttonStyles = "bg-[#cebd6d]/20 text-[#2b2361] px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#cebd6d]/30 transition-all duration-300 flex items-center gap-1.5";

  return (
    <main className="min-h-screen text-[#2b2361] bg-white">
      {/* Hero Section - full width, background nuvole */}
      <div style={{ backgroundImage: "url('/background sito.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', backgroundSize: 'cover', backgroundColor: '#fff' }}>
        <section
          className="pt-24 pb-32 w-full flex flex-col items-center justify-center"
          style={{ minHeight: '500px' }}
        >
          <div className="max-w-4xl w-full text-center flex flex-col items-center">
            <img
              src="/Logo-homepage.png"
              alt="Affitti & Co Logo Hero"
              width={520}
              height={180}
              className="object-contain mb-8 w-60 sm:w-64 md:w-[420px] lg:w-[520px] h-auto mx-auto"
              style={{maxWidth: 520, height: 'auto'}}
            />
            {/* Testo principale aggiornato */}
            <div className="flex flex-col items-center justify-center text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <div className="text-[#2b2361] glow-effect-blue" style={{fontWeight: 800}}>{t('home.hero.title1')}</div>
                <div className="text-[#cebd6d] glow-effect" style={{fontWeight: 800}}>{t('home.hero.title2')}</div>
            </h1>
              <p className="text-[#2b2361] text-lg sm:text-xl max-w-4xl mx-auto px-4" dangerouslySetInnerHTML={{ __html: t('home.hero.slogan') }}></p>
            </div>
            {/* Barra di ricerca */}
            <div className="flex justify-center w-full mt-8">
              <SearchBar />
            </div>
          </div>
        </section>
      </div>
      {/* Hero Section - full width, background nuvole */}
      {/* Questa parte va lasciata a page.tsx se serve, qui solo le schede e il carosello */}
      {/* Featured Properties - Carosello */}
      <section className="py-12 w-full bg-white px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#222f47] text-center my-12 flex items-center justify-center gap-3">
          PROPRIETÀ
          <span
            className={`relative ml-2 flex items-center justify-center align-middle`}
            style={{fontWeight: 800, fontSize: '2.7rem', letterSpacing: '0.02em', lineHeight: '1.1', fontFamily: 'inherit'}}
          >
            <span
              className={`absolute inset-0 rounded-xl transition-all duration-700 ease-in-out bg-[#cebd6d] z-0 origin-left ${showHighlight ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
              style={{transitionProperty: 'opacity, transform'}}
            ></span>
            <span className="relative z-10 text-[#222f47] px-4 py-2 flex items-center" style={{fontSize: '3rem', fontWeight: 800, lineHeight: '1.1'}}>
              IN EVIDENZA
            </span>
          </span>
        </h2>
        <div className="w-screen max-w-none relative overflow-visible">
          <FeaturedPropertiesCarousel properties={properties} />
        </div>
      </section>
      {/* Sezione 3 schede informative */}
      <section className="py-8 w-full bg-white flex justify-center mt-16">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-xs sm:max-w-sm md:max-w-5xl px-2 sm:px-4 mx-auto items-center md:items-stretch">
          {/* Scheda 1: Cerchi casa? */}
          <FlipCard
            front={
              <div className="flex-1 bg-[#222f47] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer min-h-[180px]">
                <div className="relative mb-3 sm:mb-4">
                  <img src="/home.svg" alt="Casa" className="w-16 h-16 sm:w-14 sm:h-14" style={{filter: 'grayscale(1)', opacity: 0.7}} />
                  <span className="absolute -right-2 -bottom-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cebd6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </span>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center">CERCHI CASA?</h3>
                <p className="text-[#e2b13c] text-center font-semibold text-base sm:text-lg">Lascia la tua richiesta</p>
              </div>
            }
            back={
              <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer border-2 border-[#222f47]" style={{minHeight: '260px'}}>
                <h3 className="text-[#2b2361] text-xl font-bold mb-2 text-center">Richiedi la tua consulenza gratuita</h3>
                <p className="text-[#222f47] text-center mb-4">Compila il modulo e ti aiuteremo a trovare la soluzione ideale per te.</p>
                <button onClick={() => handleModalOpen('casa')} className="bg-[#2b2361] text-white px-4 py-2 rounded font-bold hover:bg-[#cebd6d] hover:text-[#2b2361] transition cursor-pointer">Richiedi ora</button>
              </div>
            }
            onClick={() => handleModalOpen('casa')}
          />
          {/* Scheda 2: Sei un proprietario? */}
          <FlipCard
            front={
              <div className="flex-1 bg-[#222f47] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer min-h-[180px]">
                <img src="/globe.svg" alt="Sei un proprietario?" className="w-16 h-16 sm:w-14 sm:h-14 mb-3 sm:mb-4" />
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center">SEI UN PROPRIETARIO?</h3>
                <p className="text-[#e2b13c] text-center font-semibold text-base sm:text-lg">Proponi il tuo immobile</p>
              </div>
            }
            back={
              <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer border-2 border-[#222f47]" style={{minHeight: '260px'}}>
                <h3 className="text-[#2b2361] text-xl font-bold mb-2 text-center">Valutazione gratuita immobile</h3>
                <p className="text-[#222f47] text-center mb-4">Scopri il valore reale del tuo immobile e ricevi una consulenza senza impegno.</p>
                <button onClick={() => handleModalOpen('proprietario')} className="bg-[#2b2361] text-white px-4 py-2 rounded font-bold hover:bg-[#cebd6d] hover:text-[#2b2361] transition cursor-pointer">Valuta ora</button>
              </div>
            }
            onClick={() => handleModalOpen('proprietario')}
          />
          {/* Scheda 3: Affitto assicurato */}
          <FlipCard
            front={
              <div className="flex-1 bg-[#222f47] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer min-h-[180px]">
                <img src="/file.svg" alt="Affitto assicurato" className="w-16 h-16 sm:w-14 sm:h-14 mb-3 sm:mb-4" />
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center">AFFITTO ASSICURATO</h3>
                <p className="text-[#e2b13c] text-center font-semibold text-base sm:text-lg">Informazioni</p>
              </div>
            }
            back={
              <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer border-2 border-[#222f47]" style={{minHeight: '260px'}}>
                <h3 className="text-[#2b2361] text-xl font-bold mb-2 text-center">Scopri la protezione per il tuo affitto</h3>
                <p className="text-[#222f47] text-center mb-4">Tutela il tuo canone e vivi la locazione senza pensieri con le nostre soluzioni assicurative.</p>
                <button onClick={() => handleModalOpen('assicurato')} className="bg-[#2b2361] text-white px-4 py-2 rounded font-bold hover:bg-[#cebd6d] hover:text-[#2b2361] transition cursor-pointer">Scopri di più</button>
              </div>
            }
            onClick={() => handleModalOpen('assicurato')}
          />
        </div>
      </section>
      {/* Sezione servizi rapidi in stile glassmorphism sopra le recensioni */}
      <section className="w-full flex justify-center mt-12 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-2">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-200 border border-transparent hover:border-[#cebd6d] hover:shadow-xl">
            <FaEuroSign className="text-[#cebd6d] text-4xl mb-3" />
            <h3 className="text-[#2b2361] text-lg font-semibold mb-2">Cedolare Secca</h3>
            <p className="text-[#2b2361]/80 text-sm mb-6 flex-1">Scopri i vantaggi fiscali e le regole della cedolare secca per il tuo affitto.</p>
            <a 
              href="https://www.affitti-co.it/download/Affittti-Co_circ26_010611.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles}
            >
              Informazioni
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-200 border border-transparent hover:border-[#cebd6d] hover:shadow-xl">
            <FaChartLine className="text-[#cebd6d] text-4xl mb-3" />
            <h3 className="text-[#2b2361] text-lg font-semibold mb-2">Indice ISTAT</h3>
            <p className="text-[#2b2361]/80 text-sm mb-6 flex-1">Consulta l'andamento degli indici ISTAT per aggiornare il tuo contratto.</p>
            <button 
              type="button"
              onClick={() => handleModalOpen('istat')}
              className={buttonStyles + ' cursor-default'}
            >
              Visualizza
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-200 border border-transparent hover:border-[#cebd6d] hover:shadow-xl">
            <FaGavel className="text-[#cebd6d] text-4xl mb-3" />
            <h3 className="text-[#2b2361] text-lg font-semibold mb-2">Consulenza Legale</h3>
            <p className="text-[#2b2361]/80 text-sm mb-6 flex-1">Assistenza legale specializzata per ogni esigenza immobiliare.</p>
            <button 
              type="button"
              onClick={() => handleModalOpen('legale')}
              className={buttonStyles + ' cursor-default'}
            >
              Richiedi
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-200 border border-transparent hover:border-[#cebd6d] hover:shadow-xl">
            <FaCertificate className="text-[#cebd6d] text-4xl mb-3" />
            <h3 className="text-[#2b2361] text-lg font-semibold mb-2">Certificazione Energetica</h3>
            <p className="text-[#2b2361]/80 text-sm mb-6 flex-1">Ottieni la certificazione energetica del tuo immobile.</p>
            <button 
              type="button"
              onClick={() => handleModalOpen('certificazione')}
              className={buttonStyles + ' cursor-default'}
            >
              Richiedi
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 w-full bg-gray-50">
        <GoogleReviews 
          placeId="IL_TUO_PLACE_ID" 
          apiKey="LA_TUA_API_KEY" 
        />
      </section>
      {/* Modali per i form */}
      <ModalForm isOpen={openModal === 'casa'} onClose={() => setOpenModal(null)} title="Richiesta Casa" />
      <ModalForm isOpen={openModal === 'proprietario'} onClose={() => setOpenModal(null)} title="Proponi il tuo immobile" />
      <ModalForm isOpen={openModal === 'assicurato'} onClose={() => setOpenModal(null)} title="Affitto Assicurato" />
      <ModalForm isOpen={openModal === 'istat'} onClose={() => setOpenModal(null)} title="Indice ISTAT" />
      <FormModal 
        isOpen={openModal === 'certificazione'} 
        onClose={() => setOpenModal(null)} 
        title="Richiedi Certificazione Energetica" 
      />
      <FormModal 
        isOpen={openModal === 'legale'} 
        onClose={() => setOpenModal(null)} 
        title="Richiedi Consulenza Legale" 
      />
    </main>
  );
}

// FlipCard component
function FlipCard({ front, back, onClick }: { front: React.ReactNode, back: React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>, onClick: () => void }) {
  const [flipped, setFlipped] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Su mobile: primo tap gira, secondo tap (sul bottone) apre il form
  const handleCardClick = (e: React.MouseEvent) => {
    if (!isMobile) return;
    if (!flipped) {
      setFlipped(true);
    }
    // Se già girata, non fare nulla (il bottone gestisce l'apertura form)
  };

  // Su desktop: hover gira, click apre form
  const handleMouseEnter = () => { if (!isMobile) setFlipped(true); };
  const handleMouseLeave = () => { if (!isMobile) setFlipped(false); };

  return (
    <div
      className="group w-full h-full max-w-xs min-h-[260px] perspective"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{ cursor: 'pointer', perspective: 1000 }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {front}
        </div>
        <div
          className="absolute w-full h-full"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
} 