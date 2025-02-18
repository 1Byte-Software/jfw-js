const REST = 'email-address-patterns';

export const EMAIL_ADDRESS_PATTERN_PATH = {
    QUERY: `{REST}`,

    CREATE: `{REST}`,
    GET_BY_ID: `${REST}/:id`,
    UPDATE_BY_ID: `${REST}/:id`,
    DELETE_BY_ID: `${REST}/:id`,

    GET_PLACEHOLDER_KEYS: `${REST}/placeholder-keys`,
    CONVERT: `${REST}/convert`,
};
