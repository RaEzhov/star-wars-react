import {
    GUIDE_IMG_EXTENSION,
    HTTP,
    HTTPS,
    SWAPI_PARAM_PAGE,
    SWAPI_PEOPLE,
    SWAPI_ROOT,
    URL_IMG_PERSON
} from "../constants/api";

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
};

const getID = (url, category) => {
    const protocol = checkProtocol(url);

    return url
        .replace(protocol + SWAPI_ROOT + category, '')
        .replace(/\//g, '');
};

export const getPeopleID = (url) => {
    return getID(url, SWAPI_PEOPLE);
};

export const getPeopleImage = (id) => {
    return `${URL_IMG_PERSON}${id + GUIDE_IMG_EXTENSION}`;
};

export const getPeoplePageID = url => Number(url.slice(url.lastIndexOf(SWAPI_PARAM_PAGE) + SWAPI_PARAM_PAGE.length));