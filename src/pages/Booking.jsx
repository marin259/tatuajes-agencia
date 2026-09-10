import React, { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Realismo',
    bodyPart: '',
    size: 'Mediano (10-15 cm)',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reemplaza este número con el WhatsApp de tu agencia (ej: código de país + número, sin signos ni espacios)
    // Nota: Como estás en Venezuela (código +58), un ejemplo sería 584121234567
    const agencyWhatsAppNumber = '584123456789'; 

    const message = `*¡Nueva Solicitud de Cita / Cotización!* 🖋️%0A%0A` +
      `*Nombre:* ${formData.name}%0A` +
      `*Teléfono:* ${formData.phone}%0A` +
      `*Estilo:* ${formData.category}%0A` +
      `*Zona del cuerpo:* ${formData.bodyPart}%0A` +
      `*Tamaño estimado:* ${formData.size}%0A` +
      `*Idea / Descripción:* ${formData.description}`;

    const whatsappUrl = `https://wa.me/${agencyWhatsAppNumber}?text=${message}`;
    
    // Abre WhatsApp con el mensaje prellenado
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="text-red-600 text-xs font-bold tracking-widest uppercase bg-red-950/40 px-3 py-1 rounded-full border border-red-900/50">
            Agenda Abierta
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 text-white">
            RESERVA TU CITA
          </h1>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">
            Cuéntanos sobre tu idea. Completa el formulario para enviarnos los detalles directamente a nuestro WhatsApp.
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Tu Nombre y Apellido</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Jose Marín" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Número de Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej. +58 412..." 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Estilo de Tatuaje</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors cursor-pointer"
                >
                  <option value="Realismo">Realismo</option>
                  <option value="Blackwork">Blackwork</option>
                  <option value="Fine Line">Fine Line</option>
                  <option value="Neo Tradicional">Neo Tradicional</option>
                  <option value="Otro">Otro estilo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Tamaño Estimado</label>
                <select 
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors cursor-pointer"
                >
                  <option value="Pequeño (5-10 cm)">Pequeño (5-10 cm)</option>
                  <option value="Mediano (10-15 cm)">Mediano (10-15 cm)</option>
                  <option value="Grande (15-25 cm)">Grande (15-25 cm)</option>
                  <option value="Manga completa / Espalda">Manga completa / Pieza grande</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Zona del Cuerpo</label>
              <input 
                type="text" 
                name="bodyPart"
                value={formData.bodyPart}
                onChange={handleChange}
                placeholder="Ej. Antebrazo izquierdo, costilla, pantorrilla..." 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase mb-2">Cuéntanos tu Idea</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe los elementos que deseas, si es a color o blanco y negro, referencias..." 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-sm transition-all duration-300 cursor-pointer shadow-lg shadow-red-900/30 tracking-wider uppercase"
            >
              Enviar Solicitud por WhatsApp &rarr;
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}