import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { STORAGE_KEYS, StorageGetItem } from './storage';

const axiosInstance = axios.create({
  baseURL: 'https://d6b0-14-177-194-71.ap.ngrok.io/api',
});

const handleRequestFulfilled = (config: AxiosRequestConfig<any>) => {
  if (!config?.headers) config.headers = {};
  const token = StorageGetItem(STORAGE_KEYS.TOKEN);
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
};

// const handleRequestRejected = (error: any) => {
//   console.log('handleRequestRejected', error);
//   return Promise.reject(error);
// };

// const handleResponseFulfilled = (response: AxiosResponse<any, any>) => {
//   console.log('handleResponseFulfilled', response);
//   return response;
// };

// const handleResponseRejected = (error: any) => {
//   console.log('handleResponseRejected', error.config);
//   return Promise.reject(error);
// };

axiosInstance.interceptors.request.use(
  handleRequestFulfilled
  // handleRequestRejected
);
// axiosInstance.interceptors.response.use(
//   handleResponseFulfilled,
//   handleResponseRejected
// );

export default axiosInstance;
