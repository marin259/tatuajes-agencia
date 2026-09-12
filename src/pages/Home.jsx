import React, { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  "https://i.ibb.co/sp6Z1c5y/Whats-App-Image-2026-09-10-at-7-58-53-PM.jpg",
  "https://i.ibb.co/35FZWmVj/Whats-App-Image-2026-09-10-at-7-55-14-PM.jpg",
  "https://i.ibb.co/zWfm6dSH/Whats-App-Image-2026-09-10-at-7-55-07-PM.jpg",
  "https://i.ibb.co/fd7Hy0vC/Whats-App-Image-2026-09-10-at-7-55-08-PM.jpg",
  "https://i.ibb.co/rfx1kv6R/Whats-App-Image-2026-09-10-at-7-59-00-PM.jpg",
  "https://i.ibb.co/HWM6dyN/Whats-App-Image-2026-09-10-at-8-06-23-PM.jpg"
];

// Muestra rápida alineada con tus categorías reales del portafolio
const FEATURED_WORKS = [
  {
    title: "Arte Otaku & Trazos Limpios",
    category: "Anime",
    image: "https://i.ibb.co/sp6Z1c5y/Whats-App-Image-2026-09-10-at-7-58-53-PM.jpg"
  },
  {
    title: "Composiciones con Profundidad",
    category: "Surrealismo y Grises",
    image: "https://i.ibb.co/zWfm6dSH/Whats-App-Image-2026-09-10-at-7-55-07-PM.jpg"
  },
  {
    title: "Piezas de Gran Detalle",
    category: "Medianos",
    image: "https://i.ibb.co/35FZWmVj/Whats-App-Image-2026-09-10-at-7-55-14-PM.jpg"
  }
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
      
      {/* Banner / Hero Principal con Carrusel de Fondo Visible */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden mb-12 min-h-[600px] flex items-center justify-center">
        
        {/* Contenedor de las imágenes de fondo */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {BACKGROUND_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-65 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{ 
                backgroundImage: `url(${img})`,
                transition: 'opacity 1s ease-in-out, transform 5s ease-out'
              }}
            />
          ))}

          {/* Capa oscura equilibrada para que las fotos se aprecien nítidas pero el texto resalte perfecto */}
          <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          <span className="text-neutral-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-neutral-900/90 px-4 py-1.5 rounded-full border border-neutral-800 shadow-lg">
            Estudio Residente & Artistas Guest
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-6 text-white drop-shadow-md leading-tight">
            ARTE EXCLUSIVO EN <span className="text-neutral-400">PIEL Y TINTA</span>
          </h1>
          <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-sm sm:text-base font-medium drop-shadow">
            Diseños únicos y personalizados. Llevamos tu historia al siguiente nivel con los más altos estándares de calidad y seguridad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentTab('booking')}
              className="bg-neutral-100 hover:bg-white text-neutral-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer text-sm tracking-wide"
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
                  index === currentImageIndex ? 'bg-neutral-200 w-6 shadow-md' : 'bg-neutral-700 w-2 hover:bg-neutral-500'
                }`}
                aria-label={`Cambiar a slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Sección de Características Minimalista con Círculos y Grises */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 text-neutral-400 shadow-inner">
              <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-base mb-2 tracking-wide">Diseños a Medida</h3>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">Cada pieza creada exclusivamente para la anatomía de tu cuerpo.</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 text-neutral-400 shadow-inner">
              <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-base mb-2 tracking-wide">Estándares Médicos</h3>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">Materiales 100% descartables y máxima seguridad higiénica.</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 text-neutral-400 shadow-inner">
              <svg className="w-8 h-8 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-base mb-2 tracking-wide">Artistas Residentes</h3>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">Especialistas con amplia trayectoria en diferentes estilos.</p>
          </div>

        </div>
      </div>

      {/* Muestra Rápida del Portafolio con Categorías Reales */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <span className="text-neutral-400 text-xs font-bold tracking-widest uppercase">Galería Exclusiva</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Explora Nuestros Estilos</h2>
          </div>
          <button
            onClick={() => setCurrentTab('portfolio')}
            className="text-sm font-semibold text-neutral-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer group"
          >
            Ver portafolio completo 
            <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_WORKS.map((work, index) => (
            <div 
              key={index} 
              onClick={() => setCurrentTab('portfolio')}
              className="group relative h-80 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer"
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  {work.category}
                </span>
                <h3 className="text-white font-bold text-lg group-hover:text-neutral-200 transition-colors">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}