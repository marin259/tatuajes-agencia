import React, { useState, useEffect } from 'react';

// Tus imágenes reales configuradas para el carrusel de fondo
const BACKGROUND_IMAGES = [
  "https://i.ibb.co/sp6Z1c5y/Whats-App-Image-2026-09-10-at-7-58-53-PM.jpg",
  "https://i.ibb.co/35FZWmVj/Whats-App-Image-2026-09-10-at-7-55-14-PM.jpg",
  "https://i.ibb.co/zWfm6dSH/Whats-App-Image-2026-09-10-at-7-55-07-PM.jpg",
  "https://i.ibb.co/fd7Hy0vC/Whats-App-Image-2026-09-10-at-7-55-08-PM.jpg"
];

export default function Home({ setCurrentTab }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efecto para rotar las imágenes del fondo automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === BACKGROUND_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-neutral-950">
      
      {/* 1. Fondo de pantalla completo con tus imágenes (A todo color, alta opacidad) */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-70 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url(${img})`,
            // Ajustamos para que la imagen no se distorsione en pantallas muy anchas
            backgroundPosition: 'center center' 
          }}
        />
      ))}

      {/* 2. Degradado inteligente (Overlay): Más oscuro en el centro para el texto, se aclara a los lados para mostrar el arte */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_50%,rgba(10,10,10,0.95)_100%)]" />

      {/* 3. Contenido Principal del Banner */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center py-24 sm:py-32">
        
        {/* Badge superior */}
        <span className="text-red-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-neutral-900/60 px-4 py-1.5 rounded-full border border-red-900/50 shadow-lg backdrop-blur-sm mb-6">
          Estudio Residente & Artistas Guest
        </span>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 uppercase leading-none drop-shadow-xl">
          ARTE EXCLUSIVO EN <span className="text-red-500">PIEL Y TINTA</span>
        </h1>

        {/* Descripción */}
        <p className="text-neutral-100 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-lg">
          Diseños únicos y personalizados. Llevamos tu historia al siguiente nivel con los más altos estándares de calidad y seguridad.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <button
            onClick={() => setCurrentTab('booking')}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-2xl shadow-red-900/60 transition-all transform hover:-translate-y-1 cursor-pointer text-sm tracking-wide"
          >
            Reservar Cita Ahora →
          </button>
          
          <button
            onClick={() => setCurrentTab('portfolio')}
            className="px-8 py-4 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-100 border border-neutral-700 hover:border-neutral-500 font-bold rounded-xl backdrop-blur-sm transition-all transform hover:-translate-y-1 cursor-pointer text-sm tracking-wide"
          >
            Ver Portafolio
          </button>
        </div>

      </div>

      {/* 4. Indicadores de puntos del carrusel (Abajo) */}
      <div className="absolute bottom-10 z-10 flex gap-3">
        {BACKGROUND_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all shadow-lg ${
              index === currentImageIndex ? 'bg-red-500 w-8' : 'bg-neutral-400 hover:bg-white'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}