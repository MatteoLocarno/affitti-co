import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#2b2361] mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              La presente Privacy Policy descrive le modalità di trattamento dei dati personali degli utenti 
              che consultano il nostro sito web.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#cebd6d] mb-4">Dati raccolti</h2>
            <p className="mb-6">
              I dati personali raccolti possono includere:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Dati di navigazione</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-[#cebd6d] mb-4">Finalità del trattamento</h2>
            <p className="mb-6">
              I dati personali vengono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Fornire i servizi richiesti</li>
              <li>Rispondere alle richieste di informazioni</li>
              <li>Migliorare i nostri servizi</li>
              <li>Adempiere agli obblighi di legge</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-[#cebd6d] mb-4">I tuoi diritti</h2>
            <p className="mb-6">
              In qualità di interessato, hai il diritto di:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Accedere ai tuoi dati personali</li>
              <li>Rettificare i dati inesatti</li>
              <li>Cancellare i tuoi dati</li>
              <li>Limitare il trattamento</li>
              <li>Portabilità dei dati</li>
              <li>Opporti al trattamento</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-[#cebd6d] mb-4">Contatti</h2>
            <p className="mb-6">
              Per esercitare i tuoi diritti o per qualsiasi domanda relativa al trattamento dei dati personali, 
              puoi contattarci all'indirizzo email: info@affitti-co.it
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}