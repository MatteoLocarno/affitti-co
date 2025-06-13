import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DoveSiamo() {
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
        <section className="bg-[#222f47]/95 rounded-3xl shadow-xl max-w-3xl w-full p-10 flex flex-col items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Dove Siamo</h1>
          <div className="text-white text-lg leading-relaxed space-y-6 text-center">
            <p>
              <b>Affitti & Co</b> si trova in una posizione strategica per servirti al meglio.
            </p>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#cebd6d]">I nostri uffici</h3>
              <p>
                Indirizzo: Via Example, 123<br />
                21100 Varese (VA)<br />
                Telefono: 0331 250049<br />
                Email: info@affitti-co.it
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}