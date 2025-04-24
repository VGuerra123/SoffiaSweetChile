/* ------------------------------------------------------------------
   Header.tsx  •  Encabezado con branding gráfico “SoffiaSweetChile”
------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { toggleCart, items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* Contar ítems en carrito */
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  /* Detectar scroll para sombra */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Navegación principal */
  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/create', label: 'Crear Alfajor' },
    { to: '/products', label: 'Productos' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/5 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      /*  bg-white/5  => 5% opacidad (≈95 % transparente) */
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* ───── Brand (logo) ─────────────────────────────── */}
        <Link to="/" className="flex items-center gap-2 focus:outline-none">
          <img
            src="/assets/images/hero/logo.png"
            alt="SoffiaSweetChile Logo"
            className="h-12 md:h-16 lg:h-20 w-auto select-none transition-all drop-shadow-[0_1px_4px_rgba(252,211,77,0.55)] hover:drop-shadow-[0_2px_6px_rgba(252,211,77,0.8)]"
            draggable={false}
          />
        </Link>

        {/* ───── Navegación  desktop ───────────────────────── */}
        <nav className="hidden items-center space-x-6 font-medium text-yellow-800 md:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:text-yellow-600 hover:after:w-full"
            >
              {label}
            </Link>
          ))}

          {/* Instagram */}
          <a
            href="https://www.instagram.com/soffiasweet_chile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-600 transition-colors"
          >
            <Instagram size={20} />
          </a>

          {/* Carrito */}
          <button
            onClick={toggleCart}
            aria-label="Abrir carrito"
            className="relative text-yellow-700 transition-colors hover:text-yellow-900"
          >
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-600 text-xs text-white">
                {itemCount}
              </span>
            )}
          </button>
        </nav>

        {/* ───── Botón hamburguesa  mobile ──────────────────── */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="text-yellow-800 transition-colors hover:text-yellow-600 md:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ───── Navegación  mobile ───────────────────────────── */}
      {isMenuOpen && (
        <div className="space-y-4 bg-white/90 px-4 py-4 text-yellow-800 shadow-md backdrop-blur-sm md:hidden">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-md px-2 py-1 font-medium transition-colors hover:bg-yellow-50 hover:text-yellow-600"
            >
              {label}
            </Link>
          ))}

          <a
            href="https://instagram.com/soffiasweetchile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Instagram"
            className="flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-yellow-50 hover:text-yellow-600"
          >
            <Instagram size={20} /> Instagram
          </a>

          <button
            onClick={() => {
              toggleCart();
              setIsMenuOpen(false);
            }}
            aria-label="Abrir carrito"
            className="flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-yellow-50 hover:text-yellow-600"
          >
            <ShoppingCart size={20} /> Carrito
            {itemCount > 0 && (
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-600 text-xs text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
