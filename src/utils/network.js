import {HTTP, HTTPS} from "../constants/api";

/**
 * Send fetch request
 * @param {string} url - url to fetch
 * @returns {Promise} - Promise with result of request
 * */
export const getAPIResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }
        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

/**
 * Change url type from HTTP to HTTPS
 * @param {string} url - url to change
 * @returns {string} - url with HTTPS
 * */
export const changeHTTP = (url) => url? url.replace(HTTP, HTTPS) : url;

export const toRomanSystem = (number) => {
    switch (number) {
        case 1:
            return 'I';
        case 2:
            return 'II';
        case 3:
            return 'III';
        case 4:
            return 'IV';
        case 5:
            return 'V';
        case 6:
            return 'VI';
        case 7:
            return 'VII';
        case 8:
            return 'VIII';
        case 9:
            return 'IX';
        case 10:
            return 'X';
        default:
            return undefined;
    }
}

export const makeConcurrentRequest = async (url) => {
    return await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json());
    }));
}
