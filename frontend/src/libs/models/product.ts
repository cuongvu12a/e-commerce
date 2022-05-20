import { Media } from './common';
import { Supplier } from './supplier';

export interface Product {
  barCode: string;
  description: string;
  discount: number;
  id: number;
  material: string;
  price: number;
  name: string;
}

export interface Laptop extends Product {
  CPU: string;
  GPU: string;
  screen: string;
}

export interface Clothes extends Product {
  type: string;
  size: string;
  season: string;
  brand: string;
  origin: string;
}
