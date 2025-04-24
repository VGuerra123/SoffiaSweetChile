import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Slice, UtensilsCrossed, Truck, Sparkles } from 'lucide-react';

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.4, duration: 0.7, ease: 'easeOut' },
  }),
};

const StepCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  index: number;
}> = ({ icon, title, description, number, index }) => (
  <motion.div
    custom={index}
    variants={stepVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={false}
      className="group rounded-3xl"
    >
      <div className="relative bg-white/30 backdrop-blur-lg border border-amber-200 rounded-3xl shadow-lg p-8 text-center transition-shadow duration-500 hover:shadow-2xl">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
          {number}
        </div>
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-amber-300 opacity-30 blur-2xl animate-pulse-slow rounded-full z-0" />
        <div className="mt-8 mb-4 flex justify-center">
          <div className="p-4 bg-amber-100 rounded-full text-amber-700 shadow-inner group-hover:scale-110 transition-transform ease-out animate-glow">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-700 mb-2">
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </Tilt>
  </motion.div>
);

const HowItWorks: React.FC = () => (
  <section
    id="how-it-works"
    className="relative pt-32 py-24 bg-[linear-gradient(180deg,_#fffdf3_0%,_#fff9e0_100%)] overflow-hidden"
  >
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
      {Array.from({ length: 30 }).map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-amber-300 animate-floating"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 12}px`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-700 drop-shadow-md"
        >
          ¿Cómo Funciona?
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
          Tres pasos mágicos para disfrutar de alfajores únicos creados por ti, con mucho amor y sabor.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <StepCard
          icon={<Slice size={36} />}
          title="Personaliza tu Alfajor"
          description="Elige las capas, el relleno, la cobertura y los sabores que más te gusten para crear tu alfajor perfecto."
          number={1}
          index={0}
        />
        <StepCard
          icon={<UtensilsCrossed size={36} />}
          title="Preparamos tu Pedido"
          description="Elaboramos tu alfajor con ingredientes frescos y de calidad, siguiendo tus especificaciones."
          number={2}
          index={1}
        />
        <StepCard
          icon={<Truck size={36} />}
          title="Recibe en tu Puerta"
          description="Llevamos tus deliciosos alfajores a tu domicilio, cuidadosamente empacados para mantener su frescura."
          number={3}
          index={2}
        />
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <a
          href="/create"
          className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-yellow-600 hover:to-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition"
        >
          Crea tu Alfajor Personalizado
        </a>
      </motion.div>
    </div>

    <style>{`@keyframes pulse-slow {0%,100%{opacity:0.4;transform:scale(1);}50%{opacity:0.8;transform:scale(1.02);}}`}</style>
  </section>
);

export default HowItWorks;
