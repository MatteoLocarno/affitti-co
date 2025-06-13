import PropertyDetailsClient from './PropertyDetailsClient';

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  return <PropertyDetailsClient id={params.id} />;
} 