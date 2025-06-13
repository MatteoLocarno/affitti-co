import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { propertyService } from '../services/propertyService';
import type { Property } from '../types/property';

export default function Immobili() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const response = await propertyService.getProperties(1, 20);
        setProperties(response.properties);
      } catch (error) {
        console.error('Errore nel caricamento degli immobili:', error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2b2361] mb-8 text-center">
            I Nostri Immobili
          </h1>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-xl text-gray-600">Caricamento immobili...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
          
          {!loading && properties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Nessun immobile disponibile al momento.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}