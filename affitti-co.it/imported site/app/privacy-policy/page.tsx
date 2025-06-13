import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-[#2b2361] mb-8 mt-16">Privacy Policy</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Titolare del trattamento</h2>
              <p className="text-gray-700">
                Il titolare del trattamento dei dati personali è <span className="font-semibold">RENTWORK di Casati Luca</span>, con sede legale in <span className="font-semibold">Via E. Fuser 8 - Somma L.do</span>, tel. <span className="font-semibold">+39 0331 250049</span>, email: <span className="font-semibold">info@affitti-co.it</span>.<br/>
                Affitti & Co. P.IVA 02298650025 · Iscr. Ruolo Ag. d'Affari in mediazione n° 2272 C.C.I.A.A. di Varese
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Tipologie di dati raccolti</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><span className="font-semibold">Dati di navigazione:</span> informazioni raccolte automaticamente (es. indirizzo IP, tipo di browser, pagine visitate) tramite cookie e strumenti di analisi.</li>
                <li><span className="font-semibold">Dati forniti volontariamente:</span> dati inseriti dall'utente nei moduli di contatto (nome, email, telefono, messaggio).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Finalità e base giuridica del trattamento</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Rispondere a richieste di informazioni inviate tramite il modulo di contatto (base giuridica: esecuzione di misure precontrattuali).</li>
                <li>Analisi statistiche anonime sull'uso del sito tramite cookie analitici (base giuridica: consenso dell'utente).</li>
                <li>Gestione della sicurezza e prevenzione di abusi o frodi (base giuridica: legittimo interesse del titolare).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Modalità di trattamento e conservazione</h2>
              <p className="text-gray-700">
                I dati sono trattati con strumenti informatici e telematici, adottando misure di sicurezza adeguate. I dati raccolti tramite form sono conservati per il tempo necessario a rispondere alle richieste; i dati di navigazione sono conservati secondo quanto specificato nella <a href="/cookie-policy" className="underline hover:text-[#2b2361]">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Cookie e strumenti di terze parti</h2>
              <p className="text-gray-700 mb-2">
                Il sito utilizza cookie tecnici e, previo consenso, cookie analitici e di terze parti, tra cui:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Google Analytics (statistiche anonime)</li>
                <li>Hotjar (analisi dell'esperienza utente)</li>
                <li>Google Reviews (visualizzazione recensioni)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Per maggiori dettagli consulta la <a href="/cookie-policy" className="underline hover:text-[#2b2361]">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Destinatari dei dati</h2>
              <p className="text-gray-700">
                I dati potranno essere trattati da fornitori di servizi informatici e consulenti che agiscono in qualità di responsabili esterni. I dati non saranno diffusi né ceduti a terzi per finalità commerciali.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Trasferimento di dati extra-UE</h2>
              <p className="text-gray-700">
                Alcuni servizi (Google, Hotjar) possono comportare il trasferimento di dati verso Paesi extra-UE (es. Stati Uniti). In questi casi, il trasferimento avviene sulla base di garanzie adeguate previste dal GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Diritti dell'interessato</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Accedere ai propri dati personali</li>
                <li>Chiedere la rettifica o la cancellazione</li>
                <li>Limitare o opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Proporre reclamo al Garante Privacy</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Per esercitare i propri diritti è possibile scrivere a <span className="font-semibold">[EMAIL]</span>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Aggiornamenti</h2>
              <p className="text-gray-700">
                La presente informativa può essere soggetta a modifiche. Si consiglia di consultare regolarmente questa pagina per eventuali aggiornamenti.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 