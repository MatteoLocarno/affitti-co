'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';

const serviziSinistra = [
  "Affitti & Co mette al servizio di ogni proprietario la sua specializzazione nel settore degli affitti con un servizio a 360 gradi. Grazie alla professionalità, all'esperienza maturata e alla competenza di un team sempre aggiornato sulle normative vigenti.",
  "Garantendo una consulenza precisa in tutte le fasi della locazione:",
];

const fasiLocazione = [
  "La corretta valutazione dell'immobile,",
  "La ricerca dell'inquilino ideale;",
  "La scelta del contratto opportuno;",
  "La gestione delle pratiche contrattuali e post-contrattuali.",
];

const iconeFasi = [
  '✅', // valutazione
  '🧑‍💼', // inquilino ideale
  '📄', // contratto
  '🗂️', // gestione pratiche
];

const serviziDestra = [
  "Locazione di immobili abitativi, commerciali e uffici;",
  "Promozione pubblicitaria e intermediazione immobiliare;",
  "Stipula contratti di locazione;",
  "Registrazione contratti;",
  "Proroghe, cessioni e risoluzione contratti locazione;",
  "Adempimenti di legge post contrattuali;",
  "Consulenza immobiliare, tecnica e fiscale;",
  "Valutazioni e stime di immobili;",
  "Fidejussioni pagamento canoni, danni e tutela legale;",
  "Certificazioni energetiche, (A.C.E.).",
];

const iconeServizi = [
  '🏠', '📢', '✍️', '📝', '🔄', '⚖️', '💡', '📊', '🛡️', '🌱'
];

export default function Servizi() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 flex flex-col items-center px-4 bg-[linear-gradient(120deg,_#2b2361_0%,_#cebd6d_100%)] bg-no-repeat bg-fixed relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-white/60 backdrop-blur-[2px] pointer-events-none z-0 animate-gradient-move" style={{background: 'linear-gradient(120deg, #2b2361 0%, #cebd6d 100%)', opacity: 0.7}} />
        <section className="w-full max-w-5xl flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden bg-white/90 backdrop-blur-md">
          {/* Pagina sinistra */}
          <div className="flex-1 bg-[#2b2361]/90 text-[#f7f6fd] p-10 flex flex-col justify-center min-w-[280px]">
            <h2 className="text-2xl font-bold mb-4 text-[#cebd6d]">Affitti & Co</h2>
            <p className="mb-4 text-base leading-relaxed">{serviziSinistra[0]}</p>
            <p className="mb-2 text-base leading-relaxed">{serviziSinistra[1]}</p>
            <ul className="space-y-3 mt-4">
              {fasiLocazione.map((fase, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg group transition-all duration-200">
                  <span className="text-2xl select-none transition-transform group-hover:scale-125">{iconeFasi[idx]}</span>
                  <span>{fase}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Pagina destra */}
          <div className="flex-1 bg-white/95 text-[#2b2361] p-10 flex flex-col justify-center min-w-[280px]">
            <h2 className="text-2xl font-bold mb-4">Affitti & Co Vi propone diversi servizi:</h2>
            <ul className="space-y-3 mt-4">
              {serviziDestra.map((serv, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg group transition-all duration-200">
                  <span className="text-2xl select-none transition-transform group-hover:scale-125">{iconeServizi[idx]}</span>
                  <span>{serv}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 