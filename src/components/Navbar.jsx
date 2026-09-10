import React from 'react';

export default function Navbar({ setCurrentPage }) {
  return (
    <nav className="bg-neutral-900 border-b border-neutral-800 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-black tracking-widest cursor-pointer" onClick={() => setCurrentPage('portfolio')}>
        INK & ART // <span className="text-xs font-normal text-neutral-400">AGENCIA</span>
      </div>
      
      <div className="flex gap-6 text-sm font-semibold">
        <button 
          onClick={() => setCurrentPage('portfolio')} 
          className="hover:text-neutral-300 transition-colors"
        >
          Portafolio
        </button>
        <button 
          onClick={() => setCurrentPage('blog')} 
          className="hover:text-neutral-300 transition-colors"
        >
          Blog & Cuidados
        </button>
        <button 
          onClick={() => setCurrentPage('admin')} 
          className="bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded hover:bg-neutral-700 transition-all text-xs"
        >
          Admin Panel
        </button>
      </div>
    </nav>
  );
}