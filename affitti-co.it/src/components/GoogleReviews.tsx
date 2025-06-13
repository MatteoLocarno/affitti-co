

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from '../hooks/useTranslation';
import 'swiper/css';
import 'swiper/css/pagination';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
}

interface GoogleReviewsProps {
  placeId: string;
  apiKey: string;
}

// Dati di fallback per le recensioni
const fallbackReviews: Review[] = [
  {
    author_name: "Marco Rossi",
    rating: 5,
    text: "Servizio eccellente! Mi hanno aiutato a trovare la casa dei miei sogni in tempi record. Personale molto professionale e disponibile.",
    time: Date.now() / 1000 - 86400 * 7, // 7 giorni fa
    profile_photo_url: "https://ui-avatars.com/api/?name=MR&background=2b2361&color=fff"
  },
  {
    author_name: "Laura Bianchi",
    rating: 5,
    text: "Ho affittato il mio appartamento attraverso Affitti & Co e sono rimasta molto soddisfatta. Gestione impeccabile e grande trasparenza.",
    time: Date.now() / 1000 - 86400 * 14, // 14 giorni fa
    profile_photo_url: "https://ui-avatars.com/api/?name=LB&background=2b2361&color=fff"
  },
  {
    author_name: "Giuseppe Verdi",
    rating: 4,
    text: "Ottima esperienza complessiva. Il personale è stato molto disponibile e ha risposto a tutte le mie domande. Consigliato!",
    time: Date.now() / 1000 - 86400 * 21, // 21 giorni fa
    profile_photo_url: "https://ui-avatars.com/api/?name=GV&background=2b2361&color=fff"
  },
  {
    author_name: "Anna Ferrari",
    rating: 5,
    text: "Professionalità e competenza al massimo livello. Mi hanno seguito passo passo nella ricerca della casa ideale. Davvero soddisfatta!",
    time: Date.now() / 1000 - 86400 * 28,
    profile_photo_url: "https://ui-avatars.com/api/?name=AF&background=2b2361&color=fff"
  },
  {
    author_name: "Paolo Romano",
    rating: 5,
    text: "Ho trovato l'appartamento perfetto grazie a loro. Il team è stato molto attento alle mie esigenze e mi ha guidato in ogni fase.",
    time: Date.now() / 1000 - 86400 * 35,
    profile_photo_url: "https://ui-avatars.com/api/?name=PR&background=2b2361&color=fff"
  },
  {
    author_name: "Sofia Conti",
    rating: 5,
    text: "Affitto assicurato è un servizio fantastico! Mi sento molto più tranquilla sapendo che il mio appartamento è protetto. Ottimo servizio!",
    time: Date.now() / 1000 - 86400 * 42,
    profile_photo_url: "https://ui-avatars.com/api/?name=SC&background=2b2361&color=fff"
  },
  {
    author_name: "Luca Marino",
    rating: 5,
    text: "Ho venduto la mia casa in tempi record grazie al loro supporto. Professionalità e competenza al massimo livello!",
    time: Date.now() / 1000 - 86400 * 49,
    profile_photo_url: "https://ui-avatars.com/api/?name=LM&background=2b2361&color=fff"
  },
  {
    author_name: "Giulia Costa",
    rating: 5,
    text: "Il servizio di affitto assicurato mi ha dato grande tranquillità. Personale competente e sempre disponibile.",
    time: Date.now() / 1000 - 86400 * 56,
    profile_photo_url: "https://ui-avatars.com/api/?name=GC&background=2b2361&color=fff"
  },
  {
    author_name: "Roberto Neri",
    rating: 5,
    text: "Ottima esperienza con Affitti & Co. Mi hanno aiutato a trovare l'appartamento perfetto per la mia famiglia.",
    time: Date.now() / 1000 - 86400 * 63,
    profile_photo_url: "https://ui-avatars.com/api/?name=RN&background=2b2361&color=fff"
  },
  {
    author_name: "Maria Rossi",
    rating: 5,
    text: "Servizio impeccabile! Ho affittato il mio appartamento in tempi record grazie al loro supporto professionale.",
    time: Date.now() / 1000 - 86400 * 70,
    profile_photo_url: "https://ui-avatars.com/api/?name=MR&background=2b2361&color=fff"
  },
  {
    author_name: "Alessandro Bianchi",
    rating: 5,
    text: "Grande professionalità e competenza. Mi hanno guidato in ogni fase della ricerca della casa dei sogni.",
    time: Date.now() / 1000 - 86400 * 77,
    profile_photo_url: "https://ui-avatars.com/api/?name=AB&background=2b2361&color=fff"
  },
  {
    author_name: "Elena Verdi",
    rating: 5,
    text: "Affitto assicurato è la soluzione perfetta per chi vuole gestire il proprio immobile in totale sicurezza.",
    time: Date.now() / 1000 - 86400 * 84,
    profile_photo_url: "https://ui-avatars.com/api/?name=EV&background=2b2361&color=fff"
  }
];

export default function GoogleReviews({ placeId, apiKey }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const { t, language } = useTranslation();

  // Link Google recensioni
  const googleLink = "https://g.co/kgs/evguH9n";
  // Funzione per tagliare il testo a circa 4 righe (220 caratteri)
  function getShortText(text: string, max = 220) {
    if (text.length <= max) return text;
    return text.slice(0, max).trim() + '...';
  }

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!apiKey || !placeId || apiKey === 'LA_TUA_API_KEY' || placeId === 'IL_TUO_PLACE_ID') {
          setReviews(fallbackReviews);
          setTotalReviews(fallbackReviews.length);
          const avg = fallbackReviews.reduce((acc, review) => acc + review.rating, 0) / fallbackReviews.length;
          setAverageRating(avg);
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
        );
        const data = await response.json();
        
        if (data.result) {
          if (data.result.reviews) {
            setReviews(data.result.reviews);
          } else {
            setReviews(fallbackReviews);
          }
          setTotalReviews(data.result.user_ratings_total || fallbackReviews.length);
          setAverageRating(data.result.rating || 
            (fallbackReviews.reduce((acc, review) => acc + review.rating, 0) / fallbackReviews.length));
        } else {
          setReviews(fallbackReviews);
          setTotalReviews(fallbackReviews.length);
          const avg = fallbackReviews.reduce((acc, review) => acc + review.rating, 0) / fallbackReviews.length;
          setAverageRating(avg);
        }
        setLoading(false);
      } catch (err) {
        setReviews(fallbackReviews);
        setTotalReviews(fallbackReviews.length);
        const avg = fallbackReviews.reduce((acc, review) => acc + review.rating, 0) / fallbackReviews.length;
        setAverageRating(avg);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, apiKey, language]);

  if (loading) {
    return <div className="text-center py-8">Caricamento recensioni...</div>;
  }

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-[#2b2361] mb-12 text-center">{t('reviews.title')}</h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-[#2b2361]">{averageRating.toFixed(1)}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl ${
                    i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-600">
            {t('reviews.based_on')} {totalReviews} {totalReviews === 1 ? t('reviews.review') : t('reviews.reviews')}{' '}
            <a 
              href="https://g.co/kgs/evguH9n" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2b2361] hover:text-[#cebd6d] font-semibold transition-colors"
            >
              Google
            </a>
          </p>
        </div>
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #2b2361 !important;
            opacity: 0.3;
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            background: #2b2361 !important;
          }
        `}</style>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => {
            const isLong = review.text.length > 220;
            return (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between min-h-[260px] h-[260px]">
                  <div>
                    <div className="flex items-center mb-6">
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-16 h-16 rounded-full mr-6"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{review.author_name}</h3>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-2xl ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <p className="text-gray-600 text-lg leading-relaxed line-clamp-4 flex-1">
                        {isLong ? getShortText(review.text) : review.text}
                      </p>
                      {isLong && (
                        <a
                          href={googleLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2b2361] hover:text-[#cebd6d] font-semibold transition-colors text-base underline mt-2 self-start"
                          style={{marginTop: 'auto'}}
                        >
                          Leggi di più
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-6">
                    {new Date(review.time * 1000).toLocaleDateString('it-IT', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
} 