import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeClient from '../components/HomeClient';
import { propertyService } from '../services/propertyService';
import type { Property } from '../types/property';

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const response = await propertyService.getProperties(1, 10);
        setProperties(response.properties);
      } catch (error) {
        console.error('Errore nel caricamento delle proprietà:', error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Caricamento...</div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <HomeClient properties={properties} />
      <Footer />
    </div>
  );
} 