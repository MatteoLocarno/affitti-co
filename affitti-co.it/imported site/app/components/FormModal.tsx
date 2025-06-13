'use client';

import React from 'react';
import RequestForm from './RequestForm';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function FormModal({ isOpen, onClose, title }: FormModalProps) {
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
        <h2 className="text-2xl font-bold text-[#2b2361] mb-4 text-center">{title}</h2>
        <RequestForm />
      </div>
    </div>
  );
} 