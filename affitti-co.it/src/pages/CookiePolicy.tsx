import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#2b2361] mb-8 text-center">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Questa Cookie Policy spiega cosa sono i cookie e come li utilizziamo sul nostro sito web.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#cebd6d] mb-4">Cosa sono i cookie?</h2>
            <p className="mb-6">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
              Permettono al sito di ricordare le tue azioni e preferenze per un periodo di tempo.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#cebd6d] mb-4">Come utilizziamo i cookie</h2>
            <p className="mb-6">
              Utilizziamo i cookie per:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Migliorare la funzionalità del sito</li>
              <li>Analizzare il traffico del sito</li>
              <li>Personalizzare la tua esperienza</li>
              <li>Ricordare le tue preferenze</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-[#cebd6d] mb-4">Gestione dei cookie</h2>
            <p className="mb-6">
              Puoi controllare e/o eliminare i cookie come desideri. Puoi eliminare tutti i cookie già presenti 
              sul tuo computer e impostare la maggior parte dei browser per impedire che vengano inseriti.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}