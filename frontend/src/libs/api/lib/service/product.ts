import API from '../axios';
import { ENDPOINTS } from '../endpoints';

import { Laptop } from '@models';

const { post, get, put } = API;

export const getAllLaptop = (): Promise<Laptop[]> =>
  get(ENDPOINTS.LAPTOPS).then((res) => res.data);

export const createLaptop = (payload: Laptop): Promise<Laptop> =>
  post(ENDPOINTS.LAPTOPS, payload).then((res) => res.data);

export const updateLaptop = (payload: Laptop): Promise<Laptop> =>
  put(`${ENDPOINTS.LAPTOPS}/${payload.id}`, payload).then((res) => res.data);

export const deleteLaptop = (payload: Laptop): Promise<Laptop> =>
  API.delete(`${ENDPOINTS.LAPTOPS}/${payload.id}`).then((res) => res.data);
