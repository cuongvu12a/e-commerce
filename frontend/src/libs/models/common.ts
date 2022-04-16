export type SafeAny = any;

export type Media = string;

export interface Address {
  city: string;
  dictrict: string;
  number: string;
  street: string;
  _id: number;
}

export interface BaseResponse<T> {
  message: string;
  success: boolean;
  data: T;
}
