import React, { useState, useEffect } from 'react';

// Lista de imágenes para el carrusel de fondo (puedes reemplazar estas URLs con tus propias fotos en la nube)
const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1598371839606-f18c660f6448?q=80&w=1600&auto=format&fit=crop", // Estudio / Tatuador
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1600&auto=format&fit=crop", // Tatuaje en proceso
  "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1600&auto=format&fit=crop"    // Ambiente del estudio
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-16">
      
      {/* Banner / Hero Principal con Carrusel */}
      <div className="relative bg-neutral-900 border-b border-neutral-800 overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          
          {/* Mapeo de las imágenes del carrusel con desvanecimiento (fade) */}
          {BACKGROUND_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-105 filter grayscale contrast-125 ${
                index === currentImageIndex ? 'opacity-25' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          {/* Degradado oscuro para asegurar la legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center flex flex-col items-center">
          <span className="text-red-500 text-xs sm:text-sm font-bold tracking-widest uppercase bg-red-950/60 px-4 py-1.5 rounded-full border border-red-900/60 shadow-lg">
            Estudio Residente & Artistas Guest
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-6 text-white leading-tight">
            ARTE EXCLUSIVO EN <span className="text-red-600">PIEL Y TINTA</span>
          </h1>
          <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-sm sm:text-base font-normal">
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
              className="bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-bold px-8 py-3.5 rounded-xl transition-all cursor-pointer text-sm tracking-wide"
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
                  index === currentImageIndex ? 'bg-red-600 w-6' : 'bg-neutral-700 w-2 hover:bg-neutral-500'
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