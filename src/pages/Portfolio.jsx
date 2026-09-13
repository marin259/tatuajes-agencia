import React, { useState } from 'react';

const tattooItems = [
  // --- ANIME ---
  {
    id: 1,
    title: 'Pieza Anime Estilo 1',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/C3yX9175/A-1.jpg',
    description: 'Trabajo exclusivo en la categoría de anime con alto contraste y colores vibrantes.',
    likes: 758,
    comments: 8,
    date: '11 de noviembre de 2025'
  },
  {
    id: 2,
    title: 'Pieza Anime Estilo 2',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/tpBk8dhx/A-2.jpg',
    description: 'Tatuaje personalizado inspirado en personajes icónicos del anime.',
    likes: 542,
    comments: 12,
    date: '15 de octubre de 2025'
  },
  {
    id: 3,
    title: 'Pieza Anime Estilo 3',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/WpkMPqwf/A-3.jpg',
    description: 'Diseño en piel con definición de líneas finas y saturación impecable.',
    likes: 920,
    comments: 19,
    date: '3 de septiembre de 2025'
  },
  {
    id: 4,
    title: 'Pieza Anime Estilo 4',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/cScC9CNr/A-4.jpg',
    description: 'Obra de arte en tinta adaptada a la anatomía con gran detalle visual.',
    likes: 410,
    comments: 5,
    date: '20 de agosto de 2025'
  },
  {
    id: 5,
    title: 'Pieza Anime Estilo 5',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/7JZQW30S/A-5.jpg',
    description: 'Composición de anime con sombreados limpios y expresión fiel al diseño.',
    likes: 630,
    comments: 14,
    date: '12 de julio de 2025'
  },
  {
    id: 6,
    title: 'Pieza Anime Estilo 6',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/dJ3xvxm3/A-6.jpg',
    description: 'Tinta a todo color reflejando la esencia del estilo otaku profesional.',
    likes: 815,
    comments: 21,
    date: '30 de junio de 2025'
  },
  {
    id: 7,
    title: 'Pieza Anime Estilo 7',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/FbBS2V82/A-7.jpg',
    description: 'Detalle minucioso en líneas y paleta de colores vivos.',
    likes: 390,
    comments: 4,
    date: '18 de mayo de 2025'
  },
  {
    id: 8,
    title: 'Pieza Anime Estilo 8',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/xK3SZh9G/A-8.jpg',
    description: 'Trabajo dinámico de personajes con acabados de alta calidad.',
    likes: 720,
    comments: 11,
    date: '02 de abril de 2025'
  },
  {
    id: 9,
    title: 'Pieza Anime Estilo 9',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/RpB7740D/A-9.jpg',
    description: 'Tatuaje de gran impacto visual y fluidez en el diseño.',
    likes: 950,
    comments: 30,
    date: '14 de marzo de 2025'
  },
  {
    id: 10,
    title: 'Pieza Anime Estilo 10',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/xt0bJzGc/A-10.jpg',
    description: 'Línea y color perfectamente integrados en la piel.',
    likes: 480,
    comments: 7,
    date: '22 de febrero de 2025'
  },
  {
    id: 11,
    title: 'Pieza Anime Estilo 11',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/C33MyfZv/A-11.jpg',
    description: 'Estilo de animación llevado al arte corporal con total precisión.',
    likes: 670,
    comments: 9,
    date: '10 de enero de 2025'
  },
  {
    id: 12,
    title: 'Pieza Anime Estilo 12',
    category: 'Anime',
    artist: 'asu_arttattoo',
    image: 'https://i.ibb.co/35n4fDHJ/A-12.jpg',
    description: 'Cierre de galería anime con una pieza magistral y personalizada.',
    likes: 890,
    comments: 25,
    date: '05 de enero de 2025'
  },
];

const categories = ['Todos', 'Minimalistas', 'Medianos', 'Surrealismo y Grises', 'Anime'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});

  const filteredTattoos = activeCategory === 'Todos'
    ? tattooItems
    : tattooItems.filter(item => item.category === activeCategory);

  const toggleLike = (id) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        
        {/* Perfil Header Estilo Instagram */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-neutral-800">
          <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-neutral-700 bg-neutral-900 flex-shrink-0">
            <img 
              src="https://i.ibb.co/C3yX9175/A-1.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-grow">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <h1 className="text-xl sm:text-2xl font-light">asu_arttattoo</h1>
              <button className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm px-4 py-1.5 rounded-lg transition">
                Enviar mensaje
              </button>
            </div>
            <div className="flex gap-6 mb-3 text-sm sm:text-base">
              <div><span className="font-bold">{tattooItems.length}</span> publicaciones</div>
              <div><span className="font-bold">15.4K</span> seguidores</div>
              <div><span className="font-bold">420</span> siguiendo</div>
            </div>
            <div>
              <p className="font-semibold text-sm">Estudio de Tatuajes Profesional</p>
              <p className="text-neutral-400 text-sm mt-0.5">🎨 Diseños personalizados y exclusivos.<br/>📍 Anime, Surrealismo, Minimalistas y más.<br/>👇 ¡Cotiza tu pieza abajo!</p>
            </div>
          </div>
        </div>

        {/* Categorías (Pestañas estilo barra superior) */}
        <div className="flex overflow-x-auto gap-3 py-4 no-scrollbar border-b border-neutral-800 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                activeCategory === category
                  ? 'bg-white text-black font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Publicaciones (Estilo Instagram Grid 3 columnas) */}
        <div className="grid grid-cols-3 gap-1 sm:gap-4">
          {filteredTattoos.map((tattoo) => (
            <div 
              key={tattoo.id}
              onClick={() => setSelectedPost(tattoo)}
              className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer"
            >
              <img 
                src={tattoo.image} 
                alt={tattoo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              {/* Overlay hover con Likes y Comentarios */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6 text-white font-bold text-sm">
                <div className="flex items-center gap-1.5">
                  ❤️ {tattoo.likes + (likedPosts[tattoo.id] ? 1 : 0)}
                </div>
                <div className="flex items-center gap-1.5">
                  💬 {tattoo.comments}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Vista Detallada tipo Publicación de Instagram */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="bg-black border border-neutral-800 rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative shadow-2xl">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 z-30 text-white bg-black/60 hover:bg-neutral-800 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold"
            >
              ✕
            </button>

            {/* Imagen Izquierda */}
            <div className="md:w-3/5 bg-neutral-950 flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>

            {/* Panel de Comentarios / Detalles Derecha */}
            <div className="md:w-2/5 flex flex-col bg-neutral-950 border-t md:border-t-0 md:border-l border-neutral-800 max-h-[50vh] md:max-h-auto">
              
              {/* Cabecera del Post */}
              <div className="flex items-center gap-3 p-4 border-b border-neutral-800">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-800">
                  <img src="https://i.ibb.co/C3yX9175/A-1.jpg" alt="Avatar" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <p className="text-sm font-semibold">{selectedPost.artist}</p>
                  <p className="text-xs text-neutral-400">{selectedPost.category}</p>
                </div>
              </div>

              {/* Descripción / Caption */}
              <div className="p-4 flex-grow overflow-y-auto space-y-4 text-sm">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-800 flex-shrink-0">
                    <img src="https://i.ibb.co/C3yX9175/A-1.jpg" alt="Avatar" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <p><span className="font-semibold mr-2">{selectedPost.artist}</span>{selectedPost.description}</p>
                    <span className="text-xs text-neutral-500 mt-1 block">{selectedPost.date}</span>
                  </div>
                </div>

                <div className="border-t border-neutral-900 pt-3 text-neutral-400 text-xs">
                  <p className="font-semibold text-neutral-300 mb-1">{selectedPost.title}</p>
                  <p>Categoría: {selectedPost.category} | Estudio Residente</p>
                </div>
              </div>

              {/* Acciones (Likes, Comentarios) y Cotización */}
              <div className="p-4 border-t border-neutral-800 bg-black">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4 text-xl">
                    <button 
                      onClick={() => toggleLike(selectedPost.id)} 
                      className="cursor-pointer hover:scale-110 transition"
                    >
                      {likedPosts[selectedPost.id] ? '❤️' : '🤍'}
                    </button>
                    <span className="cursor-pointer">💬</span>
                    <span className="cursor-pointer">📤</span>
                  </div>
                  <span className="text-xs text-neutral-400">
                    {selectedPost.likes + (likedPosts[selectedPost.id] ? 1 : 0)} Me gusta
                  </span>
                </div>

                <button 
                  onClick={() => alert(`Iniciando cotización para: ${selectedPost.title}`)}
                  className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-sm transition cursor-pointer shadow-lg shadow-red-900/30"
                >
                  Cotizar este diseño
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}