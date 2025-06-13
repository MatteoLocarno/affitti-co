

import { useState } from 'react';

interface RequestFormProps {
  type: 'richiesta_casa' | 'proprietario' | 'consulenza_legale' | 'certificazione_energetica';
}

export default function RequestForm({ type }: RequestFormProps) {
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    note: ''
  });
  const [inviato, setInviato] = useState(false);
  const [errore, setErrore] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrore(null);
    try {
      const res = await fetch('/api/send-form.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, ...form }),
      });
      const data = await res.json();
      if (data.success) {
        setInviato(true);
      } else {
        setErrore('Errore nell\'invio. Riprova più tardi.');
      }
    } catch (err) {
      setErrore('Errore di rete.');
    }
  };

  if (inviato) {
    return (
      <div className="text-[#2b2361] text-xl font-semibold text-center py-8">
        Grazie per averci contattato!<br />Ti risponderemo al più presto.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      <input type="text" name="cognome" placeholder="Cognome" value={form.cognome} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      <input type="text" name="telefono" placeholder="Telefono" value={form.telefono} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      <textarea name="note" placeholder="Note" value={form.note} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      {errore && <div className="text-red-600 text-sm text-center">{errore}</div>}
      <button type="submit" className="bg-[#2b2361] text-[#cebd6d] font-bold px-8 py-2 rounded shadow hover:bg-[#cebd6d] hover:text-[#2b2361] transition-colors w-full">Invia richiesta</button>
    </form>
  );
} 