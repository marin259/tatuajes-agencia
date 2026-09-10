import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <--- Importa el footer
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Booking from './pages/Booking';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Barra de Navegación superior */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Contenido dinámico según la pestaña seleccionada */}
      <main className="flex-grow">
        {currentTab === 'home' && <Home setCurrentTab={setCurrentTab} />}
        {currentTab === 'portfolio' && <Portfolio />}
        {currentTab === 'blog' && <Blog />}
        {currentTab === 'admin' && <Admin />}
        {currentTab === 'booking' && <Booking />}
      </main>

      {/* Pie de página global */}
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}