import { Media } from './common';
import { Supplier } from './supplier';

export interface Product {
  id: number;
  avatar: string;
  createdAt: string;
  discount: string;
  inventory: string;
  name: string;
  price: string;
  type: string;
  medias: Media[];
  supplier: Supplier;
}
