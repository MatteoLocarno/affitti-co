"use client";

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Property } from '../../types/property';
import { propertyService } from '../../services/propertyService';

interface PropertyDetailsProps {
  id: string;
}

export default function PropertyDetails({ id }: PropertyDetailsProps) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPropertyDetails() {
      setLoading(true);
      setError(null);
      try {
        const propertyData = await propertyService.getPropertyById(id);
        if (propertyData) {
          setProperty(propertyData);
        } else {
          setError('Immobile non trovato');
        }
      } catch (error) {
        console.error('Errore nel recupero dei dettagli:', error);
        setError('Si è verificato un errore nel caricamento dei dettagli dell\'immobile');
      }
      setLoading(false);
    }

    fetchPropertyDetails();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-40 pb-20 flex items-center justify-center">
          <div className="text-[#2b2361] text-xl font-semibold">Caricamento...</div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !property) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-40 pb-20 flex items-center justify-center">
          <div className="text-red-600 text-xl font-semibold">{error || 'Immobile non trovato'}</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-4">
          {/* Titolo e prezzo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#2b2361] mb-2">{property.name}</h1>
            <p className="text-2xl font-semibold text-[#cebd6d]">
              €{Number(property.price).toLocaleString('it-IT')}
            </p>
          </div>

          {/* Galleria immagini */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              {property.images.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title || `Immagine ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Dettagli principali */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Caratteristiche</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-800">Locali</p>
                  <p className="font-semibold text-[#2b2361]">{property.rooms}</p>
                </div>
                <div>
                  <p className="text-gray-800">Superficie</p>
                  <p className="font-semibold text-[#2b2361]">{property.size} m²</p>
                </div>
                <div>
                  <p className="text-gray-800">Piano</p>
                  <p className="font-semibold text-[#2b2361]">{property.floor}</p>
                </div>
                <div>
                  <p className="text-gray-800">Classe energetica</p>
                  <p className="font-semibold text-[#2b2361]">{property.energy_class}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Descrizione e dettagli */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonna sinistra: Descrizione */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Descrizione</h2>
                <p className="text-gray-800">
                  {property.availability_notes || 'Nessuna descrizione disponibile'}
                </p>
              </div>

              {/* Caratteristiche interne */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Caratteristiche interne</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.internals.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-[#cebd6d]">•</span>
                      <span className="text-gray-800">{feature.name}</span>
                      {feature.size && <span className="text-gray-600">({feature.size} m²)</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonna destra: Info aggiuntive */}
            <div className="space-y-8">
              {/* Localizzazione */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Localizzazione</h2>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">{property.location.public_address}, {property.location.public_street_number}</p>
                  <p className="text-gray-800">{property.location.zip} {property.location.city} ({property.location.province_shortname})</p>
                </div>
              </div>

              {/* Caratteristiche esterne */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Caratteristiche esterne</h2>
                <div className="space-y-2">
                  {property.features.externals.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-[#cebd6d]">•</span>
                      <span className="text-gray-800">{feature.name}</span>
                      {feature.size && <span className="text-gray-600">({feature.size} m²)</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contatti */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#2b2361] mb-4">Contatti</h2>
                <button className="w-full bg-[#2b2361] text-white py-3 px-6 rounded-lg hover:bg-[#cebd6d] transition-colors">
                  Richiedi informazioni
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 