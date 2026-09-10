import React, { useState } from 'react';

const tattooItems = [
  {
    id: 1,
    title: 'Sleeve Realista Geométrico',
    category: 'Realismo',
    artist: 'Carlos "Ink" Ruiz',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Dragon Blackwork Torso',
    category: 'Blackwork',
    artist: 'Valeria Cova',
    image: 'https://images.unsplash.com/photo-1598371839606-f18c660f6448?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Micro-Realismo Botánico',
    category: 'Fine Line',
    artist: 'Alejandro M.',
    image: 'https://images.unsplash.com/photo-1562965903-d744b7d52f66?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Samurái Neo Tradicional',
    category: 'Neo Tradicional',
    artist: 'Carlos "Ink" Ruiz',
    image: 'https://images.unsplash.com/photo-1568515054352-8c7965955627?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Retrato Realista en Antebrazo',
    category: 'Realismo',
    artist: 'Carlos "Ink" Ruiz',
    image: 'https://images.unsplash.com/photo-1590246814833-6715f58c4fcb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Mandala Blackwork Integral',
    category: 'Blackwork',
    artist: 'Valeria Cova',
    image: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop',
  },
];

const categories = ['Todos', 'Realismo', 'Blackwork', 'Fine Line', 'Neo Tradicional'];

export default function Portfolio({ setCurrentTab }) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredTattoos = activeCategory === 'Todos'
    ? tattooItems
    : tattooItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-16">
      
    {/* Banner / Hero Principal */}
      <div className="relative bg-neutral-900 border-b border-neutral-800 overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598371839606-f18c660f6448?q=80&w=1600&auto=format&fit=crop" 
            alt="Tattoo Studio Background" 
            className="w-full h-full object-cover object-center opacity-20 scale-105 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center flex flex-col items-center">
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
              onClick={() => setCurrentTab && setCurrentTab('booking')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-all cursor-pointer text-sm tracking-wide"
            >
              Reservar Cita Ahora &rarr;
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Galería */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            NUESTRO PORTAFOLIO
          </h2>
          <p className="text-neutral-400 mt-1 text-sm">
            Explora las piezas maestras de nuestros artistas.
          </p>
        </div>

        {/* Filtros de Categorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Tatuajes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTattoos.map((tattoo) => (
            <div 
              key={tattoo.id}
              className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="h-72 w-full overflow-hidden bg-neutral-950 relative">
                <img 
                  src={tattoo.image} 
                  alt={tattoo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-xs px-3 py-1 rounded-full border border-neutral-800 z-10">
                  {tattoo.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between bg-neutral-900">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-red-500 transition-colors">
                    {tattoo.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    Artista: <span className="text-neutral-200 font-medium">{tattoo.artist}</span>
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-between items-center">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">Estudio Residente</span>
                  <span className="text-xs font-semibold text-red-500 group-hover:translate-x-1 transition-transform cursor-pointer">
                    Ver detalles &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}