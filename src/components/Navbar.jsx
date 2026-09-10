export default function Navbar({ currentTab, setCurrentTab }) {
  return (
    <header className="bg-neutral-950 border-b border-neutral-800 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      
      {/* Logo idéntico al que tenías */}
      <div 
        onClick={() => setCurrentTab('portfolio')} 
        className="text-white font-bold tracking-wider cursor-pointer text-lg"
      >
        INK & ART // AGENCIA
      </div>

      {/* Botones de navegación con el mismo orden */}
      <nav className="flex items-center gap-2">
        <button
          onClick={() => setCurrentTab('portfolio')}
          className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
            currentTab === 'portfolio'
              ? 'bg-neutral-200 text-neutral-950 font-semibold'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
          }`}
        >
          Portafolio
        </button>
        
        <button
          onClick={() => setCurrentTab('blog')}
          className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
            currentTab === 'blog'
              ? 'bg-neutral-200 text-neutral-950 font-semibold'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
          }`}
        >
          Blog & Cuidados
        </button>
        
        <button
          onClick={() => setCurrentTab('admin')}
          className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
            currentTab === 'admin'
              ? 'bg-neutral-200 text-neutral-950 font-semibold'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
          }`}
        >
          Admin Panel
        </button>

        <button 
  onClick={() => setCurrentTab('booking')}
  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
    currentTab === 'booking' 
      ? 'bg-red-600 text-white' 
      : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
  }`}
>
  Reservar Cita
</button>
      </nav>
      
    </header>
  );
}