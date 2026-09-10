import React, { useState } from 'react';

// Artículos de ejemplo sobre cuidados y cultura del tatuaje
const blogArticles = [
  {
    id: 1,
    title: 'Guía Definitiva de Post-Cuidado: Las Primeras 2 Semana',
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase bg-red-950/40 px-3 py-1 rounded-full border border-red-900/50">
            Consejos & Cultura Inktag
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 text-white">
            BLOG & CUIDADOS
          </h1>
          <p className="text-neutral-400 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            Información profesional para proteger tu piel y entender el arte corporal de la mano de nuestros expertos.
          </p>
        </div>

        {/* Modal de Lectura si se selecciona un artículo */}
        {selectedArticle && (
          <div className="mb-12 bg-neutral-900 border border-red-900/50 rounded-2xl p-6 sm:p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              Cerrar &times;
            </button>
            <span className="text-red-500 text-xs font-bold tracking-widest uppercase">
              {selectedArticle.category} &bull; {selectedArticle.date}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              {selectedArticle.title}
            </h2>
            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg">
              {selectedArticle.content}
            </p>
          </div>
        )}

        {/* Cuadrícula de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <div 
              key={article.id}
              className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="h-52 w-full overflow-hidden bg-neutral-950 relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <span className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-xs px-3 py-1 rounded-full border border-neutral-800">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center text-xs text-neutral-500 mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="w-full mt-4 bg-neutral-950 hover:bg-red-600 text-neutral-200 hover:text-white border border-neutral-800 hover:border-red-600 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer"
                >
                  Leer Artículo Completo
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}