const SERVICE = {
  AUTH: '/auth',
  UPLOAD: 'http://localhost:5000/api/upload/',
};

export const ENDPOINTS = {
  LOGIN: `login`,
  GET_PROFILE: `users/me`,
  LAPTOPS: `laptops`,
  CLOTHES: `clothes`,
  BOOKS: `books`,
  AUTHORS: `authors`,
  PUBLISHERS: `publishers`,
  UPLOAD_IMAGE: `${SERVICE.UPLOAD}/image`,
};
