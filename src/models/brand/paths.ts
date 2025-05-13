const REST = 'brands';

export const BRAND_PATH = {
    QUERY: `v1/${REST}`,

    GET_BY_ID: `${REST}/:id`,
    GET_BY_URL: `v1/${REST}/by-url`,

    CREATE: `v1/${REST}`,
    UPDATE_BY_ID: `v1/${REST}/:id`,

    CHECK_DOMAIN_EXISTS: `v1/${REST}/check-domain-exists/:domainUrl`,
    GENERATE_DOMAIN: `v1/${REST}/generate-domain`,
};

export { REST as REST_BRAND };
