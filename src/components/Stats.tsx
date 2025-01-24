import React from 'react';
import { Users, Award, Clock, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-[#FF4B00]" />,
    number: '100+',
    label: 'Clientes Satisfechos'
  },
  {
    icon: <Award className="w-8 h-8 text-[#FF4B00]" />,
    number: '250+',
    label: 'Proyectos Completados'
  },
  {
    icon: <Clock className="w-8 h-8 text-[#FF4B00]" />,
    number: '48h',
    label: 'Tiempo de Entrega Promedio'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#FF4B00]" />,
    number: '99%',
    label: 'Tasa de Satisfacción'
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;