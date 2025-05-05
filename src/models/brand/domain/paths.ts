import { REST_BRAND } from '../paths';

const REST_BRAND_DOMAIN = 'domain';

export const BRAND_DOMAIN_PATH = {
    GET_BRAND_DOMAINS: `v1/domains`,
    UPDATE: `${REST_BRAND}/:id/${REST_BRAND_DOMAIN}`,
};
