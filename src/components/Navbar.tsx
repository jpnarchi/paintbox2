import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.webp" 
                alt="PaintBOX" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                to="/portfolio" 
                className="text-gray-800 hover:text-[#FF4B00] transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link 
                to="/cgi-ai" 
                className="text-gray-800 hover:text-[#FF4B00] transition-colors duration-300"
              >
                CGI & AI
              </Link>
              <Link 
                to="/photography" 
                className="text-gray-800 hover:text-[#FF4B00] transition-colors duration-300"
              >
                Photography
              </Link>
              <a 
                href="https://wa.me/525615206531" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center gap-2 shadow-lg"
              >
                <MessageCircle size={20} />
                Contact Us
              </a>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white shadow-lg`}
      >
        <div className="px-4 py-3 space-y-3">
          <Link 
            to="/portfolio" 
            className="block px-3 py-2 text-gray-800 hover:text-[#FF4B00] transition-colors duration-300"
          >
            Portfolio
          </Link>
          <Link 
            to="/cgi-ai" 
            className="block px-3 py-2 text-gray-800 hover:text-[#FF4B00] transition-colors duration-300"
          >
            CGI & AI
          </Link>
          <Link 
            to="/photography" 
            className="block px-3 py-2 text-gray-800 hover:text-[#FF4B00] transition-colors duration-300"
          >
            Photography
          </Link>
          <a 
            href="https://wa.me/525615206531" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-3 py-2 text-[#25D366] hover:text-[#128C7E] transition-colors duration-300 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
