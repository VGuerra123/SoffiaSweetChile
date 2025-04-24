import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, Trash2 } from 'lucide-react';

/* ------------------------------------------------------------
   ShoppingCart.tsx – usa directamente el precio unitario enviado
------------------------------------------------------------ */
const ShoppingCart: React.FC = () => {
  const { items, isOpen, closeCart, removeFromCart } = useCart();

  /* 👉 Subtotal por línea = precioUnitario × cantidad */
  const lineSubtotal = (unit: number, qty: number) => unit * qty;

  /* 👉 Total general */
  const totalPrice = items.reduce(
    (sum, item) => sum + lineSubtotal(item.price, item.quantity),
    0
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeCart}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96
                    bg-gradient-to-b from-white via-yellow-50 to-amber-50
                    backdrop-blur-sm shadow-2xl z-50
                    transform transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* ---------- Header ---------- */}
        <header className="flex justify-between items-center p-5 border-b bg-white/80 backdrop-blur">
          <h2 className="flex items-center text-2xl font-extrabold text-yellow-700">
            <ShoppingBag size={28} className="mr-2" />
            Tu Carrito
            {!!items.length && (
              <span className="ml-2 text-sm font-medium text-yellow-600">
                ({items.reduce((n, i) => n + i.quantity, 0)})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="text-yellow-500 hover:text-yellow-800"
            aria-label="Cerrar carrito"
          >
            <X size={24} />
          </button>
        </header>

        {/* ---------- Items ---------- */}
        <ul className="flex-grow overflow-y-auto p-6 space-y-5">
          {items.length === 0 ? (
            <li className="flex flex-col items-center justify-center h-full text-yellow-700">
              <ShoppingBag size={48} className="mb-4 animate-pulse" />
              <p className="font-semibold">Tu carrito está vacío</p>
              <p className="text-sm">¡Agrega alfajores deliciosos!</p>
            </li>
          ) : (
            items.map((item) => (
              <li
                key={item.id}
                className="flex items-center bg-white/90 backdrop-blur rounded-xl p-4 shadow hover:shadow-lg border border-yellow-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-yellow-800">{item.name}</h3>
                  <p className="text-sm text-yellow-700">Cantidad: {item.quantity}</p>
                  <p className="mt-1 text-xl font-bold text-yellow-600">
                    $
                    {lineSubtotal(item.price, item.quantity).toLocaleString(
                      'es-CL'
                    )}{' '}
                    CLP
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-yellow-400 hover:text-red-600"
                  aria-label="Eliminar"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))
          )}
        </ul>

        {/* ---------- Footer ---------- */}
        <footer className="p-6 border-t bg-gradient-to-t from-white to-yellow-50 backdrop-blur">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-yellow-800">Total a pagar</span>
            <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700">
              ${totalPrice.toLocaleString('es-CL')} CLP
            </span>
          </div>
          <button
            onClick={() => alert('Implementar flujo de pedido')}
            disabled={!items.length}
            className={`w-full py-3 rounded-full text-white font-semibold transition-all
              ${
                items.length
                  ? 'bg-gradient-to-r from-amber-600 via-yellow-500 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
          >
            Proceder al Pago
          </button>
        </footer>
      </aside>
    </>
  );
};

export default ShoppingCart;
