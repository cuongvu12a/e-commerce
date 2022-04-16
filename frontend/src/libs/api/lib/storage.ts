export enum STORAGE_KEYS {
  TOKEN = 'TOKEN',
  LOCALES = 'LOCALES',
  THEME = 'THEME',
}

export const StorageSetItem = (key: STORAGE_KEYS, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const StorageGetItem = (key: STORAGE_KEYS) => {
  const storageValue = localStorage.getItem(key);
  switch (storageValue) {
    case 'undefine':
      return undefined;
    default:
      return JSON.parse(storageValue as string);
  }
};

export const StorageRemoveItem = (key: STORAGE_KEYS) =>
  localStorage.removeItem(key);

export const StorageClear = () => {
  const keys = Object.keys(STORAGE_KEYS);
  keys.forEach((key) => localStorage.removeItem(key));
};
