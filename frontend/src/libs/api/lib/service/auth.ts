import API from '../axios';
import { ENDPOINTS } from '../endpoints';

import { LoginPayload, LoginResponse } from '@models';

const { post, get } = API;

export const login = (
  payload: LoginPayload
): Promise<LoginResponse> =>
  post(ENDPOINTS.LOGIN, payload).then((res) => res.data);

export const getProfile = (): Promise<LoginResponse>  =>
  get(ENDPOINTS.GET_PROFILE).then((res) => res.data);
