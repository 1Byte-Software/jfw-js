const REST = 'v1/brands';

export const BRAND_PATH = {
    QUERY: `${REST}`,

    GET_BY_ID: `${REST}/:id`,
    GET_BY_URL: `${REST}/by-url/:brandUrl`,
    UPDATE_BY_ID: `${REST}/:id`,
};

export { REST as REST_BRAND };
