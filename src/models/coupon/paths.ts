const REST = 'coupons';

export const COUPON_PATH = {
    CREATE_COUPON: `v1/${REST}`,
    DELETE_COUPON: `v1/${REST}/:id`,
    GET_COUPON: `v1/${REST}/:id`,
    GET_COUPONS: `v1/${REST}`,
    UPDATE_COUPON: `v1/${REST}/:id`,
};
