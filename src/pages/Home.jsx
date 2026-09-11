import React, { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  "https://i.ibb.co/sp6Z1c5y/Whats-App-Image-2026-09-10-at-7-58-53-PM.jpg",
  "https://i.ibb.co/35FZWmVj/Whats-App-Image-2026-09-10-at-7-55-14-PM.jpg",
  "https://i.ibb.co/zWfm6dSH/Whats-App-Image-2026-09-10-at-7-55-07-PM.jpg",
  "https://i.ibb.co/fd7Hy0vC/Whats-App-Image-2026-09-10-at-7-55-08-PM.jpg"
];

export default function Home({ setCurrentTab }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === BACKGROUND_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-16">
      
      {/* Banner / Hero Principal con Carrusel a todo color */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden mb-12 min-h-[550px] flex items-center justify-center">
        
        {/* Contenedor de las imágenes de fondo */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {BACKGROUND_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{ 
                backgroundImage: `url(${img})`,
                transition: 'opacity 1s ease-in-out, transform 5s ease-out'
              }}
            />
          ))}

          {/* Degradado lateral suave para que las letras resalten al centro pero los lados muestren el arte */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-neutral-950"></div>
          {/* Degradado vertical sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80"></div>
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          <span className="text-red-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-neutral-900/80 px-4 py-1.5 rounded-full border border-red-900/50 shadow-lg backdrop-blur-sm">
            Estudio Residente & Artistas Guest
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-6 text-white drop-shadow-md leading-tight">
            ARTE EXCLUSIVO EN <span className="text-red-500">PIEL Y TINTA</span>
          </h1>
          <p className="text-neutral-200 mt-4 max-w-xl mx-auto text-sm sm:text-base font-medium drop-shadow">
            Diseños únicos y personalizados. Llevamos tu historia al siguiente nivel con los más altos estándares de calidad y seguridad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentTab('booking')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-all cursor-pointer text-sm tracking-wide"
            >
              Reservar Cita Ahora &rarr;
            </button>
            <button
              onClick={() => setCurrentTab('portfolio')}
              className="bg-neutral-900/90 hover:bg-neutral-800 text-neutral-100 border border-neutral-700 font-bold px-8 py-3.5 rounded-xl backdrop-blur-sm transition-all cursor-pointer text-sm tracking-wide"
            >
              Ver Portafolio
            </button>
          </div>

          {/* Indicadores de puntos del carrusel */}
          <div className="mt-8 flex gap-2">
            {BACKGROUND_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  index === currentImageIndex ? 'bg-red-500 w-6 shadow-md' : 'bg-neutral-700 w-2 hover:bg-neutral-500'
                }`}
                aria-label={`Cambiar a slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Sección de Características / Por qué elegirnos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
            <div className="text-red-500 font-black text-3xl mb-2">01</div>
            <h3 className="text-white font-bold text-lg mb-2">Diseños a Medida</h3>
            <p className="text-neutral-400 text-sm">Cada pieza es creada exclusivamente para ti, adaptándose a la anatomía de tu cuerpo.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
            <div className="text-red-500 font-black text-3xl mb-2">02</div>
            <h3 className="text-white font-bold text-lg mb-2">Estándares Médicos</h3>
            <p className="text-neutral-400 text-sm">Materiales 100% descartables, esterilización de punta y máxima seguridad higiénica.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
            <div className="text-red-500 font-black text-3xl mb-2">03</div>
            <h3 className="text-white font-bold text-lg mb-2">Artistas Residentes</h3>
            <p className="text-neutral-400 text-sm">Especialistas en Realismo, Blackwork, Fine Line y Neo Tradicional con años de trayectoria.</p>
          </div>
        </div>
      </div>

    </div>
  );
}