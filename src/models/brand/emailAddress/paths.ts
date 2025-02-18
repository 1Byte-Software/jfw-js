import { REST_BRAND } from '../paths';

const REST_BRAND_EMAIL_ADDRESS = 'email-address';

export const BRAND_PROFILE_PATH = {
    GET: `${REST_BRAND}/:id/${REST_BRAND_EMAIL_ADDRESS}`,
    UPDATE: `${REST_BRAND}/:id/${REST_BRAND_EMAIL_ADDRESS}`,
};
