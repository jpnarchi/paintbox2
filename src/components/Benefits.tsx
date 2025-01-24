import React from 'react';
import { Zap, Palette, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-12 h-12 text-[#2563EB]" />,
    title: 'Tecnología AI Avanzada',
    description: 'Creamos contenido visual de alta calidad usando las últimas innovaciones en IA'
  },
  {
    icon: <Palette className="w-12 h-12 text-[#7C3AED]" />,
    title: 'Creatividad Sin Límites',
    description: 'Combinamos arte y tecnología para resultados únicos y memorables'
  },
  {
    icon: <Clock className="w-12 h-12 text-[#2563EB]" />,
    title: 'Entregas Rápidas',
    description: 'Optimizamos procesos para entregar resultados excepcionales en tiempo récord'
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            ¿Por qué elegir PaintBOX?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;