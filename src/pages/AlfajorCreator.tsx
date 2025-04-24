/* ------------------------------------------------------------------
   AlfajorCreator.tsx – versión completa y pulida (≤ 248 líneas)
   - Contenedores translúcidos/blur para profundidad
   - Título “Crea tu alfajor personalizado” con animación shine
   - Algoritmo de precio + envío de precio unitario correcto al carrito
------------------------------------------------------------------- */
import React, { useState } from 'react';
import { cookieLayers, fillingLayers, coatingLayers } from '../data/products';
import { useCart } from '../context/CartContext';
import { Layer } from '../types';
import { PlusCircle, Check, Trash2, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const BASE_PRICE = 800;
const EXTRA_LAYER_PRICE = 590;
const OFFER_TEXT = '2×1500 CLP (1 capa)';
const shine =
  'bg-[linear-gradient(110deg,#FBBF24,45%,#FDE68A,55%,#FBBF24)] bg-[length:200%_auto] animate-[shine_3s_linear_infinite]';

const cx = (...c: (string | false)[]) => c.filter(Boolean).join(' ');

/* ---------- TimelineStep ---------- */
const Step: React.FC<{
  step: number;
  title: string;
  description: string;
  children: React.ReactNode;
}> = ({ step, title, description, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row mb-20"
  >
    <div className="flex flex-col items-center mr-8">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600
                      text-white font-bold flex items-center justify-center shadow-xl ring-4 ring-amber-200 animate-pulse">
        {step}
      </div>
      <div className="flex-1 w-[3px] bg-gradient-to-b from-gray-200 to-amber-200 mt-2" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-extrabold font-display
                     bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700
                     bg-clip-text text-transparent tracking-wide mb-1">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {children}
    </div>
  </motion.div>
);

/* ---------- OptionGrid ---------- */
const Grid: React.FC<{
  options: Layer[];
  selected: Layer | null;
  onSelect: (l: Layer) => void;
}> = ({ options, selected, onSelect }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {options.map((o) => {
      const active = selected?.id === o.id;
      return (
        <button
          key={o.id}
          onClick={() => onSelect(o)}
          className={cx(
            'relative flex flex-col items-center p-4 rounded-3xl transition-all duration-300',
            'bg-white/30 backdrop-blur-lg hover:-translate-y-1',
            'shadow-[inset_10px_10px_20px_rgba(0,0,0,.05),inset_-10px_-10px_20px_rgba(255,255,255,.6)]',
            active && 'ring-4 ring-amber-600'
          )}
        >
          <img src={o.image} alt={o.name} className="w-full h-24 object-contain mb-3" />
          <span className="text-sm sm:text-base font-semibold text-gray-800">{o.name}</span>
          {active && (
            <motion.div
              layoutId="check"
              className="absolute inset-0 rounded-3xl bg-amber-500/25 flex items-center justify-center"
            >
              <Check size={32} className="text-amber-600" />
            </motion.div>
          )}
        </button>
      );
    })}
  </div>
);

/* ---------- AlfajorCreator ---------- */
const AlfajorCreator: React.FC = () => {
  const [cookieLayer, setCookieLayer] = useState<Layer | null>(null);
  const [fillingLayer, setFillingLayer] = useState<Layer | null>(null);
  const [extraFillings, setExtraFillings] = useState<Layer[]>([]);
  const [coatingLayer, setCoatingLayer] = useState<Layer | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const isComplete = cookieLayer && fillingLayer;
  const unitBase = BASE_PRICE + extraFillings.length * EXTRA_LAYER_PRICE;

  /* ---- Total mostrado ---- */
  const totalShown = extraFillings.length
    ? unitBase * quantity
    : (() => {
        const pairs = Math.floor(quantity / 2);
        const rest = quantity % 2;
        return pairs * 1500 + rest * BASE_PRICE;
      })();

  /* ---- Helpers carrito ---- */
  const pushItem = (qty: number, unitPrice: number) =>
    addToCart({
      productId: crypto.randomUUID(),
      name: 'Alfajor Personalizado',
      price: unitPrice,
      quantity: qty,
      image: (coatingLayer || fillingLayer || cookieLayer)!.image,
    });

  const addToCartHandler = () => {
    if (!isComplete) return;
    if (extraFillings.length) {
      pushItem(quantity, unitBase);
    } else {
      const pairs = Math.floor(quantity / 2);
      const rest = quantity % 2;
      if (pairs) pushItem(pairs * 2, 750); // 750 × 2 = 1500
      if (rest) pushItem(rest, BASE_PRICE);
    }
    reset();
  };

  const reset = () => {
    setCookieLayer(null);
    setFillingLayer(null);
    setExtraFillings([]);
    setCoatingLayer(null);
    setQuantity(1);
  };

  /* ---- Extra fillings handlers ---- */
  const addExtra = () => setExtraFillings([...extraFillings, fillingLayers[0]]);
  const updExtra = (i: number, l: Layer) =>
    setExtraFillings(extraFillings.map((e, idx) => (idx === i ? l : e)));
  const delExtra = (i: number) =>
    setExtraFillings(extraFillings.filter((_, idx) => idx !== i));

  /* -------------------- UI -------------------- */
  return (
    <section className="py-24 px-4 min-h-screen bg-gradient-to-br from-amber-50 via-yellow-100 to-white relative overflow-hidden">
      {/* halos decorativos */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-400/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-yellow-300/25 blur-3xl rounded-full animate-pulse" />

      <div className="container mx-auto max-w-5xl">
        {/* Título principal */}
        <h2
          className={`text-center text-5xl sm:text-6xl font-extrabold font-display mb-24
                      bg-clip-text text-transparent ${shine}`}
        >
          Crea tu alfajor personalizado
        </h2>

        <Step step={1} title="Elige la galleta" description="La base crujiente">
          <Grid options={cookieLayers} selected={cookieLayer} onSelect={setCookieLayer} />
        </Step>

        <Step step={2} title="Selecciona el relleno" description="El corazón dulce">
          <Grid options={fillingLayers} selected={fillingLayer} onSelect={setFillingLayer} />
        </Step>

        <Step step={3} title="Capas extra" description="Añade relleno (+590 CLP c/u)">
          <div className="space-y-6">
            {extraFillings.map((l, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-4">
                <Grid
                  options={fillingLayers}
                  selected={l}
                  onSelect={(x) => updExtra(i, x)}
                />
                <button
                  onClick={() => delExtra(i)}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 font-semibold"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <button
              onClick={addExtra}
              className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-yellow-100 text-yellow-700 hover:bg-yellow-200 font-semibold"
            >
              <PlusCircle size={20} /> Añadir capa
            </button>
          </div>
        </Step>

        <Step step={4} title="Cobertura final" description="El toque irresistible">
          <Grid options={coatingLayers} selected={coatingLayer} onSelect={setCoatingLayer} />
        </Step>

        <Step step={5} title="Resumen & precio" description="Aprovecha la promo">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8
                          bg-white/40 backdrop-blur-xl p-6 rounded-3xl
                          shadow-[inset_10px_10px_20px_rgba(0,0,0,.05),inset_-10px_-10px_20px_rgba(255,255,255,.6)]">
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">Cantidad:</span>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
                  className="w-24 text-center px-3 py-2 rounded-lg border border-gray-300
                             focus:ring-amber-500 focus:border-amber-500"
                />
              </label>
              <div>
                <p className="text-lg font-medium text-gray-800">Total:</p>
                <p className="text-3xl font-extrabold text-amber-700">
                  {totalShown.toLocaleString('es-CL')} CLP
                </p>
                {!extraFillings.length && (
                  <p className="text-sm text-amber-600 font-semibold">Promo: {OFFER_TEXT}</p>
                )}
              </div>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <button
                onClick={reset}
                className="flex items-center gap-2 px-5 py-3 rounded-lg
                           bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                <Trash2 size={20} /> Reiniciar
              </button>
              <button
                onClick={addToCartHandler}
                disabled={!isComplete}
                className={cx(
                  'flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-xl transition-all',
                  isComplete
                    ? 'bg-gradient-to-r from-amber-600 via-yellow-500 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                )}
              >
                <ShoppingBag size={20} /> Añadir al carrito
              </button>
            </div>
          </div>
        </Step>
      </div>
    </section>
  );
};

export default AlfajorCreator;

/* ---------- Tailwind extra (agrega en tu globals) ----------
@keyframes shine { to { background-position: -200% center; } }
@layer utilities {
  .animate-\[shine_3s_linear_infinite\] { animation: shine 3s linear infinite; }
}
------------------------------------------------------------- */
