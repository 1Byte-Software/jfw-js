const REST = 'email-templates';
const REST_EVENTS = 'events';

export const EMAIL_TEMPLATE_PATH = {
    CREATE_EMAIL_TEMPLATE: `v1/${REST}`,
    DELETE_EMAIL_TEMPLATE: `v1/${REST}/:id`,

    GET_EMAIL_TEMPLATE_BY_EVENT: `v1/${REST_EVENTS}/:eventId/${REST}`,
    GET_EMAIL_TEMPLATE: `v1/${REST}/:id`,
    GET_EMAIL_TEMPLATES: `v1/${REST}`,
    GET_ALL_PLACEHOLDER_KEYS_AVAILABLE: `v1/${REST}/placeholder-keys`,

    UPDATE_EMAIL_TEMPLATE: `v1/${REST}/:id`,
};
