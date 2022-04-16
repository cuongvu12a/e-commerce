import { AUTH_ACTION_TYPE, Action, AuthState } from '@models';

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  error: '',
};

export const authReducer = (
  state = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.AUTH_REQUEST:
      return { ...state, loading: true };
    case AUTH_ACTION_TYPE.AUTH_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case AUTH_ACTION_TYPE.AUTH_FAIL:
      return { loading: false, error: action.payload, userInfo: null };
    case AUTH_ACTION_TYPE.AUTH_RESET:
      return { loading: false, userInfo: null };
    default:
      return state;
  }
};
