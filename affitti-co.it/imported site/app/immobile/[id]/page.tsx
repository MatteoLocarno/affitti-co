import { Suspense } from 'react';
import { propertyService } from '../../services/propertyService';
import PropertyDetails from './PropertyDetails';
import { Property } from '../../types/property';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<div>Caricamento...</div>}>
      <PropertyDetails id={params.id} />
    </Suspense>
  );
} 