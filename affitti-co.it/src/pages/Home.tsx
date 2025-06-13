import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeClient from '../components/HomeClient';
import { propertyService } from '../services/propertyService';

const Home: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    propertyService.getProperties(1, 10)
      .then((data) => {
        setProperties(data.properties || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Errore nel caricamento delle proprietà');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      {loading && <div>Caricamento...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && <HomeClient properties={properties} />}
      <Footer />
    </div>
  );
};

export default Home; 