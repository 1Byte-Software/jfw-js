const REST = 'subscription-types';
const REST_PRICE = 'prices';

export const SUBSCRIPTION_TYPE_PATH = {
    CREATE_SUBSCRIPTION_TYPE: `v1/${REST}`,
    DELETE_SUBSCRIPTION_TYPE: `v1/${REST}/{id}`,
    GET_SUBSCRIPTION_TYPES: `v1/${REST}`,
    GET_SUBSCRIPTION_TYPE: `v1/${REST}/{id}`,
    UPDATE_SUBSCRIPTION_TYPE: `v1/${REST}/{id}`,
    GET_PRICES_FROM_SUBSCRIPTION_TYPE: `v1/${REST}/{subscriptionTypeId}/${REST_PRICE}`,
};
