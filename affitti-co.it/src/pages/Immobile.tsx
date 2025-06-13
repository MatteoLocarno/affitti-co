import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { propertyService } from '../services/propertyService';
import type { Property } from '../types/property';

export default function Immobile() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperty = async () => {
      if (!id) return;
      
      try {
        const propertyData = await propertyService.getPropertyById(id);
        setProperty(propertyData);
      } catch (error) {
        console.error('Errore nel caricamento dell\'immobile:', error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-40 pb-20 flex items-center justify-center">
          <div className="text-xl text-gray-600">Caricamento immobile...</div>
        </main>
        <Footer />
      </>
    );
  }

  if (!property) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-40 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl text-gray-600 mb-4">Immobile non trovato</h1>
            <p className="text-gray-500">L'immobile richiesto non esiste o non è più disponibile.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Galleria immagini */}
            {property.images && property.images.length > 0 && (
              <div className="aspect-video bg-gray-200">
                <img
                  src={property.images[0].url}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Dettagli immobile */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-[#2b2361] mb-4">{property.name}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-[#cebd6d]">Dettagli</h2>
                  <div className="space-y-2">
                    <p><strong>Prezzo:</strong> €{property.price}</p>
                    <p><strong>Superficie:</strong> {property.size} mq</p>
                    <p><strong>Locali:</strong> {property.rooms}</p>
                    {property.bathrooms && <p><strong>Bagni:</strong> {property.bathrooms}</p>}
                    <p><strong>Piano:</strong> {property.floor}</p>
                    <p><strong>Classe energetica:</strong> {property.energy_class}</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-[#cebd6d]">Posizione</h2>
                  <div className="space-y-2">
                    <p><strong>Città:</strong> {property.location.city}</p>
                    <p><strong>Provincia:</strong> {property.location.province}</p>
                    <p><strong>Indirizzo:</strong> {property.location.public_address}</p>
                  </div>
                </div>
              </div>
              
              {property.description && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4 text-[#cebd6d]">Descrizione</h2>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}