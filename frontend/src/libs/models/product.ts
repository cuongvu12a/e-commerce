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

export interface Book extends Product {
  ISBN: string;
  title: string;
  summary: string;
  numberOfPage: number;
  language: string;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  address: string;
  biography: string;
}

export interface Publisher {
  id: number;
  name: string;
  address: string;
}

interface CartDefault<T> {
  clothesId?: T;
  bookId?: T;
  laptopId?: T;
}
export interface CartPayload extends CartDefault<string> {}

export interface Cart extends CartDefault<Product> {
  id: number
}
