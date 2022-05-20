export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginFormValue extends LoginPayload {
  remember: boolean;
}

export interface UserInfo {
  city: string;
  district:  string;
  email:  string;
  firstName:  string;
  is_staff: boolean;
  lastName:  string;
  midName:  string;
  nation:  string;
  numberHouse: string;
  phone:  string;
  street:  string;
  username:  string;
}

export interface LoginResponse extends UserInfo{
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
