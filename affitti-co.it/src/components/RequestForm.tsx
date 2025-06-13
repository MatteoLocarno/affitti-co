import React from 'react';

const RequestForm = () => {
  return (
    <form>
      {/* Qui va il form di richiesta */}
      <input type="text" placeholder="Nome" className="border p-2 rounded w-full mb-2" />
      <input type="email" placeholder="Email" className="border p-2 rounded w-full mb-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Invia</button>
    </form>
  );
};

export default RequestForm; 