import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Booking from './pages/Booking';

export default function App() {
  const [currentTab, setCurrentTab] = useState('portfolio');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Barra de Navegación superior */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Contenido dinámico según la pestaña seleccionada */}
      <main className="flex-grow">
       {currentTab === 'portfolio' && <Portfolio setCurrentTab={setCurrentTab} />}
        {currentTab === 'blog' && <Blog />}
        {currentTab === 'admin' && <Admin />}
        {currentTab === 'booking' && <Booking />}
        
      </main>
    </div>
  );
}