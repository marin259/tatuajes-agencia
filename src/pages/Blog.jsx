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
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Filtrar artículos según la categoría seleccionada en el aside
  const filteredArticles = activeCategory === 'Todos' 
    ? blogArticles 
    : blogArticles.filter(art => art.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado Principal */}
        <div className="border-b border-neutral-900 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">
              Consejos & Cultura
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 text-white">
              BLOG & CUIDADOS
            </h1>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-normal leading-relaxed">
            Información profesional para proteger tu piel y entender el arte corporal de la mano de nuestros expertos.
          </p>
        </div>

        {/* Estructura Principal con Grid (Contenido + Aside) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Columna de Artículos (Ocupa 2 columnas en pantallas grandes) */}
          <div className="lg:col-span-2 space-y-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <article 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-900 hover:border-neutral-800 rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-6 items-center"
                >
                  {/* Imagen miniatura lateral */}
                  <div className="w-full sm:w-56 h-44 rounded-xl overflow-hidden bg-neutral-950 relative flex-shrink-0">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-neutral-800 z-10">
                      {article.category}
                    </span>
                  </div>

                  {/* Información del artículo */}
                  <div className="flex-1 flex flex-col justify-between space-y-3 w-full">
                    <div className="flex items-center gap-3 text-xs text-neutral-500 font-medium">
                      <span>0{index + 1}</span>
                      <span>—</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-neutral-400 text-sm font-normal leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="pt-2 flex items-center text-xs font-semibold text-neutral-300 group-hover:text-white gap-2">
                      <span>Leer historia completa</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-12 text-neutral-500 text-sm">
                No hay artículos en esta categoría.
              </div>
            )}
          </div>

          {/* ASIDE LATERAL (Barra de navegación y widgets de utilidad) */}
          <aside className="space-y-8 lg:sticky lg:top-8">
            
            {/* Widget de Categorías */}
            <div className="bg-neutral-900/50 border border-neutral-900 rounded-2xl p-6">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 pb-3 border-b border-neutral-800">
                Filtrar por Categoría
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {['Todos', 'Cuidados', 'Diseño', 'Consejos'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                      activeCategory === cat 
                        ? 'bg-red-600 text-white shadow-lg' 
                        : 'bg-neutral-950/60 text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-xs opacity-70">
                      {cat === 'Todos' ? blogArticles.length : blogArticles.filter(a => a.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Widget de Asesoría / CTA */}
            <div className="bg-gradient-to-br from-neutral-900 to-red-950/30 border border-neutral-900 rounded-2xl p-6 text-center space-y-4">
              <span className="text-red-500 text-xs font-semibold tracking-widest uppercase">
                Estudio Residente
              </span>
              <h4 className="text-white font-bold text-lg leading-snug">
                ¿Listo para tu próxima pieza de arte?
              </h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Agenda tu asesoría personalizada con nuestros artistas y plasma tu historia en la piel.
              </p>
              <a 
                href="#reservar" 
                className="inline-block w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-xl transition-colors shadow-lg"
              >
                Reservar Cita Ahora
              </a>
            </div>

          </aside>

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
                <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 uppercase font-semibold">
                  <span className="text-red-500">{selectedArticle.category}</span>
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
                <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                  <p className="text-neutral-200">
                    {selectedArticle.excerpt}
                  </p>
                  <p>
                    {selectedArticle.content}
                  </p>
                </div>

                {/* Pie de artículo minimalista */}
                <div className="pt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500 font-medium">
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