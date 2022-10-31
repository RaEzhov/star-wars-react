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
