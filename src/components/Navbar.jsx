export default function Navbar({ currentTab, setCurrentTab }) {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Logo / Nombre de la Agencia */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentTab('portfolio')}>
          <span className="text-xl font-black tracking-widest text-white">
            INK & ART <span className="text-red-600">//</span> AGENCIA
          </span>
        </div>

        {/* Botones de Navegación */}
        <nav className="flex items-center gap-2 bg-neutral-900 p-1.5 rounded-full border border-neutral-800">
          <button
            onClick={() => setCurrentTab('portfolio')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              currentTab === 'portfolio'
                ? 'bg-neutral-100 text-neutral-950 shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
            }`}
          >
            Portafolio
          </button>
          
          <button
            onClick={() => setCurrentTab('blog')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              currentTab === 'blog'
                ? 'bg-neutral-100 text-neutral-950 shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
            }`}
          >
            Blog & Cuidados
          </button>
          
          <button
            onClick={() => setCurrentTab('admin')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              currentTab === 'admin'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
            }`}
          >
            Admin Panel
          </button>
        </nav>
      </div>
    </header>
  );
}