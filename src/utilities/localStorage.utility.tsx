export const persistLocalStorage = <T,>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);
