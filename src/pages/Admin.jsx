import React, { useState } from 'react';

export default function Admin() {
  const [tattoos, setTattoos] = useState([
    { id: 1, title: 'Sleeve Realista Geométrico', category: 'Realismo', artist: 'Carlos "Ink" Ruiz' },
    { id: 2, title: 'Dragon Blackwork Torso', category: 'Blackwork', artist: 'Valeria Cova' },
  ]);

  const [form, setForm] = useState({ title: '', category: 'Realismo', artist: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.artist) return;

    const newTattoo = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      artist: form.artist,
    };

    setTattoos([newTattoo, ...tattoos]);
    setForm({ title: '', category: 'Realismo', artist: '' });
    setSuccessMessage('¡Pieza registrada exitosamente en el portafolio!');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  const handleDelete = (id) => {
    setTattoos(tattoos.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado */}
        <div className="mb-10 border-b border-neutral-800 pb-6">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase bg-red-950/40 px-3 py-1 rounded-full border border-red-900/50">
            Panel de Control Interno
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mt-3 text-white">
            ADMINISTRACIÓN DE LA AGENCIA
          </h1>
          <p className="text-neutral-400 text-sm mt-1">
            Gestiona el catálogo de obras y mantén actualizado el portafolio de los artistas residentes.
          </p>
        </div>

        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="mb-6 bg-red-950/60 border border-red-600 text-red-200 px-4 py-3 rounded-lg text-sm font-medium">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Formulario para agregar tatuaje */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-white mb-4">Añadir Nueva Obra</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-1">Título de la Pieza</label>
                <input 
                  type="text" 
                  value={form.title}
                  onChange={(e) => setForm({...form, title: e.target.value})}
                  placeholder="Ej. Calavera Neo Tradicional" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-1">Categoría</label>
                <select 
                  value={form.category}
                  onChange={(e) => setForm({...form, category: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-600 transition-colors cursor-pointer"
                >
                  <option value="Realismo">Realismo</option>
                  <option value="Blackwork">Blackwork</option>
                  <option value="Fine Line">Fine Line</option>
                  <option value="Neo Tradicional">Neo Tradicional</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-1">Artista Residente</label>
                <input 
                  type="text" 
                  value={form.artist}
                  onChange={(e) => setForm({...form, artist: e.target.value})}
                  placeholder="Ej. Carlos Ruiz" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg text-sm transition-colors cursor-pointer shadow-lg shadow-red-900/30 mt-2"
              >
                Publicar en Galería
              </button>
            </form>
          </div>

          {/* Listado de obras actuales en Admin */}
          <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Obras Registradas en Sistema ({tattoos.length})</h2>
            
            {tattoos.length === 0 ? (
              <p className="text-neutral-500 text-sm py-8 text-center">No hay obras registradas actualmente.</p>
            ) : (
              <div className="space-y-3">
                {tattoos.map((item) => (
                  <div key={item.id} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      <p className="text-neutral-400 text-xs mt-0.5">
                        <span className="text-red-500 font-medium">{item.category}</span> &bull; Artista: {item.artist}
                      </p>
                    </div>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="text-neutral-400 hover:text-red-500 text-xs font-semibold bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800 hover:border-red-900 transition-colors cursor-pointer"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}