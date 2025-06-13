import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DoveSiamo() {
  const mapStyle = [
    {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [{"color": "#2b2361"}]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{"color": "#cebd6d"}]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{"color": "#2b2361"}]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{"color": "#2b2361"}]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{"color": "#2b2361"}]
    }
  ];

  const mapStyleString = encodeURIComponent(JSON.stringify(mapStyle));

  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-20 bg-[#2b2361] flex flex-col items-center justify-center px-4">
        <section className="bg-white/95 rounded-3xl shadow-xl max-w-3xl w-full p-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2b2361] mb-8 text-center">Dove Siamo</h1>
          <div className="text-[#2b2361] text-lg leading-relaxed space-y-6 text-center">
            <p>
              <b>Affitti & Co</b><br />
              Via E.Fuser, 8<br />
              21019 Somma Lombardo (VA)<br />
              Tel. +39 0331 250049<br />
              <a href="mailto:info@affitti-co.it" className="text-[#cebd6d] underline">info@affitti-co.it</a><br />
              <a href="https://www.affitti-co.it" className="text-[#cebd6d] underline">www.affitti-co.it</a>
            </p>
          </div>
          <div className="w-full flex flex-col items-center mb-8">
            <img
              src="/foto-esterno.png"
              alt="Esterno Affitti & Co."
              className="w-full max-w-xl rounded-2xl shadow-lg border-4 border-white object-cover"
              style={{ maxHeight: '320px' }}
            />
            <div className="text-[#2b2361] text-base mt-2 font-medium opacity-80">La nostra sede – Via E. Fuser 8, Somma Lombardo</div>
          </div>
          <div className="mt-8 w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Via+E.+Fuser,+8,+21019+Somma+Lombardo+VA,+Italia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 