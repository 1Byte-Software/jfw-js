const REST = 'events';
const REST_WALLET_EARNING_EVENTS = 'wallet-earning_events';

export const EVENT_PATH = {
    GET_EVENTS: `${REST}`,
    GET_EVENTS_EARNING_WALLET: `${REST_WALLET_EARNING_EVENTS}`,

    GET_EMAIL_TEMPLATE_EVENTS: `${REST}/email-templates`,
    GET_PHONE_TEMPLATE_EVENTS: `${REST}/phone-templates`,

    GET_DEFAULT_EMAIL_TEMPLATE: `${REST}/:eventId/email-templates/default`,
    GET_DEFAULT_PHONE_TEMPLATE: `${REST}/:eventId/phone-templates/default`,
};
