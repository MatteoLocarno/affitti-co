'use client';

import { useState, useEffect } from 'react';

interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translation = {
  it: {
    'home.hero.title1': 'È TEMPO DI TROVARE',
    'home.hero.title2': 'LA TUA NUOVA CASA',
    'home.hero.slogan': 'Offriamo soluzioni su misura guidandoti in ogni fase con cura, inizia a cercare il tuo immobile con noi, <i><b>i professionisti della locazione e non solo!</b></i>',
    'search.placeholder': 'Cerca la tua casa ideale...',
    'search.button': 'Cerca',
    'reviews.title': 'Cosa dicono su di noi',
    'reviews.based_on': 'Basato su',
    'reviews.review': 'recensione',
    'reviews.reviews': 'recensioni',
    'menu.home': 'Home',
    'menu.properties': 'Proprietà',
    'menu.about': 'Chi Siamo',
    'menu.contact': 'Contatti',
    'footer.company': 'RENTWORK di Casati Luca',
    'footer.address': 'Via E. Fuser 8 - Somma L.do',
    'footer.tel': 'tel.',
    'footer.email': 'Email',
    'footer.privacy': 'Privacy Policy',
    'footer.cookie': 'Cookie Policy',
    'footer.credits': 'Credits',
    'footer.piva': "Affitti & Co. P.IVA 02298650025 · Iscr. Ruolo Ag. d'Affari in mediazione n° 2272 C.C.I.A.A. di Varese",
    'footer.all_rights': 'Tutti i diritti riservati.',
    'menu.where': 'Dove Siamo',
    'menu.all_properties': 'Tutti gli Immobili',
  },
  en: {
    'home.hero.title1': 'IT\'S TIME TO FIND',
    'home.hero.title2': 'YOUR NEW HOME',
    'home.hero.slogan': 'we offer tailor-made solutions, guiding you with care at every stage. Start searching for your property with us, the rental professionals and more!',
    'search.placeholder': 'Search for your ideal home...',
    'search.button': 'Search',
    'reviews.title': 'Our Reviews',
    'reviews.based_on': 'Based on',
    'reviews.review': 'review',
    'reviews.reviews': 'reviews',
    'menu.home': 'Home',
    'menu.properties': 'Properties',
    'menu.about': 'About Us',
    'menu.contact': 'Contact',
    'footer.company': 'RENTWORK by Casati Luca',
    'footer.address': 'Via E. Fuser 8 - Somma L.do',
    'footer.tel': 'tel.',
    'footer.email': 'Email',
    'footer.privacy': 'Privacy Policy',
    'footer.cookie': 'Cookie Policy',
    'footer.credits': 'Credits',
    'footer.piva': "Affitti & Co. VAT 02298650025 · Registered Real Estate Agent n° 2272 C.C.I.A.A. Varese",
    'footer.all_rights': 'All rights reserved.',
    'menu.where': 'Where We Are',
    'menu.all_properties': 'All Properties',
  },
};

const getInitialLanguage = (): string => {
  if (typeof window === 'undefined') return 'it';
  
  try {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'it';
  } catch (error) {
    console.warn('Errore nell\'accesso a localStorage:', error);
    return 'it';
  }
};

export function useTranslation() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    if (isClient) {
      try {
        localStorage.setItem('language', lang);
      } catch (error) {
        console.warn('Errore nel salvataggio della lingua:', error);
      }
    }
  };

  return { t, language, changeLanguage, isClient };
} 