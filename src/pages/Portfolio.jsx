import React, { useState, useEffect } from 'react';

const tattooItems = [
  // --- ANIME ---
  {
    id: 1,
    title: 'Pieza Anime Estilo 1',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/C3yX9175/A-1.jpg',
      'https://i.ibb.co/tpBk8dhx/A-2.jpg',
      'https://i.ibb.co/WpkMPqwf/A-3.jpg'
    ],
    description: 'Trabajo exclusivo en la categoría de anime con alto contraste y colores vibrantes. Desliza para ver más ángulos.',
    date: '11 de noviembre de 2025'
  },
  {
    id: 2,
    title: 'Pieza Anime Estilo 2',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/tpBk8dhx/A-2.jpg',
      'https://i.ibb.co/cScC9CNr/A-4.jpg'
    ],
    description: 'Tatuaje personalizado inspirado en personajes icónicos del anime.',
    date: '15 de octubre de 2025'
  },
  {
    id: 3,
    title: 'Pieza Anime Estilo 3',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/WpkMPqwf/A-3.jpg',
      'https://i.ibb.co/7JZQW30S/A-5.jpg',
      'https://i.ibb.co/dJ3xvxm3/A-6.jpg'
    ],
    description: 'Diseño en piel con definición de líneas finas y saturación impecable.',
    date: '3 de septiembre de 2025'
  },
  {
    id: 4,
    title: 'Pieza Anime Estilo 4',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/cScC9CNr/A-4.jpg',
      'https://i.ibb.co/FbBS2V82/A-7.jpg'
    ],
    description: 'Obra de arte en tinta adaptada a la anatomía con gran detalle visual.',
    date: '20 de agosto de 2025'
  },
  {
    id: 5,
    title: 'Pieza Anime Estilo 5',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/7JZQW30S/A-5.jpg',
      'https://i.ibb.co/xK3SZh9G/A-8.jpg'
    ],
    description: 'Composición de anime con sombreados limpios y expresión fiel al diseño.',
    date: '12 de julio de 2025'
  },
  {
    id: 6,
    title: 'Pieza Anime Estilo 6',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/dJ3xvxm3/A-6.jpg',
      'https://i.ibb.co/RpB7740D/A-9.jpg'
    ],
    description: 'Tinta a todo color reflejando la esencia del estilo otaku profesional.',
    date: '30 de junio de 2025'
  },
  {
    id: 7,
    title: 'Pieza Anime Estilo 7',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/FbBS2V82/A-7.jpg',
      'https://i.ibb.co/xt0bJzGc/A-10.jpg'
    ],
    description: 'Detalle minucioso en líneas y paleta de colores vivos.',
    date: '18 de mayo de 2025'
  },
  {
    id: 8,
    title: 'Pieza Anime Estilo 8',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/xK3SZh9G/A-8.jpg',
      'https://i.ibb.co/C33MyfZv/A-11.jpg'
    ],
    description: 'Trabajo dinámico de personajes con acabados de alta calidad.',
    date: '02 de abril de 2025'
  },
  {
    id: 9,
    title: 'Pieza Anime Estilo 9',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/RpB7740D/A-9.jpg',
      'https://i.ibb.co/35n4fDHJ/A-12.jpg'
    ],
    description: 'Tatuaje de gran impacto visual y fluidez en el diseño.',
    date: '14 de marzo de 2025'
  },
  {
    id: 10,
    title: 'Pieza Anime Estilo 10',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/xt0bJzGc/A-10.jpg',
      'https://i.ibb.co/C3yX9175/A-1.jpg'
    ],
    description: 'Línea y color perfectamente integrados en la piel.',
    date: '22 de febrero de 2025'
  },
  {
    id: 11,
    title: 'Pieza Anime Estilo 11',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/C33MyfZv/A-11.jpg',
      'https://i.ibb.co/tpBk8dhx/A-2.jpg'
    ],
    description: 'Estilo de animación llevado al arte corporal con total precisión.',
    date: '10 de enero de 2025'
  },
  {
    id: 12,
    title: 'Pieza Anime Estilo 12',
    category: 'Anime',
    artist: 'asu_arttattoo',
    images: [
      'https://i.ibb.co/35n4fDHJ/A-12.jpg',
      'https://i.ibb.co/WpkMPqwf/A-3.jpg'
    ],
    description: 'Cierre de galería anime con una pieza magistral y personalizada.',
    date: '05 de enero de 2025'
  },
];

const categories = ['Todos', 'Minimalistas', 'Medianos', 'Surrealismo y Grises', 'Anime'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isGridAnimating, setIsGridAnimating] = useState(false);

  // Leer la URL al cargar la página para saber si hay un post abierto
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('post');
    if (postId) {
      const found = tattooItems.find(item => item.id.toString() === postId);
      if (found) {
        setSelectedPost(found);
        requestAnimationFrame(() => {
          setIsModalOpen(true);
        });
      }
    }
  }, []);

  const filteredTattoos = activeCategory === 'Todos'
    ? tattooItems
    : tattooItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    
    setIsGridAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setTimeout(() => {
        setIsGridAnimating(false);
      }, 50);
    }, 200);
  };

  const handleOpenPost = (tattoo) => {
    setSelectedPost(tattoo);
    setCurrentImageIndex(0);

    // Actualizar la URL agregando el parámetro ?post=ID sin recargar la página
    const newUrl = `${window.location.pathname}?post=${tattoo.id}`;
    window.history.pushState({ path: newUrl }, '', newUrl);

    requestAnimationFrame(() => {
      setIsModalOpen(true);
    });
  };

  const handleClosePost = () => {
    setIsModalOpen(false);

    // Limpiar el parámetro ?post= de la URL al cerrar el modal
    const newUrl = window.location.pathname;
    window.history.pushState({ path: newUrl }, '', newUrl);

    setTimeout(() => {
      setSelectedPost(null);
    }, 400);
  };

  const changeImage = (newIndex) => {
    if (newIndex === currentImageIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsAnimating(false);
    }, 200);
  };

  const nextImage = () => {
    if (selectedPost && selectedPost.images) {
      const nextIdx = (currentImageIndex + 1) % selectedPost.images.length;
      changeImage(nextIdx);
    }
  };

  const prevImage = () => {
    if (selectedPost && selectedPost.images) {
      const prevIdx = currentImageIndex === 0 ? selectedPost.images.length - 1 : currentImageIndex - 1;
      changeImage(prevIdx);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        
        {/* Perfil Header */}
        <div className="flex flex-col items-center text-center pb-8 border-b border-neutral-800">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-neutral-700 bg-neutral-900 mb-4 shadow-xl">
            <img 
              src="https://i.ibb.co/C3yX9175/A-1.jpg" 
              alt="Logo Studio" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">asu_arttattoo</h1>
          
          <div className="mt-2 max-w-md">
            <p className="font-medium text-sm text-neutral-200">Estudio de Tatuajes Profesional</p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 leading-relaxed">
              🎨 Diseños personalizados y exclusivos.<br/>
              📍 Anime, Surrealismo, Minimalistas y más.<br/>
              👇 ¡Explora nuestras piezas abajo y cotiza la tuya!
            </p>
          </div>
        </div>

        {/* Categorías */}
        <div className="flex overflow-x-auto gap-3 py-6 no-scrollbar border-b border-neutral-800 mb-6 justify-start sm:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                activeCategory === category
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Publicaciones */}
        <div className={`grid grid-cols-3 gap-1 sm:gap-4 transition-all duration-300 ease-out transform ${
          isGridAnimating ? 'opacity-0 translate-y-3 scale-98' : 'opacity-100 translate-y-0 scale-100'
        }`}>
          {filteredTattoos.map((tattoo) => (
            <div 
              key={tattoo.id}
              onClick={() => handleOpenPost(tattoo)}
              className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer"
            >
              <img 
                src={tattoo.images[0]} 
                alt={tattoo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              
              {tattoo.images.length > 1 && (
                <div className="absolute top-2 right-2 text-white bg-black/60 px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow">
                  ❏
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                <span>Ver publicación</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedPost && (
        <div className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 transition-all duration-400 ease-out ${
          isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className={`bg-black border border-neutral-800 rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative shadow-2xl transition-all duration-400 ease-out transform ${
            isModalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-8 opacity-0'
          }`}>
            
            {/* Botón Cerrar */}
            <button 
              onClick={handleClosePost}
              className="absolute top-3 right-3 z-30 text-white bg-black/60 hover:bg-neutral-800 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer transition"
            >
              ✕
            </button>

            {/* Carrusel de Imágenes */}
            <div className="md:w-3/5 bg-neutral-950 flex items-center justify-center relative min-h-[300px] md:min-h-[500px] overflow-hidden">
              <img 
                src={selectedPost.images[currentImageIndex]} 
                alt={selectedPost.title} 
                className={`w-full h-full object-contain max-h-[80vh] transition-all duration-300 ease-in-out transform ${
                  isAnimating ? 'opacity-0 scale-90 filter blur-xs' : 'opacity-100 scale-100 filter blur-none'
                }`}
              />

              {selectedPost.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition cursor-pointer z-20"
                  >
                    ❮
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition cursor-pointer z-20"
                  >
                    ❯
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm z-20">
                    {selectedPost.images.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => changeImage(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/40 w-1.5'
                        }`}
                        aria-label={`Ver imagen ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Panel de Detalles */}
            <div className="md:w-2/5 flex flex-col bg-neutral-950 border-t md:border-t-0 md:border-l border-neutral-800 max-h-[50vh] md:max-h-auto justify-between">
              
              <div>
                <div className="flex items-center gap-3 p-4 border-b border-neutral-800">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-800">
                    <img src="https://i.ibb.co/C3yX9175/A-1.jpg" alt="Avatar" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{selectedPost.artist}</p>
                    <p className="text-xs text-neutral-400">{selectedPost.category}</p>
                  </div>
                </div>

                <div className="p-4 space-y-4 text-sm overflow-y-auto">
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
              </div>

              <div className="p-4 border-t border-neutral-800 bg-black">
                <button 
                  onClick={() => alert(`Iniciando cotización para: ${selectedPost.title}`)}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-sm transition cursor-pointer shadow-lg shadow-red-900/30"
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