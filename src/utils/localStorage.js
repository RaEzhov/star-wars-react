export const getLocalStorage = key => localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)) : {};

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key.toString(), JSON.stringify(data));
};
