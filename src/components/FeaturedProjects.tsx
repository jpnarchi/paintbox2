import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 1,
    title: 'Campaña Digital AI',
    description: 'Transformación de marca utilizando inteligencia artificial',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    category: 'Digital Ads'
  },
  {
    id: 2,
    title: 'Diseño Generativo',
    description: 'Creación de contenido visual único con AI',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
    category: 'CGI'
  },
  {
    id: 3,
    title: 'Fotografía Producto',
    description: 'Sesión fotográfica profesional para e-commerce',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80',
    category: 'Fotografía'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cómo ayudamos a nuestros clientes a destacar en el mundo digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-[#FF4B00] text-white px-6 py-3 rounded-lg flex items-center gap-2">
                    <Play size={20} />
                    Ver proyecto
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-[#FF4B00] font-medium">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Ver todos los proyectos
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;