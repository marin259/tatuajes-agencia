import React, { useState } from 'react';

// Datos de ejemplo para los tatuajes de la agencia
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

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Filtrar los tatuajes según la categoría seleccionada
  const filteredTattoos = activeCategory === 'Todos'
    ? tattooItems
    : tattooItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase bg-red-950/40 px-3 py-1 rounded-full border border-red-900/50">
            Galería Exclusiva
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 text-white">
            NUESTRO PORTAFOLIO
          </h1>
          <p className="text-neutral-400 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            Explora las piezas maestras creadas por nuestros artistas residentes. Cada trazo cuenta una historia única.
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
              className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-xl"
            >
              {/* Imagen con altura fija y control de desbordamiento */}
              <div className="h-72 w-full overflow-hidden bg-neutral-950 relative">
                <img 
                  src={tattoo.image} 
                  alt={tattoo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-xs px-3 py-1 rounded-full border border-neutral-800">
                  {tattoo.category}
                </span>
              </div>

              {/* Información del Tatuaje */}
              <div className="p-6 relative -mt-16 bg-gradient-to-t from-neutral-900 via-neutral-900/90 to-transparent pt-8">
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-red-500 transition-colors">
                  {tattoo.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Artista: <span className="text-neutral-200 font-medium">{tattoo.artist}</span>
                </p>
                
                <div className="mt-4 pt-4 border-t border-neutral-800 flex justify-between items-center">
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