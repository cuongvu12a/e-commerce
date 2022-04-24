const SERVICE = {
  AUTH: '/auth',
  UPLOAD: 'http://localhost:5000/api/upload/',
  PRODUCT: '/product',
};

export const ENDPOINTS = {
  LOGIN: `${SERVICE.AUTH}/login`,
  GET_PROFILE: `${SERVICE.AUTH}/me`,
  GET_ALL_PRODUCT: `${SERVICE.PRODUCT}/`,
  UPLOAD_IMAGE: `${SERVICE.UPLOAD}/image`,
};
