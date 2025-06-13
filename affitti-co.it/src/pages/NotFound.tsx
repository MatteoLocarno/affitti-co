import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Sfondo fullscreen come nella homepage */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: "url('/background sito.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundColor: '#fff'
        }}
      />

      {/* Contenuto centrato */}
      <div className="relative z-10 text-center px-4">
        <img
          src="/Logo-homepage.png"
          alt="Affitti & Co Logo"
          width={260}
          height={90}
          className="mx-auto mb-8"
          style={{maxWidth: 260, height: 'auto'}}
        />
        
        <h1 className="text-6xl font-bold mb-4 text-[#cebd6d] drop-shadow-[0_4px_24px_white]">
          404
        </h1>
        
        <h2 className="text-3xl font-bold mb-6 text-[#2b2361]">
          Pagina non trovata
        </h2>
        
        <p className="text-xl mb-8 text-[#2b2361]">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        
        <Link 
          to="/"
          className="inline-block bg-[#2b2361] text-white px-8 py-3 rounded-full hover:bg-[#cebd6d] transition-colors duration-300"
        >
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}