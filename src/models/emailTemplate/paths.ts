const REST = 'email-templates';
const REST_EVENTS = 'events';

export const EMAIL_TEMPLATE_PATH = {
    CREATE_EMAIL_TEMPLATE: `${REST}`,
    DELETE_EMAIL_TEMPLATE: `${REST}/:id`,

    GET_EMAIL_TEMPLATE_BY_EVENT: `${REST_EVENTS}/:eventId/${REST}`,
    GET_EMAIL_TEMPLATE: `${REST}/:id`,
    GET_EMAIL_TEMPLATES: `${REST}`,
    GET_ALL_PLACEHOLDER_KEYS_AVAILABLE: `${REST}/placeholder-keys`,

    UPDATE_EMAIL_TEMPLATE: `${REST}/:id`,
};
