const REST = 'events';
const REST_WALLET_EARNING_EVENTS = 'wallet-earning-events';

export const EVENT_PATH = {
    GET_EVENT: `v1/${REST}/{id}`,
    GET_EMAIL_TEMPLATE_DEFAULT_BY_EVENT: `v1/${REST}/{eventId}/email-templates/default`,
    GET_EMAIL_TEMPLATE_BY_EVENT: `v1/${REST}/{eventId}/email-templates`,
    GET_EVENTS: `v1/${REST}`,
    GET_EVENTS_EARNING_WALLET: `v1/${REST_WALLET_EARNING_EVENTS}`,
    GET_EVENTS_ASSOCIATED_WITH_EMAIL_TEMPLATES: `v1/${REST}/email-templates`,
    GET_EVENTS_ASSOCIATED_WITH_PHONE_TEMPLATES: `v1/${REST}/phone-templates`,
    GET_PHONE_TEMPLATE_BY_EVENT: `v1/${REST}/{eventId}/phone-templates`,
    GET_PHONE_TEMPLATE_DEFAULT_BY_EVENT: `v1/${REST}/{eventId}/phone-templates/default`,
};
