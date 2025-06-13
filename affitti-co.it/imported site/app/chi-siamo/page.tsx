import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affitti & Co - I professionisti della locazione',
  description: 'I professionisti della locazione. Scopri la storia di Affitti & Co, la tua agenzia immobiliare di fiducia per affitti e vendite.',
}

export default function ChiSiamo() {
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
        <section className="bg-[#222f47]/95 rounded-3xl shadow-xl max-w-3xl w-full p-10 flex flex-col items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Chi Siamo</h1>
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
        </section>
      </main>
      <Footer />
    </>
  );
} 