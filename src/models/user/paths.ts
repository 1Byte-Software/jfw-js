const REST = 'users';
const REST_AUTH = 'auth';
const REST_PASSWORDLESS = 'passwordless';
const REST_ROLES = 'roles';
const REST_CONFIGURATION = 'configuration';
const REST_REFERRAL = 'referrals';
const REST_DEVICE = 'devices';
const REST_INTEGRATION = 'integrations';

export const USER_PATH = {
    ACTIVATE_USER: `v1/${REST}/{id}/activate`,
    ADD_DEVICE_TO_USER: `v1/${REST}/{userId}/${REST_DEVICE}/{deviceId}`,
    APPLY_REFERRAL_CODE_TO_USER: `v1/${REST}/{id}/${REST_REFERRAL}/apply`,

    ASSIGN_ROLES_TO_USER: `v1/${REST}/{id}/${REST_ROLES}`,
    AUTHENTICATION_BY_APPLE: `v1/${REST}/${REST_AUTH}/${REST_INTEGRATION}/apple/authenticate-url`,
    AUTHENTICATION_BY_EMAIL_OTP: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/email-otp`,
    AUTHENTICATION_BY_GOOGLE: `v1/${REST}/${REST_AUTH}/${REST_INTEGRATION}/google/authenticate-url`,
    AUTHENTICATION_BY_MAGIC_LINK: `v1/${REST}/auth/by-email`,
    AUTHENTICATION_BY_SMS_OTP: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/sms-otp`,
    AUTHENTICATION: `v1/${REST}/auth`,
    CHANGE_PASSWORD: `v1/${REST}/change-password`,
    CHECK_REFERRAL_USER_CODE: `v1/${REST}/${REST_REFERRAL}/{code}/check`,

    CREATE_NEW_CONFIGURATION_FOR_USER: `v1/${REST}/{id}/configurations`,
    GET_CONFIGURATION_OF_USER: `v1/${REST}/{id}/configurations`,
    DELETE_CONFIGURATION_OF_USER_BY_ID: `v1/${REST}/{id}/configurations/{configurationId}`,
    // #JFW-508
    DEACTIVATE_USER: `v1/${REST}/{id}/deactivate`,
    DELETE_USER: `v1/${REST}/{id}`,
    EMAIL_ADDRESS_VERIFICATION: `v1/${REST}/email-address/active`,
    FORGOT_PASSWORD: `v1/${REST}/forgot-password`,
    GET_USER_BY_USERNAME: `v1/${REST}/by-username/{username}`,
    GET_USER: `v1/${REST}/{id}`,
    GET_APP_INTEGRATION_AUTHENTICATE_URLS: `v1/${REST}/auth/app-integration/authenticate-urls`,
    GET_DEVICES_FROM_USER: `v1/${REST}/{userId}/${REST_DEVICE}`,
    GET_USERS: `v1/${REST}`,
    GET_USERS_BY_ID_LIST: `v1/${REST}/by-list-id`,
    GET_ROLES_ASSIGNED_TO_USER: `v1/${REST}/{id}/roles`,
    GET_CURRENT_USER_LOGGED_IN: `v1/${REST}/me`,
    GET_REFEREES_OF_USER: `v1/${REST}/{id}/referees`,
    LIST_ALL_BRAND_PARTNERS_AUTHENTICATE: `v1/${REST}/{userId}/connections`,
    LOCK_USER: `v1/${REST}/{id}/lock`,
    REGISTER_NEW_USER: `v1/${REST}/register`,
    REMOVE_DEVICE_FROM_USER: `v1/${REST}/{userId}/${REST_DEVICE}/{deviceId}`,
    RESET_PASSWORD: `v1/${REST}/reset-password`,
    REVOKE_ROLES_FROM_USER: `v1/${REST}/{id}/${REST_ROLES}`,
    STATISTIC_USERS: `v1/${REST}/statistics`,
    SUSPEND_USER: `v1/${REST}/{id}/suspend`,
    UNLOCK_USER: `v1/${REST}/{id}/unlock`,
    UNSUSPEND_USER: `v1/${REST}/{id}/unsuspend`,
    UPDATE_USER: `v1/${REST}/{id}`,
    UPDATE_USER_TYPE: `v1/${REST}/{id}/type/{type}`,
    VERIFY_EMAIL_ADDRESS_OTP_TO_AUTHENTICATION: `v1/${REST}/auth/passwordless/verify-email-otp`,
    VERIFY_SMS_OTP_TO_AUTHENTICATION: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/verify-sms-otp`,

    /**
     * #JFW-510
     */
    VERIFY_USER_EMAIL_ADDRESS: `v1/${REST}/{userId}/email-address/verify/send`,
    CHECK_AUTH_KEY_AVAILABLE: `v1/${REST}/check-auth-key-available`,
};
