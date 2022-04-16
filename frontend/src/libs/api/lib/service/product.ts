import API from '../axios';
import { ENDPOINTS } from '../endpoints';

import { BaseResponse, Product } from '@models';

const { post, get } = API;

export const getAllProduct = (): Promise<BaseResponse<Product[]>> =>
  get(ENDPOINTS.GET_ALL_PRODUCT).then((res) => res.data);
