const REST = 'domains';

export const DOMAIN_PATH = {
    GET_DOMAINS: `v1/${REST}`,
    GET_DOMAIN: `v1/${REST}/{id}`,

    UPDATE_DOMAIN: `v1/${REST}`,
    DELETE_DOMAIN: `v1/${REST}/{id}`,
    CREATE_DOMAIN: `v1/${REST}`,
};

export { REST as REST_DOMAIN };