import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ChiEDoveSiamo() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/background sito.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          opacity: 0.45,
          zIndex: 0,
        }} />
        <section className="bg-[#222f47]/95 rounded-3xl shadow-xl max-w-4xl w-full p-10 flex flex-col items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Chi Siamo e Dove Siamo</h1>
          <div className="text-white text-lg leading-relaxed space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#cebd6d]">Chi Siamo</h2>
              <p>
                <b>Affitti & Co</b> mette al servizio di ogni proprietario la sua specializzazione nel settore degli affitti con un servizio a 360 gradi.
                Grazie alla professionalità, all'esperienza maturata e alla competenza di un team sempre aggiornato sulle normative vigenti.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#cebd6d]">Dove Siamo</h2>
              <div className="bg-white/10 rounded-lg p-6">
                <p>
                  Indirizzo: Via Example, 123<br />
                  21100 Varese (VA)<br />
                  Telefono: 0331 250049<br />
                  Email: info@affitti-co.it
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}