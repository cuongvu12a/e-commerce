import {
  LoginPayload,
  LoginFormValue,
  AUTH_ACTION_TYPE,
  SafeAny,
} from '@models';
import {
  login as apiLogin,
  getProfile as apiGetProfile ,
  STORAGE_KEYS,
  StorageSetItem,
  StorageRemoveItem,
} from '@api';

export const login = (payload: LoginFormValue) => async (dispatch: SafeAny) => {
  try {
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_REQUEST,
    });
    const { email, password, remember } = payload;
    const res = await apiLogin({ email, password });
    if (!res || !res.success) throw new Error(res.message);
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_SUCCESS,
      payload: res.data.userInfo,
    });
    if (!remember) return;
    StorageSetItem(STORAGE_KEYS.TOKEN, res.data.token);
  } catch (error: SafeAny) {
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProfile  = () => async (dispatch: SafeAny) => {
  try {
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_REQUEST,
    });
    const res = await apiGetProfile ();
    if (!res || !res.success) throw new Error(res.message);
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_SUCCESS,
      payload: res.data.userInfo,
    });
  } catch (error: SafeAny) {
    StorageRemoveItem(STORAGE_KEYS.TOKEN);
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
