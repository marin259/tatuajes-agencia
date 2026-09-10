export default function Navbar({ currentTab, setCurrentTab }) {
  return (
    <header className="bg-neutral-950 border-b border-neutral-800 px-4 sm:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      
      {/* Logo */}
      <div 
        onClick={() => setCurrentTab('portfolio')} 
        className="text-white font-bold tracking-wider cursor-pointer text-base sm:text-lg text-center md:text-left"
      >
        INK & ART // AGENCIA
      </div>

      {/* Botones de navegación responsivos */}
      <nav className="flex flex-wrap justify-center items-center gap-2">
        <button
          onClick={() => setCurrentTab('portfolio')}
          className={`px-3 sm:px-4 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
            currentTab === 'portfolio'
              ? 'bg-neutral-200 text-neutral-950 font-semibold'
              : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
          }`}
        >
          Portafolio
        </button>
        
        <button
          onClick={() => setCurrentTab('blog')}
          className={`px-3 sm:px-4 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
            currentTab === 'blog'
              ? 'bg-neutral-200 text-neutral-950 font-semibold'
              : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
          }`}
        >
          Blog & Cuidados
        </button>

        <button
          onClick={() => setCurrentTab('booking')}
          className={`px-3 sm:px-4 py-1.5 rounded text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            currentTab === 'booking' 
              ? 'bg-red-600 text-white shadow-md shadow-red-900/30' 
              : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
          }`}
        >
          Reservar Cita
        </button>
        
        <button
          onClick={() => setCurrentTab('admin')}
          className={`px-3 sm:px-4 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
            currentTab === 'admin'
              ? 'bg-neutral-200 text-neutral-950 font-semibold'
              : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
          }`}
        >
          Admin Panel
        </button>
      </nav>
      
    </header>
  );
}
