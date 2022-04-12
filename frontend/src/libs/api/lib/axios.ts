import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({ baseURL: '/api' });

// const handleRequestFulfilled = (config: AxiosRequestConfig<any>) => {
//   console.log('handleRequestFulfilled', config);
//   return config;
// };

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

// axiosInstance.interceptors.request.use(
//   handleRequestFulfilled,
//   handleRequestRejected
// );
// axiosInstance.interceptors.response.use(
//   handleResponseFulfilled,
//   handleResponseRejected
// );

export default axiosInstance;
