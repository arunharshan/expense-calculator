const AUTH_KEY = 'auth_key';

export const setAuth = (value, key = AUTH_KEY) => {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getAuth = (key = AUTH_KEY) => {
  if (localStorage && localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
};

export const removeAuth = (key = AUTH_KEY) => {
  if (localStorage && localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
};

export const currentDate = () => {
  let tempDate = new Date();
  const date =
    tempDate.getMonth() +
    1 +
    '/' +
    tempDate.getDate() +
    '/' +
    tempDate.getFullYear();
  return date;
};

export const isMobile = () => {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
};
