import { Link } from 'react-router-dom';
import type { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  showBadge?: boolean;
}

export default function PropertyCard({ property, showBadge = true }: PropertyCardProps) {
  // Funzione helper per formattare il prezzo
  const formatPrice = (price: string | undefined) => {
    if (!price) return 'Prezzo su richiesta';
    // Formatta il prezzo senza decimali
    return `€ ${Number(price).toLocaleString()}`;
  };

  // Ottieni l'immagine principale
  const mainImage = property.images?.find(img => img.main === '1')?.url || '/images/affitti_little.jpg';

  return (
    <div className="bg-[#142047] rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-200 relative w-full text-white max-w-full">
      {/* Badge tipo proprietà */}
      {showBadge && (
        <span className="absolute top-3 left-3 bg-[#cebd6d] text-[#2b2361] text-xs font-bold px-3 py-1 rounded shadow">
          {property.rental === '1' ? 'IN AFFITTO' : 'IN VENDITA'}
        </span>
      )}
      <div className="relative h-40 sm:h-48 rounded-t-xl overflow-hidden">
        <img
          src={mainImage}
          alt={property.name || 'Immobile'}
          className="object-cover w-full h-full"
          style={{objectFit: 'cover', width: '100%', height: '100%'}}
        />
      </div>
      <div className="p-4 sm:p-5">
        {/* Tipologia immobile */}
        <h3 className="font-extrabold text-lg sm:text-xl mb-1 text-white capitalize">
          {property.typology?.type || 'Immobile'}
        </h3>
        {/* Località */}
        <p className="mb-1 text-[#cebd6d] font-bold text-base">
          {property.location?.city || 'Località non specificata'}
        </p>
        {/* Indirizzo */}
        <p className="mb-4 text-white/90 text-xs sm:text-sm leading-relaxed">
          {property.location?.public_address} {property.location?.public_street_number}, {property.location?.city} ({property.location?.province_shortname})
        </p>
        {/* Caratteristiche */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-white/80 mb-4">
          {property.size && <span>▣ {property.size} m²</span>}
          {property.rooms && <span>▣ {property.rooms} locali</span>}
          {property.floor && <span>▣ Piano {property.floor}</span>}
        </div>
        {/* Prezzo e bottone */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-white font-extrabold text-lg sm:text-xl">
            {formatPrice(property.price)}
          </p>
          <Link 
            to={`/immobile/${property.id}`}
            className="bg-[#cebd6d] text-[#2b2361] px-4 sm:px-5 py-2 rounded shadow font-semibold hover:bg-[#2b2361] hover:text-[#cebd6d] transition-colors text-xs sm:text-sm"
          >
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
} 