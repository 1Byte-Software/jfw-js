import { REST_BRAND } from '../paths';

const REST_EMAIL_ADDRESS = 'email-addresses';

export const EMAIL_ADDRESS_PATH = {
    CREATE_EMAIL_ADDRESS: `v1/${REST_BRAND}/{brandId}/${REST_EMAIL_ADDRESS}`,
    DELETE_EMAIL_ADDRESS: `v1/${REST_BRAND}/{brandId}/${REST_EMAIL_ADDRESS}/{emailAddressId}`,
    GET_EMAIL_ADDRESS: `v1/${REST_BRAND}/{brandId}/${REST_EMAIL_ADDRESS}/{emailAddressId}`,
    GET_EMAIL_ADDRESSES: `v1/${REST_BRAND}/{brandId}/${REST_EMAIL_ADDRESS}`,
    UPDATE_EMAIL_ADDRESS: `v1/${REST_BRAND}/{brandId}/${REST_EMAIL_ADDRESS}/{emailAddressId}`,
};
