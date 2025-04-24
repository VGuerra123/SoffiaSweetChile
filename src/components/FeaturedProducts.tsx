import React from 'react';
import Tilt from 'react-parallax-tilt';
import { ShoppingBag, Sparkles } from 'lucide-react';

const alfajores = [
  {
    id: '1',
    name: 'Alfajor Menta',
    tagline: 'Refrescante y delicioso',
    description: 'Relleno de crema de menta y cobertura intensa de chocolate negro',
    image: '../../public/assets/images/destacados/menta.png',
    price: 800,
    offer: '2×1500 CLP',
  },
  {
    id: '2',
    name: 'Alfajor Blanco',
    tagline: 'Dulzura celestial',
    description: 'Dulce de leche con cobertura de chocolate blanco premium',
    image: '../../public/assets/images/destacados/blanco.png',
    price: 800,
    offer: '2×1500 CLP',
  },
  {
    id: '3',
    name: 'Alfajor Trufa',
    tagline: 'Intensamente chocolatoso',
    description: 'Ganache de trufa entre suaves galletas de cacao',
    image: '../../public/assets/images/destacados/trufa.png',
    price: 800,
    offer: '2×1500 CLP',
  },
];

type Alfajor = typeof alfajores[0];

const FeaturedAlfajores: React.FC = () => {
  return (
    <section
      id="featured-alfajores"
      className="py-20 bg-[linear-gradient(to_bottom,_#fff9ec_0%,_#fff8e5_100%)] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 opacity-70 animate-floating"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-yellow-800 mb-4 drop-shadow-md">
            Nuestros Alfajores Estrella
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deléitate con nuestras creaciones flotantes y llenas de magia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {alfajores.map((a: Alfajor) => (
            <Tilt
              key={a.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={false}
              className="rounded-3xl"
            >
              <div className="relative flex flex-col items-center p-6 bg-white/40 backdrop-blur-lg border border-yellow-100 rounded-3xl shadow-xl hover:shadow-yellow-300 transition-shadow duration-300">
                <div className="absolute -top-6 w-48 h-48 rounded-full z-0 bg-yellow-300 opacity-30 blur-2xl animate-pulse-slow" />
                <div className="relative z-10 w-40 h-40 mb-4 animate-floatSpin">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-white/40 blur-xl rounded-full opacity-50 animate-lightRay" />
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-contain drop-shadow-[0_0_18px_rgba(255,215,0,0.4)] animate-glow"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800 mb-1">
                  {a.name}
                </h3>
                <p className="italic text-yellow-600 mb-2">“{a.tagline}”</p>
                <p className="text-gray-700 text-center mb-4">{a.description}</p>
                <div className="text-center mb-2">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800">
                    {a.price.toLocaleString('es-CL')} CLP
                  </span>
                </div>
                <span className="text-sm font-semibold text-yellow-700 animate-bounce">
                  {a.offer}
                </span>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatSpin {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.4)); }
          50% { filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.8)); }
        }
        @keyframes lightRay {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes floating {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-floatSpin { animation: floatSpin 6s ease-in-out infinite; }
        .animate-lightRay { animation: lightRay 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-floating { animation: floating 7s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default FeaturedAlfajores;