import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { ShoppingBag, Sparkles, Star, Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const BASE_PRICE = 800;
const EXTRA_LAYER_PRICE = 590;

const products = [
  { id: '3', name: 'Clasico Menta', description: 'Manjar + Menta', image: '/assets/images/destacados/clasico-menta.png', layers: 2 },
  { id: '4', name: 'Clasico Coco', description: 'Manjar + Coco', image: '/assets/images/destacados/clasico-coco.png', layers: 2 },
  { id: '5', name: 'Clasico Lucuma', description: 'Manjar + Lúcuma', image: '/assets/images/destacados/clasico-lucuma.png', layers: 2 },
  { id: '6', name: 'Trufa Lucuma', description: 'Trufa + Lúcuma', image: '/assets/images/destacados/trufa-lucuma.png', layers: 2 },
  { id: '7', name: 'Trufa Frutal', description: 'Trufa + Frutal', image: '/assets/images/destacados/trufa-frutal.png', layers: 2 },
  { id: '8', name: 'Trufa Coco', description: 'Trufa + Coco', image: '/assets/images/destacados/trufa-coco.png', layers: 2 },
  { id: '9', name: 'Trufa Menta', description: 'Trufa + Menta', image: '/assets/images/destacados/trufa-menta.png', layers: 2 },
  { id: '10', name: 'Clasico Trufa Menta', description: 'Manjar + Trufa + Menta', image: '/assets/images/destacados/clasico-trufa-menta.png', layers: 3 },
  { id: '11', name: 'Clasico Trufa', description: 'Manjar + Trufa', image: '/assets/images/destacados/clasico-trufa.png', layers: 2 },
  { id: '12', name: 'Trufa', description: 'Trufa pura', image: '/assets/images/destacados/trufa.png', layers: 1 },
  { id: '13', name: 'Coco', description: 'Relleno de coco', image: '/assets/images/destacados/coco.png', layers: 1 },
  { id: '14', name: 'Lucuma', description: 'Relleno de lúcuma', image: '/assets/images/destacados/lucuma.png', layers: 1 },
  { id: '15', name: 'Menta', description: 'Relleno de menta', image: '/assets/images/destacados/menta.png', layers: 1 },
  { id: '16', name: 'Clasico Frutal', description: 'Manjar + Frutal', image: '/assets/images/destacados/clasico-frutal.png', layers: 2 },
  { id: '17', name: 'Frutal', description: 'Relleno frutal', image: '/assets/images/destacados/frutal.png', layers: 1 },
  { id: '18', name: 'Blanco', description: 'Dulce de leche blanco', image: '/assets/images/destacados/blanco.png', layers: 1 },
  { id: '19', name: 'Clasico', description: 'Solo manjar', image: '/assets/images/destacados/clasico.png', layers: 1 },
];

const ProductsPage: React.FC = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [darkMode, setDarkMode] = useState(false);

  // Sort products by base price (ascending)
  const sorted = [...products].sort((a, b) => {
    const priceA = BASE_PRICE + (a.layers - 1) * EXTRA_LAYER_PRICE;
    const priceB = BASE_PRICE + (b.layers - 1) * EXTRA_LAYER_PRICE;
    return priceA - priceB;
  });

  const handleQuantityChange = (id: string, value: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, value) }));
  };

  const calculatePrice = (layers: number, quantity: number) => {
    if (layers === 1) {
      const promoPairs = Math.floor(quantity / 2);
      const remainder = quantity % 2;
      return promoPairs * 1500 + remainder * BASE_PRICE;
    }
    return quantity * (BASE_PRICE + (layers - 1) * EXTRA_LAYER_PRICE);
  };

  const getOfferText = (layers: number) =>
    layers === 1 ? '2×1500 CLP' : `Capa extra: +${EXTRA_LAYER_PRICE} CLP por sabor adicional`;

  return (
    <section
      className={`py-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-yellow-50 via-amber-100 to-pink-50 text-gray-800'}`}
      style={{
        backgroundImage: `url('/assets/images/textures/gold-pattern.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-800 drop-shadow-md animate-pulse-slow">
            Catálogo de Alfajores
          </h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-lg"
          >
            {darkMode ? 'Modo Claro' : 'Modo Dorado Oscuro'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {sorted.map((a, idx) => {
            const quantity = quantities[a.id] || 1;
            const finalPrice = calculatePrice(a.layers, quantity);
            const offer = getOfferText(a.layers);
            const isTop = a.layers > 1;

            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={false}
                  className="rounded-3xl animate-floatSlow"
                >
                  <div className="relative flex flex-col items-center p-6 bg-white/40 backdrop-blur-xl border border-yellow-200 rounded-3xl shadow-xl hover:shadow-yellow-300 transition-shadow duration-300">
                    {isTop && (
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
                        <Star size={14} /> TOP
                      </div>
                    )}
                    <div className="absolute -z-10 w-36 h-36 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
                    <img
                      src={a.image}
                      alt={a.name}
                      className="w-40 h-40 object-contain mb-4 drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] animate-glow"
                    />
                    <h3 className="text-2xl font-extrabold text-yellow-800 mb-1">{a.name}</h3>
                    <p className="text-gray-600 text-center mb-4">{a.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <button
                        onClick={() => handleQuantityChange(a.id, quantity - 1)}
                        className="p-2 bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg font-semibold text-yellow-800 w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(a.id, quantity + 1)}
                        className="p-2 bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-extrabold text-yellow-700">
                        ${finalPrice.toLocaleString('es-CL')} CLP
                      </span>
                      <span className="block text-sm text-yellow-600 font-semibold">{offer}</span>
                    </div>
                    <button
                      onClick={() =>
                        addToCart({ productId: a.id, name: a.name, price: finalPrice, quantity, image: a.image })
                      }
                      className="mt-auto bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center shadow-lg"
                    >
                      <ShoppingBag size={20} className="mr-2" />
                      Añadir al carrito
                    </button>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow { 0%,100%{opacity:0.4;transform:scale(1);}50%{opacity:0.6;transform:scale(1.05);} }
        @keyframes glow {0%,100%{filter:drop-shadow(0 0 15px rgba(255,215,0,0.4));}50%{filter:drop-shadow(0 0 25px rgba(255,215,0,0.8));}}
        @keyframes floatSlow {0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
        .animate-glow{animation:glow 3s ease-in-out infinite;}
        .animate-pulse-slow{animation:pulse-slow 5s ease-in-out infinite;}
        .animate-floatSlow{animation:floatSlow 6s ease-in-out infinite;}
      `}</style>
    </section>
  );
};

export default ProductsPage;