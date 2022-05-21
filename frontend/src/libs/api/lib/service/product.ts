import API from '../axios';
import { ENDPOINTS } from '../endpoints';

import {
  Laptop,
  Clothes,
  Book,
  Author,
  Publisher,
  CartPayload,
  Cart,
} from '@models';

const { post, get, put } = API;

export const getAllLaptop = (): Promise<Laptop[]> =>
  get(ENDPOINTS.LAPTOPS).then((res) => res.data);

export const createLaptop = (payload: Laptop): Promise<Laptop> =>
  post(ENDPOINTS.LAPTOPS, payload).then((res) => res.data);

export const updateLaptop = (payload: Laptop): Promise<Laptop> =>
  put(`${ENDPOINTS.LAPTOPS}/${payload.id}`, payload).then((res) => res.data);

export const deleteLaptop = (payload: Laptop): Promise<Laptop> =>
  API.delete(`${ENDPOINTS.LAPTOPS}/${payload.id}`).then((res) => res.data);

export const getAllClothes = (): Promise<Clothes[]> =>
  get(ENDPOINTS.CLOTHES).then((res) => res.data);

export const createClothes = (payload: Clothes): Promise<Clothes> =>
  post(ENDPOINTS.CLOTHES, payload).then((res) => res.data);

export const updateClothes = (payload: Clothes): Promise<Clothes> =>
  put(`${ENDPOINTS.CLOTHES}/${payload.id}`, payload).then((res) => res.data);

export const deleteClothes = (payload: Clothes): Promise<Clothes> =>
  API.delete(`${ENDPOINTS.CLOTHES}/${payload.id}`).then((res) => res.data);

export const getAllBook = (): Promise<Book[]> =>
  get(ENDPOINTS.BOOKS).then((res) => res.data);

export const createBook = (payload: Book): Promise<Book> =>
  post(ENDPOINTS.BOOKS, payload).then((res) => res.data);

export const updateBook = (payload: Book): Promise<Book> =>
  put(`${ENDPOINTS.BOOKS}/${payload.id}`, payload).then((res) => res.data);

export const deleteBook = (payload: Book): Promise<Book> =>
  API.delete(`${ENDPOINTS.BOOKS}/${payload.id}`).then((res) => res.data);

export const getAllAuthor = (): Promise<Author[]> =>
  get(ENDPOINTS.AUTHORS).then((res) => res.data);

export const getAllPublisher = (): Promise<Publisher[]> =>
  get(ENDPOINTS.PUBLISHERS).then((res) => res.data);

export const createCarts = (payload: CartPayload): Promise<any> =>
  post(ENDPOINTS.CARTS, payload).then((res) => res.data);

export const getAllCarts = (): Promise<Cart[]> =>
  get(ENDPOINTS.CARTS).then((res) => res.data);

export const deleteCart = (payload: string | number): Promise<Cart> =>
  API.delete(`${ENDPOINTS.CARTS}/${payload}`).then((res) => res.data);

export const createOrder = (payload: { carts: number[] }): Promise<any> =>
  post(ENDPOINTS.CARTS, payload).then((res) => res.data);
