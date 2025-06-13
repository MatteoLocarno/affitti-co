import React from 'react';

const ModalForm = ({ isOpen, onClose, title }: { isOpen: boolean, onClose: () => void, title: string }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg relative min-w-[320px] max-w-lg w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl">&times;</button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div>Qui va il form o il contenuto del modal.</div>
      </div>
    </div>
  );
};

export default ModalForm; 