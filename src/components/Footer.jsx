import React from 'react';

const LOGO_URL = "https://i.ibb.co/zhC53H6n/Recurso-1-300x.png";

export default function Footer({ setCurrentTab }) {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Columna 1: Info con Logo */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="ASU_ARTATTOO Logo" className="w-10 h-10 rounded-full object-cover border border-neutral-800 bg-neutral-900 p-1" />
            <span className="text-white font-black tracking-wider text-base">
              ASU_ARTATTOO
            </span>
          </div>
          <p className="text-sm text-neutral-400">
            Tattoo Studio profesional. Arte exclusivo, personalizado y con los más altos estándares de bioseguridad en piel.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setCurrentTab('home')} className="hover:text-white transition-colors cursor-pointer">Inicio</button></li>
            <li><button onClick={() => setCurrentTab('portfolio')} className="hover:text-white transition-colors cursor-pointer">Portafolio</button></li>
            <li><button onClick={() => setCurrentTab('blog')} className="hover:text-white transition-colors cursor-pointer">Blog & Cuidados</button></li>
            <li><button onClick={() => setCurrentTab('booking')} className="hover:text-white transition-colors cursor-pointer">Reservar Cita</button></li>
          </ul>
        </div>

        {/* Columna 3: Horarios */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Horarios de Atención</h4>
          <p className="text-sm text-neutral-400">Lunes a Sábado: <span className="text-white font-medium">10:00 AM - 8:00 PM</span></p>
          <p className="text-sm text-neutral-400">Domingos: <span className="text-white font-medium">Solo con cita previa</span></p>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contacto & Redes</h4>
          <p className="text-sm text-neutral-400">Atención directa y cotizaciones a través de nuestras redes oficiales.</p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
            <a 
              href="https://instagram.com/asu_artattoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://facebook.com/Asuartattoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors"
            >
              Facebook
            </a>
            <a 
              href="https://tiktok.com/@asu_artattoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors"
            >
              TikTok
            </a>
            <a 
              href="https://wa.me/message/XHARGLUYNYWZH1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-3 py-1.5 rounded-full transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
        <p>&copy; {new Date().getFullYear()} ASU_ARTATTOO Studio. Todos los derechos reservados.</p>
        <p>Diseñado con React, Vite & Tailwind CSS.</p>
      </div>
    </footer>
  );
}