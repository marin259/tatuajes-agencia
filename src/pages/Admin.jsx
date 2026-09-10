import React, { useState } from 'react';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  
  // Estado para el formulario de nuevo tatuaje
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [style, setStyle] = useState('Neotradicional');

  const handleLogin = (e) => {
    e.preventDefault();
    // Contraseña temporal de prueba para el admin
    if (password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Contraseña incorrecta (Usa: admin123)');
    }
  };

  const handleAddTattoo = (e) => {
    e.preventDefault();
    alert(`Tatuaje "${title}" agregado con éxito (Simulación)`);
    setTitle('');
    setArtist('');
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-neutral-950 text-white min-h-[80vh] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg max-w-md w-full space-y-4">
          <h2 className="text-2xl font-bold tracking-wide text-center mb-2">ACCESO ADMIN</h2>
          <p className="text-sm text-neutral-400 text-center mb-6">Ingresa la contraseña para gestionar el contenido.</p>
          
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-neutral-600"
            />
          </div>

          <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded hover:bg-neutral-200 transition-colors">
            Entrar al Panel
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 text-white min-h-screen p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
        <h1 className="text-3xl font-bold tracking-wider">PANEL DE CONTROL</h1>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="text-xs bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded hover:bg-neutral-700"
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Agregar Nuevo Tatuaje al Portafolio</h2>
        
        <form onSubmit={handleAddTattoo} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Título del Diseño</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej. Japanese Dragon Sleeve" 
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Artista</label>
            <input 
              type="text" 
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Ej. Carlos Ink" 
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Estilo</label>
            <select 
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded p-2 text-white"
            >
              <option value="Neotradicional">Neotradicional</option>
              <option value="Blackwork">Blackwork</option>
              <option value="Realismo">Realismo</option>
              <option value="Japonés">Japonés</option>
            </select>
          </div>

          <button type="submit" className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-neutral-200">
            Subir al Portafolio
          </button>
        </form>
      </div>
    </div>
  );
}