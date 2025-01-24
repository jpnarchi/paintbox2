import React, { useState } from 'react';
import { Play, Camera, Users, Building } from 'lucide-react';

const categories = [
  { id: 'product', name: 'Producto', icon: Camera },
  { id: 'lifestyle', name: 'Lifestyle', icon: Users },
  { id: 'corporate', name: 'Corporativa', icon: Building }
];

const galleryItems = [
  {
    id: 1,
    category: 'product',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80',
    title: 'Fotografía de Producto Premium',
    description: 'Capturamos la esencia de tus productos con iluminación profesional y atención al detalle.'
  },
  {
    id: 2,
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80',
    title: 'Sesiones Lifestyle',
    description: 'Creamos contenido auténtico que conecta con tu audiencia.'
  },
  {
    id: 3,
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    title: 'Fotografía Corporativa',
    description: 'Proyectamos la profesionalidad de tu empresa con imágenes de alta calidad.'
  }
];

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-gray-900 pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
            alt="Photography"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Fotografía Profesional</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Capturamos momentos únicos con un enfoque creativo y tecnología de vanguardia
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full transition-colors duration-300 ${
              selectedCategory === 'all'
                ? 'bg-[#FF4B00] text-white'
                : 'bg-white hover:bg-[#FF4B00] hover:text-white'
            }`}
          >
            Todos
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-[#FF4B00] text-white'
                  : 'bg-white hover:bg-[#FF4B00] hover:text-white'
              }`}
            >
              <category.icon size={20} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-[#FF4B00] text-white px-6 py-2 rounded-lg hover:bg-[#E64400] transition-colors duration-300 flex items-center gap-2">
                    <Play size={20} />
                    Ver proyecto
                  </button>
                  <span className="text-sm text-gray-500">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Behind the Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80"
                alt="Behind the Scenes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-[#FF4B00] text-white p-4 rounded-full hover:bg-[#E64400] transition-colors duration-300">
                  <Play size={24} />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Nuestro Proceso Creativo</h3>
              <p className="text-gray-600 mb-6">
                Descubre cómo trabajamos para crear contenido visual excepcional que destaque tu marca.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4B00]">01</span>
                  <span>Planificación y concepto</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4B00]">02</span>
                  <span>Producción y captura</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF4B00]">03</span>
                  <span>Post-producción y entrega</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photography;