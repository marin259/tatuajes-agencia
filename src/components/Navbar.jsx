import React, { useState } from 'react';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 px-6 py-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="text-xl font-black tracking-wider text-white">
            INK<span className="text-red-500">STUDIO</span>
          </span>
        </button>

        {/* Enlaces Principales (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-neutral-300">
          
          {/* Item con Dropdown (Ejemplo: Estilos / Categorías) */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-2"
            >
              ESTILOS
              <svg 
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-red-500' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Submenú Desplegable */}
            {isDropdownOpen && (
              <div 
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute top-full left-0 w-48 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl py-2 mt-1 z-50"
              >
                <button 
                  onClick={() => { setCurrentTab('portfolio'); setIsDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 text-xs text-neutral-300 hover:bg-neutral-800 hover:text-red-400 transition-colors"
                >
                  Anime & Otaku
                </button>
                <button 
                  onClick={() => { setCurrentTab('portfolio'); setIsDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 text-xs text-neutral-300 hover:bg-neutral-800 hover:text-red-400 transition-colors"
                >
                  Surrealismo & Grises
                </button>
                <button 
                  onClick={() => { setCurrentTab('portfolio'); setIsDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 text-xs text-neutral-300 hover:bg-neutral-800 hover:text-red-400 transition-colors"
                >
                  Piezas Grandes / Espaldas
                </button>
              </div>
            )}
          </div>

          {/* Enlaces Simples con Estado Activo Típico (Píldora u Opcional) */}
          <button
            onClick={() => setCurrentTab('portfolio')}
            className={`transition-colors cursor-pointer ${
              currentTab === 'portfolio' ? 'text-red-500 font-extrabold' : 'hover:text-white'
            }`}
          >
            PORTAFOLIO
          </button>

          <button
            onClick={() => setCurrentTab('booking')}
            className={`transition-colors cursor-pointer ${
              currentTab === 'booking' ? 'text-red-500 font-extrabold' : 'hover:text-white'
            }`}
          >
            RESERVAR CITA
          </button>

          <button
            onClick={() => setCurrentTab('blog')}
            className={`transition-colors cursor-pointer ${
              currentTab === 'blog' ? 'text-red-500 font-extrabold' : 'hover:text-white'
            }`}
          >
            BLOG & CUIDADOS
          </button>

          {/* Botón Circular Hamburguesa (Estilo Profile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer ml-2"
            aria-label="Abrir menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Botón Hamburguesa para vista Móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-9 h-9 rounded-full bg-white text-neutral-950 flex items-center justify-center cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Completo / Overlay del Botón Hamburguesa */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 p-6 flex flex-col gap-4 shadow-2xl">
          <button 
            onClick={() => { setCurrentTab('home'); setIsMenuOpen(false); }}
            className="text-left font-bold text-sm text-neutral-200 hover:text-red-500"
          >
            INICIO
          </button>
          <button 
            onClick={() => { setCurrentTab('portfolio'); setIsMenuOpen(false); }}
            className="text-left font-bold text-sm text-neutral-200 hover:text-red-500"
          >
            PORTAFOLIO
          </button>
          <button 
            onClick={() => { setCurrentTab('booking'); setIsMenuOpen(false); }}
            className="text-left font-bold text-sm text-neutral-200 hover:text-red-500"
          >
            RESERVAR CITA
          </button>
          <button 
            onClick={() => { setCurrentTab('blog'); setIsMenuOpen(false); }}
            className="text-left font-bold text-sm text-neutral-200 hover:text-red-500"
          >
            CUIDADOS Y BLOG
          </button>
        </div>
      )}
    </header>
  );
}