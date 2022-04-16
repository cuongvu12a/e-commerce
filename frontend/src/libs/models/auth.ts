export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginFormValue extends LoginPayload {
  remember: boolean;
}

export interface UserInfo {
  birthday: string;
  email: string;
  firstname: string;
  gender: string;
  lastname: string;
  password: string;
  phone: string;
  _id: number;
}

export interface LoginResponse {
  userInfo: UserInfo;
  token: string;
}

export enum AUTH_ACTION_TYPE {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAIL = 'AUTH_FAIL',
  AUTH_RESET = 'AUTH_RESET',
}

export interface Action {
  type: AUTH_ACTION_TYPE;
  payload?: any;
}

export interface AuthState {
  loading: boolean;
  error?: string;
  userInfo: UserInfo | null;
}
