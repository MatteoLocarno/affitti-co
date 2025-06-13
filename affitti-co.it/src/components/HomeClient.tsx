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
// import Button from "./Button"; // decommenta se hai il componente

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
              style={{maxWidth: 520, height: 'auto'}} />
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
            style={{fontWeight: 800, fontSize: '2.7rem', letterSpacing: '0.02em', lineHeight: '1.1', fontFamily: 'inherit'}}>
            <span
              className={`absolute inset-0 rounded-xl transition-all duration-700 ease-in-out bg-[#cebd6d] z-0 origin-left ${showHighlight ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
              style={{transitionProperty: 'opacity, transform'}}></span>
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
      {/* ...resto del codice invariato... */}
    </main>
  );
} 