import type { Product } from '../types';

/* ---------- Productos destacados ---------- */
export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Alfajor Clásico',
    description: 'Delicioso alfajor tradicional con dulce de leche y cobertura de chocolate.',
    price: 3.99,
    image: '/assets/images/destacados/clasico.png',
    slug: 'clasico',
  },
  {
    id: '2',
    name: 'Alfajor Blanco',
    description: 'Exquisito alfajor con dulce de leche y cobertura de chocolate blanco.',
    price: 4.29,
    image: '/assets/images/destacados/blanco.png',
    slug: 'blanco',
  },
  {
    id: '3',
    name: 'Alfajor Frutal',
    description: 'Refrescante alfajor con relleno de frutos rojos y cobertura de chocolate.',
    price: 4.49,
    image: '/assets/images/destacados/frutal.png',
    slug: 'frutal',
  },
  {
    id: '4',
    name: 'Alfajor Premium',
    description: 'Alfajor gourmet con relleno mixto y cobertura de chocolate premium.',
    price: 5.99,
    image: '/assets/images/destacados/premium.png',
    slug: 'premium',
  },
];

/* ---------- Tipo genérico de capa ---------- */
export interface Layer {
  id: number;
  name: string;
  type: 'cookie' | 'filling' | 'coating';
  image: string;
}

/* ---------- Capas de galleta (cookie) ---------- */
export const cookieLayers: Layer[] = [
  { id: 1, name: 'Tradicional', type: 'cookie', image: '/assets/images/alfajor/capa-1.png' },
  { id: 2, name: 'Chocolate',   type: 'cookie', image: '/assets/images/alfajor/capa-2.png' },
];

/* ---------- Capas de relleno (filling) ---------- */
export const fillingLayers: Layer[] = [
  { id: 3, name: 'Coco',          type: 'filling', image: '/assets/images/alfajor/capa-3.png' },
  { id: 4, name: 'Dulce de Leche',type: 'filling', image: '/assets/images/alfajor/capa-4.png' },
  { id: 5, name: 'Trufa',         type: 'filling', image: '/assets/images/alfajor/capa-5.png' },
  { id: 6, name: 'Frutos Rojos',  type: 'filling', image: '/assets/images/alfajor/capa-6.png' },
  { id: 7,  name: 'Menta',            type: 'filling', image: '/assets/images/alfajor/capa-7.png' },
  { id: 8,  name: 'Lúcuma',           type: 'filling', image: '/assets/images/alfajor/capa-8.png' },
];

/* ---------- Capas de cobertura (coating) ---------- */
export const coatingLayers: Layer[] = [

  { id: 9,  name: 'Chocolate Negro',  type: 'coating', image: '/assets/images/alfajor/capa-9.png' },
  { id: 10, name: 'Chocolate Blanco', type: 'coating', image: '/assets/images/alfajor/capa-10.png' },
];
