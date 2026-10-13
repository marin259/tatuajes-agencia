import React, { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  "https://i.ibb.co/sp6Z1c5y/Whats-App-Image-2026-09-10-at-7-58-53-PM.jpg",
  "https://i.ibb.co/35FZWmVj/Whats-App-Image-2026-09-10-at-7-55-14-PM.jpg",
  "https://i.ibb.co/zWfm6dSH/Whats-App-Image-2026-09-10-at-7-55-07-PM.jpg",
  "https://i.ibb.co/fd7Hy0vC/Whats-App-Image-2026-09-10-at-7-55-08-PM.jpg",
  "https://i.ibb.co/rfx1kv6R/Whats-App-Image-2026-09-10-at-7-59-00-PM.jpg",
  "https://i.ibb.co/HWM6dyN/Whats-App-Image-2026-09-10-at-8-06-23-PM.jpg"
];

// Secciones principales interactivas inspiradas en la fluidez de Profile
const STUDIO_SECTIONS = [
  {
    number: "01",
    title: "DISEÑOS A MEDIDA",
    subtitle: "Arte Exclusivo en Piel",
    description: "Cada pieza creada exclusivamente para la anatomía de tu cuerpo, adaptando tus ideas con un estilo único y profesional.",
    image: "https://i.ibb.co/sp6Z1c5y/Whats-App-Image-2026-09-10-at-7-58-53-PM.jpg"
  },
  {
    number: "02",
    title: "ESTÁNDARES MÉDICOS",
    subtitle: "Higiene y Seguridad Absoluta",
    description: "Materiales 100% descartables, esterilización rigurosa y máxima seguridad para que tu experiencia sea totalmente confiable.",
    image: "https://i.ibb.co/35FZWmVj/Whats-App-Image-2026-09-10-at-7-55-14-PM.jpg"
  },
  {
    number: "03",
    title: "ARTISTAS RESIDENTES",
    subtitle: "Talento y Trayectoria",
    description: "Especialistas con amplia experiencia en anime, surrealismo, grises y fineline listos para llevar tu diseño al siguiente nivel.",
    image: "https://i.ibb.co/zWfm6dSH/Whats-App-Image-2026-09-10-at-7-55-07-PM.jpg"
  }
];

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
  const [activeSection, setActiveSection] = useState(0);

  // Carrusel automático para el banner principal
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
      
      {/* 1. HERO PRINCIPAL CON CARRUSEL */}
      <div className="relative bg-neutral-950 border-b border-neutral-800 overflow-hidden mb-12 min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {BACKGROUND_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-65 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          <span className="text-red-400 text-xs sm:text-sm font-bold tracking-widest uppercase bg-neutral-900/90 px-4 py-1.5 rounded-full border border-red-950 shadow-lg">
            Estudio Residente & Artistas Guest
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-6 text-white drop-shadow-md leading-tight">
            ARTE EXCLUSIVO EN <span className="text-red-500">PIEL Y TINTA</span>
          </h1>
          <p className="text-neutral-300 mt-4 max-w-xl mx-auto text-sm sm:text-base font-medium drop-shadow">
            Diseños únicos y personalizados. Llevamos tu historia al siguiente nivel con los más altos estándares de calidad y seguridad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentTab('booking')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-red-900/30 transition-all cursor-pointer text-sm tracking-wide"
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

          <div className="mt-8 flex gap-2">
            {BACKGROUND_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  index === currentImageIndex ? 'bg-red-500 w-6 shadow-md' : 'bg-neutral-700 w-2 hover:bg-neutral-500'
                }`}
                aria-label={`Cambiar slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN INTERACTIVA ESTILO "PROFILE" (Navegación lateral de pilares) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-neutral-900">
        <div className="text-center mb-12">
          <span className="text-red-500 text-xs font-bold tracking-widest uppercase">Nuestra Filosofía</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">¿CÓMO TRABAJAMOS EN EL ESTUDIO?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Menú lateral numerado */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {STUDIO_SECTIONS.map((section, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSection(idx)}
                className={`text-left px-6 py-5 rounded-2xl border transition-all cursor-pointer flex items-center gap-6 ${
                  activeSection === idx 
                    ? 'bg-neutral-900 border-red-600/60 shadow-lg shadow-red-950/20 text-white' 
                    : 'bg-neutral-950/40 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                }`}
              >
                <span className={`text-xl font-black ${activeSection === idx ? 'text-red-500' : 'text-neutral-600'}`}>
                  {section.number}
                </span>
                <div>
                  <h3 className="font-bold text-base tracking-wide">{section.title}</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{section.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Tarjeta de visualización dinámica de la sección activa */}
          <div className="lg:col-span-7">
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl flex items-end">
              <img 
                src={STUDIO_SECTIONS[activeSection].image} 
                alt={STUDIO_SECTIONS[activeSection].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              
              <div className="relative z-10 p-8">
                <span className="text-red-500 text-xs font-bold tracking-widest uppercase">
                  Pilar {STUDIO_SECTIONS[activeSection].number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-3">
                  {STUDIO_SECTIONS[activeSection].title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  {STUDIO_SECTIONS[activeSection].description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. MUESTRA RÁPIDA DEL PORTAFOLIO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <span className="text-red-500 text-xs font-bold tracking-widest uppercase">Galería Exclusiva</span>
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
              className="group relative h-80 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer shadow-lg"
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-red-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  {work.category}
                </span>
                <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors">
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