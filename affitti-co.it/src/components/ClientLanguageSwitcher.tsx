

import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

export default function ClientLanguageSwitcher() {
  const { changeLanguage } = useTranslation();
  
  return <LanguageSwitcher onLanguageChange={changeLanguage} />;
} 