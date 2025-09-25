const REST = 'brands';

export const BRAND_PATH = {
    CHECK_DOMAIN_IF_EXISTS: `v1/${REST}/check-domain-exists/{domain}`,
    CREATE_BRAND: `v1/${REST}`,
    GENERATE_NEW_DOMAIN: `v1/${REST}/generate-domain`,
    GET_BRAND: `v1/${REST}/{id}`,
    GET_BRAND_BY_URL: `v1/${REST}/by-url`,
    GET_BRANDS: `v1/${REST}`,
    UPDATE_BRAND: `v1/${REST}/{id}`,

    // #WAIT_TSDOC
    GET_UTILITY_LINKS_FOR_BRAND: `v1/${REST}/links/utilities`,
};

export { REST as REST_BRAND };
