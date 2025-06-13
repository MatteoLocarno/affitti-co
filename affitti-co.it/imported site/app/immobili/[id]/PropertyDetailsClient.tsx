'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Property } from '@/app/types/property';
import { formatPrice } from '@/app/utils/formatPrice';

export default function PropertyDetailsClient({ id }: { id: string }) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/agim-proxy.php?context=properties&action=get&id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.properties && Array.isArray(data.properties) && data.properties.length > 0) {
          setProperty(data.properties[0]);
        } else if (data && data.id) {
          setProperty(data);
        } else {
          setProperty(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Errore nel caricamento dei dati.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-[#2b2361] text-xl font-semibold text-center py-20">Caricamento...</div>;
  }
  if (error || !property) {
    return <div className="text-[#2b2361] text-xl font-semibold text-center py-20">Immobile non trovato</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="text-[#2b2361] hover:text-[#cebd6d]">
              Home
            </Link>
            <span className="mx-2 text-[#2b2361]">/</span>
            <Link href="/tutti-gli-immobili" className="text-[#2b2361] hover:text-[#cebd6d]">
              Immobili
            </Link>
            <span className="mx-2 text-[#2b2361]">/</span>
            <span className="text-[#cebd6d]">{property.typology?.type || 'Immobile'}</span>
          </div>

          {/* Titolo e Prezzo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#2b2361] mb-4 capitalize">
              {property.typology?.type || 'Immobile'} in {property.location?.city}
            </h1>
            <p className="text-2xl font-semibold text-[#cebd6d]">
              {formatPrice(property.price)}
              {property.rental === '1' ? '/mese' : ''}
            </p>
          </div>

          {/* Layout immagini + descrizione affiancati su desktop */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Galleria immagini */}
            <div className="relative w-full max-w-3xl mx-auto md:mx-0 md:w-1/2">
              {property.images && property.images.length > 0 ? (
                <div className="relative w-full h-auto">
                  <div className="cursor-pointer" onClick={() => setShowModal(true)}>
                    <img
                      src={property.images[currentImageIndex].url}
                      alt={property.images[currentImageIndex].title || 'Immagine immobile'}
                      className="object-contain rounded-lg w-full h-auto"
                      style={{ maxHeight: 400 }}
                    />
                  </div>
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : property.images.length - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                        aria-label="Immagine precedente"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev < property.images.length - 1 ? prev + 1 : 0))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                        aria-label="Immagine successiva"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {property.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`Vai all'immagine ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  {/* Modal per immagine ingrandita */}
                  {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowModal(false)}>
                      <img
                        src={property.images[currentImageIndex].url}
                        alt={property.images[currentImageIndex].title || 'Immagine immobile'}
                        className="object-contain rounded-lg w-full h-auto"
                        style={{ maxHeight: 800, maxWidth: 1200 }}
                      />
                      <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                        aria-label="Chiudi"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center" style={{ minHeight: 200 }}>
                  <span className="text-gray-400">Nessuna immagine disponibile</span>
                </div>
              )}
            </div>
            {/* Descrizione a destra delle immagini su desktop, sopra su mobile */}
            {property.description && (
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0 md:w-1/2 md:self-start">
                <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Descrizione</h2>
                <p className="text-[#2b2361] whitespace-pre-line">{property.description}</p>
              </div>
            )}
          </div>

          {/* Dettagli principali */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Caratteristiche con sfondo blu primario */}
            <div className="bg-[#2b2361] p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-semibold mb-4">Caratteristiche</h2>
              <div className="space-y-4">
                {property.rooms && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{property.rooms} locali</span>
                  </div>
                )}
                {property.size && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{property.size} m²</span>
                  </div>
                )}
                {property.floor && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>Piano {property.floor}</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{property.bathrooms} bagni</span>
                  </div>
                )}
                {property.energy_class && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Classe energetica: {property.energy_class}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Ubicazione con sfondo secondario e testo primario */}
            <div className="bg-[#cebd6d] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Ubicazione</h2>
              <p className="text-[#2b2361]">
                {property.location?.public_address} {property.location?.public_street_number}
              </p>
              <p className="text-[#2b2361]">
                {property.location?.city} ({property.location?.province_shortname})
              </p>
              {property.location?.zone && (
                <p className="text-[#2b2361] mt-2">
                  Zona: {property.location.zone}
                </p>
              )}
              {/* Mappa sotto ubicazione */}
              {property.location?.latitude && property.location?.longitude && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-[#2b2361] mb-2">Dove si trova</h3>
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://www.google.com/maps?q=${property.location.latitude},${property.location.longitude}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            {/* Contatti */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#2b2361] mb-4">Contatti</h2>
              <p className="text-[#2b2361] mb-2">Per informazioni:</p>
              <a 
                href="https://wa.me/393483556026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#cebd6d] hover:text-[#2b2361] mb-2 font-bold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +39 348 355 6026
              </a>
              <a 
                href="mailto:info@affitti-co.it"
                className="flex items-center gap-2 text-[#cebd6d] hover:text-[#2b2361] font-bold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@affitti-co.it
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 