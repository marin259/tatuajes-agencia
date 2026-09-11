import React, { useState } from 'react';

const tattooItems = [
  // --- ANIME ---
  {
    id: 1,
    title: 'Pieza Anime Estilo 1',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/C3yX9175/A-1.jpg',
    description: 'Trabajo exclusivo en la categoría de anime con alto contraste y colores vibrantes.'
  },
  {
    id: 2,
    title: 'Pieza Anime Estilo 2',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/tpBk8dhx/A-2.jpg',
    description: 'Tatuaje personalizado inspirado en personajes icónicos del anime.'
  },
  {
    id: 3,
    title: 'Pieza Anime Estilo 3',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/WpkMPqwf/A-3.jpg',
    description: 'Diseño en piel con definición de líneas finas y saturación impecable.'
  },
  {
    id: 4,
    title: 'Pieza Anime Estilo 4',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/cScC9CNr/A-4.jpg',
    description: 'Obra de arte en tinta adaptada a la anatomía con gran detalle visual.'
  },
  {
    id: 5,
    title: 'Pieza Anime Estilo 5',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/7JZQW30S/A-5.jpg',
    description: 'Composición de anime con sombreados limpios y expresión fiel al diseño.'
  },
  {
    id: 6,
    title: 'Pieza Anime Estilo 6',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/dJ3xvxm3/A-6.jpg',
    description: 'Tinta a todo color reflejando la esencia del estilo otaku profesional.'
  },
  {
    id: 7,
    title: 'Pieza Anime Estilo 7',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/FbBS2V82/A-7.jpg',
    description: 'Detalle minucioso en líneas y paleta de colores vivos.'
  },
  {
    id: 8,
    title: 'Pieza Anime Estilo 8',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/xK3SZh9G/A-8.jpg',
    description: 'Trabajo dinámico de personajes con acabados de alta calidad.'
  },
  {
    id: 9,
    title: 'Pieza Anime Estilo 9',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/RpB7740D/A-9.jpg',
    description: 'Tatuaje de gran impacto visual y fluidez en el diseño.'
  },
  {
    id: 10,
    title: 'Pieza Anime Estilo 10',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/xt0bJzGc/A-10.jpg',
    description: 'Línea y color perfectamente integrados en la piel.'
  },
  {
    id: 11,
    title: 'Pieza Anime Estilo 11',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/C33MyfZv/A-11.jpg',
    description: 'Estilo de animación llevado al arte corporal con total precisión.'
  },
  {
    id: 12,
    title: 'Pieza Anime Estilo 12',
    category: 'Anime',
    artist: 'Estudio Residente',
    image: 'https://i.ibb.co/35n4fDHJ/A-12.jpg',
    description: 'Cierre de galería anime con una pieza magistral y personalizada.'
  },
];

// Categorías oficiales de tu estudio
const categories = ['Todos', 'Minimalistas', 'Medianos', 'Surrealismo y Grises', 'Anime'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedTattoo, setSelectedTattoo] = useState(null);

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
              onClick={() => setSelectedTattoo(tattoo)}
              className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-xl flex flex-col cursor-pointer"
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
                  <span className="text-xs font-semibold text-red-500 group-hover:translate-x-1 transition-transform">
                    Ver detalles &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Lightbox para ver la imagen ampliada y detalles */}
      {selectedTattoo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedTattoo(null)}
              className="absolute top-4 right-4 z-20 bg-neutral-950/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer font-bold text-lg"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-72 md:h-full bg-neutral-950 flex items-center justify-center">
                <img 
                  src={selectedTattoo.image} 
                  alt={selectedTattoo.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <span className="bg-red-950/60 text-red-400 text-xs px-3 py-1 rounded-full border border-red-900/50 uppercase tracking-wider font-semibold">
                    {selectedTattoo.category}
                  </span>
                  <h2 className="text-2xl font-black text-white mt-3">{selectedTattoo.title}</h2>
                  <p className="text-sm text-neutral-400 mt-1">Artista: <strong className="text-neutral-200">{selectedTattoo.artist}</strong></p>
                  
                  <p className="text-neutral-300 text-sm mt-6 leading-relaxed">
                    {selectedTattoo.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <button 
                    onClick={() => setSelectedTattoo(null)}
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors cursor-pointer text-sm shadow-lg shadow-red-900/30"
                  >
                    Cotizar un diseño similar
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}