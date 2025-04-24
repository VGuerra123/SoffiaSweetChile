import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';

const frames = [
  '/assets/images/hero/hero1.png',
  '/assets/images/hero/hero2.png',
  '/assets/images/hero/hero3.png',
  '/assets/images/hero/hero4.png',
  '/assets/images/hero/hero5.png',
  '/assets/images/hero/hero6.png',
  '/assets/images/hero/hero7.png',
  '/assets/images/hero/hero8.png',
  '/assets/images/hero/hero9.png',
  '/assets/images/hero/hero10.png',
];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-100 to-white shadow-inner shadow-yellow-100">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <ul className="grid w-full h-full grid-cols-12 grid-rows-12 animate-float">
          {Array.from({ length: 48 }).map((_, i) => (
            <li
              key={i}
              style={{
                animationDelay: `${i * 150}ms`,
                opacity: 0.12,
                transform: `scale(${Math.random() * 0.7 + 0.4})`,
              }}
              className="bg-pink-300 rounded-full blur-sm"
            />
          ))}
        </ul>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col-reverse items-center justify-between gap-14 lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-700 to-yellow-800 md:text-5xl lg:text-6xl drop-shadow-[0_3px_3px_rgba(0,0,0,0.2)]">
              Experiencias de&nbsp;
              <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
                placer artesanal
              </span>
            </h1>

            <p className="mt-4 text-xl italic font-light text-yellow-700">
              «Capas de felicidad en cada bocado»
            </p>

            <p className="max-w-lg mx-auto mt-6 text-gray-700 lg:mx-0">
              Escoge entre nuestra cobertura <strong>Clásica de chocolate</strong> o la irresistible
              <strong> Blanca</strong>, ambas rellenas con múltiples sabores que derriten el corazón.
              ¡Tú decides cuál probar primero!
            </p>

            <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/create"
                className="px-8 py-3 font-bold text-white transition-transform transform rounded-full shadow-[0_4px_16px_rgba(255,200,0,0.5)] text-lg bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 hover:-translate-y-1 hover:from-yellow-700 hover:to-amber-600"
              >
                Crea tu alfajor personalizado
              </a>
              <a
                href="/products"
                className="px-7 py-3 font-medium transition rounded-full border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-100"
              >
                Catálogo
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:w-1/2">
            <div className="absolute inset-0 scale-110 opacity-40 bg-pink-200 blur-3xl shadow-[0_0_60px_rgba(255,190,150,0.3)]" />
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.2}>
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={frames[index]}
                    src={frames[index]}
                    alt={`alfajor-${index}`}
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                    initial={{ opacity: 0, scale: 0.95, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.05, rotate: 10 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
