import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import FeaturedPropertiesCarousel from "./components/FeaturedPropertiesCarousel";
import { propertyService } from "./services/propertyService";
import type { Metadata } from 'next'
import ModalForm from "./components/ModalForm";
import React from "react";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: 'Affitti & Co - I professionisti della locazione',
  description: 'I professionisti della locazione. Affitti & Co: la tua agenzia immobiliare di fiducia per affitti e vendite in tutta Italia.',
}

export default async function Home() {
  // Ottieni le proprietà in evidenza
  const response = await propertyService.getProperties(1, 10);

  return (
    <div>
      <Header />
      <HomeClient properties={response.properties} />
      <Footer />
    </div>
  );
}
