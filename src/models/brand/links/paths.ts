import { REST_BRAND } from '../paths';

const REST_BRAND_LINKS = 'links';

export const BRAND_LINK_PATH = {
    GET_BY_ID: `${REST_BRAND}/${REST_BRAND_LINKS}/:id`,
    GET_BY_BRAND: `${REST_BRAND}/:id/${REST_BRAND_LINKS}`,
    GET_BY_TYPE: `${REST_BRAND}/:id/${REST_BRAND_LINKS}/load-type/:type`,

    CREATE: `${REST_BRAND}/${REST_BRAND_LINKS}`,
    UPDATE_BY_ID: `${REST_BRAND}/${REST_BRAND_LINKS}/:id`,
    DELETE_BY_ID: `${REST_BRAND}/${REST_BRAND_LINKS}/:id`,
};
