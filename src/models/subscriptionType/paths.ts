const REST = 'subscription-types';

export const SUBSCRIPTION_TYPE_PATH = {
    CREATE_SUBSCRIPTION_TYPE: `v1/${REST}`,
    DELETE_SUBSCRIPTION_TYPE: `v1/${REST}/{id}`,
    GET_SUBSCRIPTION_TYPES: `v1/${REST}`,
    GET_SUBSCRIPTION_TYPE: `v1/${REST}/{id}`,
    UPDATE_SUBSCRIPTION_TYPE: `v1/${REST}/{id}`,
};
