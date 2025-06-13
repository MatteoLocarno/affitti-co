

import Marquee from 'react-fast-marquee';
import PropertyCard from './PropertyCard';
import { Property } from '../types/property';

interface FeaturedPropertiesCarouselProps {
  properties: Property[];
}

export default function FeaturedPropertiesCarousel({ properties }: FeaturedPropertiesCarouselProps) {
  // Duplico le slide per effetto continuo
  const slides = [...properties, ...properties];

  return (
    <div className="relative w-screen max-w-none py-4">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        pauseOnClick={true}
        style={{ width: '100%' }}
      >
        {slides.map((property, idx) => (
          <div key={property.id + '-' + idx} className="mx-3 w-80 flex-shrink-0">
            <PropertyCard property={property} />
          </div>
        ))}
      </Marquee>
    </div>
  );
} 