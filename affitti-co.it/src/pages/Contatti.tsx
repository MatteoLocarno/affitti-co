import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' });
  const [inviato, setInviato] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInviato(true);
    // Qui in futuro si potrà integrare l'invio tramite API/email
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center px-4 bg-[linear-gradient(120deg,_#2b2361_0%,_#cebd6d_100%)] bg-no-repeat bg-fixed relative overflow-hidden">
        {/* Overlay bianco semitrasparente come in tutti gli immobili */}
        <div className="absolute inset-0 w-full h-full bg-white/60 backdrop-blur-[2px] pointer-events-none z-0 animate-gradient-move" style={{background: 'linear-gradient(120deg, #2b2361 0%, #cebd6d 100%)', opacity: 0.7}} />
        <section className="relative w-full max-w-2xl mx-auto flex flex-col items-center z-10">
          {/* Icone fluttuanti animate: centrate verticalmente ai lati */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-float-slow z-10">
            <a href="tel:+390331250049" title="Chiama">
              <FaPhoneAlt className="w-16 h-16 text-[#cebd6d] drop-shadow-lg hover:scale-110 transition-transform duration-200 bg-white rounded-full p-4 shadow-xl" />
            </a>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-float-fast z-10">
            <a href="mailto:info@affitti-co.it" title="Scrivi">
              <FaEnvelope className="w-16 h-16 text-[#cebd6d] drop-shadow-lg hover:scale-110 transition-transform duration-200 bg-white rounded-full p-4 shadow-xl" />
            </a>
          </div>
          {/* Titolo */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">Contattaci</h1>
          <p className="text-white text-lg mb-8 text-center">Siamo qui per aiutarti! Scegli come preferisci contattarci:</p>
          {/* Recapiti rapidi */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8 z-20">
            <a href="tel:+390331250049" className="flex items-center gap-2 bg-white/80 rounded-xl px-4 py-2 shadow hover:bg-[#cebd6d]/30 transition font-bold text-[#2b2361]">
              <FaPhoneAlt className="w-6 h-6 text-[#cebd6d]" /> 0331 250049
            </a>
            <a href="mailto:info@affitti-co.it" className="flex items-center gap-2 bg-white/80 rounded-xl px-4 py-2 shadow hover:bg-[#cebd6d]/30 transition font-bold text-[#2b2361]">
              <FaEnvelope className="w-6 h-6 text-[#cebd6d]" /> info@affitti-co.it
            </a>
          </div>
          {/* Modulo */}
          {!inviato ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-5 bg-white/90 rounded-2xl shadow-lg p-6 z-20">
              <input
                type="text"
                name="nome"
                placeholder="Il tuo nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="rounded-lg border border-[#2b2361] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#cebd6d] text-[#2b2361] bg-white/90 shadow"
              />
              <input
                type="email"
                name="email"
                placeholder="La tua email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-lg border border-[#2b2361] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#cebd6d] text-[#2b2361] bg-white/90 shadow"
              />
              <textarea
                name="messaggio"
                placeholder="Il tuo messaggio"
                value={form.messaggio}
                onChange={handleChange}
                required
                rows={5}
                className="rounded-lg border border-[#2b2361] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#cebd6d] text-[#2b2361] bg-white/90 shadow"
              />
              <button
                type="submit"
                className="bg-[#2b2361] text-white font-semibold py-3 rounded-lg shadow hover:bg-[#cebd6d] hover:text-[#2b2361] transition-colors"
              >
                Invia richiesta
              </button>
            </form>
          ) : (
            <div className="text-[#2b2361] text-xl font-semibold text-center py-8 z-20">
              Grazie per averci contattato!<br />Risponderemo al più presto.
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}