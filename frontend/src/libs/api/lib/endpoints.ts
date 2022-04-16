const SERVICE = {
  AUTH: '/auth',
  UPLOAD: '/upload',
  PRODUCT: '/product',
};

export const ENDPOINTS = {
  LOGIN: `${SERVICE.AUTH}/login`,
  GET_PROFILE: `${SERVICE.AUTH}/me`,
  GET_ALL_PRODUCT: `${SERVICE.PRODUCT}/`,
  UPLOAD_IMAGE: `${SERVICE.UPLOAD}/login`,
};
