import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contáctanos</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-[#FF4B00] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-[#FF4B00] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-[#FF4B00] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF4B00] text-white py-3 px-6 rounded-lg hover:bg-[#E64400] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Info & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Información</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/525615206531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#FF4B00] transition-colors duration-300"
                >
                  <MessageCircle size={20} />
                  <span>+52 56 1520 6531</span>
                </a>
                <a
                  href="mailto:info@paintbox.com"
                  className="flex items-center gap-3 hover:text-[#FF4B00] transition-colors duration-300"
                >
                  <Mail size={20} />
                  <span>info@paintbox.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Enlaces</h3>
              <div className="space-y-4">
                <Link to="/portfolio" className="block hover:text-[#FF4B00] transition-colors duration-300">
                  Portfolio
                </Link>
                <Link to="/cgi-ai" className="block hover:text-[#FF4B00] transition-colors duration-300">
                  CGI & AI
                </Link>
                <Link to="/photography" className="block hover:text-[#FF4B00] transition-colors duration-300">
                  Photography
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PaintBOX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;