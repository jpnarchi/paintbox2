import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Conceptualización',
    description: 'Definimos la visión y objetivos del proyecto, estableciendo las bases creativas.'
  },
  {
    step: 2,
    title: 'Desarrollo AI',
    description: 'Aplicamos tecnología de IA avanzada para generar y refinar el contenido visual.'
  },
  {
    step: 3,
    title: 'Perfeccionamiento',
    description: 'Pulimos cada detalle para lograr resultados excepcionales y únicos.'
  }
];

const showcaseItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    title: 'Proyecto 1'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
    title: 'Proyecto 2'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1626908013943-df94de54984c?auto=format&fit=crop&q=80',
    title: 'Proyecto 3'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    title: 'Proyecto 4'
  }
];

const CgiAi = () => {
  return (
    <div className="bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gray-900 pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
            alt="CGI & AI"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">CGI & Inteligencia Artificial</h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Creamos experiencias visuales únicas combinando CGI de última generación con IA avanzada
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-[#FF4B00] text-5xl font-bold mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcaseItems.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-xl aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-[#FF4B00] text-white px-6 py-3 rounded-lg flex items-center">
                    <Play className="mr-2" size={20} />
                    Ver proyecto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">¿Listo para revolucionar tu marca?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Descubre cómo nuestra tecnología puede transformar tu visión en realidad
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#FF4B00] text-white rounded-lg text-lg font-semibold hover:bg-[#E64400] transition-colors duration-300"
          >
            Solicitar cotización
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CgiAi;