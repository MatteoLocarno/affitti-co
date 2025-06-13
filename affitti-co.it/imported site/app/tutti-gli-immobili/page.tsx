"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import { Property, PropertyFilters } from '../types/property';
import { propertyService } from '../services/propertyService';

export default function TuttiGliImmobili() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<PropertyFilters>({});

  // Fetch iniziale (tutti gli immobili)
  useEffect(() => {
    async function fetchProperties() {
      setLoading(true);
      setError(null);
      try {
        const response = await propertyService.getProperties(1, 100);
        if (response && response.properties && Array.isArray(response.properties)) {
          setProperties(response.properties);
        } else {
          setError('Impossibile caricare gli immobili. Riprova più tardi.');
          setProperties([]);
        }
      } catch (error) {
        setError('Si è verificato un errore nel caricamento degli immobili. Riprova più tardi.');
        setProperties([]);
      }
      setLoading(false);
    }
    fetchProperties();
  }, []);

  // Applica i filtri live ogni volta che cambiano
  useEffect(() => {
    async function applyFilters() {
      setLoading(true);
      setError(null);
      try {
        const response = await propertyService.searchProperties(filters);
        if (response && response.properties && Array.isArray(response.properties)) {
          let filtered = response.properties;
          // Filtro lato client per prezzo massimo
          if (filters.prezzo_max) {
            const prezzoMax = Number(filters.prezzo_max);
            filtered = filtered.filter((p: Property) => {
              const prezzo = Number(p.price);
              return !isNaN(prezzo) && prezzo <= prezzoMax;
            });
          }
          setProperties(filtered);
        } else {
          setError('Impossibile applicare i filtri. Riprova più tardi.');
          setProperties([]);
        }
      } catch (error) {
        setError('Si è verificato un errore nell\'applicazione dei filtri. Riprova più tardi.');
        setProperties([]);
      }
      setLoading(false);
    }
    // Applica solo se ci sono filtri attivi
    if (Object.keys(filters).length > 0) {
      applyFilters();
    }
  }, [filters]);

  // Funzione per aggiornare i filtri live
  const handleLiveFilter = (newFilters: PropertyFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center px-4 bg-[linear-gradient(120deg,_#2b2361_0%,_#cebd6d_100%)] bg-no-repeat bg-fixed relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-white/60 backdrop-blur-[2px] pointer-events-none z-0 animate-gradient-move" style={{background: 'linear-gradient(120deg, #2b2361 0%, #cebd6d 100%)', opacity: 0.7}} />
        <div className="relative z-20 w-full flex justify-center mb-8">
          <div className="max-w-4xl w-full">
            <SearchBar onSearch={handleLiveFilter} hideOperationTabs />
          </div>
        </div>
        <section className="relative z-10 bg-white/95 rounded-3xl shadow-xl max-w-6xl w-full p-0 flex flex-col lg:flex-row gap-0">
          {/* Colonna sinistra: filtro + lista immobili */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[80vh] border-b lg:border-b-0 lg:border-r border-[#cebd6d]/30">
            {loading ? (
              <div className="text-[#2b2361] text-xl font-semibold text-center py-8">Caricamento...</div>
            ) : error ? (
              <div className="text-red-600 text-xl font-semibold text-center py-8">{error}</div>
            ) : properties.length === 0 ? (
              <div className="text-[#2b2361] text-xl font-semibold text-center py-8">Nessun immobile trovato</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} showBadge={false} />
                ))}
              </div>
            )}
          </div>
          {/* Colonna destra: mappa */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="w-full h-72 sm:h-96 lg:h-[80vh] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Via+E.+Fuser,+8,+21019+Somma+Lombardo+VA,+Italia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 