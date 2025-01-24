import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1626908013943-df94de54984c?auto=format&fit=crop&q=80',
    title: 'Campaña Digital AI',
    category: 'Digital Ads'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    title: 'Diseño Generativo',
    category: 'CGI'
  },
  {
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
    title: 'Animación 3D',
    category: 'CGI'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
    title: 'Fotografía Producto',
    category: 'Fotografía'
  }
];

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  const filters = ['Todos', 'Digital Ads', 'CGI', 'Fotografía'];

  const filteredItems = selectedFilter === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626908013943-df94de54984c?auto=format&fit=crop&q=80"
            alt="Portfolio Hero"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestro Portfolio</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Descubre cómo transformamos ideas en experiencias visuales extraordinarias
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedFilter === filter
                  ? 'bg-[#FF4B00] text-white'
                  : 'bg-white hover:bg-[#FF4B00] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg aspect-video cursor-pointer"
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.category}</p>
                  {item.type === 'video' && (
                    <button className="mt-4 flex items-center text-white">
                      <Play className="mr-2" size={20} />
                      Ver video
                    </button>
                  )}
                  {item.type === 'image' && (
                    <button className="mt-4 flex items-center text-white">
                      <ExternalLink className="mr-2" size={20} />
                      Ver proyecto
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;