const REST = 'commission-rates';

export const COMMISSION_RATE_PATH = {
    CREATE_COMMISSION_RATE: `v1/${REST}`,
    DELETE_COMMISSION_RATE: `v1/${REST}/:id`,
    GET_COMMISSION_RATE: `v1/${REST}/:id`,
    GET_DISCOUNT_VALUE: `v1/${REST}/get-discount`,
    GET_COMMISSION_RATES: `v1/${REST}`,
    UPDATE_COMMISSION_RATE: `v1/${REST}/:id`,
};
