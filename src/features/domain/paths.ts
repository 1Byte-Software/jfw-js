const REST = 'domains';

export const DOMAIN_PATH = {
    CREATE_DOMAIN: `v1/${REST}`,
    VERIFY_DOMAIN: `v1/${REST}/{id}/verify`,
    GET_DOMAINS: `v1/${REST}`,
    GET_DOMAIN: `v1/${REST}/{id}`,

    UPDATE_DOMAIN: `v1/${REST}/{id}`,
    DELETE_DOMAIN: `v1/${REST}/{id}`,
};

export { REST as REST_DOMAIN };