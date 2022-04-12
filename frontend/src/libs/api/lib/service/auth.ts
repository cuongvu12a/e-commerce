import API from '../axios';
import { ENDPOINTS } from '../endpoints';

const { post, get } = API;

export const login = (payload: any): Promise<any> =>
  post(ENDPOINTS.LOGIN, payload).then((res) => res.data);
