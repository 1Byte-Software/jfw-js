const REST = 'commission-rates';

export const COMMISSION_RATE_PATH = {
    QUERY: `${REST}`,
    CREATE: `${REST}`,
    UPDATE_BY_ID: `${REST}/:id`,
    GET_DISCOUNT: `${REST}/get-discount`,
    GET_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,
};
