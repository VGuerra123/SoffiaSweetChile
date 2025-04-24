import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative bg-gradient-to-br from-yellow-50 via-pink-100 to-amber-100 text-yellow-900 pt-16 pb-8">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About Section */}
          <div>
            <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 mb-4">Sobre Nosotros</h3>
            <p className="text-yellow-800 mb-4">
              En SoffiaSweetChile creamos alfajores artesanales personalizados con ingredientes de alta calidad y todo nuestro amor, para endulzar momentos especiales.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/soffiasweet_chile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-900 transition" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-900 transition" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-900 transition" aria-label="TikTok">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 mb-4">Contacto</h3>
            <ul className="space-y-4 text-yellow-800">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Ubicación: Chile</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-bold">@</span>
                <span>correo@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales como medio principal */}
          <div>
            <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 mb-4">Hablemos</h3>
            <p className="text-yellow-800 mb-6">
              ¿Tienes dudas o quieres hacer un pedido especial? Contáctanos por nuestras redes sociales, estamos felices de ayudarte.
            </p>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="https://www.instagram.com/soffiasweet_chile" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-900 transition" aria-label="Instagram">
                <Instagram size={28} />
              </a>
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-900 transition" aria-label="WhatsApp">
                <FaWhatsapp size={28} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-900 transition" aria-label="TikTok">
                <FaTiktok size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-yellow-300 text-center text-yellow-700 text-sm">
          <p>© {new Date().getFullYear()} SoffiaSweetChile. Todos los derechos reservados.</p>
        </div>

        {/* Floating sparkle particles (decorative) */}
        <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-300 rounded-full blur-xl animate-floating"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floating {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
