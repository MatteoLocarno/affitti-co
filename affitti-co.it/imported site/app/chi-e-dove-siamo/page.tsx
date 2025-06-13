'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ChiEDoveSiamo() {
  const [aperto, setAperto] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Effetto cielo sfumato su tutta la pagina */}
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
        <div className="flex flex-col items-center relative z-10">
          {/* Depliant interattivo */}
          <div className="relative flex flex-col items-center">
            {/* Copertina */}
            <div
              className={`depliant-copertina ${aperto ? 'aperto' : ''}`}
              onClick={() => !aperto && setAperto(true)}
              style={{ cursor: !aperto ? 'pointer' : 'default', zIndex: aperto ? 1 : 2, background: '#222f47' }}
            >
              <div className="flex flex-col items-center justify-center h-full w-full p-10">
                <div className="mb-6 max-w-[70vw] flex items-center justify-center">
                  <div style={{background:'#fff', borderRadius:'50%', padding: '18px', boxShadow:'0 2px 12px 0 rgba(0,0,0,0.08)'}}>
                    <img
                      src="/Logo-homepage.png"
                      alt="Logo Affitti & Co"
                      width={184}
                      height={184}
                      style={{objectFit:'contain', width: '184px', height: '184px', maxWidth: '70vw', maxHeight: '184px', boxShadow: 'none', border: 'none', background: 'none'}} 
                    />
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center drop-shadow-lg mb-2 italic">
                  La nostra storia
                </h1>
                <span className="text-[#cebd6d] text-lg font-semibold mt-2">Clicca per aprire</span>
              </div>
            </div>
            {/* Pagine interne */}
            <div className={`depliant-pagine ${aperto ? 'aperto' : ''}`}> 
              {/* Pulsante chiudi */}
              <button
                className="absolute top-4 right-4 z-20 bg-white text-[#2b2361] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#cebd6d] hover:text-[#2b2361] transition-colors"
                onClick={() => setAperto(false)}
                aria-label="Chiudi depliant"
                style={{border: '2px solid #2b2361'}}
              >
                &times;
              </button>
              <section className="relative w-full max-w-5xl flex flex-col md:flex-row items-stretch justify-center gap-8 perspective-3d">
                {/* Pagina sinistra: Chi Siamo */}
                <div className="bg-[#222f47]/95 rounded-3xl shadow-2xl flex-1 p-10 flex flex-col items-center transform md:rotate-y-6 hover:rotate-y-0 transition-transform duration-500 ease-in-out" style={{minWidth:'320px',backfaceVisibility:'hidden'}}>
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">Chi Siamo</h2>
                  <div className="text-white text-lg leading-relaxed space-y-6 text-justify">
                    <p>
                      <b>Affitti & Co</b> mette al servizio di ogni proprietario la sua specializzazione nel settore degli affitti con un servizio a 360 gradi.
                      Grazie alla professionalità, all'esperienza maturata e alla competenza di un team sempre aggiornato sulle normative vigenti.
                    </p>
                    <p>
                      Garantendo una consulenza precisa in tutte le fasi della locazione:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>la corretta valutazione dell'immobile,</li>
                      <li>la ricerca dell'inquilino ideale;</li>
                      <li>la scelta del contratto opportuno;</li>
                      <li>la gestione delle pratiche contrattuali e post-contrattuali.</li>
                    </ul>
                    <p>
                      I professionisti di Affitti & Co hanno la competenza e la formazione necessaria per offrire una precisa valutazione degli immobili residenziali e commerciali. Valutazione che tiene conto del prezzo di mercato, conosciuto per esperienza, del valore intrinseco dell'immobile, oggettivo e basato su competenze tecniche, del valore personale, che ciascun proprietario attribuisce al proprio immobile e che un agente Affitti & Co sa far emergere e comprendere.
                      Una corretta valutazione del canone d'affitto permette infatti di accorciare i tempi di locazione.
                    </p>
                    <p>
                      Ogni immobile, appartamento, ufficio, locale commerciale, casa, villa, viene pubblicizzato e promosso sia attraverso canali di diffusione nazionale, come il sito internet <a href="https://www.affitti-co.it" className="text-[#cebd6d] underline">www.affitti-co.it</a> ed i principali portali immobiliari, sia tramite strumenti locali, spazi in quotidiani locali e magazine tematici, che garantiscono ampia visibilità.
                    </p>
                    <p>
                      Il nostro lavoro quotidiano è quello di selezionare un inquilino affidabile e sicuro per ogni immobile.
                      Sono rigidi i criteri di valutazione della solvibilità e di adesione ai requisiti richiesti dal proprietario.
                    </p>
                    <p>
                      L'esclusiva tutela <b>Affitto Assicurato</b> garantisce al proprietario il pagamento dei canoni per tutta la durata del contratto di locazione, il risarcimento degli eventuali danni arrecati all'immobile ed offre la possibilità di risarcimento per le spese legali e processuali sostenute in caso di controversia con l'inquilino.
                    </p>
                    <p>
                      Affidati con fiducia e serenità ai professionisti della locazione.
                    </p>
                  </div>
                </div>
                {/* Pagina destra: Dove Siamo */}
                <div className="bg-[#222f47]/95 rounded-3xl shadow-2xl flex-1 p-10 flex flex-col items-center transform md:-rotate-y-6 hover:rotate-y-0 transition-transform duration-500 ease-in-out" style={{minWidth:'320px',backfaceVisibility:'hidden'}}>
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">Dove Siamo</h2>
                  <div className="text-white text-lg leading-relaxed space-y-4 text-center">
                    <p>
                      <b>Affitti & Co</b><br />
                      Via E.Fuser, 8<br />
                      21019 Somma Lombardo (VA)<br />
                      Tel. +39 0331 250049<br />
                      <a href="mailto:info@affitti-co.it" className="text-[#cebd6d] underline">info@affitti-co.it</a><br />
                      <a href="https://www.affitti-co.it" className="text-[#cebd6d] underline">www.affitti-co.it</a>
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-center mb-6 mt-4">
                    <img
                      src="/foto-esterno.png"
                      alt="Esterno Affitti & Co."
                      width={400}
                      height={320}
                      className="rounded-2xl shadow-lg border-4 border-white object-cover"
                      style={{ maxHeight: '320px', width: '100%', height: 'auto', objectFit:'cover' }}
                    />
                    <div className="text-white text-base mt-2 font-medium opacity-80">La nostra sede – Via E. Fuser 8, Somma Lombardo</div>
                  </div>
                  <div className="mt-4 w-full h-64 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps?q=Via+E.+Fuser,+8,+21019+Somma+Lombardo+VA,+Italia&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        .depliant-copertina {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%) rotateY(0deg);
          width: 420px;
          height: 560px;
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 8px 32px 0 rgba(43,35,97,0.18), 0 1.5px 8px 0 rgba(43,35,97,0.10);
          transition: transform 0.9s cubic-bezier(.77,0,.18,1), box-shadow 0.4s;
          z-index: 2;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .depliant-copertina {
            width: 95vw;
            height: 340px;
          }
        }
        .depliant-copertina.aperto {
          transform: translateX(-50%) rotateY(-90deg) scaleX(0.7);
          box-shadow: none;
          pointer-events: none;
        }
        .depliant-pagine {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.95) translateY(30px);
          transition: opacity 0.7s 0.2s, transform 0.7s 0.2s;
        }
        .depliant-pagine.aperto {
          opacity: 1;
          pointer-events: auto;
          transform: scale(1) translateY(0);
          transition: opacity 0.7s 0.2s, transform 0.7s 0.2s;
        }
      `}</style>
    </>
  );
}

// CSS extra per effetto 3D (da aggiungere a globals.css o come style jsx):
// .perspective-3d { perspective: 1200px; }
// .-rotate-y-6 { transform: rotateY(-6deg); }
// .rotate-y-6 { transform: rotateY(6deg); }
// .hover\:rotate-y-0:hover { transform: rotateY(0deg); } 