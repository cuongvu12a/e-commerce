import API from '../axios';
import { ENDPOINTS } from '../endpoints';

import { LoginPayload, LoginResponse, BaseResponse } from '@models';

const { post, get } = API;

export const login = (
  payload: LoginPayload
): Promise<BaseResponse<LoginResponse>> =>
  post(ENDPOINTS.LOGIN, payload).then((res) => res.data);

export const getProfile = (): Promise<BaseResponse<LoginResponse>>  =>
  get(ENDPOINTS.GET_PROFILE).then((res) => res.data);
