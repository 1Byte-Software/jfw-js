const REST = 'users';
const REST_AUTH = 'auth';
const REST_PASSWORDLESS = 'passwordless';
const REST_ROLES = 'roles';
const REST_CONFIGURATION = 'configuration';
const REST_REFERRAL = 'referrals';

export const USER_PATH = {
    QUERY: `v1/${REST}`,
    GET_BY_ID: `${REST}/:id`,
    GET_BY_IDS: `${REST}`,
    REGISTER: `${REST}/register`,
    UPDATE_BY_ID: `${REST}/:id`,
    STATISTIC: `${REST}/statistics`,

    VERIFY_EMAIL: `${REST}/:userId/email/verify/send`,
    DELETE_BY_ID: `${REST}/:id`,
    GET_ME: `v1/${REST}/me`,
    GET_BY_USERNAME: `${REST}/by-username/:username`,
    CHANGE_PASSWORD: `${REST}/change-password`,
    FORGOT_PASSWORD: `${REST}/forgot-password`,
    RESET_PASSWORD: `${REST}/reset-password`,
    UPDATE_TYPE: `v1/${REST}/:userCode/type/:type`,

    GET_REFEREE: `v1/${REST}/:id/referees`,

    REFERRAL: {
        APPLY: `v1/${REST}/:id/${REST_REFERRAL}/apply`,
        CHECK: `v1/${REST}/${REST_REFERRAL}/:code/check`,
    },

    ROLES: {
        ASSIGN_TO_USER: `v1/${REST}/:id/${REST_ROLES}`,
        REMOVE_FROM_USER: `v1/${REST}/:id/${REST_ROLES}`,
    },

    AUTH: {
        ROOT: `v1/${REST}/${REST_AUTH}`,
        BY_EMAIL_ADDRESS: `v1/${REST}/${REST_AUTH}/by-email-address`,
        BY_GOOGLE: `v1/${REST}/${REST_AUTH}/integrations/google/authenticate-url`,
        BY_APPLE: `v1/${REST}/${REST_AUTH}/integrations/apple/authenticate-url`,

        PASSWORDLESS: {
            BY_EMAIL_OTP: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/email-otp/:emailAddress`,
            BY_SMS_OTP: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/sms-otp`,
            VERIFY_SMS_OTP: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/verify-sms-otp`,
        },
    },
    AUTHENTICATE_FROM_BRAND_PARTNER: `v1/${REST}/:userId/connections`,

    CONFIGURATIONS: {
        GET: `${REST}/:id/${REST_CONFIGURATION}`,
        CREATE: `${REST}/:id/${REST_CONFIGURATION}`,
    },
};
