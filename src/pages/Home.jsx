import React, { useState, useEffect } from 'react';

// Tus imágenes reales listas para el carrusel lateral
const CAROUSEL_IMAGES = [
  "https://i.ibb.co/sp6Z1c5y/Whats-App-Image-2026-09-10-at-7-58-53-PM.jpg",
  "https://i.ibb.co/35FZWmVj/Whats-App-Image-2026-09-10-at-7-55-14-PM.jpg",
  "https://i.ibb.co/zWfm6dSH/Whats-App-Image-2026-09-10-at-7-55-07-PM.jpg",
  "https://i.ibb.co/fd7Hy0vC/Whats-App-Image-2026-09-10-at-7-55-08-PM.jpg"
];

export default function Home({ setCurrentTab }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === CAROUSEL_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-16">
      
      {/* Banner Principal Estilo Split (Texto a un lado, Carrusel de fotos reales al otro) */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden mb-12 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Textos y Botones */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-red-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-neutral-900 px-4 py-1.5 rounded-full border border-red-900/50 shadow-lg mb-6">
              Estudio Residente & Artistas Guest
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              ARTE EXCLUSIVO EN <span className="text-red-500">PIEL Y TINTA</span>
            </h1>
            
            <p className="text-neutral-300 text-base sm:text-lg max-w-xl mb-8 font-light leading-relaxed">
              Diseños únicos y personalizados. Llevamos tu historia al siguiente nivel con los más altos estándares de calidad y seguridad.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
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
          </div>

          {/* Columna Derecha: Tarjeta con Carrusel Vertical de Tatuajes */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md h-[450px] sm:h-[500px] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-2">
              
              {CAROUSEL_IMAGES.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Trabajo de tatuaje ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  style={{ transition: 'opacity 1s ease-in-out, transform 6s ease-out' }}
                />
              ))}

              {/* Marco interno sutil */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Puntos indicadores del carrusel */}
            <div className="flex gap-2 mt-4">
              {CAROUSEL_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === currentImageIndex ? 'bg-red-500 w-6' : 'bg-neutral-700 w-2 hover:bg-neutral-500'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
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