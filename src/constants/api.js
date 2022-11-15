// common
export const HTTPS = 'https://';
export const HTTP = 'http://';

// swapi
export const SWAPI_ROOT = 'swapi.py4e.com/api/';
export const SWAPI_PEOPLE = 'people/';
export const SWAPI_PARAM_PAGE = '?page='
export const SWAPI_FILMS = 'films/';

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;

// visual guide
export const GUIDE_ROOT_IMG = HTTPS + 'starwars-visualguide.com/assets/img/';
export const GUIDE_PEOPLE = 'characters/'
export const GUIDE_IMG_EXTENSION = '.jpg'
export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;
