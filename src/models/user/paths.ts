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
    AUTHENTICATION_BY_GOOGLE: `v1/${REST}/${REST_AUTH}/${REST_INTEGRATION}/google/authenticate-url`,
    AUTHENTICATION_BY_PHONE_NUMBER: `v1/${REST}/auth/phone-number`,
    AUTHENTICATION: `v1/${REST}/auth`,

    CHANGE_PASSWORD: `v1/${REST}/change-password`,
    CHANGE_PASSWORD_FOR_ANOTHER_USER: `v1/${REST}/{id}/change-password`,

    CHECK_REFERRAL_USER_CODE: `v1/${REST}/${REST_REFERRAL}/{code}/check`,
    CHECK_AUTH_KEY_AVAILABLE: `v1/${REST}/check-auth-key-available`,

    //#region Configuration
    CREATE_NEW_CONFIGURATION_FOR_USER: `v1/${REST}/{userId}/${REST_CONFIGURATION}`,
    GET_CONFIGURATION_OF_USER: `v1/${REST}/{userId}/${REST_CONFIGURATION}`,
    DELETE_CONFIGURATION_OF_USER_BY_ID: `v1/${REST}/{userId}/${REST_CONFIGURATION}/{configurationId}`,
    //#endregion

    DEACTIVATE_USER: `v1/${REST}/{id}/deactivate`,
    DELETE_USER: `v1/${REST}/{id}`,

    //#region Email address verification
    SEND_EMAIL_TO_VERIFY: `v1/${REST}/{id}/email-address/verify/send`,
    ACTIVE_USER_EMAIL_ADDRESS: `v1/${REST}/email-address/active`,
    //#endregion

    FORGOT_PASSWORD: `v1/${REST}/forgot-password`,
    GET_USER_BY_USERNAME: `v1/${REST}/by-username/{username}`,
    GET_USER: `v1/${REST}/{id}`,
    GET_APP_INTEGRATION_AUTHENTICATE_URLS: `v1/${REST}/auth/app-integration/authenticate-urls`,
    GET_DEVICES_FROM_USER: `v1/${REST}/{userId}/${REST_DEVICE}`,
    GET_USERS_BY_LIST_IDS: `v1/${REST}/by-list-id`,
    GET_USERS: `v1/${REST}`,
    GET_ROLES_ASSIGNED_TO_USER: `v1/${REST}/{id}/roles`,
    GET_CURRENT_USER_LOGGED_IN: `v1/${REST}/me`,
    GET_REFEREES_OF_USER: `v1/${REST}/{id}/referees`,
    LIST_ALL_BRAND_PARTNERS_AUTHENTICATE: `v1/${REST}/{userId}/connections`,
    LOCK_USER: `v1/${REST}/{id}/lock`,
    REFRESH_AUTH_KEY: `v1/${REST}/auth/refresh-auth-key`, // not yet implement
    REGISTER_NEW_USER: `v1/${REST}/register`,
    REGISTER_NEW_USER_BY_EMAIL: `v1/${REST}/register/email-address`, // not yet implement
    REGISTER_NEW_USER_BY_PHONE: `v1/${REST}/register/phone-number`, // not yet implement
    REMOVE_DEVICE_FROM_USER: `v1/${REST}/{userId}/${REST_DEVICE}/{deviceId}`,
    RESET_PASSWORD: `v1/${REST}/reset-password`,
    REVOKE_ROLES_FROM_USER: `v1/${REST}/{id}/${REST_ROLES}`,
    STATISTIC_USERS: `v1/${REST}/statistics`,
    SUSPEND_USER: `v1/${REST}/{id}/suspend`,
    UNLOCK_USER: `v1/${REST}/{id}/unlock`,
    UNSUSPEND_USER: `v1/${REST}/{id}/unsuspend`,
    UPDATE_USER: `v1/${REST}/{id}`,
    UPDATE_USER_TYPE: `v1/${REST}/{id}/type/{type}`,
    UPDATE_USER_DEVICE: `v1/${REST}/{userId}/type/{deviceId}`, // not yet implement
    UPDATE_DEVICE_DATA_RELATED_TO_AUTHORIZED_USER: `v1/${REST}/me/devices`, // not yet implement

    //#region Notification
    GET_NOTIFICATION_RELATED_TO_USER: `v1/${REST}/{userId}/notifications/{notificationId}`,
    GET_NOTIFICATIONS_BY_USER_ID: `v1/${REST}/{userId}/notifications`,
    MARK_NOTIFICATION_AS_READ: `v1/${REST}/{userId}/notifications/{notificationId}/read`,
    MARK_ALL_NOTIFICATIONS_AS_READ: `v1/${REST}/{userId}/notifications/mark-all-as-read`,
    //#endregion

    //#region Passwordless
    //#region Email
    AUTHENTICATION_BY_EMAIL_MAGIC_LINK: `v1/${REST}/auth/email/magic-link`,
    GENERATE_EMAIL_OTP_FOR_AUTHENTICATION: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/email/generate-otp`,
    VERIFY_EMAIL_OTP_FOR_AUTHENTICATION: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/email/verify-otp`,
    //#endregion

    //#region Phone
    GENERATE_SMS_OTP: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/phone/generate-otp`,
    VERIFY_SMS_OTP_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/phone/verify-otp`,
    //#endregion

    //#region QR Code
    GENERATE_NEW_QR_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/qrcode/generate`,
    GET_CURRENT_STATUS_OF_QR_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/qrcode/{qrCodeId}`,
    APPROVE_QR_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/qrcode/{qrCodeId}/approve`,
    LOGIN_IN_USING_APPROVED_QR_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/qrcode/{qrCodeId}/login`,
    AUTH_WITH_APPROVED_QR_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/qrcode/{qrCodeId}/auth-with-qrcode`,
    //#endregion

    //#region OTP Code
    GENERATE_NEW_OTP_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/otp/generate`,
    GET_CURRENT_STATUS_OF_OTP_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/otp/{otpCode}`,
    APPROVE_OTP_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/otp/{otpCode}/approve`,
    LOGIN_IN_USING_APPROVED_OTP_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/otp/{otpCode}/login`,
    AUTH_WITH_APPROVED_OTP_CODE: `v1/${REST}/${REST_AUTH}/${REST_PASSWORDLESS}/otp/{otpCode}/auth-with-qrcode`,
    //#endregion

    //#endregion
};
