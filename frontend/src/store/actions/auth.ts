import {
  LoginPayload,
  LoginFormValue,
  AUTH_ACTION_TYPE,
  SafeAny,
} from '@models';
import {
  login as apiLogin,
  getProfile as apiGetProfile,
  STORAGE_KEYS,
  StorageSetItem,
  StorageRemoveItem,
} from '@api';

export const login = (payload: LoginFormValue) => async (dispatch: SafeAny) => {
  try {
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_REQUEST,
    });
    const { username, password, remember } = payload;
    const { token, ...rest } = await apiLogin({ username, password });
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_SUCCESS,
      payload: rest,
    });
    if (!remember) return;
    StorageSetItem(STORAGE_KEYS.TOKEN, token);
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

export const getProfile = () => async (dispatch: SafeAny) => {
  try {
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_REQUEST,
    });
    const data = await apiGetProfile();
    dispatch({
      type: AUTH_ACTION_TYPE.AUTH_SUCCESS,
      payload: data,
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
