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

        {/* NAVEGACIÓN PARA ESCRITORIO (Estilo Minimalista & Mayúsculas) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors cursor-pointer py-2 ${
              currentTab === 'home'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Inicio
          </button>

          <button
            onClick={() => handleNavClick('portfolio')}
            className={`transition-colors cursor-pointer py-2 ${
              currentTab === 'portfolio'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Portafolio
          </button>
          
          <button
            onClick={() => handleNavClick('blog')}
            className={`transition-colors cursor-pointer py-2 ${
              currentTab === 'blog'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Blog & Cuidados
          </button>

          <button
            onClick={() => handleNavClick('booking')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              currentTab === 'booking' 
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/40' 
                : 'bg-neutral-900 text-neutral-200 hover:bg-neutral-800 border border-neutral-800'
            }`}
          >
            Reservar Cita
          </button>
          
          <button
            onClick={() => handleNavClick('admin')}
            className={`transition-colors cursor-pointer py-2 ${
              currentTab === 'admin'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Admin
          </button>

          {/* Botón Circular Hamburguesa Estilo Profile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer ml-2"
            aria-label="Abrir menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Botón de Hamburguesa para Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-md cursor-pointer"
          aria-label="Abrir menú"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

      </div>

      {/* Menú Desplegable (Overlay estilo Panel) */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 p-6 flex flex-col gap-3 shadow-2xl lg:hidden">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
              currentTab === 'home' ? 'bg-red-600 text-white' : 'text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            INICIO
          </button>

          <button
            onClick={() => handleNavClick('portfolio')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
              currentTab === 'portfolio' ? 'bg-red-600 text-white' : 'text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            PORTAFOLIO
          </button>
          
          <button
            onClick={() => handleNavClick('blog')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
              currentTab === 'blog' ? 'bg-red-600 text-white' : 'text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            BLOG & CUIDADOS
          </button>

          <button
            onClick={() => handleNavClick('booking')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
              currentTab === 'booking' ? 'bg-red-600 text-white' : 'text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            RESERVAR CITA
          </button>
          
          <button
            onClick={() => handleNavClick('admin')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
              currentTab === 'admin' ? 'bg-red-600 text-white' : 'text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            ADMIN PANEL
          </button>
        </nav>
      )}
    </header>
  );
}