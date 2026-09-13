import React, { useState } from 'react';

// Artículos de ejemplo sobre cuidados y cultura del tatuaje
const blogArticles = [
  {
    id: 1,
    title: 'Guía Definitiva de Post-Cuidado: Las Primeras 2 Semanas',
    category: 'Cuidados',
    readTime: '4 min lectura',
    date: 'Agosto 2026',
    excerpt: 'Todo lo que necesitas saber sobre la limpieza, hidratación y protección de tu nuevo tatuaje para garantizar una cicatrización impecable.',
    content: 'Durante las primeras 48 horas, mantén el apósito protector según las indicaciones de tu artista. Al retirarlo, lava suavemente con agua tibia y jabón neutro sin fragancia. Aplica una capa muy fina de crema recomendada de 2 a 3 días y evita la exposición directa al sol, piscinas o baños de inmersión prolongados.',
    image: 'https://images.unsplash.com/photo-1598371839606-f18c660f6448?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '¿Cómo Elegir el Estilo Perfecto para tu Primer Tatuaje?',
    category: 'Diseño',
    readTime: '6 min lectura',
    date: 'Agosto 2026',
    excerpt: 'Desde Fine Line hasta Blackwork y Realismo: descubre qué corriente artística se adapta mejor a tu personalidad y tipo de piel.',
    content: 'La elección del estilo depende tanto de la zona del cuerpo como del nivel de detalle que buscas. Los diseños de línea fina (Fine Line) ofrecen elegancia minimalista, mientras que el Blackwork y el Realismo requieren contrastes más profundos y mayor tiempo de sesión.',
    image: 'https://images.unsplash.com/photo-1562965903-d744b7d52f66?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Mitos y Realidades sobre el Retoque de Tatuajes',
    category: 'Consejos',
    readTime: '3 min lectura',
    date: 'Julio 2026',
    excerpt: 'Descubre por qué algunos tatuajes necesitan una sesión de mantenimiento y cómo saber si el tuyo requiere un repaso de tinta.',
    content: 'Un tatuaje bien hecho sana por completo en un mes. Sin embargo, zonas de fricción constante como manos, pies o codos pueden perder pigmento durante la fase de exfoliación natural de la piel. Los retoques aseguran que el contraste y la saturación se mantengan intactos por años.',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado Estilo Editorial */}
        <div className="border-b border-neutral-900 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-red-500 text-xs font-mono tracking-widest uppercase">
              // Revista & Cultura
            </span>
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight mt-2 text-white font-serif">
              Blog & Cuidados
            </h1>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Artículos seleccionados sobre el cuidado de tu piel y la cultura detrás de cada pieza de tinta.
          </p>
        </div>

        {/* Lista de Artículos en formato Editorial / Horizontal */}
        <div className="space-y-6">
          {blogArticles.map((article, index) => (
            <article 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-900 hover:border-neutral-800 rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-6 md:gap-8 items-center"
            >
              {/* Imagen miniatura lateral */}
              <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden bg-neutral-950 relative flex-shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-neutral-800">
                  {article.category}
                </span>
              </div>

              {/* Información del artículo */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                  <span>0{index + 1}</span>
                  <span>—</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-medium text-white group-hover:text-red-500 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-2 flex items-center text-xs font-medium text-neutral-300 group-hover:text-white gap-2">
                  <span>Leer historia completa</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal de Lectura Minimalista */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            <div className="bg-neutral-950 border border-neutral-900 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col relative shadow-2xl overflow-hidden my-auto">
              
              {/* Botón Cerrar Minimalista */}
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-light transition cursor-pointer"
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              {/* Contenido scrolleable del artículo */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
                
                {/* Metadatos superiores */}
                <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 uppercase">
                  <span className="text-red-500 font-semibold">{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                {/* Título Principal */}
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                  {selectedArticle.title}
                </h2>

                {/* Imagen del artículo */}
                {selectedArticle.image && (
                  <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-900 my-4 relative">
                    <img 
                      src={selectedArticle.image} 
                      alt={selectedArticle.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Texto del artículo / Cuerpo */}
                <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                  <p className="text-neutral-200 font-normal">
                    {selectedArticle.excerpt}
                  </p>
                  <p>
                    {selectedArticle.content}
                  </p>
                </div>

                {/* Pie de artículo minimalista */}
                <div className="pt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
                  <span>Escrito por asu_arttattoo</span>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="hover:text-white transition cursor-pointer underline"
                  >
                    Volver al blog
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}