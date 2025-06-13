import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { propertyService } from '../services/propertyService';
import { HiOutlineHome, HiOutlineKey, HiOutlineArrowLeft, HiOutlineSearch } from 'react-icons/hi';
import type { PropertyFilters } from '../types/property';

export default function SearchBar({ onSearch, hideOperationTabs }: { onSearch?: (filters: PropertyFilters) => void, hideOperationTabs?: boolean }) {
  const [step, setStep] = useState<'start' | 'search'>('search');
  const [operation, setOperation] = useState<'affitto' | 'vendita' | null>('affitto');
  const [provinceOptions, setProvinceOptions] = useState<{id: string, nome: string}[]>([]);
  const [tipologiaOptions, setTipologiaOptions] = useState<{id: string, nome: string}[]>([]);
  const [prezzoOptions, setPrezzoOptions] = useState<number[]>([]);
  const [localiOptions, setLocaliOptions] = useState<number[]>([]);
  const [provincia, setProvincia] = useState('');
  const [categoria, setCategoria] = useState('');
  const [prezzo, setPrezzo] = useState('');
  const [vani, setVani] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOptions() {
      setLoadingOptions(true);
      try {
        const [provinces, categories, response] = await Promise.all([
          propertyService.getProvinces(),
          propertyService.getCategories(),
          propertyService.getProperties(1, 100)
        ]);
        setProvinceOptions(provinces);
        setTipologiaOptions(categories);
        // Estrai prezzi unici e vani unici dalle proprietà
        const prezziUnici = Array.from(new Set(response.properties.map(p => Number(p.price)).filter(Boolean))).sort((a, b) => a - b);
        setPrezzoOptions(prezziUnici);
        const vaniUnici = Array.from(new Set(response.properties.map(p => Number(p.rooms)).filter(v => !isNaN(v) && v > 0))).sort((a, b) => a - b);
        setLocaliOptions(vaniUnici);
      } catch (e) {
        setProvinceOptions([]);
        setTipologiaOptions([]);
        setPrezzoOptions([]);
        setLocaliOptions([]);
      }
      setLoadingOptions(false);
    }
    fetchOptions();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const filters: PropertyFilters = {
      provincia: provincia || undefined,
      categoria: categoria || undefined,
      prezzo_max: prezzo ? Number(prezzo) : undefined,
      vani: vani ? Number(vani) : undefined,
      rental: operation === 'affitto' ? '1' : '0',
      status: 'active'
    };
    if (onSearch) {
      onSearch(filters);
    } else {
      // Redirigi a /tutti-gli-immobili con i filtri in query string
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== '') params.append(key, String(value));
      });
      navigate(`/tutti-gli-immobili?${params.toString()}`);
    }
    setLoading(false);
  };

  if (step === 'start') {
    return (
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center animate-fade-in">
        <button
          className="flex flex-row items-center justify-center gap-3 w-56 h-20 bg-[#2b2361] text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-[#cebd6d] hover:text-[#2b2361] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#cebd6d]/40"
          onClick={() => { setOperation('affitto'); setStep('search'); }}
        >
          <HiOutlineKey className="text-3xl" />
          <span>Affitto</span>
        </button>
        <button
          className="flex flex-row items-center justify-center gap-3 w-56 h-20 bg-[#2b2361] text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-[#cebd6d] hover:text-[#2b2361] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#cebd6d]/40"
          onClick={() => { setOperation('vendita'); setStep('search'); }}
        >
          <HiOutlineHome className="text-3xl" />
          <span>Vendita</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-[2rem] shadow-2xl shadow-[#2b2361]/10 px-4 sm:px-8 md:px-12 py-8 flex flex-col gap-6 items-center justify-center w-full max-w-5xl mx-auto border border-[#cebd6d]/20">
      {!hideOperationTabs && (
        <div className="flex flex-row items-center justify-center w-full gap-3 mb-2">
          <button
            type="button"
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold text-base transition-all duration-200 ${operation === 'affitto' ? 'bg-[#142047] text-white shadow' : 'bg-[#cebd6d] text-[#142047] hover:bg-[#142047] hover:text-[#cebd6d]'}`}
            onClick={() => setOperation('affitto')}
          >
            <HiOutlineKey className="text-lg" /> Affitto
          </button>
          <button
            type="button"
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold text-base transition-all duration-200 ${operation === 'vendita' ? 'bg-[#142047] text-white shadow' : 'bg-[#cebd6d] text-[#142047] hover:bg-[#142047] hover:text-[#cebd6d]'}`}
            onClick={() => setOperation('vendita')}
          >
            <HiOutlineHome className="text-lg" /> Vendita
          </button>
        </div>
      )}
      <div className="flex flex-col gap-4 w-full items-center justify-center md:flex-row md:items-end md:justify-center md:gap-3 lg:gap-4">
        {/* Provincia */}
        <div className="w-full max-w-xs md:max-w-none md:flex-1 flex flex-col gap-1 min-w-0 md:min-w-[180px]">
          <label className="block text-sm font-semibold text-[#2b2361] mb-1 pl-2 tracking-wide">Provincia</label>
          <select value={provincia} onChange={e => setProvincia(e.target.value)} className="border rounded-full px-5 py-2 w-full min-w-[120px] md:min-w-[180px] focus:ring-2 focus:ring-[#cebd6d] text-[#142047] bg-white hover:bg-[#f7f6f2] transition-colors duration-150" disabled={loadingOptions}>
            <option value="" className="text-[#2b2361]">Seleziona provincia</option>
            {provinceOptions.map(opt => <option key={opt.id} value={opt.id} className="text-[#2b2361]">{opt.nome}</option>)}
          </select>
        </div>
        {/* Tipologia */}
        <div className="w-full max-w-xs md:max-w-none md:flex-1 flex flex-col gap-1 min-w-0 md:min-w-[180px]">
          <label className="block text-sm font-semibold text-[#2b2361] mb-1 pl-2 tracking-wide">Tipologia</label>
          <select value={categoria} onChange={e => setCategoria(e.target.value)} className="border rounded-full px-5 py-2 w-full min-w-[120px] md:min-w-[180px] focus:ring-2 focus:ring-[#cebd6d] text-[#142047] bg-white hover:bg-[#f7f6f2] transition-colors duration-150" disabled={loadingOptions}>
            <option value="" className="text-[#2b2361]">Seleziona categoria</option>
            {tipologiaOptions.map(opt => <option key={opt.id} value={opt.id} className="text-[#2b2361]">{opt.nome}</option>)}
          </select>
        </div>
        {/* Prezzo max */}
        <div className="w-full max-w-xs md:max-w-none md:flex-1 flex flex-col gap-1 min-w-0 md:min-w-[180px]">
          <label className="block text-sm font-semibold text-[#2b2361] mb-1 pl-2 tracking-wide">Prezzo max</label>
          <select value={prezzo} onChange={e => setPrezzo(e.target.value)} className="border rounded-full px-5 py-2 w-full min-w-[120px] md:min-w-[180px] focus:ring-2 focus:ring-[#cebd6d] text-[#142047] bg-white hover:bg-[#f7f6f2] transition-colors duration-150" disabled={loadingOptions}>
            <option value="" className="text-[#2b2361]">Qualsiasi</option>
            {prezzoOptions.map(opt => <option key={opt} value={opt} className="text-[#2b2361]">{opt.toLocaleString()} €</option>)}
          </select>
        </div>
        {/* Locali */}
        <div className="w-full max-w-xs md:max-w-none md:flex-1 flex flex-col gap-1 min-w-0 md:min-w-[180px]">
          <label className="block text-sm font-semibold text-[#2b2361] mb-1 pl-2 tracking-wide">Locali</label>
          <select value={vani} onChange={e => setVani(e.target.value)} className="border rounded-full px-5 py-2 w-full min-w-[120px] md:min-w-[180px] focus:ring-2 focus:ring-[#cebd6d] text-[#142047] bg-white hover:bg-[#f7f6f2] transition-colors duration-150" disabled={loadingOptions}>
            <option value="" className="text-[#2b2361]">Qualsiasi</option>
            {localiOptions.map(opt => <option key={opt} value={opt} className="text-[#2b2361]">{opt} locali</option>)}
          </select>
        </div>
        {/* Bottone cerca */}
        <button
          type="submit"
          className="bg-[#142047] text-white font-semibold p-4 rounded-full shadow-lg hover:bg-[#cebd6d] hover:text-[#142047] transition-colors flex items-center justify-center mt-2 md:mt-0 md:ml-2 text-xl"
          disabled={loading}
          aria-label="Cerca"
          title="Cerca immobili"
        >
          <HiOutlineSearch className="text-2xl" />
        </button>
      </div>
    </form>
  );
} 