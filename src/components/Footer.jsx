import React from 'react';

export default function Footer({ setCurrentTab }) {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Columna 1: Info de la Agencia */}
        <div className="space-y-3">
          <span className="text-white font-black tracking-wider text-base">
            INK & ART // AGENCIA
          </span>
          <p className="text-sm text-neutral-400">
            Estudio profesional de tatuajes. Arte exclusivo, personalizado y con los más altos estándares de bioseguridad en piel.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => setCurrentTab('home')} className="hover:text-red-500 transition-colors cursor-pointer">
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('portfolio')} className="hover:text-red-500 transition-colors cursor-pointer">
                Portafolio
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('blog')} className="hover:text-red-500 transition-colors cursor-pointer">
                Blog & Cuidados
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('booking')} className="hover:text-red-500 transition-colors cursor-pointer">
                Reservar Cita
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 3: Horarios */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Horarios de Atención</h4>
          <p className="text-sm text-neutral-400">
            Lunes a Sábado: <span className="text-white font-medium">10:00 AM - 8:00 PM</span>
          </p>
          <p className="text-sm text-neutral-400">
            Domingos: <span className="text-white font-medium">Solo con cita previa</span>
          </p>
        </div>

        {/* Columna 4: Ubicación / Redes */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contacto & Redes</h4>
          <p className="text-sm text-neutral-400">
            Atención directa y cotizaciones a través de nuestro sistema de reservas por WhatsApp.
          </p>
          <div className="pt-2 flex gap-3 text-xs text-neutral-300">
            <span className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">Instagram</span>
            <span className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">WhatsApp</span>
          </div>
        </div>

      </div>

      {/* Línea de Copyright inferior */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Ink & Art Agencia. Todos los derechos reservados.</p>
        <p>Diseñado con React, Vite & Tailwind CSS.</p>
      </div>
    </footer>
  );
}