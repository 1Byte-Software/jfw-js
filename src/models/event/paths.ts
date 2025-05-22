const REST = 'events';
const REST_WALLET_EARNING_EVENTS = 'wallet-earning_events';

export const EVENT_PATH = {
    GET_EVENTS: `v1/${REST}`,
    GET_EVENTS_EARNING_WALLET: `v1/${REST_WALLET_EARNING_EVENTS}`,

    GET_EMAIL_TEMPLATE_EVENTS: `v1/${REST}/email-templates`,
    GET_PHONE_TEMPLATE_EVENTS: `v1/${REST}/phone-templates`,

    GET_DEFAULT_EMAIL_TEMPLATE: `v1/${REST}/:eventId/email-templates/default`,
    GET_DEFAULT_PHONE_TEMPLATE: `v1/${REST}/:eventId/phone-templates/default`,
};
