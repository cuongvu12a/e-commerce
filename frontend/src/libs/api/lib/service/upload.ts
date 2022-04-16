import API from '../axios';
import { ENDPOINTS } from '../endpoints';

const { post } = API;

export const uploadImage = (payload: FormData): Promise<any> =>
  post(ENDPOINTS.UPLOAD_IMAGE, payload).then((res) => res.data);
