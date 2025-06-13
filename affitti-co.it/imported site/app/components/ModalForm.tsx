import React from "react";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const etaOptions = [
  "18-25",
  "26-35",
  "36-45",
  "46-60",
  "Oltre 60"
];

const categoriaOptions = [
  "Appartamento",
  "Villa",
  "Monolocale",
  "Bilocale",
  "Trilocale",
  "Altro"
];

export default function ModalForm({ isOpen, onClose, title }: ModalFormProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.10)' }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-2xl p-4 sm:p-6 md:p-8 relative animate-fade-in mx-2 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#2b2361] text-2xl font-bold"
          aria-label="Chiudi"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#2b2361] mb-4 text-center">{title || "Compila il modulo"}</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div>
            <label className="block text-sm font-semibold mb-1">Nome*</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Cognome*</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Età*</label>
            <select className="w-full border rounded px-3 py-2" required>
              <option value="">Seleziona</option>
              {etaOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div></div>
          <div>
            <label className="block text-sm font-semibold mb-1">Indirizzo*</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Provincia*</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Città/Comune*</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">CAP*</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Telefono</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Fax</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Cellulare*</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email*</label>
            <input type="email" className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">Categoria*</label>
            <select className="w-full border rounded px-3 py-2" required>
              <option value="">Seleziona</option>
              {categoriaOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="md:col-span-2 flex justify-center mt-4">
            <button type="submit" className="bg-[#2b2361] text-[#cebd6d] font-bold px-8 py-2 rounded shadow hover:bg-[#cebd6d] hover:text-[#2b2361] transition-colors">
              Invia richiesta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 