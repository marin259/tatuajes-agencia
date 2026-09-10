import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Admin from './pages/Admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');

  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans">
      {/* Menú de navegación superior */}
      <Navbar setCurrentPage={setCurrentPage} />

      {/* Renderizado condicional según la pestaña seleccionada */}
      <main>
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'admin' && <Admin />}
      </main>
    </div>
  );
}