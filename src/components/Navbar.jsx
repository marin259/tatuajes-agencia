import React, { useState } from 'react';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (tab) => {
    setCurrentTab(tab);
    setIsOpen(false);
  };

  return (
    <header className="bg-neutral-950 border-b border-neutral-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO Y MARCA */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer flex items-center gap-3 group"
        >
          <img 
            src="https://i.ibb.co/zhC53H6n/Recurso-1-300x.png" 
            alt="ASU_ARTATTOO Logo" 
            className="w-9 h-9 object-contain rounded-full bg-neutral-900 p-1 border border-neutral-800 group-hover:border-neutral-700 transition-colors"
          />
          <span className="text-white font-bold text-lg tracking-wider">
            ASU_ARTATTOO
          </span>
        </div>

        {/* Botón de Hamburguesa para Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-300 hover:text-white focus:outline-none p-2"
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navegación para Escritorio */}
        <nav className="hidden md:flex items-center gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors cursor-pointer ${
              currentTab === 'home'
                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
            }`}
          >
            Inicio
          </button>

          <button
            onClick={() => handleNavClick('portfolio')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors cursor-pointer ${
              currentTab === 'portfolio'
                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
            }`}
          >
            Portafolio
          </button>
          
          <button
            onClick={() => handleNavClick('blog')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors cursor-pointer ${
              currentTab === 'blog'
                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
            }`}
          >
            Blog & Cuidados
          </button>

          <button
            onClick={() => handleNavClick('booking')}
            className={`px-4 py-1.5 rounded text-sm font-semibold transition-colors cursor-pointer ${
              currentTab === 'booking' 
                ? 'bg-red-600 text-white shadow-md shadow-red-900/30' 
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
            }`}
          >
            Reservar Cita
          </button>
          
          <button
            onClick={() => handleNavClick('admin')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors cursor-pointer ${
              currentTab === 'admin'
                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
            }`}
          >
            Admin Panel
          </button>
        </nav>

      </div>

      {/* Menú desplegable para Móvil */}
      {isOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-neutral-800 flex flex-col gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors ${
              currentTab === 'home'
                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                : 'bg-neutral-900 text-neutral-300'
            }`}
          >
            Inicio
          </button>

          <button
            onClick={() => handleNavClick('portfolio')}
            className={`w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors ${
              currentTab === 'portfolio'
                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                : 'bg-neutral-900 text-neutral-300'
            }`}
          >
            Portafolio
          </button>
          
          <button
            onClick={() => handleNavClick('blog')}
            className={`w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors ${
              currentTab === 'blog'
                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                : 'bg-neutral-900 text-neutral-300'
            }`}
          >
            Blog & Cuidados
          </button>

          <button
            onClick={() => handleNavClick('booking')}
            className={`w-full text-left px-4 py-2.5 rounded text-sm font-semibold transition-colors ${
              currentTab === 'booking' 
                ? 'bg-red-600 text-white' 
                : 'bg-neutral-900 text-neutral-300'
            }`}
          >
            Reservar Cita
          </button>
          
          <button
            onClick={() => handleNavClick('admin')}
            className={`w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors ${
              currentTab === 'admin'
                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                : 'bg-neutral-900 text-neutral-300'
            }`}
          >
            Admin Panel
          </button>
        </nav>
      )}
    </header>
  );
}