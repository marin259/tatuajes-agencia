import React from 'react';

export default function Navbar({ currentTab, setCurrentTab }) {
  return (
    <header className="bg-neutral-900 border-b border-neutral-800 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <span className="text-white font-black tracking-wider text-sm sm:text-base">
        INK & ART // AGENCIA
      </span>

      <nav className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setCurrentTab('portfolio')}
          className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            currentTab === 'portfolio' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
        >
          Portafolio
        </button>

        <button
          onClick={() => setCurrentTab('blog')}
          className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            currentTab === 'blog' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
        >
          Blog & Cuidados
        </button>

        <button
          onClick={() => setCurrentTab('booking')}
          className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            currentTab === 'booking' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
        >
          Reservar Cita
        </button>

        <button
          onClick={() => setCurrentTab('admin')}
          className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            currentTab === 'admin' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
        >
          Admin Panel
        </button>
      </nav>
    </header>
  );
}