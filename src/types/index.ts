// -----------------------------------
// PRODUCTOS
// -----------------------------------

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

// -----------------------------------
// CARRITO
// -----------------------------------

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// -----------------------------------
// CAPAS PARA ALFAJOR (CREADOR)
// -----------------------------------

export type LayerType = 'cookie' | 'filling' | 'coating';

export interface Layer {
  id: number;
  name: string;
  type: LayerType;
  image: string;
}
